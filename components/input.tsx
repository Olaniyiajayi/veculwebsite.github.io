import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./input.module.css";

const Input = ({
  className = "",
  hasRightLabel = false,
  hasLabel = false,
  hasLeftIcon = true,
  hasHelperText = false,
  hasRightIcon = false,
  hasRightContent = false,
}) => {
  return (
    <TextField
      className={[styles.input, className].join(" ")}
      placeholder="Email address"
      variant="outlined"
      InputProps={{
        startAdornment: <img width="20px" height="20px" src="/iconleft.svg" />,
      }}
      sx={{
        "& fieldset": { borderColor: "#d0d5dd" },
        "& .MuiInputBase-root": {
          height: "56px",
          backgroundColor: "#fff",
          paddingLeft: "16px",
          borderRadius: "6px",
          fontSize: "14px",
        },
        "& .MuiInputBase-input": { paddingLeft: "8px", color: "#98a2b3" },
      }}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  hasRightLabel: PropTypes.bool,
  hasLabel: PropTypes.bool,
  hasLeftIcon: PropTypes.bool,
  hasHelperText: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  hasRightContent: PropTypes.bool,
};

export default Input;
