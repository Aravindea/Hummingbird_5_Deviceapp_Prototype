import { useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReader5Device.module.css";

const AddReader5Device = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onCovid19TestContainerClick = useCallback(() => {
    // Please sync "Add Reader_Connecting... 5 device" to the project
  }, []);

  const onCancelButtonClick = useCallback(() => {
    // Please sync "Home_device 2 connected_ready" to the project
  }, []);

  return (
    <div className={styles.addReader5Device}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <button className={styles.homeIc} onClick={onHomeIcClick} />
          <div className={styles.addReader}>ADD READER</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>1</div>
                <div className={styles.offlineParent}>
                  <div className={styles.addReader}>OFFLINE</div>
                  <div className={styles.ledOffline} />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>2</div>
                <div className={styles.offlineParent}>
                  <div className={styles.addReader}>READY</div>
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
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>3</div>
                <div className={styles.offlineParent}>
                  <div className={styles.addReader}>TEST RUNNING</div>
                  <div className={styles.ledTestRunningBlue}>
                    <div className={styles.ledBlueOn} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>4</div>
                <div className={styles.offlineParent}>
                  <div className={styles.addReader}>TEST COMPLETED</div>
                  <div className={styles.frameChild}>
                    <div className={styles.ledGreenOn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.addDevice4Parent}>
            <b className={styles.addDevice4}>ADD DEVICE #4</b>
            <div className={styles.frameWrapper3}>
              <div className={styles.image23Parent}>
                <img
                  className={styles.image23Icon}
                  alt=""
                  src="/image-23@2x.png"
                />
                <div className={styles.gazelleMiniVideo}>
                  Gazelle-mini video
                </div>
              </div>
            </div>
            <div
              className={styles.covid19Test}
              onClick={onCovid19TestContainerClick}
            >
              <b className={styles.addReader1}>ADD READER</b>
            </div>
          </div>
        </div>
        <div className={styles.cancelButtonWrapper}>
          <button className={styles.cancelButton} onClick={onCancelButtonClick}>
            <div className={styles.cancel}>CANCEL</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReader5Device;
