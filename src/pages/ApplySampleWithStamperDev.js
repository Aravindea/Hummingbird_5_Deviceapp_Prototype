import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ApplySampleWithStamperDev.module.css";

const ApplySampleWithStamperDev = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/wet-paper-b");
  }, [navigate]);

  const onNextButtonContainerClick = useCallback(() => {
    navigate("/fill-wells");
  }, [navigate]);

  return (
    <div className={styles.applySampleWithStamperDev}>
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
      <div className={styles.applySampleWithStamperTitl}>
        <div className={styles.applySampleWithStamperTitl1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.applySampleWith}>
            APPLY SAMPLE WITH STAMPER
          </div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.applySampleWithStamperDiv}>
        <div className={styles.applySampleWithStamperDiv1}>
          <img
            className={styles.applySampleWithStamperVide}
            src="/video3.gif"
          />
          <div
            className={styles.nextButton}
            onClick={onNextButtonContainerClick}
          >
            <button className={styles.nextButton1}>
              <div className={styles.next}>NEXT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySampleWithStamperDev;
