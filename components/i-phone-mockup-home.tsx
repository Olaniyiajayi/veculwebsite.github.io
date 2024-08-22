import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./i-phone-mockup-home.module.css";

const IPhoneMockupHome = ({
  className = "",
  propWidth,
  propPadding,
  propAlignSelf,
  propMarginTop,
  propWidth1,
  propBorderRadius,
}) => {
  const iPhoneMockupHomeStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
      marginTop: propMarginTop,
    };
  }, [propWidth, propPadding, propAlignSelf, propMarginTop]);

  const homeStyle = useMemo(() => {
    return {
      width: propWidth1,
      borderRadius: propBorderRadius,
    };
  }, [propWidth1, propBorderRadius]);

  return (
    <div
      className={[styles.iphoneMockupHome, className].join(" ")}
      style={iPhoneMockupHomeStyle}
    >
      <div className={styles.home} style={homeStyle} />
    </div>
  );
};

IPhoneMockupHome.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMarginTop: PropTypes.any,
  propWidth1: PropTypes.any,
  propBorderRadius: PropTypes.any,
};

export default IPhoneMockupHome;
