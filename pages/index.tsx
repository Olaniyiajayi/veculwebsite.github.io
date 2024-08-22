import Ads from "../components/ads";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import QuoteSection from "../components/quote-section";
import CTASection from "../components/c-t-a-section";
import Footers from "../components/footers";
import styles from "./index.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <Ads />
      <FrameComponent />
      <FrameComponent1 />
      <QuoteSection />
      <CTASection />
      <Footers />
    </div>
  );
};

export default Root;
