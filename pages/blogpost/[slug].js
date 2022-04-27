import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
  const [blog, setblog] = useState()
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
      return a.json()
    }).then((parsed) => {
      setblog(parsed)
    })
  }, [router.isReady])



  return <div className={styles.container}>
    <main className={styles.main}>
      <h1> {blog && blog.title}</h1>
      <p>
{blog && blog.description}
        
      </p>
    </main>
  </div>
};

export default slug