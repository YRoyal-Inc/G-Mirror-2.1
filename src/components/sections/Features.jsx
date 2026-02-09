import { Radio, Share2, Globe, Lock } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Radio />,
      title: "Miroir de SIM",
      desc: "Synchronisez virtuellement vos numéros Moov Africa et Airtel Gabon."
    },
    {
      icon: <Share2 />,
      title: "Réception/Émission",
      desc: "Envoyez et recevez des SMS ou passez des appels directement via votre navigateur."
    },
    {
      icon: <Globe />,
      title: "Accès Universel",
      desc: "Connectez-vous depuis n'importe quel ordinateur, tablette ou autre smartphone."
    },
    {
      icon: <Lock />,
      title: "Sécurité Maximale",
      desc: "Chiffrement de bout en bout pour protéger votre vie privée et vos données SIM."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Une solution pensée pour les Gabonais</h2>
            <p className="text-lg text-gray-600 mb-10">
              G-Mirror n'est pas juste une application, c'est votre bouée de sauvetage numérique. 
              Nous avons optimisé notre plateforme pour fonctionner parfaitement avec les réseaux locaux.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-premium-gradient rounded-[3rem] rotate-3 absolute inset-0 opacity-10" />
            <img 
              src="../../g_mirror_logos_png/jeune_professionnel.png" 
              alt="Dashboard Preview" 
              className="rounded-[3rem] shadow-2xl relative z-10"
            />
          </div> 
        </div>
      </div>
    </section>
  );
};