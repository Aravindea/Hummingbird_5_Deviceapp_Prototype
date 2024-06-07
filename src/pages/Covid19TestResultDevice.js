import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19TestResultDevice.module.css";

const Covid19TestResultDevice = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-test");
  }, [navigate]);

  return (
    <div className={styles.covid19TestResultDevice1}>
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
      <div className={styles.covid19TestResultsTitleBa}>
        <div className={styles.covid19TestResultsTitleBa1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.covid19TestResults}>COVID-19 TEST RESULTS</div>
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.covid19TestResultsDiv}>
          <img
            className={styles.covid19TestResultsImg}
            alt=""
            src="/covid19-test-results-img@2x.png"
          />
          <div className={styles.printButton}>
            <div className={styles.printButton1}>
              <button className={styles.printButton2}>
                <div className={styles.print}>PRINT</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid19TestResultDevice;
