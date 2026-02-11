import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { Problem } from '../components/sections/Problem';
import { Features } from '../components/sections/Features';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Problem />
      <Features />
      
      <section id="operators" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Opérateurs Supportés</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <img src="/moov_africa_gabon_telecom_logo.jpg" alt="Moov" className="h-24 transition-all" />
            <img src="/R.jpg" alt="Airtel" className="h-20 transition-all" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-premium-gradient rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ne restez plus jamais coupé du monde.</h2>
            <Link to="/dashboard">
              <Button variant="accent" className="px-10 py-4 text-lg mx-auto">
                Accéder à mon Espace
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
