import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { useLocation } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Header() {
    const loc = useLocation()
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleOpen = (e) => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const links = [
        { label: 'Über mich', href: loc.pathname === '/' ? '#about' : '/#about' },
        { label: 'Leistungen', href: loc.pathname === '/' ? '#leistungen' : '/#leistungen' },
        { label: 'Einsatzgebiet', href: loc.pathname === '/' ? '#locations' : '/#locations' },
        { label: 'Kontakt', href: loc.pathname === '/' ? '#contact' : '/#contact' },
        { label: 'Impressum', href: '/impressum' }
    ]

    return (
        <AppBar position="sticky" id="topbar">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    component="a"
                    href="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    Niloofar Nasrollah – Hebamme
                </Typography>

                {isSmall ? (
                    <>
                        <IconButton color="inherit" edge="end" onClick={handleOpen} aria-label="menu" aria-controls="main-menu" aria-haspopup="true">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="main-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                            {links.map((l) => (
                                <MenuItem key={l.label} onClick={handleClose} component="a" href={l.href}>{l.label}</MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    links.map((l) => (
                        <Button key={l.label} color="inherit" component="a" href={l.href}>{l.label}</Button>
                    ))
                )}

            </Toolbar>
        </AppBar>
    )
}
