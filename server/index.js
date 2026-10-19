import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import { z } from "zod";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

// Load env vars. Prefer `server/.env` (works when running `node server/index.js` from repo root).
// In production, you can also provide variables via the environment.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

app.use(helmet());
app.use(express.json());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
        },
    })
);

// If your React site is on a different domain/subdomain, set it explicitly.
// Provide `ALLOWED_ORIGIN` in production; fall back to permissive mode for local/dev.
const allowedOrigin = process.env.ALLOWED_ORIGIN || process.env.FRONTEND_URL || true;
const corsOptions = { origin: allowedOrigin, methods: ["POST", "OPTIONS"] };
app.use(cors(corsOptions));

app.get("/healthz", (_req, res) => {
    res.status(200).type("text/plain").send("ok");
});

app.get("/", (_req, res) => {
    res.status(200).type("text/plain").send("ok");
});

app.use(
    "/contact",
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 20, // per IP per 15 minutes
        standardHeaders: true,
        legacyHeaders: false,
    })
);

const schema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(200),
    phone: z.string().min(3).max(50),
    insurance: z.string().max(50),
    et: z.string().max(100),
    street: z.string().max(200),
    zipcity: z.string().max(200),
    services: z.object({
        vorsorge: z.boolean().optional(),
        wochenbett: z.boolean().optional(),
    }).optional(),
    firstTime: z.string().max(50),
    ssw: z.string().max(50),
    message: z.string().min(0).max(5000).optional(),
    // simple “honeypot” field (should be empty)
    company: z.string().max(0).optional(),
});

app.post("/contact", async (req, res) => {
    console.log("Received contact form submission:", req.body); // log incoming data for debugging
    try {


        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            // Attempt multiple representations so logs/responses are readable regardless of Zod shape
            const zodErrors = parsed.error?.errors
                ? parsed.error.errors.map(e => ({ path: e.path, message: e.message }))
                : (parsed.error?.format ? parsed.error.format() : parsed.error);
            console.log('Validation failed (raw parsed):', parsed);
            console.log('Validation failed (formatted):', zodErrors);
            return res.status(400).json({ ok: false, errors: zodErrors });
        }

        const {
            name,
            email,
            phone,
            insurance,
            et,
            street,
            zipcity,
            services,
            firstTime,
            ssw,
            message,
        } = parsed.data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true", // true for 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            const servicesList = services ? Object.entries(services).filter(([, v]) => v).map(([k]) => k).join(', ') : ''
            const mailText = `Name: ${name}\nEmail: ${email}\nTelefon: ${phone || ''}\nVersicherung: ${insurance || ''}\nET: ${et || ''}\nStraße: ${street || ''}\nPLZ & Ort: ${zipcity || ''}\nServices: ${servicesList}\nErstgebärend: ${firstTime || ''}\nSSW: ${ssw || ''}\n\nNachricht:\n${message}`

            await transporter.sendMail({
                from: process.env.MAIL_FROM || `no-reply@localhost`,
                to: process.env.MAIL_TO || process.env.MAIL_FROM || 'postmaster@localhost',
                replyTo: email,
                subject: `Kontaktformular: ${name}`,
                text: mailText,
            });
        } catch (err) {
            console.error('Error sending mail:', err?.message || err);
            return res.status(502).json({ ok: false, error: 'Mail delivery failed' });
        }
    } catch (error) {
        console.log(error)
    }

    res.json({ ok: true });
});

const PORT = Number(process.env.PORT || 3000);
console.log(`Starting Contact API — PORT=${PORT} ALLOWED_ORIGIN=${!!process.env.ALLOWED_ORIGIN} SMTP_CONFIGURED=${!!process.env.SMTP_HOST}`);
app.listen(PORT, () => {
    console.log(`Contact API running on port ${PORT}`);
});