import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddReaderConnecting1Dev.module.css";

const AddReaderConnecting1Dev = () => {
  const navigate = useNavigate();

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

  const onCancelButtonClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/add-reader-connected-1-device"); // Change this to the path you want to navigate to
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);



  return (
    <div className={styles.addReaderConnecting1Dev}>
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
        <div className={styles.device1ConnectingParent}>
          <b className={styles.device1Connecting}>DEVICE #1 CONNECTING</b>
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
            <b className={styles.connecting}>CONNECTING</b>
            <div className={styles.parent}>
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
