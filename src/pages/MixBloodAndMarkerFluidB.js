import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MixBloodAndMarkerFluidB.module.css";

const MixBloodAndMarkerFluidB = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/mix-blood-and-marker-fluid-a");
  }, [navigate]);

  return (
    <div className={styles.mixBloodAndMarkerFluidB}>
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
      <div className={styles.mixBloodAndMarkerFluidTit}>
        <div className={styles.mixBloodAndMarkerFluidTit1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.mixBloodAnd}>MIX BLOOD AND MARKER FLUID</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.mixBloodAndMarkerFluidBD}>
          <img className={styles.mixBloodAndMarkerFluidBV} src="/video1b.gif" />
          <div className={styles.startTimerButton}>
            <div className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixBloodAndMarkerFluidB;
