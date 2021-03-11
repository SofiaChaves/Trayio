import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import style from "./AppStream.module.css";

const AppStreamIcon = ({ name, logo, slug, x, y, isLarge }) => {
  const iconRef = useRef();
  const [xPos, setXPos] = useState(x);
  const [yPos, setYPos] = useState(y);
  const speed = 0.03;
  const offScreenValue = isLarge ? -7.5 : -6;
  const resetValue = isLarge ? 135.5 : 137;

  const changeXYPos = () => {
    if (iconRef.current !== undefined) {
      setXPos((prevXPos) => {
        if (prevXPos <= offScreenValue) {
          return resetValue;
        } else {
          return prevXPos - speed;
        }
      });
      setYPos((prevYPos) => {
        const moveUp = Math.round(Math.random()) === 0;
        if (moveUp) {
          return prevYPos + speed / 10;
        } else {
          return prevYPos - speed / 10;
        }
      });
    }
    iconRef.current = requestAnimationFrame(changeXYPos);
  };

  useEffect(() => {
    iconRef.current = requestAnimationFrame(changeXYPos);
    return () => cancelAnimationFrame(iconRef.current);
  }, []);

  return (
    <div
      className={classnames(style.appIcon, isLarge ? style.large : null)}
      style={{ transform: `translate3d(${xPos}em, ${yPos}em, 0)` }}
    >
      <a href={`/connectors/${slug}`}>
        <div className={style.appIconNameContainer}>
          <p className={style.appIconName}>{name}</p>
        </div>
        <div className={style.appIconImageContainer}>
          <img src={logo} className={style.appIconImage} loading="lazy" />
        </div>
      </a>
    </div>
  );
};

const AppStream = ({ connectors, className }) => {
  const bubbles = [
    { x: 11, y: 6 },
    { x: 40, y: 6 },
    { x: 75, y: 6 },
    { x: 96, y: 6 },
    { x: 120, y: 6 },
    { x: 2, y: 0 },
    { x: 20, y: 0 },
    { x: 48, y: 0 },
    { x: 70, y: 0 },
    { x: 105, y: 0 },
    { x: 30, y: 3 },
    { x: 84, y: 3 },
    { x: 60, y: 3 },
    { x: 134, y: 3 },
    { x: 23, y: 9 },
    { x: 51, y: 9 },
    { x: 109, y: 9 },
    { x: 4, y: 13 },
    { x: 31, y: 13 },
    { x: 86, y: 13 },
    { x: 128, y: 13 },
  ];
  const data = connectors;
  const connectorList = data.map((connector, index) => ({
    ...connector,
    ...bubbles[index],
  }));

  return (
    <section
      type="TextCtaAppStream"
      className={classnames(style.container, className)}
    >
      <div className={style.content}>
        <h2 className={style.title}>Popular Connectors</h2>
      </div>
      <div className={style.stream}>
        {connectorList.map((icon) => (
          <AppStreamIcon
            key={`stream-${icon.name}`}
            isLarge={icon.y === 6}
            {...icon}
          />
        ))}
      </div>
    </section>
  );
};

export default AppStream;
