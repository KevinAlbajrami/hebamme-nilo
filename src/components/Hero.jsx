import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import heroImg from '../assets/hero-logo.svg'

export default function Hero() {
    return (
          <Box
            className="hero"
            sx={{
                width: '100%',
                color: 'primary.contrastText',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height:"500px",
            }}
        >
         
        <Box
            className="hero"
            sx={{
                backgroundImage: `url(${heroImg})`,
                height: "300px",
                width: "300px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
           
        </Box>
         <Container sx={{textAlign:'center',color:"#000"}}>
                <Typography variant="h3" component="h1" gutterBottom>
                   „Schön, dass sich unsere Wege hier kreuzen.“
                </Typography>
                      <Typography variant="h4"  >
              Niloofar Nasrollah
               </Typography>
                <Typography variant="h6" >
               Hebammenbetreuung in Peine und Umgebung 
               </Typography>
            </Container>
           </Box>
    )
}
