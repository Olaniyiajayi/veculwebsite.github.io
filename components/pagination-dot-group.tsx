import PropTypes from "prop-types";
import styles from "./pagination-dot-group.module.css";

const PaginationDotGroup = ({ className = "" }) => {
  return (
    <div className={[styles.paginationDotGroup, className].join(" ")}>
      <div className={styles.paginationDotIndicator} />
      <div className={styles.paginationDotIndicator1} />
      <div className={styles.paginationDotIndicator1} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
      <div className={styles.paginationDotIndicator3} />
    </div>
  );
};

PaginationDotGroup.propTypes = {
  className: PropTypes.string,
};

export default PaginationDotGroup;
