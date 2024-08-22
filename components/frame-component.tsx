import FeatureText from "./feature-text";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.featureWrapperWrapper, className].join(" ")}>
      <div className={styles.featureWrapper}>
        <h1 className={styles.heading}>Why Choose Vecul?</h1>
        <div className={styles.featureList}>
          <FeatureText
            featuredIcon="/featured-icon.svg"
            contentTitle="For Businesses"
            supportingText="Effortlessly manage your fleet and rental operations."
          />
          <FeatureText
            featuredIcon="/featured-icon-1.svg"
            contentTitle="For Vehicle Owners"
            supportingText="Find and rent vehicles near you in just a few taps."
          />
          <FeatureText
            featuredIcon="/featured-icon-2.svg"
            contentTitle="For Renters"
            supportingText="List your vehicles and earn passive income."
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
