import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Link from 'next/link'
// import retroPlant from '../assets/retroImage.jpeg'
import door from '../assets/door_6.png'
import { useEffect, useState } from 'react';

export default function Index() {

  return (
    <div className={styles.container}>
      <Head>
        <title>SG Wedding!</title>
      </Head>

      {/* <Image src={retroPlant} className={styles.retro} /> */}
      <div className={styles.topprogress}><Link className={styles.link} href='/home'><Image src={door} className={styles.door} /></Link><div className={styles.filler}></div></div>
      <div>
        <svg width='80vw' height='10vh'>
          {/* TODO: Add dots */}
          <svg height='50%'>
              <rect width='100%' height='100%' fill='black'></rect>
              <rect y='10%' x='0.5%' width='99%' height='80%' fill='white'></rect>
              <rect y='20%' x='1%' width='95%' height='60%' fill='black'></rect>
          </svg>
          <svg y='50%' height='50%'>
            <text y='97.5%' x='91%'>99%</text>
          </svg>
          </svg>
      </div>

    </div>
  );
}
