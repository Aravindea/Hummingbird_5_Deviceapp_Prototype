import { useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDevice5ConnectedReady.module.css";

const HomeDevice5ConnectedReady = () => {
  const navigate = useNavigate();

  const onDeviceStatusContainerClick = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onDeviceStatusContainer1Click = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onDeviceStatusContainer2Click = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onDeviceStatusContainer3Click = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onDeviceStatusContainer4Click = useCallback(() => {
    navigate("/home-device-1-select-test");
  }, [navigate]);

  const onLogoutButtonClick = useCallback(() => {
    navigate("/loginuid-pwd");
  }, [navigate]);

  return (
    <div className={styles.homeDevice5ConnectedReady}>
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
        <div className={styles.deviceStatusParent}>
          <div
            className={styles.deviceStatus}
            onClick={onDeviceStatusContainerClick}
          >
            <div className={styles.readerOffline}>
              <div className={styles.readerStatusImageAndId}>
                <div className={styles.readerStatusDisplay}>
                  <img
                    className={styles.readerClosedImage}
                    alt=""
                    src="/reader-closed-image@2x.png"
                  />
                </div>
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.ledStatusBatteryPercentWif}>
                <div className={styles.batteryPercentWifiStatus}>
                  <img
                    className={styles.wifiOnIcon}
                    alt=""
                    src="/wifisvgrepocom-1-11@2x.png"
                  />
                  <div className={styles.div1}>100%</div>
                  <img
                    className={styles.batteryPercentIcon}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <div className={styles.ledStatus}>
                  <div className={styles.home}>OFFLINE</div>
                  <div className={styles.ledOffline} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.deviceStatus}
            onClick={onDeviceStatusContainer1Click}
          >
            <div className={styles.readerOffline}>
              <div className={styles.readerStatusImageAndId}>
                <div className={styles.readerStatusDisplay}>
                  <img
                    className={styles.readerClosedImage}
                    alt=""
                    src="/reader-open-image@2x.png"
                  />
                </div>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.ledStatusBatteryPercentWif}>
                <div className={styles.batteryPercentWifiStatus}>
                  <img
                    className={styles.wifiOnIcon}
                    alt=""
                    src="/wifisvgrepocom-1-1@2x.png"
                  />
                  <div className={styles.div1}>100%</div>
                  <img
                    className={styles.batteryPercentIcon}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <div className={styles.ledStatus}>
                  <div className={styles.home}>READY</div>
                  <DotLottiePlayer
                    className={styles.ledReadyGreenBlinking}
                    autoplay
                    src="/frame_2393.json"
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.deviceStatus}
            onClick={onDeviceStatusContainer2Click}
          >
            <div className={styles.readerOffline}>
              <div className={styles.readerStatusImageAndId}>
                <div className={styles.readerStatusDisplay}>
                  <img
                    className={styles.testRunningImage}
                    alt=""
                    src="/test-running-image@2x.png"
                  />
                </div>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.ledStatusBatteryPercentWif}>
                <div className={styles.batteryPercentWifiStatus}>
                  <img
                    className={styles.wifiOnIcon}
                    alt=""
                    src="/wifisvgrepocom-1-1@2x.png"
                  />
                  <div className={styles.div1}>100%</div>
                  <img
                    className={styles.batteryPercentIcon}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <div className={styles.ledStatus}>
                  <div className={styles.home}>TEST RUNNING</div>
                  <div className={styles.ledTestRunningBlue}>
                    <div className={styles.ledBlueOn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.deviceStatus}
            onClick={onDeviceStatusContainer3Click}
          >
            <div className={styles.readerOffline}>
              <div className={styles.readerStatusImageAndId}>
                <div className={styles.readerStatusDisplay}>
                  <img
                    className={styles.testErrorImage}
                    alt=""
                    src="/test-error-image@2x.png"
                  />
                </div>
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.ledStatusBatteryPercentWif}>
                <div className={styles.batteryPercentWifiStatus}>
                  <img
                    className={styles.wifiOnIcon}
                    alt=""
                    src="/wifisvgrepocom-1-1@2x.png"
                  />
                  <div className={styles.div1}>100%</div>
                  <img
                    className={styles.batteryPercentIcon}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <div className={styles.ledStatus}>
                  <div className={styles.home}>TEST ERROR</div>
                  <div className={styles.ledTestErrorYellow}>
                    <div className={styles.ledYellowOn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.deviceStatus}
            onClick={onDeviceStatusContainer4Click}
          >
            <div className={styles.readerOffline}>
              <div className={styles.readerStatusImageAndId}>
                <div className={styles.readerStatusDisplay}>
                  <img
                    className={styles.testErrorImage}
                    alt=""
                    src="/test-resulst-image@2x.png"
                  />
                </div>
                <div className={styles.div}>5</div>
              </div>
              <div className={styles.batteryPercentWifiStatus7}>
                <div className={styles.batteryPercentWifiStatus}>
                  <img
                    className={styles.wifiOnIcon}
                    alt=""
                    src="/wifisvgrepocom-1-1@2x.png"
                  />
                  <DotLottiePlayer
                    className={styles.batteryPercentWifiStatusChild}
                    speed={0.5}
                    autoplay
                    src="/charging_icon.json"
                    loop
                  />
                  <div className={styles.div9}>5%</div>
                  <img
                    className={styles.batteryPercentIcon}
                    alt=""
                    src="/battery-percenticon.svg"
                  />
                </div>
                <div className={styles.ledStatusTestCompleted}>
                  <div className={styles.home}>TEST COMPLETED</div>
                  <div className={styles.ledReadyGreenBlinking}>
                    <div className={styles.ledGreenOn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.settingsMenuButtons}>
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

export default HomeDevice5ConnectedReady;
