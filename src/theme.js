import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    // set a visible primary color so focused inputs keep a visible border
    primary: {
      main: '#8b5f82'
    }
  }
})

export default theme
