import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HbVariantRunningDevice.module.css";

const HbVariantRunningDevice = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-1-test-running");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/fill-wells");
  }, [navigate]);

  return (
    <div className={styles.hbVariantRunningDevice1}>
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
      <div className={styles.hbVariantRunningTitleBar}>
        <div className={styles.hbVariantRunningTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.hbVariantRunning}>Hb VARIANT RUNNING</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.hbVariantRunningDiv}>
        <div className={styles.hbVariantRunningDiv1}>
          <img className={styles.hbVariantRunningVideoGif} src="/video5.gif" />
          <div className={styles.startTestButton}>
            <button className={styles.startTestButton1}>
              <div className={styles.startTestButton2}>START TEST</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HbVariantRunningDevice;
