import { useState, useCallback } from "react";
import Covid19CurrentReport from "../components/Covid19CurrentReport";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19TestResultDevice.module.css";

const Covid19TestResultDevice = () => {
  const [isCovid19CurrentReportOpen, setCovid19CurrentReportOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-test");
  }, [navigate]);

  const openCovid19CurrentReport = useCallback(() => {
    setCovid19CurrentReportOpen(true);
  }, []);

  const closeCovid19CurrentReport = useCallback(() => {
    setCovid19CurrentReportOpen(false);
  }, []);

  return (
    <>
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
            <div className={styles.covid19TestResults}>
              COVID-19 TEST RESULTS
            </div>
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
                <button
                  className={styles.printButton2}
                  onClick={openCovid19CurrentReport}
                >
                  <div className={styles.print}>PRINT</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCovid19CurrentReportOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.75)"
          placement="Centered"
          onOutsideClick={closeCovid19CurrentReport}
        >
          <Covid19CurrentReport onClose={closeCovid19CurrentReport} />
        </PortalPopup>
      )}
    </>
  );
};

export default Covid19TestResultDevice;
