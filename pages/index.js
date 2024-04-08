import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        Thugspace
      </div>
      <main>
        <Header title="Welcome to Thugspace!" />
        <p className="description">
          This is me, Mr. Matt, just messing around with the basic site first. 
        </p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/mw75ZGgdQUk?si=czjLMFHItzpzrIfT" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
