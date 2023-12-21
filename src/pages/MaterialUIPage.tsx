import { Typography, Button, Stack, IconButton, ButtonGroup, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Logo from '../assets/logo.png'


function MaterialUIPage() {
  return (
    <>
        <Typography variant='h4' component='h1' sx={{marginBottom: '30px'}}>This page contains all syntax for material-ui elements</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='body1'>Body 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis hic quasi vitae pariatur, explicabo sapiente dolor dolorum incidunt inventore saepe, officia ab quas mollitia consectetur dignissimos repellat unde. Voluptate?</Typography>
        <Typography variant='h5' gutterBottom>h5 with margin-bottom</Typography>
        <Typography variant='h3' component='h1'>h3 in size but h1 in tags</Typography>
        <Button variant='text'>Text Button</Button>
        <Button variant='contained'>Text Button Contained</Button>
        <Button variant='outlined'>Text Button Outlined</Button>

        <Typography variant='h6'>Buttons with stacking</Typography>
        <Stack spacing={2} direction={'row'}>
            <Button variant='text'>Text Button</Button>
            <Button variant='contained'>Text Button Contained</Button>
            <Button variant='outlined'>Text Button Outlined</Button>
        </Stack>
        <Button variant='text' href='https://google.com'>Text Button w/ Link</Button>
        <Button variant='contained' color='error'>Text Button Contained w/ Color</Button>
        <Button variant='outlined' color='success'>Text Button Outlined w/ Color</Button>

        <Typography variant='h6'>Stack set to block</Typography>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small Button</Button>
            <Button variant='contained' size='medium'>Medium Button</Button>
        </Stack>


        <Typography variant='h6'>Material Icons</Typography>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />}>Icon Start Send</Button>
            <Button variant='contained' endIcon={<SendIcon />}>Icon End Send</Button>
        </Stack>

        <Typography variant='h6'>Icon button only</Typography>
        <IconButton aria-label='send'>
            <SendIcon color='success' sx={{fontSize: '60px'}}/>
        </IconButton>

        <Stack spacing={2} direction='column'>
            <Button variant='contained' endIcon={<SendIcon />} disableElevation>Button w/ Disabled Elevation</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableRipple>Button w/ Disabled Ripple</Button>
        </Stack>

        <Typography variant='h6'>Button Group</Typography>
        <Stack spacing={2} direction='row'>
            <ButtonGroup variant='outlined' color='secondary' orientation='vertical' size='large' aria-label='alignment button group'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        <Box component="img" src={Logo} sx={{height: '60px'}}></Box>
    </>
  )
}

export default MaterialUIPage