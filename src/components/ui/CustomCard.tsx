import { Typography, Box,} from '@mui/material'

interface CustomCardProps {
  image: string;
  heading: string;
  content: string;
}

const CustomCard = ({image, heading, content}: CustomCardProps) => {
  return (
    <>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        maxWidth: '360px',
        justifyContent: 'center',
        alignItems: {xs: 'center', md: 'normal'},
        textAlign: {xs: 'center', md: 'unset'},
        marginTop: {xs: '30px', md: 'unset'}
        }}>
        <Box component="img" src={image}  sx={{ maxWidth: '60px'}} />
        <Typography sx={{ fontSize: '26px', fontWeight: '600'}}>{heading}</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'normal'}}>{content}</Typography>
      </Box>
    </>
  );
};

export default CustomCard;