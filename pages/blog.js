import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.grid}>

          <div className={styles.blogItems}>
          <Link href="/blogpost/Javascript-React">
          <a className={styles.card}>
            <h3>Javascript-React</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          <Link href="/blogpost/2">
          <a className={styles.card}>
            <h3>Helllooooo Head</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          <Link href="/blogpost/3">
          <a className={styles.card}>
            <h3>Helllooooo Head</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          <Link href="/blogpost/4">
          <a className={styles.card}>
            <h3>Helllooooo Head</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          <Link href="/blogpost/5">
          <a className={styles.card}>
            <h3>Helllooooo Head</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          <Link href="/blogpost/6">
          <a className={styles.card}>
            <h3>Helllooooo Head</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora voluptas aspernatur</p>
          </a>
          </Link>
          </div>
          </div>
  )
}

export default Blog