import PropTypes from "prop-types";
import styles from "./Covid19CurrentReport.module.css";

const Covid19CurrentReport = ({ className = "", onClose }) => {
  return (
    <div className={[styles.covid19CurrentReport, className].join(" ")}>
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
    </div>
  );
};

Covid19CurrentReport.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Covid19CurrentReport;
