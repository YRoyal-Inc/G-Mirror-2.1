import { motion } from 'framer-motion';
import { Smartphone, MessageSquare, ShieldCheck, ArrowRight, Wifi, Battery, Signal } from 'lucide-react';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px]" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-white uppercase bg-accent rounded-full">
                Solution Innovante au Gabon
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
                Votre SIM Gabonaise, <br />
                <span className="gradient-text">Partout, sans Mobile.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Smartphone HS à Franceville ? Accédez à vos puces Moov et Airtel en ligne pour vos appels et SMS critiques.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/dashboard">
                  <Button variant="primary" className="text-lg px-8 py-4">
                    Activer mon Miroir <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div className="flex-1 relative flex justify-center lg:justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            {/* Smartphone Chassis */}
            <div className="relative border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl lg:-rotate-3 transition-transform duration-500 hover:rotate-0">
              {/* Side Buttons */}
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              
              {/* Screen Container */}
              <div className="h-full w-full bg-gray-800 rounded-[2rem] overflow-hidden relative">
                {/* Screen Content (Background) */}
                <div className="bg-premium-gradient h-full w-full text-white relative">
                  
                  {/* Status Bar & Notch */}
                  <div className="absolute top-0 w-full h-8 z-20 flex justify-between items-center px-6 pt-2">
                    <span className="text-[10px] font-medium">9:41</span>
                    <div className="flex gap-1">
                      <Signal size={12} />
                      <Wifi size={12} />
                      <Battery size={12} />
                    </div>
                  </div>
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[24px] w-[80px] bg-black rounded-b-xl z-20"></div>

                  {/* Main UI Content */}
                  <div className="pt-12 px-4 space-y-4">
                    {/* Header Widget */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-2 shadow-inner">
                        <Smartphone size={24} />
                      </div>
                      <p className="text-sm font-medium opacity-90">G-Mirror Live</p>
                      <div className="flex items-center justify-center gap-1 text-[10px] text-green-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Connecté au réseau
                      </div>
                    </div>

                    {/* Notification 1 */}
                    <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transform transition-all hover:scale-105 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold shadow-sm">A</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="text-xs font-bold">Airtel Gabon</p>
                            <p className="text-[10px] opacity-60">À l'instant</p>
                          </div>
                          <p className="text-[10px] opacity-80 truncate">Nouveau message reçu</p>
                        </div>
                      </div>
                      <p className="text-xs font-medium leading-relaxed">"Votre code de vérification G-Mirror est <span className="font-bold text-white">8829</span>. Ne le partagez pas."</p>
                    </div>

                    {/* Notification 2 */}
                    <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg opacity-80 scale-95">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">M</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="text-xs font-bold">Moov Africa</p>
                            <p className="text-[10px] opacity-60">2 min</p>
                          </div>
                          <p className="text-[10px] opacity-80 truncate">Info Solde</p>
                        </div>
                      </div>
                      <p className="text-xs font-medium leading-relaxed">"Votre forfait Internet expire dans 24h. Tapez *100# pour renouveler."</p>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};