import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./button1.module.css";

const Button1 = ({ className = "" }) => {
  return (
    <Button
      className={[styles.button, className].join(" ")}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#1038c3",
        border: "#1038c3 solid 1px",
        borderRadius: "8px",
        "&:hover": { background: "#1038c3" },
      }}
    >
      Get started
    </Button>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
};

export default Button1;
