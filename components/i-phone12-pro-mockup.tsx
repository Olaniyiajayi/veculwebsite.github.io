import { useMemo } from "react";
import IPhoneMockupStatusBar from "./i-phone-mockup-status-bar";
import IPhoneMockupHome from "./i-phone-mockup-home";
import PropTypes from "prop-types";
import styles from "./i-phone12-pro-mockup.module.css";

const IPhone12ProMockup = ({
  className = "",
  propHeight,
  propWidth,
  propPosition,
  propMargin,
  propBottom,
  propLeft,
  propDisplay,
  propFlexDirection,
  propPadding,
  propMarginLeft,
  propFilter,
  propPosition1,
  propHeight1,
  propWidth1,
  propTop,
  propRight,
  propBottom1,
  propLeft1,
  propOverflow,
  propGap,
  propOverflowY,
  propFlex,
  propPadding1,
  propHeight2,
  propFlexDirection1,
  propPadding2,
  screenMockupREPLACEFILL,
  propFlex2,
  propMaxHeight,
  propMarginTop,
  propHeight3,
  iPhoneMockup,
  propTop1,
  propRight1,
  propBottom2,
  propLeft2,
  propMaxHeight1,
  propMargin1,
  date,
  right,
  propPadding3,
  propAlignSelf,
  propFlex1,
  propWidth2,
  propWidth11,
  propWidth3,
  propPadding4,
  propAlignSelf1,
  propMarginTop1,
  propWidth12,
  propBorderRadius,
}) => {
  const iPhone12ProMockupStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      position: propPosition,
      margin: propMargin,
      bottom: propBottom,
      left: propLeft,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      marginLeft: propMarginLeft,
      filter: propFilter,
    };
  }, [
    propHeight,
    propWidth,
    propPosition,
    propMargin,
    propBottom,
    propLeft,
    propDisplay,
    propFlexDirection,
    propPadding,
    propMarginLeft,
    propFilter,
  ]);

  const mockupWrapStyle = useMemo(() => {
    return {
      position: propPosition1,
      height: propHeight1,
      width: propWidth1,
      top: propTop,
      right: propRight,
      bottom: propBottom1,
      left: propLeft1,
      overflow: propOverflow,
      gap: propGap,
      overflowY: propOverflowY,
      flex: propFlex,
      padding: propPadding1,
    };
  }, [
    propPosition1,
    propHeight1,
    propWidth1,
    propTop,
    propRight,
    propBottom1,
    propLeft1,
    propOverflow,
    propGap,
    propOverflowY,
    propFlex,
    propPadding1,
  ]);

  const statusBarWrapperActionStyle = useMemo(() => {
    return {
      height: propHeight2,
      flexDirection: propFlexDirection1,
      padding: propPadding2,
    };
  }, [propHeight2, propFlexDirection1, propPadding2]);

  const screenMockupREPLACEFILLStyle = useMemo(() => {
    return {
      flex: propFlex2,
      maxHeight: propMaxHeight,
      marginTop: propMarginTop,
      height: propHeight3,
    };
  }, [propFlex2, propMaxHeight, propMarginTop, propHeight3]);

  const iPhoneMockupIconStyle = useMemo(() => {
    return {
      top: propTop1,
      right: propRight1,
      bottom: propBottom2,
      left: propLeft2,
      maxHeight: propMaxHeight1,
      margin: propMargin1,
    };
  }, [
    propTop1,
    propRight1,
    propBottom2,
    propLeft2,
    propMaxHeight1,
    propMargin1,
  ]);

  return (
    <div
      className={[styles.iphone12ProMockup, className].join(" ")}
      style={iPhone12ProMockupStyle}
    >
      <div className={styles.mockupWrap} style={mockupWrapStyle}>
        <div
          className={styles.statusBarWrapperAction}
          style={statusBarWrapperActionStyle}
        >
          <IPhoneMockupStatusBar
            propPadding={propPadding3}
            propAlignSelf={propAlignSelf}
            propFlex={propFlex1}
            date={date}
            propWidth={propWidth2}
            right={right}
            propWidth1={propWidth11}
          />
          <img
            className={styles.screenMockupReplaceFill}
            loading="lazy"
            alt=""
            src={screenMockupREPLACEFILL}
            style={screenMockupREPLACEFILLStyle}
          />
        </div>
        <IPhoneMockupHome
          propWidth={propWidth3}
          propPadding={propPadding4}
          propAlignSelf={propAlignSelf1}
          propMarginTop={propMarginTop1}
          propWidth1={propWidth12}
          propBorderRadius={propBorderRadius}
        />
      </div>
      <img
        className={styles.iphoneMockupIcon}
        alt=""
        src={iPhoneMockup}
        style={iPhoneMockupIconStyle}
      />
    </div>
  );
};

IPhone12ProMockup.propTypes = {
  className: PropTypes.string,
  screenMockupREPLACEFILL: PropTypes.string,
  iPhoneMockup: PropTypes.string,
  date: PropTypes.string,
  right: PropTypes.string,
  propPadding3: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propFlex1: PropTypes.string,
  propWidth2: PropTypes.string,
  propWidth11: PropTypes.string,
  propWidth3: PropTypes.string,
  propPadding4: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propMarginTop1: PropTypes.string,
  propWidth12: PropTypes.string,
  propBorderRadius: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propMargin: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propPadding: PropTypes.any,
  propMarginLeft: PropTypes.any,
  propFilter: PropTypes.any,
  propPosition1: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth1: PropTypes.any,
  propTop: PropTypes.any,
  propRight: PropTypes.any,
  propBottom1: PropTypes.any,
  propLeft1: PropTypes.any,
  propOverflow: PropTypes.any,
  propGap: PropTypes.any,
  propOverflowY: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight2: PropTypes.any,
  propFlexDirection1: PropTypes.any,
  propPadding2: PropTypes.any,
  propFlex2: PropTypes.any,
  propMaxHeight: PropTypes.any,
  propMarginTop: PropTypes.any,
  propHeight3: PropTypes.any,
  propTop1: PropTypes.any,
  propRight1: PropTypes.any,
  propBottom2: PropTypes.any,
  propLeft2: PropTypes.any,
  propMaxHeight1: PropTypes.any,
  propMargin1: PropTypes.any,
};

export default IPhone12ProMockup;
