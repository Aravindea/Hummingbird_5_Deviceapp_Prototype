import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19PrepareSampleDevic.module.css";

const Covid19PrepareSampleDevic = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-confirm-patient-info");
  }, [navigate]);

  const onSTARTTESTButtonClick = useCallback(() => {
    navigate("/covid19-test");
  }, [navigate]);

  return (
    <div className={styles.covid19PrepareSampleDevic}>
      <div className={styles.batteryBar}>
        <div className={styles.batteryStatusBar}>
          <div className={styles.wifiMapPinIc}>
            <img
              className={styles.wifiSvgrepoCom11}
              alt=""
              src="/wifisvgrepocom-1-1.svg"
            />
            <img className={styles.mapIcIcon} alt="" src="/map-ic@2x.png" />
          </div>
          <div className={styles.batteryPercentageIc}>
            <div className={styles.div}>96%</div>
            <img
              className={styles.batteryIc1}
              alt=""
              src="/battery-ic-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.covid19PrepareSampleTitle}>
        <div className={styles.covid19PrepareSampleTitle1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.prepareSample}>PREPARE SAMPLE</div>
        </div>
      </div>
      <div className={styles.prepareSampleDiv}>
        <div className={styles.prepareSampleDiv1}>
          <img className={styles.prepareSampleImgIcon} src="/covidvideo.gif" />
          <div
            className={styles.startTestButton}
            onClick={onSTARTTESTButtonClick}
          >
            <button className={styles.startTestButton1}>
              <div className={styles.startTest}>START TEST</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid19PrepareSampleDevic;
