import Input from "./input";
import ButtonPrimary from "./button-primary";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.text}>
        <h3 className={styles.heading}>Subscribe to our newsletter</h3>
        <div className={styles.description}>
          <p className={styles.neverMissA}>{`Never miss a beat. `}</p>
          <p className={styles.neverMissA}>
            Get a weekly dose of design inspiration, secrets, tips, trends, and
            banter in your inbox.
          </p>
        </div>
      </div>
      <div className={styles.input}>
        <Input />
        <ButtonPrimary buttonPrimary="Subscribe" />
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
