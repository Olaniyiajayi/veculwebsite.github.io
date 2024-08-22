import PropTypes from "prop-types";
import styles from "./feature-text1.module.css";

const FeatureText1 = ({ className = "", testimonialTitle, supportingText }) => {
  return (
    <div className={[styles.featureText, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.textAndSupportingText}>
          <div className={styles.testimonialTitle}>{testimonialTitle}</div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.text}>Learn more</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureText1.propTypes = {
  className: PropTypes.string,
  testimonialTitle: PropTypes.string,
  supportingText: PropTypes.string,
};

export default FeatureText1;
