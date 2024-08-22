import PropTypes from "prop-types";
import styles from "./macbook-pro16-mockup.module.css";

const MacbookPro16Mockup = ({ className = "" }) => {
  return (
    <div className={[styles.macbookPro16Mockup, className].join(" ")}>
      <img
        className={styles.macbookPro16}
        alt=""
        src="/macbook-pro-16@2x.png"
      />
      <div className={styles.cameraContainer}>
        <img
          className={styles.cameraIcon}
          loading="lazy"
          alt=""
          src="/camera@2x.png"
        />
      </div>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <img
        className={styles.screenMockupReplaceFill}
        alt=""
        src="/screen-mockup-replace-fill@2x.png"
      />
    </div>
  );
};

MacbookPro16Mockup.propTypes = {
  className: PropTypes.string,
};

export default MacbookPro16Mockup;
