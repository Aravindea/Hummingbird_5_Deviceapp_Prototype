import { useCallback, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReaderConnecting1Dev.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAddDevice, setAddDevice2, setAddDeviceAction } from "./store";

const AddReaderConnecting1Dev = () => {
  const navigate = useNavigate();
  const deviceconnect = useSelector((state)=>state.AddDeviceDetails.addDevice)
  console.log(deviceconnect,"deviceconnecting");
const Disaptch=useDispatch();

  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
useEffect(()=>{

},[deviceconnect])
  const onCancelButtonClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/add-reader-connected-1-device"); 
      
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);
  const getConnectingDeviceNumber = () => {
    if (deviceconnect.device1&&!(deviceconnect.device2||deviceconnect.device3||deviceconnect.device4)) return 2;
    if ((deviceconnect.device1&&deviceconnect.device2)&&!(deviceconnect.device3||deviceconnect.device4)) return 3;
    if ((deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true)&&(!deviceconnect.device4)) return 4;
    if (deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true&&deviceconnect.device4 === true) return 5;
    // return 5;
  };
  return (
    <div className={styles.addReaderConnecting5Dev}>
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
          <div className={styles.device1ConnectingParent}>
            <b className={styles.device1Connecting}>DEVICE #{getConnectingDeviceNumber()} CONNECTING</b>
            <div className={styles.frameWrapper3}>
              <div className={styles.image23Parent}>
                <img
                  className={styles.image23Icon}
                  alt=""
                  src="/image-23@2x.png"
                />
                <div className={styles.connectingGazelleMiniVideo}>
                  Connecting Gazelle-mini video
                </div>
              </div>
            </div>
            <div className={styles.covid19Test}>
              <b className={styles.connecting}>CONNECTING</b>
              <div className={styles.parent2}>
                <b className={styles.b} data-animate-on-scroll>
                  .
                </b>
                <b className={styles.b1} data-animate-on-scroll>
                  .
                </b>
                <b className={styles.b2} data-animate-on-scroll>
                  .
                </b>
              </div>
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

export default AddReaderConnecting1Dev;