import { useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19TestDevice.module.css";

const Covid19TestDevice = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-prepare-sample");
  }, [navigate]);

  return (
    <div className={styles.covid19TestDevice1}>
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
      <div className={styles.covid19TestTitleBar}>
        <div className={styles.covid19TestTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.covid19Test}>COVID-19 TEST</div>
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.covid19Testdiv}>
          <div className={styles.covid19TestStartProgressB}>
            <div className={styles.quickTest}>
              <div className={styles.patientIdCovid19}>
                PATIENT ID: Covid-19 DEMO
              </div>
              <div className={styles.quickTest1}>QUICK TEST</div>
            </div>
            <DotLottiePlayer
              className={styles.progressBarImg}
              autoplay
              src="/1_(1).json"
            />
          </div>
          <div className={styles.startTestButton}>
            <button className={styles.startTestButton1}>
              <div className={styles.startTest}>START TEST</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid19TestDevice;
