import PaginationDotGroup from "./pagination-dot-group";
import PropTypes from "prop-types";
import styles from "./quote-section.module.css";

const QuoteSection = ({ className = "" }) => {
  return (
    <section className={[styles.quoteSection, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.quoteAndAttribution}>
            <h1 className={styles.quote}>
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </h1>
            <div className={styles.attribution}>
              <div className={styles.avatarAndText}>
                <img
                  className={styles.avatarIcon}
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.textAndSupportingText}>
                  <div className={styles.authorName}>Kelly Williams</div>
                  <div className={styles.supportingText}>Renter on Vecul</div>
                </div>
              </div>
              <div className={styles.stars}>
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.paginationContainer}>
            <PaginationDotGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

QuoteSection.propTypes = {
  className: PropTypes.string,
};

export default QuoteSection;
