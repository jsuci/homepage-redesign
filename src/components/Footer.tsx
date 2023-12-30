import { Box, Typography, Button } from "@mui/material";
import SmallLogoImg from "../assets/tiny-logo.png";
import SocialMediaImg from "../assets/social-media.png";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBlock: "1em",
        alignItems: { xs: "center", md: "start" },
        rowGap: "20px",
      }}
    >
      {/* Logo Image */}
      <Box component="img" src={SmallLogoImg} sx={{ maxWidth: "123px" }} />

      {/* Social Media Image */}
      <Box component="img" src={SocialMediaImg} sx={{ maxWidth: "298px" }} />

      <Typography sx={{ fontSize: "13px" }}>
        The information on The Med Chat is intended for educational purposes
        only. While we connect prospective patients with vetted, board-certified
        doctors, we don’t provide medical consultations, diagnosis, or advice.
        Any connections or recommendations are based on our professional
        opinion. We encourage prospective patients to continue to perform their
        due diligence before electing to proceed with any cosmetic surgery
        procedure. We make no warranties or guarantees. If you’re experiencing a
        medical issue, please contact a healthcare professional or dial 911
        immediately. There is no implied privacy protection as defined by HIPPA.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          Copyright © 2023 The Med Chat
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
          <Button
            sx={{
              fontWeight: "600",
              textTransform: "none",
              fontSize: "14px",
            }}
            variant="text"
            disableRipple
          >
            Contact
          </Button>
          <Button
            sx={{
              fontWeight: "600",
              textTransform: "none",
              fontSize: "14px",
            }}
            variant="text"
            disableRipple
          >
            Privacy Policy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
