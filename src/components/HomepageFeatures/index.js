import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Made with Godot',
    Svg: require('@site/static/img/logo_vertical_color_light.svg').default,
    description: (
      <>
        Game is made with Godot Engine version 4.0 (Mono). Godot is free and
        open-source game engine for 2D and 3D games (including VR). It is
        cross-platform and supports Windows, Linux, macOS, Android, iOS, HTML5,
        UWP, PlayStation 4, Xbox One, Nintendo Switch, and possibly more in the
        future.
      </>
    ),
  },
  {
    title: 'VR Required',
    Svg: require('@site/static/img/vr-game.svg').default,
    description: (
      <>
        Game is made for VR, so you need VR headset to play it. We recommend
        Oculus Quest 2. Tested only on Oculus Quest 2 with Oculus Link connection
        and HTC Vive. It should work on other VR headsets, but we can't guarantee
        it. If you have any problems with VR, please contact us. We will try to
        help you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg style={{fill: 'var(--ifm-font-color-base)'}} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
