import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.css";

const Splash = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    // Navigate to another page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/loginuid-pwd"); // Change this to the path you want to navigate to
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.splash}>
      <img
        className={styles.logoTmOrangeTransparent1Icon}
        alt=""
        src="/logotmorangetransparent-1@2x.png"
        data-animate-on-scroll
      />
    </div>
  );
};

export default Splash;
