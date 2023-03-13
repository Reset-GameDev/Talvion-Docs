import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();

  useEffect(() => {
    console.log(colorMode);
  }, [colorMode]);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.headerBefore, colorMode === "dark" ? styles.headerBefore_0_6 : styles.headerBefore_0_4)}>
      <div className={clsx('container', styles.headerAfter)}>
        <h1 className="hero__title" style={{color: '#ffffff'}}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{color: '#ffffff'}}>{siteConfig.tagline}</p>
        <div>
          <a href="https://godotengine.org/" target="_blank"><img src="https://img.shields.io/badge/Godot-%3E%3D%204.0%20Mono-blue?style=flat&logo=godotengine" /></a>
          <a style={{marginLeft: '4px', marginRight: '4px'}} href="https://dotnet.microsoft.com/en-us/" target="_blank"><img src="https://img.shields.io/badge/.NET-%3E%3D%207.0-blue?style=flat&logo=dotnet" /></a>
          <a href="https://opensource.org/" target="_blank"><img src="https://img.shields.io/badge/license-XD-green?style=flat" /></a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Talvion Docs`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
