import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WetPaperBDevice.module.css";

const WetPaperBDevice = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/wet-paper-a");
  }, [navigate]);

  return (
    <div className={styles.wetPaperBDevice1}>
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
      <div className={styles.wetPaperStatusBar}>
        <div className={styles.wetPaperTitleBar}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.wetPaper}>WET PAPER</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.wetPaperBDiv}>
          <img
            className={styles.wetPaperBVideoGif}
            alt=""
            src="/wet-paper-b--video-gif@2x.png"
          />
          <div className={styles.startTimerButton}>
            <button className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetPaperBDevice;
