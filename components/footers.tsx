import Content from "./content";
import Content1 from "./content1";
import PropTypes from "prop-types";
import styles from "./footers.module.css";

const Footers = ({ className = "" }) => {
  return (
    <footer className={[styles.footers, className].join(" ")}>
      <Content />
      <Content1 />
      <div className={styles.footerLinks}>
        <div className={styles.linkListOne}>
          <div className={styles.description}>Services</div>
          <div className={styles.description1}>About Us</div>
          <div className={styles.description2}>Contact Us</div>
          <div className={styles.description3}>Access Web App</div>
        </div>
        <div className={styles.linkListTwo}>
          <div className={styles.description4}>Privacy Policy</div>
          <div className={styles.description5}>Terms of Use</div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.description6}>
          © 2024 Vecul{`. `}All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

Footers.propTypes = {
  className: PropTypes.string,
};

export default Footers;
