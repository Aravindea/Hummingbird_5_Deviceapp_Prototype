import { useCallback,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddReaderConnected1Device.module.css";

const AddReaderConnected1Device = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home-device-1-connected-ready"); // Change this to the path you want to navigate to
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <div className={styles.addReaderConnected1Device}>
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
        <div className={styles.device1ConnectedParent}>
          <b className={styles.device1Connected}>DEVICE #1 CONNECTED</b>
          <div className={styles.frameWrapper}>
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
