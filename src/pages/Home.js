import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onHelpButtonClick = useCallback(() => {
    navigate("/add-reader");
  }, [navigate]);

  const onLogoutButtonClick = useCallback(() => {
    navigate("/loginuid-pwd");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <div className={styles.home1}>HOME</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.desktop1}>
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

export default Home;
