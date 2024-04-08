import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        Testing
      </div>
      <main>
        <Header title="Welcome to Thugspace!" />
        <p className="description">
          This is me, Mr. Matt, just messing around with the basic site first. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
