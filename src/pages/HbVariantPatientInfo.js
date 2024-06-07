// HbVariantPatientInfo.jsx
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPatientInfo } from "./store";
import styles from "./HbVariantPatientInfo.module.css";

const HbVariantPatientInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patientDetails = useSelector((state) => state.patient.patientInfo);

  // Initialize formData state with patientDetails from Redux store
  const [formData, setFormData] = useState({
    patientId: patientDetails.patientId,
    isInfant: patientDetails.isInfant,
    firstName: patientDetails.firstName,
    age: patientDetails.age,
    gender: patientDetails.gender,
  });

  // Update formData state when patientDetails change in Redux store
  useEffect(() => {
    setFormData({
      patientId: patientDetails.patientId,
      isInfant: patientDetails.isInfant,
      firstName: patientDetails.firstName,
      age: patientDetails.age,
      gender: patientDetails.gender,
    });
  }, [patientDetails]);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle click on "Next" button
  const onNextButtonClick = useCallback(() => {
    // Dispatch formData to Redux store
    dispatch(setPatientInfo(formData));
    // Navigate to next page
    navigate("/confirm-patient-info" , { state: formData });
  }, [dispatch, formData, navigate]);



  return (
    <div className={styles.hbVariantPatientInfoDevice}>
      <div className={styles.hbVariantPatientInfoTitle}>
        <div className={styles.hbVariantPatientInfoTitle1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} />
            <button className={styles.leftArrowPreviousPageDevic} />
            <button
              className={styles.leftArrowPreviousPageDevic1}
              onClick={() => navigate("/previous-page")}
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
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
              />
            </div>
            <div className={styles.infantRadio}>
              <div className={styles.infant}>INFANT</div>
              <div className={styles.infantRadio1}>
                <div className={styles.infantRadioYesNo}>
                  <div className={styles.yes}>
                    <input
                      className={styles.yesRadio}
                      type="radio"
                      name="isInfant"
                      value="yes"
                      checked={formData.isInfant === 'yes'}
                      onChange={handleChange}
                    />
                    <div className={styles.infant}>YES</div>
                  </div>
                  <div className={styles.yes}>
                    <input
                      className={styles.yesRadio}
                      type="radio"
                      name="isInfant"
                      value="no"
                      checked={formData.isInfant === 'no'}
                      onChange={handleChange}
                    />
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.patientId}>
              <div className={styles.infant}>AGE</div>
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
            <div className={styles.infantRadio}>
              <div className={styles.infant}>GENDER</div>
              <div className={styles.infantRadio1}>
                <div className={styles.genderRadio1}>
                  <div className={styles.yes}>
                    <input
                      className={styles.yesRadio}
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    <div className={styles.infant}>MALE</div>
                  </div>
                  <div className={styles.yes}>
                    <input
                      className={styles.yesRadio}
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                    />
                    <div className={styles.infant}>FEMALE</div>
                  </div>
                  <div className={styles.yes}>
                    <input
                      className={styles.yesRadio}
                      type="radio"
                      name="gender"
                      value="others"
                      checked={formData.gender === 'others'}
                      onChange={handleChange}
                    />
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
