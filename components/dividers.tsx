import PropTypes from "prop-types";
import styles from "./dividers.module.css";

const Dividers = ({ className = "" }) => {
  return (
    <div className={[styles.dividers, className].join(" ")}>
      <div className={styles.divider} />
    </div>
  );
};

Dividers.propTypes = {
  className: PropTypes.string,
};

export default Dividers;
