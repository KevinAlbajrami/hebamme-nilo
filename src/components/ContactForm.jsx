import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Link from '@mui/material/Link'

export default function ContactForm() {
    const initial = {
        name: '',
        email: '',
        phone: '',
        insurance: '',
        et: '',
        street: '',
        zipcity: '',
        services: { vorsorge: false, wochenbett: false },
        firstTime: '',
        ssw: '',
        message: '',
        company: '',
    }

    const [form, setForm] = useState(initial)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [privacyChecked, setPrivacyChecked] = useState(false)
    const [fieldErrors, setFieldErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [privacyOpen, setPrivacyOpen] = useState(false)

    const backendBaseUrl = (import.meta.env.VITE_BACKEND_URL || '').trim()
    const contactUrl = backendBaseUrl
        ? `${backendBaseUrl.replace(/\/+$/, '')}/contact`
        : '/contact'
        
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        setFieldErrors(prev => ({ ...prev, [name]: undefined }))
    }

    const handleEmailChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        setEmailError(emailIsValid || value === '' ? '' : 'Bitte geben Sie eine gültige E‑Mail‑Adresse ein.')
        setFieldErrors(prev => ({ ...prev, email: undefined }))
    }

    const handleServiceToggle = (e) => {
        const { name, checked } = e.target
        setForm(prev => ({ ...prev, services: { ...prev.services, [name]: checked } }))
    }

    const handlePrivacyToggle = (e) => setPrivacyChecked(e.target.checked)

    const validate = () => {
        const errors = {}
        if (!form.name) errors.name = 'Name ist erforderlich.'
        if (!form.email) errors.email = 'E‑Mail ist erforderlich.'
        if (form.email) {
            const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
            if (!ok) errors.email = 'Bitte geben Sie eine gültige E‑Mail‑Adresse ein.'
        }
        if (!form.phone) errors.phone = 'Telefonnummer ist erforderlich.'
        if (!form.insurance) errors.insurance = 'Bitte wählen Sie eine Versicherungsart.'
        if (!form.et) errors.et = 'Voraussichtlicher ET ist erforderlich.'
        if (!form.street) errors.street = 'Bitte Straße & Hausnummer angeben.'
        if (!form.zipcity) errors.zipcity = 'Bitte PLZ & Ort angeben.'
        if (!form.ssw) errors.ssw = 'Bitte geben Sie Ihre aktuelle SSW an.'
     
        // Erstgebärend? is required (star)
        if (!form.firstTime) errors.firstTime = 'Bitte wählen Sie, ob Sie erstgebärend sind.'
       if (!privacyChecked) errors.privacy = 'Bitte bestätigen Sie die Datenschutzerklärung.'
        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccess(false)
        const errors = validate()
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            setError('Bitte überprüfen Sie die markierten Felder.')
            setOpen(true)
            return
        }

        // Prevent bots: if honeypot filled, abort silently
        if (form.company && form.company.trim() !== '') {
            console.log('Honeypot filled; rejecting submission')
            setError('Fehler beim Senden.')
            setOpen(true)
            return
        }

        setLoading(true)
        setError('')
        try {
            const res = await fetch(contactUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form }),
            })

            if (!res.ok) {
                const body = await res.json().catch(() => null)
                setError(body?.error || (body?.errors ? JSON.stringify(body.errors) : 'Fehler beim Senden.'))
                setOpen(true)
            } else {
                setSuccess(true)
                setForm(initial)
                setPrivacyChecked(false)
                setOpen(true)
            }
        } catch (err) {
            setError(err.message || 'Fehler beim Senden.')
            setOpen(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', backgroundColor: 'white' }}>
                <Typography variant="h5" component="h2" gutterBottom>Kontakt</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    Bitte füllen Sie das Formular aus. Ich melde mich schnellstmöglich. Es werden ausschließlich Anfragen über das Kontaktformular berücksichtigt. Felder mit * sind Pflichtfelder.
                </Typography>

                <TextField fullWidth label="Name*" name="name" margin="normal" value={form.name} onChange={handleChange} autoComplete="name" error={!!fieldErrors.name} helperText={fieldErrors.name} />

                <TextField fullWidth label="E-Mail*" name="email" margin="normal" value={form.email} onChange={handleEmailChange} autoComplete="email" type="email" error={!!(emailError || fieldErrors.email)} helperText={emailError || fieldErrors.email} />

                <TextField fullWidth label="Ihre Telefonnummer*" name="phone" margin="normal" value={form.phone} onChange={handleChange} autoComplete="tel" error={!!fieldErrors.phone} helperText={fieldErrors.phone} />

                <FormControl fullWidth margin="normal" error={!!fieldErrors.insurance}>
                    <InputLabel id="insurance-label">Versicherungsart</InputLabel>
                    <Select labelId="insurance-label" label="Versicherungsart*" name="insurance" value={form.insurance} onChange={handleChange}>
                        <MenuItem value="gesetzlich">Gesetzlich</MenuItem>
                        <MenuItem value="privat">Privat</MenuItem>
                    </Select>
                    <FormHelperText>{fieldErrors.insurance}</FormHelperText>
                </FormControl>

                <TextField fullWidth label="Voraussichtlicher Entbindungstermin (ET)*" name="et" margin="normal" value={form.et} onChange={handleChange} error={!!fieldErrors.et} helperText={fieldErrors.et} />

                <TextField fullWidth label="Straße & Hausnummer*" name="street" margin="normal" value={form.street} onChange={handleChange} error={!!fieldErrors.street} helperText={fieldErrors.street} />

                <TextField fullWidth label="PLZ & Ort*" name="zipcity" margin="normal" value={form.zipcity} onChange={handleChange} error={!!fieldErrors.zipcity} helperText={fieldErrors.zipcity} />

                <FormGroup>
                    <FormControlLabel control={<Checkbox name="vorsorge" checked={form.services.vorsorge} onChange={handleServiceToggle} />} label="Vorsorge" />
                    <FormControlLabel control={<Checkbox name="wochenbett" checked={form.services.wochenbett} onChange={handleServiceToggle} />} label="Betreuung im Wochenbett" />
                </FormGroup>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="firstTime-label">Erstgebärend?</InputLabel>
                    <Select labelId="firstTime-label" label="Erstgebärend?*" name="firstTime" value={form.firstTime} onChange={handleChange}>
                        <MenuItem value="ja">Ja</MenuItem>
                        <MenuItem value="nein">Nein</MenuItem>
                    </Select>
                </FormControl>

                <TextField fullWidth label="Aktuelle SSW*" name="ssw" margin="normal" value={form.ssw} onChange={handleChange} />

                <TextField fullWidth label="Ihre Nachricht" name="message" margin="normal" multiline rows={4} value={form.message} onChange={handleChange} error={!!fieldErrors.message} helperText={fieldErrors.message} />

                {/* Honeypot */}
                <TextField name="company" label="Firma" value={form.company} onChange={handleChange} autoComplete="off" sx={{ position: 'absolute', left: '-10000px', top: 0, width: 1, height: 1, overflow: 'hidden' }} inputProps={{ tabIndex: -1 }} />

                <FormControlLabel
                    control={<Checkbox checked={privacyChecked} onChange={handlePrivacyToggle} />}
                    label={
                        <>
                            Ich habe die{' '}
                            <Link component="button" type="button" onClick={() => setPrivacyOpen(true)} sx={{ padding: 0 }}>
                                Datenschutzhinweise
                            </Link>{' '}
                            gelesen und bin einverstanden.
                        </>
                    }
                />

                <Box sx={{ mt: 2 }}>
                    <Button variant="contained" type="submit" sx={{ backgroundColor: '#a77d9f' }} disabled={loading}>
                        {loading ? 'Sende...' : 'Nachricht senden'}
                    </Button>
                </Box>

                <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                    {error ? (
                        <Alert severity="error" onClose={() => setOpen(false)}>{error}</Alert>
                    ) : (
                        success && <Alert severity="success" onClose={() => setOpen(false)}>Nachricht gesendet</Alert>
                    )}
                </Snackbar>
            </Box>

            <Dialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} fullWidth maxWidth="md">
                <DialogTitle>Datenschutzhinweise</DialogTitle>
                <DialogContent dividers>
                    <Typography paragraph>
                        Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und im Rahmen der gesetzlichen Vorgaben. Die Angaben im Kontaktformular werden per E‑Mail an die im Impressum angegebene Adresse gesendet. Ohne Ihre Einwilligung (z.B. durch Ankreuzen der Checkbox) erfolgt keine Speicherung für Werbezwecke.
                    </Typography>
                    <Typography paragraph>
                        Weitere Informationen zum Datenschutz, Ihren Rechten (Auskunft, Berichtigung, Löschung) und Kontaktdaten des Verantwortlichen finden Sie im <Link href="/impressum">Impressum & Datenschutz</Link>.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setPrivacyOpen(false)}>Schließen</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
