import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddReader1Device.module.css";

const AddReader1Device = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onCovid19TestContainerClick = useCallback(() => {
    navigate("/add-reader-connecting");
  }, [navigate]);

  const onCancelButtonClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className={styles.addReader1Device}>
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
        <div className={styles.addDevice1Parent}>
          <b className={styles.addDevice1}>{`ADD DEVICE #1 `}</b>
          <div className={styles.frameWrapper}>
            <div className={styles.image23Parent}>
              <img
                className={styles.image23Icon}
                alt=""
                src="/image-23@2x.png"
              />
              <div className={styles.gazelleMiniVideo}>Gazelle-mini video</div>
            </div>
          </div>
          <div
            className={styles.covid19Test}
            onClick={onCovid19TestContainerClick}
          >
            <b className={styles.addReader1}>ADD READER</b>
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

export default AddReader1Device;
