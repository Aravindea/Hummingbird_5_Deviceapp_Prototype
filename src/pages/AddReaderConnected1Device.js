import { useCallback,useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReaderConnected1Device.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAddDeviceAction } from "./store";

const AddReaderConnected1Device = () => {
  const navigate = useNavigate();
  const deviceconnect = useSelector((state)=>state.AddDeviceDetails.addDevice)
  console.log(deviceconnect,"deviceconnect");
  const Disaptch=useDispatch();
  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home-device-5-connected-ready");
      console.log(deviceconnect,"deviceconnectdeviceconnect");
      if(deviceconnect.device1===true){
        Disaptch(setAddDeviceAction.setAddDevice2(true)) 
      }
       if(deviceconnect.device2===true){
        Disaptch(setAddDeviceAction.setAddDevice3(true)) 
      } 
      if(deviceconnect.device3===true){
        Disaptch(setAddDeviceAction.setAddDevice4(true)) 
      }  
      if(deviceconnect.device4===true){
        Disaptch(setAddDeviceAction.setAddDevice5(true)) 
      }     
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);
  const getConnectingDeviceNumber = () => {
    if (deviceconnect.device1&&!(deviceconnect.device2||deviceconnect.device3||deviceconnect.device4)) return 2;
    if ((deviceconnect.device1&&deviceconnect.device2)&&!(deviceconnect.device3||deviceconnect.device4)) return 3;
    if ((deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true)&&(!deviceconnect.device4)) return 4;
    if (deviceconnect.device1&&deviceconnect.device2&&deviceconnect.device3 === true&&deviceconnect.device4 === true) return 5;
    // return 5;
  };
  return (
    <div className={styles.addReaderConnected5Device}>
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
{deviceconnect.device1===true&&deviceconnect.device2===true&&
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
        
        <div className={styles.frameParent}>
        {deviceconnect.device2===true&&deviceconnect.device3===true&&
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
{deviceconnect.device3===true&&deviceconnect.device4===true&&
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
        <div className={styles.device1ConnectedParent}>
          <b className={styles.device1Connected}>DEVICE #{getConnectingDeviceNumber()} CONNECTED</b>
          <div className={styles.frameWrapper2}>
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
            <b className={styles.connected}>CONNECTED</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReaderConnected1Device;