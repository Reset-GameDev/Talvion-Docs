import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
		<div>
		<img src="https://gitlab.mganczarczyk.pl/talvion/talvion/badges/master/pipeline.svg" />
		<a href="https://godotengine.org/" target="_blank"><img src="https://img.shields.io/badge/Godot-%3E%3D%204.0%20Mono-blue?style=flat&logo=godotengine" /></a>
		<a href="https://dotnet.microsoft.com/en-us/" target="_blank"><img src="https://img.shields.io/badge/.NET-%3E%3D%206.0-blue?style=flat&logo=dotnet" /></a>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
