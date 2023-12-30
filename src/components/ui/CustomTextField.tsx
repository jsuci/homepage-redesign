import { TextField } from "@mui/material";

interface CustomTextFieldProps {
  content: string;
}

const CustomTextField = ({ content }: CustomTextFieldProps) => {
  return (
    <TextField
      size="medium"
      variant="outlined"
      label={content}
      fullWidth
      sx={{ maxWidth: "480px" }}
    />
  );
};

export default CustomTextField;
