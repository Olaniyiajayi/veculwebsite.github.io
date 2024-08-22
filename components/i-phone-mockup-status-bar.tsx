import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./i-phone-mockup-status-bar.module.css";

const IPhoneMockupStatusBar = ({
  className = "",
  propPadding,
  propAlignSelf,
  propFlex,
  date,
  propWidth,
  right,
  propWidth1,
}) => {
  const iPhoneMockupStatusBarStyle = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propPadding, propAlignSelf, propFlex]);

  const dateIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rightIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={[styles.iphoneMockupStatusBar, className].join(" ")}
      style={iPhoneMockupStatusBarStyle}
    >
      <img
        className={styles.dateIcon}
        loading="lazy"
        alt=""
        src={date}
        style={dateIconStyle}
      />
      <img
        className={styles.rightIcon}
        loading="lazy"
        alt=""
        src={right}
        style={rightIconStyle}
      />
    </div>
  );
};

IPhoneMockupStatusBar.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  right: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default IPhoneMockupStatusBar;
