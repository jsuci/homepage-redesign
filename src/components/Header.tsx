import { AppBar, Toolbar, Box, Stack, Button, Typography } from "@mui/material"
import Logo from "../assets/logo.png"
import HeroImage from "../assets/hero-image 1.png"
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <>
            <AppBar position="static" sx={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}} elevation={0}>
                <Toolbar sx={{display: 'flex', alignItems: 'center'}}>
                    {/* Logo */}
                    <Box component="img" src={Logo}></Box>

                    {/* Menus */}
                    <Stack direction='row' spacing={2} sx={{marginLeft: 'auto', px: '20px', display:{xs: 'none', md: 'block'}}}>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>About</Button>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>Directory</Button>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>Blog</Button>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>Contact</Button>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>Sign In</Button>
                        <Button sx={{ fontWeight: '400', color: '#fff', textTransform: 'none', fontSize: '18px'}} color="primary" variant="contained">Sign Up</Button>
                    </Stack>

                    {/* Hamburger Icon */}
                    <MenuIcon sx={{fontWeight: '600', color: 'primary.main', display:{xs: 'block', md: 'none'}, marginLeft: 'auto'}} fontSize="large"/>

                </Toolbar>
            </AppBar>

            {/* Hero */}
            <Box position='relative'>
                {/* Image */}
                <Box component="img" src={HeroImage}  sx={{width: '100%'}}></Box>

                {/* Text */}
                <Box sx={{width: '580px', height: '266px', rowGap: '30px', display: 'flex', flexDirection: 'column', position: 'absolute', top: 0, bottom: 0, marginTop: 'auto', marginBottom: 'auto'}}>
                    <Typography component="h1" sx={{ fontSize: '45px', fontWeight: '900'}}>Perfect Surgeon Matches <Box component="span" color="primary.main">@ The Med Chat</Box></Typography>
                    <Typography sx={{marginTop: '-20px'}}>The Med Chat has established itself as a leader in connecting patients with the perfect plastic surgeon since its inception in 2018.</Typography>

                    <Stack direction='row' spacing={2}>
                        <Button sx={{ fontWeight: '400', color: '#fff', textTransform: 'none', fontSize: '18px'}} color="primary" variant="contained">Get Started</Button>
                        <Button sx={{ fontWeight: '600', color: 'primary.main', textTransform: 'none', fontSize: '18px'}} variant="text" disableRipple>Directory</Button>
                    </Stack>
                </Box>

            </Box>




        </>

    )
}