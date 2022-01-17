import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unicode test case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Happy</h2>
            <p className={styles.happy}>&#x263A;</p>
          </div>

          <div className={styles.card}>
            <h2>Sad</h2>
            <p className={styles.sad}>&#x2639;</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
