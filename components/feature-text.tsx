import PropTypes from "prop-types";
import styles from "./feature-text.module.css";

const FeatureText = ({
  className = "",
  featuredIcon,
  contentTitle,
  supportingText,
}) => {
  return (
    <div className={[styles.featureText, className].join(" ")}>
      <img
        className={styles.featuredIcon}
        loading="lazy"
        alt=""
        src={featuredIcon}
      />
      <div className={styles.content}>
        <div className={styles.textAndSupportingText}>
          <div className={styles.contentTitle}>{contentTitle}</div>
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

FeatureText.propTypes = {
  className: PropTypes.string,
  featuredIcon: PropTypes.string,
  contentTitle: PropTypes.string,
  supportingText: PropTypes.string,
};

export default FeatureText;
