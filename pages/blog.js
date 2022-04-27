import React from 'react'
import styles from '../styles/home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Blog = () => {
  const [blogs, setblogs] = useState([])
  useEffect(() => {
    console.log('Blog is Running')
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json()
    }).then((parsed) => {
      console.log(parsed)
      setblogs(parsed)
    })
  }, [])


  return (
    <div className={styles.grid}>
      
      <div className={styles.blogItems}>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blogItems} key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                {/*"/blogpost/Javascript-React" */}
                <a className={styles.card}>
                  <h2>{blogItem.title}</h2>
                  <p>{blogItem.description.substr(0,100)}</p>
                </a>
              </Link>
            </div>

          )
})}
      </div>
    </div>
  )
}

export default Blog