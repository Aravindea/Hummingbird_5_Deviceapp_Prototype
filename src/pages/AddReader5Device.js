import { useCallback,useState,useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReader5Device.module.css";
import { useSelector } from "react-redux";

const AddReader5Device = () => {
  const navigate = useNavigate();
  const deviceconnect = useSelector((state)=>state.AddDeviceDetails.addDevice)
  console.log(deviceconnect,"deviceconnect");


  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onCovid19TestContainerClick = useCallback(() => {
    navigate("/add-reader-connecting")
    // Please sync "Add Reader_Connecting... 5 device" to the project
  }, [navigate]);

  const onCancelButtonClick = useCallback(() => {
    // Please sync "Home_device 2 connected_ready" to the project
  }, []);
  const getConnectingDeviceNumber = () => {
    if (deviceconnect.device1&&!(deviceconnect.device2||deviceconnect.device3||deviceconnect.device4)) return 2;
    if ((deviceconnect.device1&&deviceconnect.device2)&&!(deviceconnect.device3||deviceconnect.device4)) return 3;
    if ((deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true)&&(!deviceconnect.device4)) return 4;
    if (deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true&&deviceconnect.device4 === true) return 5;
    // return 5;
  };
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
          {deviceconnect.device1===true&&
          <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>1</div>
                <div className={styles.offlineParent}>
                  <div className={styles.addReader}>OFFLINE</div>
                  <div className={styles.ledOffline} />
                </div>
              </div>
            </div>
}
{deviceconnect.device2===true&&
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
}
          </div>
          <div className={styles.frameGroup}>
          {deviceconnect.device3===true&&
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
}
{deviceconnect.device4===true&&
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
}
          </div>
          <div className={styles.addDevice4Parent}>
            <b className={styles.addDevice4}>ADD DEVICE #{getConnectingDeviceNumber()}</b>
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
