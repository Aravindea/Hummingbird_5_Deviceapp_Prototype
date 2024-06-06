import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FillWellsDevice.module.css";

const FillWellsDevice = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/apply-sample-with-stamper");
  }, [navigate]);

  return (
    <div className={styles.fillWellsDevice1}>
      <div className={styles.batteryBar}>
        <div className={styles.batteryStatusBar}>
          <div className={styles.wifiMapPinIc}>
            <img
              className={styles.wifiSvgrepoCom11}
              alt=""
              src="/wifisvgrepocom-1-11.svg"
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
      <div className={styles.fillWellsTitleBar}>
        <div className={styles.fillWellsTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.fillWells}>FILL WELLS</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.fillWellsDiv}>
        <div className={styles.fillWellsDiv1}>
          <img className={styles.fillWellsVideoGif} src="/video4.gif" />
          <div className={styles.startTestButton}>
            <button className={styles.startTest}>
              <div className={styles.startTest1}>START TEST</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillWellsDevice;
