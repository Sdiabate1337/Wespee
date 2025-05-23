import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SponsorLogos from '../components/Partners';
import Mission from '../components/Mission';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SponsorLogos />
        <Mission />
        <Footer />
      </main>
    </>
  );
}                                                       