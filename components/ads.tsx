import ButtonPrimary from "./button-primary";
import ButtonSecondary from "./button-secondary";
import MacbookPro16Mockup from "./macbook-pro16-mockup";
import IPhone12ProMockup from "./i-phone12-pro-mockup";
import PropTypes from "prop-types";
import styles from "./ads.module.css";

const Ads = ({ className = "" }) => {
  return (
    <section className={[styles.ads2, className].join(" ")}>
      <img className={styles.bgIcon} alt="" />
      <div className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.innerContentWrapper}>
            <h1 className={styles.yourMarketplaceFor}>
              Your Marketplace for Easy and Secure Vehicle Rentals
            </h1>
            <div className={styles.connectingOwnersRenters}>
              Connecting Owners, Renters, and Businesses on One Platform.
            </div>
          </div>
          <div className={styles.buttonPrimaryParent}>
            <ButtonPrimary
              buttonPrimary="Download the app"
              propHeight="unset"
              propWidth="189px"
              propAlignSelf="stretch"
            />
            <ButtonSecondary />
          </div>
        </div>
      </div>
      <div className={styles.macbookWrapperParent}>
        <div className={styles.macbookWrapper}>
          <MacbookPro16Mockup />
        </div>
        <IPhone12ProMockup
          propHeight="unset"
          propWidth="unset"
          propPosition="relative"
          propMargin="unset"
          propBottom="unset"
          propLeft="unset"
          propDisplay="flex"
          propFlexDirection="row"
          propPadding="10px 11px 10.9px"
          propMarginLeft="-824.1px"
          propFilter="drop-shadow(29px 29px 58.03px rgba(16, 24, 40, 0.2)) drop-shadow(14.5px 14.5px 29.01px rgba(16, 24, 40, 0.08))"
          propPosition1="unset"
          propHeight1="424.3px"
          propWidth1="196px"
          propTop="unset"
          propRight="unset"
          propBottom1="unset"
          propLeft1="unset"
          propOverflow="unset"
          propGap="264.3px"
          propOverflowY="auto"
          propFlex="unset"
          propPadding1="unset"
          propHeight2="441px"
          propFlexDirection1="column"
          propPadding2="unset"
          screenMockupREPLACEFILL="/screen-mockup-replace-fill-1@2x.png"
          propFlex2="1"
          propMaxHeight="100%"
          propMarginTop="-3.2px"
          propHeight3="unset"
          iPhoneMockup="/iphone-mockup.svg"
          propTop1="0px"
          propRight1="0px"
          propBottom2="unset"
          propLeft2="0px"
          propMaxHeight1="unset"
          propMargin1="0 !important"
          date="/date.svg"
          right="/right@2x.png"
          propPadding3="8.9px 8px 5px 17px"
          propAlignSelf="stretch"
          propFlex1="unset"
          propWidth2="14.9px"
          propWidth11="34.8px"
          propWidth3="340px"
          propPadding4="19.1px 20px 7.2px 21px"
          propAlignSelf1="unset"
          propMarginTop1="unset"
          propWidth12="121.5px"
          propBorderRadius="90.66px"
        />
      </div>
    </section>
  );
};

Ads.propTypes = {
  className: PropTypes.string,
};

export default Ads;
