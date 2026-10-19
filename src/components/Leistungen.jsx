import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export default function Leistungen() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:"center", gap: 1, py: 1 }} id="about">
      
  <Typography variant="h4" component="h2" gutterBottom>Leistungen
                        </Typography>
            <Grid container spacing={2} alignItems="stretch">
                
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>

                        <Typography variant="h5" component="h2" gutterBottom>🌸 Wochenbettbetreuung & Stillberatung
                        </Typography>
                        <Typography paragraph sx={{fontSize:"1.2rem"}}>

                            Die erste Zeit mit deinem Baby ist einzigartig, intensiv und manchmal auch überwältigend.
                            Als freiberufliche Hebamme begleite ich dich mit Ruhe, Zeit und einem offenen Ohr.

                            Mir ist wichtig, dass du dich sicher und gut aufgehoben fühlst. Mit fachlicher Kompetenz und viel Einfühlungsvermögen unterstütze ich dich im Wochenbett und bei allen Fragen rund ums Stillen – ganz individuell auf dich und dein Baby abgestimmt. Die Betreuung erfolgt auf Deutsch und Persisch.
                        </Typography>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}
