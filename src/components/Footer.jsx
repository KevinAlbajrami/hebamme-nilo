import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer(){
  return (
    <Box component="footer" sx={{py:4, textAlign:'center', bgcolor:'#f6ecf3', mt:6}}>
      <Typography variant="body2">© {new Date().getFullYear()} Niloofar Nasrollah – Hebamme</Typography>
     
    </Box>
  )
}
