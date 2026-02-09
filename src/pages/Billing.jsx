import { useState } from 'react';
import { CreditCard, Zap, ShieldCheck, Clock, Plus, Wallet } from 'lucide-react';
import { RechargeModal } from '../components/modals/RechargeModal';
import { Button } from '../components/common/Button';

export const Billing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    { name: 'Standard Mirror', price: '2500', period: 'mois', features: ['1 SIM active', 'SMS illimités', 'Historique 30 jours'], current: true },
    { name: 'Pro Mirror', price: '5000', period: 'mois', features: ['3 SIM actives', 'Appels & SMS', 'Historique illimité', 'Support 24/7'], current: false },
  ];

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-display font-bold text-darkBlue">Abonnement & Crédit</h1>
          <p className="text-gray-500">Gérez vos paiements et vos miroirs actifs.</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Solde Card */}
        <div className="lg:col-span-1">
          <div className="bg-premium-gradient rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
            <Wallet className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            <p className="text-white/80 font-medium mb-1">Solde disponible</p>
            <h2 className="text-4xl font-display font-bold mb-8">4,500 FCFA</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-white text-primary rounded-2xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Recharger mon compte
            </button>
          </div>

          <div className="mt-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" /> Dernières transactions
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Recharge Airtel Money', date: 'Hier', price: '+5000', type: 'in' },
                { label: 'Abonnement Standard', date: '01 Fév', price: '-2500', type: 'out' },
              ].map((t, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-bold text-darkBlue">{t.label}</p>
                    <p className="text-gray-400 text-xs">{t.date}</p>
                  </div>
                  <span className={`font-bold ${t.type === 'in' ? 'text-green-500' : 'text-gray-600'}`}>
                    {t.price} FCFA
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-white rounded-[2.5rem] p-8 border-2 transition-all ${plan.current ? 'border-primary shadow-lg' : 'border-gray-100 shadow-sm'}`}>
              {plan.current && <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest mb-4 inline-block">Plan Actuel</span>}
              <h3 className="text-xl font-bold text-darkBlue mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-display font-bold">{plan.price}</span>
                <span className="text-gray-400 text-sm">FCFA / {plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <ShieldCheck size={18} className="text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.current ? 'secondary' : 'primary'} className="w-full py-4">
                {plan.current ? 'Gérer mon plan' : 'Passer à ce plan'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <RechargeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};