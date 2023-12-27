import { Typography, Box, CardMedia } from '@mui/material'

function MainContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingBlock: '1em', alignItems: 'center', rowGap: '20px'}}>
      <Typography component="h2" color='primary' sx={{ fontWeight: '700', fontSize: {xs: '28px', md: '30px'}, textAlign: 'center'}}>The Smart Way to Find a Plastic Surgeon</Typography>
      <Typography sx={{maxWidth: '930px', fontSize: '18px', textAlign: 'center'}}>From answering questions and addressing concerns to helping you find the surgeon that best aligns with your aesthetic goals, The Med Chat is committed to ensuring a personalized, comfortable experience.</Typography>
      <CardMedia component='iframe' title='The Med Chat Video' src='https://www.youtube.com/embed/T5hI-mqSs8A' sx={{ width: '930px', height: '450px', border: 'none'}} />
    </Box>
  )
}

export default MainContent