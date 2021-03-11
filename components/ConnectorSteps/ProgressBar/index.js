import React from "react";

import style from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={style.progressWrapper}>
        <div className={style.progress} style={{width: percentage + '%'}}/>
        <div className={style.progressBg} />
    </div>
  );
};

export default ProgressBar;
