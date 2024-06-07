import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPatientInfo1 } from "./store";
import styles from "./Covid19PatientInfo.module.css";

const Covid19PatientInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patientDetails = useSelector((state) => state.patient.patientInfo1);

  const [formData, setFormData] = useState({
    patientId: patientDetails.patientId,
    testmode: patientDetails.testmode,
    firstName: patientDetails.firstName,
    age: patientDetails.age,
    gender: patientDetails.gender,
  });

  // Update formData state when patientDetails change in Redux store
  useEffect(() => {
    setFormData({
      patientId: patientDetails.patientId,
      testmode: patientDetails.testmode,
      firstName: patientDetails.firstName,
      age: patientDetails.age,
      gender: patientDetails.gender,
    });
  }, [patientDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onNextButtonClick = useCallback(() => {
    // Dispatch formData to Redux store
    dispatch(setPatientInfo1(formData));
    // Navigate to next page
    navigate("/covid19-confirm-patient-info", { state: formData });
  }, [dispatch, formData, navigate]);

  return (
    <div className={styles.covid19PatientInfoDevice}>
      <div className={styles.covid19PatientInfoTitleBa}>
        <div className={styles.covid19PatientInfoTitleBa1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button className={styles.leftArrowPreviousPageIc} />
          </div>
          <div className={styles.covid19PatientInfo}>COVID-19 PATIENT INFO</div>
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.patientInfo}>
          <div className={styles.patientInfoForm}>
            <div className={styles.patientId}>
              <div className={styles.testMode}>PATIENT ID</div>
              <input
                className={styles.patientIdInputField}
                placeholder="ENTER USER ID"
                type="text"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
              />
            </div>
            <div className={styles.patientId}>
              <div className={styles.testMode}>TEST MODE</div>
              <select
                className={styles.patientIdInputField1}
                name="yes"
                value={formData.testmode}
                onChange={handleChange}
              >
                {/* <option value="" selected>TEST MODE</option> */}
                <option value="Yes">QUICK TEST</option>
              </select>
            </div>
            <div className={styles.patientId}>
              <div className={styles.testMode}>PATIENT FIRST NAME</div>
              <input
                className={styles.patientIdInputField}
                placeholder="PATIENT FIRST NAME"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.patientId}>
              <div className={styles.testMode}>AGE</div>
              <div className={styles.age2}>
                <input
                  className={styles.ageInputField}
                  placeholder="ENTER AGE"
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <div className={styles.years}>Years</div>
              </div>
            </div>
            <div className={styles.genderRadio}>
              <div className={styles.testMode}>GENDER</div>
              <div className={styles.gender1}>
                <div className={styles.genderRadio1}>
                  <div className={styles.male}>
                    <input
                      className={styles.maleRadio}
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <div className={styles.testMode}>MALE</div>
                  </div>
                  <div className={styles.male}>
                    <input
                      className={styles.maleRadio}
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <div className={styles.testMode}>FEMALE</div>
                  </div>
                  <div className={styles.male}>
                    <input
                      className={styles.maleRadio}
                      type="radio"
                      name="gender"
                      value="others"
                      checked={formData.gender === "others"}
                      onChange={handleChange}
                    />
                    <div className={styles.testMode}>OTHERS</div>
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

export default Covid19PatientInfo;
