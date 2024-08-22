import FeatureText1 from "./feature-text1";
import IPhone12ProMockup from "./i-phone12-pro-mockup";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={[styles.testimonialWrapperWrapper, className].join(" ")}
    >
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonialContentWrapper}>
          <div className={styles.testimonialInnerWrapper}>
            <div className={styles.testimonialContainer}>
              <h1 className={styles.heading}>{`How Vecul Works `}</h1>
              <div className={styles.testimonialList}>
                <FeatureText1
                  testimonialTitle="Step 1"
                  supportingText="Businesses and owners list vehicles via the web or mobile app"
                />
                <FeatureText1
                  testimonialTitle="Step 2"
                  supportingText="Renters find and book vehicles through the mobile app."
                />
                <FeatureText1
                  testimonialTitle="Step 3"
                  supportingText="Easy payment and secure transactions."
                />
                <FeatureText1
                  testimonialTitle="Step 4"
                  supportingText="Manage and monitor rentals through the web and mobile app."
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <IPhone12ProMockup
            propHeight="unset"
            propWidth="283px"
            propPosition="relative"
            propMargin="unset"
            propBottom="unset"
            propLeft="unset"
            propDisplay="flex"
            propFlexDirection="row"
            propPadding="12.8px 14px 14.2px"
            propMarginLeft="unset"
            propFilter="drop-shadow(21.7px 21.7px 43.33px rgba(16, 24, 40, 0.2)) drop-shadow(10.8px 10.8px 21.67px rgba(16, 24, 40, 0.08))"
            propPosition1="unset"
            propHeight1="549.8px"
            propWidth1="unset"
            propTop="unset"
            propRight="unset"
            propBottom1="unset"
            propLeft1="unset"
            propOverflow="hidden"
            propGap="unset"
            propOverflowY="unset"
            propFlex="1"
            propPadding1="0px 0px 524.1px"
            propHeight2="unset"
            propFlexDirection1="row"
            propPadding2="0px 0px 40.7px"
            screenMockupREPLACEFILL="/screen-mockup-replace-fill-2@2x.png"
            propFlex2="unset"
            propMaxHeight="unset"
            propMarginTop="-44.7px"
            propHeight3="549.8px"
            iPhoneMockup="/iphone-mockup-1.svg"
            propTop1="0px"
            propRight1="0px"
            propBottom2="unset"
            propLeft2="0px"
            propMaxHeight1="unset"
            propMargin1="0 !important"
            date="/date-1.svg"
            right="/right-1@2x.png"
            propPadding3="11.7px 11px 6.2px 22px"
            propAlignSelf="unset"
            propFlex1="1"
            propWidth2="19.2px"
            propWidth11="45.1px"
            propWidth3="unset"
            propPadding4="14.2px 0px 5.4px"
            propAlignSelf1="stretch"
            propMarginTop1="-44.7px"
            propWidth12="90.7px"
            propBorderRadius="67.7px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
