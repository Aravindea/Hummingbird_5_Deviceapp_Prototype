import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ConfirmPatientInfo.module.css";

const ConfirmPatientInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state;

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/hb-variant-patient-info");
  }, [navigate]);

  const onEditButtonClick = useCallback(() => {
    navigate("/hb-variant-patient-info");
  }, [navigate]);

  const onContinueButtonClick = useCallback(() => {
    navigate("/mix-blood-and-marker-fluid-a");
  }, [navigate]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.confirmPatientInfoDevice1}>
      <div className={styles.confirmPatientInfoTitleBar}>
        <div className={styles.titleBarConfirmPatientInfo}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.confirmPatientInfo}>CONFIRM PATIENT INFO</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.confirmPatientInfo1}>
          <div className={styles.confirmPatientInfoCard}>
            <div className={styles.confirmPatientInfoCardDeta}>
              <div className={styles.titles}>
                <div className={styles.patientId}>PATIENT ID</div>
                <div className={styles.patientId}>INFANT</div>
                <div className={styles.patientFirstName}>
                  PATIENT FIRST NAME
                </div>
                <div className={styles.patientId}>AGE</div>
                <div className={styles.patientId}>GENDER</div>
              </div>
              <div className={styles.colons}>
                <div className={styles.div}>:</div>
                <div className={styles.div1}>:</div>
                <div className={styles.div2}>:</div>
                <div className={styles.div3}>:</div>
                <div className={styles.div4}>:</div>
              </div>
              <div className={styles.details}>
                <div className={styles.patientId}>{formData.patientId}</div>
                <div className={styles.patientId}>{formData.isInfant}</div>
                <div className={styles.patientId}>{formData.firstName}</div>
                <div className={styles.patientId}>{formData.age}</div>
                <div className={styles.patientId}>{formData.gender}</div>
              </div>
            </div>
          </div>
          <div className={styles.editContinueButton}>
            <button className={styles.editButton} onClick={onEditButtonClick}>
              <div className={styles.edit}>EDIT</div>
            </button>
            <button
              className={styles.editButton}
              onClick={onContinueButtonClick}
            >
              <div className={styles.edit}>CONTINUE</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPatientInfo;
