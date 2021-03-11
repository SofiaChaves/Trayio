import React from "react";

import { useRouter } from "next/router";

import Head from "next/head";
import ConnectorHero from "../../components/ConnectorHero";
import PageCta from "../../components/PageCta";
import AppStream from "../../components/AppStream";
import data from "../api/data.json";
import ConnectorSteps from "../../components/ConnectorSteps";

const DEFAULT_CONNECTORS = data.connectors;

const getConnectors = (slug) => {
  const splittedSlug = slugSplitter(slug);
  const connectors = [];
  splittedSlug.forEach(x => {
    const newConnector = findConnector(x);
    connectors.push(newConnector);
  });
  return connectors;
}

const slugSplitter = (slug) => {
  if (slug[0].includes("-")) {
    slug = slug[0].split("-");
  }
  return slug;
}

const findConnector = (slug) => {
  const filteredConnectors = DEFAULT_CONNECTORS.filter((x) => x.slug === slug);
  return filteredConnectors[0];
};

export default function Connector() {
  const router = useRouter();
  const slug = router.query.slug || [];

  if (!slug[0]) {
    return <div>loading...</div>;
  }
  
  const connectors = getConnectors(slug);  

  const connectorsNames = connectors[1] ? 
      `${connectors[0].name} and ${connectors[1].name}` 
      : connectors[0].name;

  return (
    <>
      <Head>
        <title>{connectorsNames} Integrations + Automations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectorHero connectors={connectors}/>

      <ConnectorSteps connectors={connectors} />

      <AppStream connectors={DEFAULT_CONNECTORS} />
      <PageCta />
    </>
  );
}
