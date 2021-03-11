import React from "react";

import style from "./ConnectorHero.module.css";

const ConnectorHero = ({ connectors }) => {

  const connectorsNames = connectors[1] ? 
      `${connectors[0].name} and ${connectors[1].name}` 
      : connectors[0].name;

  return (
    <div className={style.ConnectorHero}>
      <div className={style.container}>        
        <a href="/" className={style.logoContainer}>
          <img src="/logo.svg" className={style.logo} />
        </a>
        <div className={style.content}>

          <div>
            <h1 className={style.title}>
              {connectorsNames} integration + automation
            </h1>
            <p className={style.subtitle}>
              {connectorsNames} integrations couldn’t be easier with the Tray
              Platform’s robust {connectorsNames} connector, which connects any
              services without the need for separate integration tools.
            </p>
            <button>Try our {connectorsNames} connector</button>
          </div>

          <div className={style.connectorIconContainer}>
            <img src={connectors[0].logo} className={style.connectorIcon} />
            {connectors[1] &&
              <img src={connectors[1].logo} className={style.connectorIcon} />}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConnectorHero;
