import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/About.css'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='about'>
        <section className='excellence'>
          <div className='left'>
            <p className='heading'>
              GTM<i>Canvas</i>: <br /> Founded On Excellence.
            </p>
            <p>
              Meraj Faheem, the visionary behind the GTM certification program,
              brings over a decade of expertise in helping businesses thrive in
              competitive markets.
            </p>
            <p>
              A seasoned serial entrepreneur, Meraj has built multiple
              first-to-market, 0-7 figure businesses.He has worked with
              government agencies, corporates, Big 4, and has helped over 300+
              startups build their products and take them to market.
            </p>
          </div>
          <div className='right'>
            <p className='first'>1 IN 6</p>
            <p className='second'>
              1 in 6 business schools/ organisations use GTM Canvas as their
              primary GTM strategy tool
            </p>
          </div>
        </section>

        <section className='section2'>
          <img src='/aboutSection2.png' alt='aboutSection2' />
        </section>
      </div>
      <Footer />
    </>
  )
}
