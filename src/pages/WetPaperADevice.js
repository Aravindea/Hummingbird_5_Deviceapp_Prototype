import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WetPaperADevice.module.css";

const WetPaperADevice = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/mix-blood-and-marker-fluid-b");
  }, [navigate]);

  const onStartTimerButtonContainerClick = useCallback(() => {
    navigate("/wet-paper-b");
  }, [navigate]);

  return (
    <div className={styles.wetPaperADevice1}>
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
      <div className={styles.wetPaperTitleBar}>
        <div className={styles.wetPaperTitleBar1}>
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
        <div className={styles.wetPaperDiv}>
          <img className={styles.wetPaperAVideoGif} src="/video2a.gif" />
          <div
            className={styles.startTimerButton}
            onClick={onStartTimerButtonContainerClick}
          >
            <button className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetPaperADevice;
