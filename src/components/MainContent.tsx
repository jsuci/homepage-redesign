import { Typography, Box, CardMedia} from '@mui/material'
import HandshakeImg from '../assets/handshake-emoji 1.png'
import GlobeImg from '../assets/globe-showing-europe-africa 1.png'
import SupportImg from '../assets/customer-support 1.png'
import StarImg from '../assets/glowing-star 1.png'
import BookImg from '../assets/book-bookmark 1.png'
import CalendarImg from '../assets/calendar 1.png'
import CustomCard from './ui/CustomCard'

const items = [
  {
    'image': HandshakeImg,
    'header': 'Tailored Matching',
    'content': 'Our team works closely with you to understand your specific requirements and expectations, connecting you with a surgeon uniquely suited to your needs.'
  },
  {
    'image': GlobeImg,
    'header': 'Quality Network',
    'content': 'Built a vast network of top-tier surgeons meeting stringent standards. Our reputation rests on delivering the best, a responsibility we take seriously.'
  },
  {
    'image': SupportImg,
    'header': 'Comprehensive Support',
    'content': `From inquiry to post-surgery, our coordinators assist with procedures, scheduling, and recovery support. We're here for you every step of the way.`
  },
  {
    'image': StarImg,
    'header': 'Unwavering Commitment',
    'content': 'Our team works closely with you to understand your specific requirements and expectations, connecting you with a surgeon uniquely suited to your needs.'
  },
  {
    'image': BookImg,
    'header': 'Educational Resources',
    'content': 'We offer educational resources, connect with previous patients, and provide insights for an informed decision-making process.'
  },
  {
    'image': CalendarImg,
    'header': 'Logistical Assistance',
    'content': 'Coordinating appointments and aftercare can be overwhelming. Our team manages logistics, ensuring a hassle-free experience for you.'
  },
]

function MainContent() {
  return (
    <>
      {/* Section 1 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingBlock: '1em', alignItems: 'center', rowGap: '20px'}}>
        <Typography component="h2" color='primary' sx={{ fontWeight: '700', fontSize: {xs: '28px', md: '30px'}, textAlign: 'center'}}>The Smart Way to Find a Plastic Surgeon</Typography>
        <Typography sx={{maxWidth: '930px', fontSize: '18px', textAlign: 'center'}}>From answering questions and addressing concerns to helping you find the surgeon that best aligns with your aesthetic goals, The Med Chat is committed to ensuring a personalized, comfortable experience.</Typography>
        <CardMedia component='iframe' title='The Med Chat Video' src='https://www.youtube.com/embed/T5hI-mqSs8A' sx={{ maxWidth: '930px', height: '450px', border: 'none'}} />
      </Box>

      {/* Section 2 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingBlock: '1em', alignItems: 'center'}}>
        <Typography component="h2" color='primary' sx={{ fontWeight: '700', fontSize: {xs: '28px', md: '30px'}, textAlign: 'center'}}>Why Choose The Med Chat?</Typography>
        
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, flexWrap: 'wrap', gap: '30px', paddingBlock: '30px', justifyContent: 'center'}}>
          {/* CustomCards */}
          {items.map((item, index) => (
            <CustomCard key={index} image={item.image} heading={item.header} content={item.content}/>
          ))}
        </Box>
      </Box>
    </>

  )
}

export default MainContent