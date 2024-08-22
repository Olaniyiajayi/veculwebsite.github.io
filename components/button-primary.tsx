import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./button-primary.module.css";

const ButtonPrimary = ({
  className = "",
  buttonPrimary,
  propHeight,
  propWidth,
  propAlignSelf,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propWidth, propAlignSelf]);

  return (
    <Button
      className={[styles.buttonPrimary, className].join(" ")}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#1038c3",
        borderRadius: "8px",
        "&:hover": { background: "#1038c3" },
        width: 127,
        height: 56,
      }}
      style={buttonPrimaryStyle}
    >
      {buttonPrimary}
    </Button>
  );
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  buttonPrimary: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default ButtonPrimary;
