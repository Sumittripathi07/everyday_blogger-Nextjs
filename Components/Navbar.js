import React from 'react'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div>
        <nav>
        <ul className={styles.mainNav}>
          <Link href="/">Home</Link>
          <Link href="/about"> About</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar