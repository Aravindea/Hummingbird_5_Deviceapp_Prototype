import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginUIDPWD.module.css";

const LoginUIDPWD = () => {
  const navigate = useNavigate();

  const onNextButtonClick = useCallback(() => {
    // navigate("/frame-1");
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.loginUidPwd}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <div className={styles.login}>LOGIN</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.userCredentialInputFields}>
          <div className={styles.userIdPassworkd}>
            <div className={styles.userId}>
              <div className={styles.userId1}>USER ID</div>
              <input
                className={styles.userId2}
                placeholder="Enter User ID"
                type="text"
                name="yes"
              />
            </div>
            <div className={styles.password}>
              <div className={styles.userId1}>PASSWORD</div>
              <input
                className={styles.password2}
                placeholder="Enter User Password"
                type="password"
              />
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

export default LoginUIDPWD;
