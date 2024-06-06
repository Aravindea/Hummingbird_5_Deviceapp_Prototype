import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MixBloodAndMarkerFluidA.module.css";

const MixBloodAndMarkerFluidA = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/confirm-patient-info");
  }, [navigate]);

  const onStartTimerButtonClick = useCallback(() => {
    navigate("/mix-blood-and-marker-fluid-b");
  }, [navigate]);

  return (
    <div className={styles.mixBloodAndMarkerFluidA}>
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
        <div className={styles.mixBloodAndMarkerFluidAD}>
          <img
            className={styles.mixBloodAndMarkerFluidAV}
            src="11712576-2221-4c55-8d84-747aa23ce0f0_1696334566979510785"
          />
          <div
            className={styles.startTimerButton}
            onClick={onStartTimerButtonClick}
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

export default MixBloodAndMarkerFluidA;
