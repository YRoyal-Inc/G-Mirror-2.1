import { PhoneOff, AlertTriangle, Clock } from 'lucide-react';

export const Problem = () => {
  const painPoints = [
    {
      icon: <PhoneOff className="text-accent" size={32} />,
      title: "Smartphone HS",
      desc: "Écran brisé ou batterie morte au moment où vous en avez le plus besoin."
    },
    {
      icon: <AlertTriangle className="text-accent" size={32} />,
      title: "Communications Urgentes",
      desc: "Des messages bancaires ou professionnels bloqués sur une puce inaccessible."
    },
    {
      icon: <Clock className="text-accent" size={32} />,
      title: "Délai de Réparation",
      desc: "Ne restez pas coupé du monde pendant que votre téléphone est chez le réparateur."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Le problème que nous résolvons</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          À Franceville comme partout au Gabon, la perte d'accès à son téléphone mobile peut paralyser vos activités.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="mb-6 inline-block p-4 bg-accent/10 rounded-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};