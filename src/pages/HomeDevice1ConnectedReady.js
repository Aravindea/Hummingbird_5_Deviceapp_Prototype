import { useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDevice1ConnectedReady.module.css";

const HomeDevice1ConnectedReady = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onHelpButtonClick = useCallback(() => {
    // Please sync "Add Reader 2 device" to the project
  }, []);

  const onLogoutButtonClick = useCallback(() => {
    navigate("/loginuid-pwd");
  }, [navigate]);

  return (
    <div className={styles.homeDevice1ConnectedReady}>
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
              <div className={styles.image23Wrapper}>
                <img
                  className={styles.image23Icon}
                  alt=""
                  src="/image-23@2x.png"
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
                <div className={styles.div1}>100%</div>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
              </div>
              <div className={styles.readyParent}>
                <div className={styles.home}>READY</div>
                <DotLottiePlayer
                  className={styles.frameChild}
                  autoplay
                  src="/frame_2393.json"
                  loop
                />
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

export default HomeDevice1ConnectedReady;
