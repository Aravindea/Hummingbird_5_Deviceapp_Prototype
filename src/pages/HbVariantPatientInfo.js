import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HbVariantPatientInfo.module.css";

const HbVariantPatientInfo = () => {
  const navigate = useNavigate();

  const onLeftArrowPreviousPageDevic1Click = useCallback(() => {
    // Please sync "Home_device 2 Select Test" to the project
  }, []);

  const onNextButtonClick = useCallback(() => {
    navigate("/confirm-patient-info");
  }, [navigate]);

  return (
    <div className={styles.hbVariantPatientInfoDevice}>
      <div className={styles.hbVariantPatientInfoTitle}>
        <div className={styles.hbVariantPatientInfoTitle1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button className={styles.leftArrowPreviousPageDevic} />
            <button
              className={styles.leftArrowPreviousPageDevic1}
              onClick={onLeftArrowPreviousPageDevic1Click}
            />
          </div>
          <div className={styles.hbVariantPatient}>Hb VARIANT PATIENT INFO</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.patientInfo}>
          <div className={styles.patientInfoForm}>
            <div className={styles.patientId}>
              <div className={styles.infant}>PATIENT ID</div>
              <input
                className={styles.patientIdInputField}
                placeholder="ENTER USER ID"
                type="text"
                name="yes"
              />
            </div>
            <div className={styles.infantRadio}>
              <div className={styles.infant}>INFANT</div>
              <div className={styles.infantRadio1}>
                <div className={styles.infantRadioYesNo}>
                  <div className={styles.yes}>
                    <input className={styles.yesRadio} type="radio" />
                    <div className={styles.infant}>YES</div>
                  </div>
                  <div className={styles.yes}>
                    <input className={styles.yesRadio} type="radio" />
                    <div className={styles.infant}>NO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.patientId}>
              <div className={styles.infant}>PATIENT FIRST NAME</div>
              <input
                className={styles.patientIdInputField}
                placeholder="PATIENT FIRST NAME"
                type="text"
                name="yes"
              />
            </div>
            <div className={styles.patientId}>
              <div className={styles.infant}>AGE</div>
              <div className={styles.age2}>
                <input
                  className={styles.ageInputField}
                  placeholder="ENTER AGE"
                  type="text"
                  name="yes"
                />
                <div className={styles.years}>Years</div>
              </div>
            </div>
            <div className={styles.infantRadio}>
              <div className={styles.infant}>GENDER</div>
              <div className={styles.infantRadio1}>
                <div className={styles.genderRadio1}>
                  <div className={styles.yes}>
                    <input className={styles.yesRadio} type="radio" />
                    <div className={styles.infant}>MALE</div>
                  </div>
                  <div className={styles.yes}>
                    <input className={styles.yesRadio} type="radio" />
                    <div className={styles.infant}>FEMALE</div>
                  </div>
                  <div className={styles.yes}>
                    <input className={styles.yesRadio} type="radio" />
                    <div className={styles.infant}>OTHERS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.nextButton} onClick={onNextButtonClick}>
            <div className={styles.next}>NEXT</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HbVariantPatientInfo;
