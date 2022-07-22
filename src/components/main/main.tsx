import styles from "./styles.module.scss";
import React, { useEffect, useRef, useState } from "react";

type mainStyle = {
  height: number | string;
  padding?: number | string;
};

function Main() {
  // 1em ≡ 16px;
  const em = 32; // 2em
  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  const [mainStyle, setMainStyle] = useState<mainStyle>({
    height: 0,
  });
  useEffect(() => {
    const listenLookAndLearn = () => {
      setMainStyle({
        height: `${ref.current.clientHeight + em * 2}px`,
        padding: "2em 1em",
      });
    };
    // onMount
    listenLookAndLearn();

    window.addEventListener("resize", listenLookAndLearn);
    return () => {
      window.removeEventListener("resize", listenLookAndLearn);
    };
  }, []);
  return (
    <>

      <div className={styles.line}></div>
      <div className={styles.main} style={mainStyle}>
        <div ref={ref} className={styles.carryText}>
          <h1>RONNEL DILAO BABAILAN | DEV</h1>
          <small>
            <i>
              {`"What quotes should I put here? I can't even think of one please provide."`}
            </i>
          </small>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <div>Intro</div>
        <div>Works</div>
        <div>Skills</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <div>Contact</div>
      </div>
    </>
  );
}

export default Main;
