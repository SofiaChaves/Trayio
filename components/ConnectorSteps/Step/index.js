import React from "react";

import style from "./Step.module.css";

const Step = ({ logo, name, trigger }) => {
  return (
    <div className={style.box}>
        <div className={style.logo}>
            {logo ? <img src={logo} className={trigger ? style.animateImg : ''}/> : <h3>{name}</h3>}
        </div>
        {logo ? <h3 className={style.name}>{name}</h3> : null}
    </div>
  );
};

export default Step;
