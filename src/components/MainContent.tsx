import { Typography, Box, CardMedia } from "@mui/material";
import HandshakeImg from "../assets/handshake-emoji 1.png";
import GlobeImg from "../assets/globe-showing-europe-africa 1.png";
import SupportImg from "../assets/customer-support 1.png";
import StarImg from "../assets/glowing-star 1.png";
import BookImg from "../assets/book-bookmark 1.png";
import CalendarImg from "../assets/calendar 1.png";
import SectionImg from "../assets/section-bg.png";

import CustomCard from "./ui/CustomCard";
import CustomTextField from "./ui/CustomTextField";
import CTAButton from "./ui/CTAButton";

const cardItems = [
  {
    image: HandshakeImg,
    header: "Tailored Matching",
    content:
      "Our team works closely with you to understand your specific requirements and expectations, connecting you with a surgeon uniquely suited to your needs.",
  },
  {
    image: GlobeImg,
    header: "Quality Network",
    content:
      "Built a vast network of top-tier surgeons meeting stringent standards. Our reputation rests on delivering the best, a responsibility we take seriously.",
  },
  {
    image: SupportImg,
    header: "Comprehensive Support",
    content: `From inquiry to post-surgery, our coordinators assist with procedures, scheduling, and recovery support. We're here for you every step of the way.`,
  },
  {
    image: StarImg,
    header: "Unwavering Commitment",
    content:
      "Our team works closely with you to understand your specific requirements and expectations, connecting you with a surgeon uniquely suited to your needs.",
  },
  {
    image: BookImg,
    header: "Educational Resources",
    content:
      "We offer educational resources, connect with previous patients, and provide insights for an informed decision-making process.",
  },
  {
    image: CalendarImg,
    header: "Logistical Assistance",
    content:
      "Coordinating appointments and aftercare can be overwhelming. Our team manages logistics, ensuring a hassle-free experience for you.",
  },
];

function MainContent() {
  return (
    <>
      {/* Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBlock: "1em",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <Typography
          component="h2"
          color="primary"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "28px", md: "30px" },
            textAlign: "center",
          }}
        >
          The Smart Way to Find a Plastic Surgeon
        </Typography>
        <Typography
          sx={{ maxWidth: "930px", fontSize: "18px", textAlign: "center" }}
        >
          From answering questions and addressing concerns to helping you find
          the surgeon that best aligns with your aesthetic goals, The Med Chat
          is committed to ensuring a personalized, comfortable experience.
        </Typography>
        <CardMedia
          component="iframe"
          title="The Med Chat Video"
          src="https://www.youtube.com/embed/T5hI-mqSs8A"
          sx={{ maxWidth: "930px", height: "450px", border: "none" }}
        />
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBlock: "1em",
          alignItems: "center",
        }}
      >
        <Typography
          component="h2"
          color="primary"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "28px", md: "30px" },
            textAlign: "center",
          }}
        >
          Why Choose The Med Chat?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            gap: "30px",
            paddingBlock: "30px",
            justifyContent: "center",
          }}
        >
          {/* CustomCards */}
          {cardItems.map((item, index) => (
            <CustomCard
              key={index}
              image={item.image}
              heading={item.header}
              content={item.content}
            />
          ))}
        </Box>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBlock: "1em",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
          backgroundImage: `url(${SectionImg})`,
          padding: "2em",
        }}
      >
        {/* Image */}
        {/* <Box
          component="img"
          src={SectionImg}
          sx={{ width: "100%", order: "2" }}
        /> */}

        {/* Text */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "645px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Typography
            component="h2"
            color="primary"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "28px", md: "30px" },
              textAlign: "center",
            }}
          >
            Download Our Checklist
          </Typography>
          <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
            Don't go to your plastic surgery consultation naked! Download our
            customized checklist and make the right choice FREE!
          </Typography>

          <CustomTextField content="Enter your name" />
          <CustomTextField content="Enter your email address" />

          <CTAButton>Download Now</CTAButton>
        </Box>
      </Box>
    </>
  );
}

export default MainContent;
