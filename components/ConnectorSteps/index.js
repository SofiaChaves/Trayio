import React, { useEffect, useRef, useState } from "react";

import style from "./ConnectorSteps.module.css";

import Step from "./Step";
import ProgressBar from "./ProgressBar";


const useAnimationFrame = callback => {
  const requestRef = useRef();  
  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}

const ConnectorSteps = ({ connectors }) => {
  const [aProgress, setAProgress] = useState(0);  
  const [bProgress, setBProgress] = useState(0);
  const timer = useRef(0);
  
  useAnimationFrame (() => {   
      timer.current = timer.current + 0.8;      
      if(timer.current > 300) timer.current = 0;
      setAProgress(timer.current < 100 ? timer.current : 100);
      setBProgress(timer.current >=100 ? (timer.current > 200 ? 100 : timer.current - 100) : 0);
  })

  return (
    <div className={style.ConnectorSteps}>
      <div className={style.container}>
        <div className={style.content}>
          <Step logo='/manualTriggerIcon.svg' name='Manual Trigger' trigger={bProgress == 0}/>
          <ProgressBar percentage={aProgress}/>
          <Step logo={connectors[0].logo} name={connectors[0].name} trigger={aProgress>=100}/>
          <ProgressBar percentage={bProgress}/>
          {connectors[1] ? 
            <Step logo={connectors[1].logo} name={connectors[1].name} trigger={bProgress>=100}/> :
            <Step name='Any API or service'/>}
        </div>
      </div>
    </div>
  );
};

export default ConnectorSteps;
