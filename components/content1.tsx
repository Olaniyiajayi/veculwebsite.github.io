import Dividers from "./dividers";
import PropTypes from "prop-types";
import styles from "./content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <Dividers />
      <div className={styles.content1}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo-1.svg"
        />
        <div className={styles.contactInfo}>
          <div className={styles.contactDetails}>
            <div className={styles.contactUs}>Contact us</div>
            <a
              className={styles.helloraynauicom}
              href="mailto:hello@vecul.co"
              target="_blank"
            >
              hello@raynaui.com
            </a>
          </div>
          <div className={styles.socialInfo}>
            <div className={styles.followUs}>Follow Us</div>
            <div className={styles.icons}>
              <img
                className={styles.fbIcon}
                loading="lazy"
                alt=""
                src="/fb.svg"
              />
              <img
                className={styles.fbIcon}
                loading="lazy"
                alt=""
                src="/tw.svg"
              />
              <img
                className={styles.fbIcon}
                loading="lazy"
                alt=""
                src="/ig.svg"
              />
              <img
                className={styles.fbIcon}
                loading="lazy"
                alt=""
                src="/ln.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
