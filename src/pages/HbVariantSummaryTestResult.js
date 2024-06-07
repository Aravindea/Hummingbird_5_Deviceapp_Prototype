import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HbVariantSummaryTestResult.module.css";

const HbVariantSummaryTestResult = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/hb-variant-running");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.hbVariantSummaryTestResult}>
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
      <div className={styles.hbVariantSummaryTitleBar}>
        <div className={styles.hbVariantSummaryTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.hbVariantSummary}>Hb VARIANT SUMMARY</div>
        </div>
      </div>
      <div className={styles.testResultsDiv}>
        <div className={styles.testResultsDiv1}>
          <div className={styles.testResultsChart}>
            <div className={styles.phenotype}>
              <div className={styles.testResultsChart2}>
                <div className={styles.patientIdPatient}>
                  PATIENT ID: Patient 7
                </div>
                <div className={styles.dividerLine} />
              </div>
              <div className={styles.testResultsBarChart}>
                <div className={styles.barChart}>
                  <div className={styles.a2CEChart}>
                    <div className={styles.patientIdPatient}>A2, C, E</div>
                    <div className={styles.a2CEBar} data-animate-on-scroll />
                    <div className={styles.div1} data-animate-on-scroll>
                      0%
                    </div>
                  </div>
                  <div className={styles.sChart}>
                    <div className={styles.s}>S</div>
                    <div className={styles.sBar} data-animate-on-scroll />
                    <div className={styles.div2} data-animate-on-scroll>
                      30%
                    </div>
                    <div className={styles.sBarFilled} data-animate-on-scroll />
                  </div>
                  <div className={styles.a2CEChart}>
                    <div className={styles.patientIdPatient}>F</div>
                    <div className={styles.fBar} data-animate-on-scroll />
                    <div className={styles.div3} data-animate-on-scroll>
                      0%
                    </div>
                  </div>
                  <div className={styles.sChart}>
                    <div className={styles.s}>A</div>
                    <div className={styles.aBar} data-animate-on-scroll />
                    <div className={styles.div4}>70%</div>
                    <div className={styles.aBarFilled} data-animate-on-scroll />
                  </div>
                </div>
                <div className={styles.dividerLine1} />
                <div className={styles.phenotype}>
                  <div className={styles.div}>PHENOTYPE</div>
                  <div className={styles.div}>AS</div>
                </div>
              </div>
              <div className={styles.phenotype}>
                <div className={styles.dividerLine} />
                <div className={styles.likelySickleCellTraitAs}>
                  <div className={styles.likelySickleCell}>
                    Likely sickle cell trait (AS)
                  </div>
                  <div className={styles.noteTransfusionCan}>
                    Note: Transfusion can impact results
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.printButton}>
              <button className={styles.printButton1}>
                <div className={styles.print}>PRINT</div>
              </button>
            </div>
            <button className={styles.continueButton}>
              <div className={styles.print}>CONTINUE</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HbVariantSummaryTestResult;
