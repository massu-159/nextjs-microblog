import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";
import Image from "next/image";

const name: String = "massu Code";
export const siteTitle = "Next.js blog";

function Layout({ children, home }:any) {
  

  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={ styles.header }>
        {home ? (
          <>
            <img src="/images/anshita-nair-0rxLLHD1XxA-unsplash.jpg" alt="" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={ utilStyles.heading2Xl }>{ name }</h1>
          </>
        ) : (
          <>
            <img src="/images/anshita-nair-0rxLLHD1XxA-unsplash.jpg" alt="" className={ `${utilStyles.borderCircle} ${styles.headerImage}` } />
            <h1 className={ utilStyles.heading2Xl }>{ name }</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Link href="/">⇦ホームへ戻る</Link>
      )}
    </div>
  );
}

export default Layout;