import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./button-secondary.module.css";

const ButtonSecondary = ({ className = "" }) => {
  return (
    <Button
      className={[styles.buttonSecondary, className].join(" ")}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#f9fafb",
        fontSize: "16",
        background: "#1038c3",
        border: "#f9fafb solid 1.5px",
        borderRadius: "8px",
        "&:hover": { background: "#1038c3" },
        width: 175,
      }}
    >
      Access web app
    </Button>
  );
};

ButtonSecondary.propTypes = {
  className: PropTypes.string,
};

export default ButtonSecondary;
