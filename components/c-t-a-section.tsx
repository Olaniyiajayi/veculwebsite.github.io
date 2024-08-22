import Button1 from "./button1";
import IPhone12ProMockup from "./i-phone12-pro-mockup";
import PropTypes from "prop-types";
import styles from "./c-t-a-section.module.css";

const CTASection = ({ className = "" }) => {
  return (
    <section className={[styles.ctaSection, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.headingAndCheckItems}>
          <h1 className={styles.heading}>Manage Your Rentals Anywhere</h1>
          <div className={styles.supportingText}>
            Manage your entire vehicle inventory from one central dashboard.
            Easily list new vehicles, track current rentals, view booking
            histories, and optimize your operations with our intuitive tools—all
            from the convenience of your desktop or tablet.
          </div>
        </div>
        <div className={styles.actions}>
          <Button1 />
          <div className={styles.secondaryAction}>
            <div className={styles.dividers} />
            <div className={styles.supportingText1}>or</div>
            <div className={styles.dividers} />
          </div>
          <div className={styles.actions1}>
            <img
              className={styles.mobileAppStoreBadge}
              loading="lazy"
              alt=""
              src="/mobile-app-store-badge.svg"
            />
            <img
              className={styles.mobileAppStoreBadge1}
              loading="lazy"
              alt=""
              src="/mobile-app-store-badge-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.iphoneAction}>
        <div className={styles.content1}>
          <img className={styles.blobIcon} alt="" src="/blob.svg" />
          <IPhone12ProMockup
            screenMockupREPLACEFILL="/screen-mockup-replace-fill-3@2x.png"
            iPhoneMockup="/iphone-mockup-2.svg"
            date="/date-2.svg"
            right="/right-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  className: PropTypes.string,
};

export default CTASection;
