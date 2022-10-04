import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'
import { Key, ReactNode } from 'react'

// SSGの場合(初期データがある場合)
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  return {
    props: {
      allPostsData,
    },
  };
};

// SSRの場合
// export async function getServerSideProps(context) {
//   retrun {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// };

interface PostData {
  id?: Key | null | undefined;
  title: String;
  date: ReactNode;
  thumbnail: String;
}

const Home: NextPage = ({ allPostsData }:any) => {
  return (
    <div className={styles.container}>
      <Layout home>
        <Head>
          <title>{ siteTitle }</title>
        </Head>
        <section className={ utilStyle.headingMd }>
          <p>
            私は現在フルスタックエンジニアです/元銀行員なので金融知識が豊富でFP資格を保有しています/好きな言語はJavaScriptです
          </p>
        </section>

        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}` }>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }:PostData) => (
            <article key={id}>
                <Link href={ `/posts/${id}` }>
                  <Image src={ `${thumbnail}` } alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href={ `/posts/${id}` }>
                  <a className={utilStyle.boldText}>{ title }</a>
              </Link>
              <br />
              <small className={ utilStyle.lightText }>{ date }</small>
            </article>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home
