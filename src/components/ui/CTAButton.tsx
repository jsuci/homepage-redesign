import { Button } from "@mui/material";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
}

const CTAButton = ({ children }: CTAButtonProps) => {
  return (
    <Button
      sx={{
        fontWeight: "400",
        color: "#fff",
        textTransform: "none",
        fontSize: "18px",
        maxWidth: "480px",
      }}
      color="primary"
      variant="contained"
      size="large"
      fullWidth
    >
      {children}
    </Button>
  );
};

export default CTAButton;
