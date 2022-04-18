import React from 'react';
import {useRouter} from 'next/router';
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return <div className={styles.container}>
    <main className={styles.main}>
    <h1>Title of the blog: {slug}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam temporibus adipisci ipsum saepe aspernatur reiciendis necessitatibus praesentium perferendis suscipit consequuntur, voluptates ut atque totam facilis. Quas iusto adipisci amet.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolore eius maxime deserunt animi numquam explicabo dignissimos quidem debitis, adipisci nam hic voluptas voluptate facilis libero in est rem. Rerum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, atque velit. Placeat aliquam expedita id est saepe aliquid magni maiores libero delectus inventore ea, omnis iste amet fuga illo magnam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolore eius maxime deserunt animi numquam explicabo dignissimos quidem debitis, adipisci nam hic voluptas voluptate facilis libero in est rem. Rerum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, atque velit. Placeat aliquam expedita id est saepe aliquid magni maiores libero delectus inventore ea, omnis iste amet fuga illo magnam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolore eius maxime deserunt animi numquam explicabo dignissimos quidem debitis, adipisci nam hic voluptas voluptate facilis libero in est rem. Rerum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, atque velit. Placeat aliquam expedita id est saepe aliquid magni maiores libero delectus inventore ea, omnis iste amet fuga illo magnam!
  </p>
  </main>
  </div>
};

export default slug