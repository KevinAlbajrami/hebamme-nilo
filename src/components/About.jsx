
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import heroImg from '../assets/niloofar.jpeg'

import leafImg from '../assets/leaf.svg'

export default function About() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 1 }} id="about">
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 'none' }}>

                        <Box
                            className="hero"
                            sx={{
                                backgroundImage: `url(${heroImg})`,
                                height: "550px",
                                width: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></Box>

                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 'none', backgroundColor: 'transparent'  }}>

                        <Typography variant="h5" component="h2" gutterBottom>Über mich</Typography>
                        <Typography paragraph sx={{fontSize:"1.2rem"}}>
                            Herzlich willkommen! 🌸 Als freiberufliche Hebamme begleite ich dich einfühlsam im Wochenbett und unterstütze dich bei Fragen rund ums Stillen. Ich betreue dich auf Deutsch und Persisch und freue mich darauf, dich und dein Baby kennenzulernen.
                            Mir ist eine ruhige, klare und zugewandte Betreuung besonders wichtig. Ich begleite Familien individuell, achtsam und auf Augenhöhe durch Schwangerschaft, Wochenbett und die erste Zeit mit ihrem Baby.
                        </Typography>
                        <List>
                            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Box

                                    sx={{
                                        backgroundImage: `url(${leafImg})`,
                                        height: "20px",
                                        width: "20px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></Box>
                                <Typography sx={{fontSize:"1.2rem"}}>Staatlich examinierte Hebamme</Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Box

                                    sx={{
                                        backgroundImage: `url(${leafImg})`,
                                        height: "20px",
                                        width: "20px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></Box>
                                <Typography sx={{fontSize:"1.2rem"}}>Schwerpunkte: Wochenbettbetreuung und Stillberatung</Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Box

                                    sx={{
                                        backgroundImage: `url(${leafImg})`,
                                        height: "20px",
                                        width: "20px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></Box>
                                <Typography sx={{fontSize:"1.2rem"}}>Betreuung auf Deutsch und Persisch</Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Box

                                    sx={{
                                        backgroundImage: `url(${leafImg})`,
                                        height: "20px",
                                        width: "20px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></Box>
                                <Typography sx={{fontSize:"1.2rem"}}>Betreuung per Hausbesuch in Peine und Umgebung, nach Absprache in der Region Hildesheim</Typography>
                            </ListItem>
                        </List>

                    </Card>
                </Grid>

            </Grid>
         
        </Box>
    )
}
