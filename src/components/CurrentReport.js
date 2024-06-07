import PropTypes from "prop-types";
import styles from "./CurrentReport.module.css";

const CurrentReport = ({ className = "", onClose }) => {
  return (
    <div className={[styles.currentReport, className].join(" ")}>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
    </div>
  );
};

CurrentReport.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default CurrentReport;
