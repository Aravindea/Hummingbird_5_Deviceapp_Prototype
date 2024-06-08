import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDevice1TestRunning.module.css";

const HomeDevice1TestRunning = () => {
  const navigate = useNavigate();

  // const onFrameContainerClick = useCallback(() => {
  //   navigate("/home-device-1-select-test");
  // }, [navigate]);

  const onHelpButtonClick = useCallback(() => {
    navigate("/add-reader");
  }, [navigate]);

  const onLogoutButtonClick = useCallback(() => {
    navigate("/loginuid-pwd");
  }, [navigate]);

  return (
    <div className={styles.homeDevice1TestRunning}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <div className={styles.home}>HOME</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.desktop1}>
        <div className={styles.desktop1Inner} onClick={onFrameContainerClick}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.image24Wrapper}>
                <img
                  className={styles.image24Icon}
                  alt=""
                  src="/image-24@2x.png"
                />
              </div>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.wifiSvgrepoCom11Parent}>
                <img
                  className={styles.wifiSvgrepoCom11}
                  alt=""
                  src="/wifisvgrepocom-1-1@2x.png"
                />
                <div className={styles.div1}>96%</div>
                <img className={styles.frameIcon} alt="" src="/frame1.svg" />
              </div>
              <div className={styles.testRunningParent}>
                <div className={styles.home}>TEST RUNNING</div>
                <div className={styles.groupWrapper}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.settingsMenuButtons}>
          <button className={styles.helpButton} onClick={onHelpButtonClick}>
            <b className={styles.addReader}>ADD READER</b>
          </button>
          <div className={styles.reviewLogout}>
            <div className={styles.reviewButton}>
              <div className={styles.review}>REVIEW</div>
            </div>
            <button
              className={styles.logoutButton}
              onClick={onLogoutButtonClick}
            >
              <div className={styles.logout}>LOGOUT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDevice1TestRunning;
