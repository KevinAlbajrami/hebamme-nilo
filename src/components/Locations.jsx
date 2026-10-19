import React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function Locations() {
    return (
        <div>
            <Typography variant="h6" sx={{ mt: 2 }}>Anschrift</Typography>
            <Typography paragraph sx={{fontSize:"1.2rem"}}>
                31249 Hohenhameln
                <br />
                Niedersachsen
                <br />
                Deutschland
            </Typography>

            <Typography variant="h6">Kontakt</Typography>
            <Typography paragraph sx={{fontSize:"1.2rem"}}>
                Telefon: 0176 20998220
                <br />
                E‑Mail: Hebamme.niloofarnasrollah@gmail.com
            </Typography>



            <Typography variant="body2" color="text.secondary" sx={{fontSize:"1.2rem"}}>
                Ich freue mich auf deine Nachricht! Für die Wochenbettbetreuung empfiehlt sich eine frühzeitige Anfrage, idealerweise schon in der Schwangerschaft.
            </Typography>
        </div>
    )
}
