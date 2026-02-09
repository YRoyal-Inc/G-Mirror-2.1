import { useState } from 'react';
import { SIMCard } from '../components/dashboard/SIMCard';
import { MessageSquare, PhoneIncoming, AlertCircle, Plus } from 'lucide-react';
import { ActivateSIMModal } from '../components/modals/ActivateSIMModal';
import { Link } from 'react-router-dom';

export const DashboardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-darkBlue">Tableau de Bord</h1>
          <p className="text-gray-500">Gérez vos puces actives à Franceville.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-premium-gradient text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
        >
          <Plus size={20} /> Ajouter une SIM
        </button>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <SIMCard operator="Moov Africa" number="+241 06 55 44 33" status="online" signal={4} />
        <SIMCard operator="Airtel Gabon" number="+241 07 11 22 33" status="online" signal={3} />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <MessageSquare size={18} className="text-primary" /> Messages Récents
            </h3>
            <Link to="/dashboard/messages" className="text-sm text-primary font-semibold">Voir tout</Link>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">BG</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm">BGFIBank</span>
                  <span className="text-xs text-gray-400">10:30</span>
                </div>
                <p className="text-sm text-gray-600">Votre code OTP est 4429...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <PhoneIncoming size={18} className="text-accent" /> Appels Manqués
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold">+241 06 12 34 56</p>
                <p className="text-xs text-gray-400">Il y a 5 min (Airtel)</p>
              </div>
              <Link to="/dashboard/calls" className="p-2 bg-gray-50 rounded-lg text-primary"><PhoneIncoming size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      <ActivateSIMModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};