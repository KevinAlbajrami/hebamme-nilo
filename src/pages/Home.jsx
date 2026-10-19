import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import About from '../components/About'
import Locations from '../components/Locations'
import Leistungen from '../components/Leistungen'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import heroImg from '../assets/back2-purple.png'

export default function Home() {
    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash) {
                const id = window.location.hash.replace('#', '')
                const el = document.getElementById(id)
                const topbar = document.getElementById('topbar')
                const offset = topbar ? topbar.offsetHeight : 0
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - offset - 12
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }
            }
        }

        // scroll on mount if hash present
        handleHash()
        // respond to hash changes
        window.addEventListener('hashchange', handleHash)
        return () => window.removeEventListener('hashchange', handleHash)
    }, [])

    const siteUrl = 'https://example.com' // TODO: replace with real site URL
    const ld = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Niloofar Nasrollah',
        telephone: '0176 20998220',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Peine',
            addressRegion: 'Niedersachsen',
            addressCountry: 'DE'
        },
        url: siteUrl,
        areaServed: ['Peine', 'Hildesheim'],
        description: 'Freiberufliche Hebamme – Wochenbettbetreuung und Stillberatung per Hausbesuch auf Deutsch und Persisch.'
    }

    return (
        <Box >
            <Helmet>
                <title>Hebamme in Peine — Wochenbett & Stillberatung</title>
                <meta name="description" content="Freiberufliche Hebamme in Peine und Umgebung: Wochenbettbetreuung und Stillberatung per Hausbesuch, auf Deutsch und Persisch. Kontaktiere mich für ein unverbindliches Kennenlernen." />
                <link rel="canonical" href={`${siteUrl}/`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Niloofar Nasrollah – Hebamme" />
                <meta property="og:description" content="Freiberufliche Hebamme in Peine: Wochenbettbetreuung und Stillberatung." />
                <meta property="og:image" content={`${siteUrl}/` + 'og-image.jpg'} />
                <script type="application/ld+json">{JSON.stringify(ld)}</script>
            </Helmet>
            <main>
                <Hero />

                {/* fixed background image behind all page content */}
                <Box
                    sx={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: 0.25,
                        position: 'fixed',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}
                />
                {/* subtle overlay for improved contrast on text */}
                <Box sx={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }} />

                <Container >
                    <Box id="about" className="section-padding">
                        <About />
                    </Box>
                    <Box id="leistungen" className="section-padding">
                        <Leistungen />
                    </Box>
                    <Box id="locations" className="section-padding">
                        <Locations />
                    </Box>
                    <Box id="contact" className="section-padding">
                        <ContactForm />
                    </Box>
                </Container>
            </main>
            <Footer />
        </Box>
    )
}
