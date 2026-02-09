import { useState } from 'react';
import { User, Shield, Bell, Smartphone, Lock, LogOut, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { cn } from '../utils/cn';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [twoFactor, setTwoFactor] = useState(true);

  const tabs = [
    { id: 'profile', label: 'Profil', icon: <User size={18} /> },
    { id: 'security', label: 'Sécurité', icon: <Shield size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-display font-bold text-darkBlue">Paramètres</h1>
        <p className="text-gray-500">Gérez votre compte et la sécurité de vos miroirs.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation des paramètres */}
        <div className="lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-white text-primary shadow-sm border border-gray-100" 
                  : "text-gray-400 hover:text-gray-600"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 lg:p-12">
          {activeTab === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-gray-50">
                <div className="w-24 h-24 rounded-full bg-premium-gradient p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <User size={40} className="text-primary" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold">Jean-Luc Mba</h3>
                  <p className="text-gray-500">Utilisateur depuis Franceville, Gabon</p>
                  <button className="text-primary text-sm font-bold mt-2 hover:underline">Modifier la photo</button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Nom complet</label>
                  <input type="text" defaultValue="Jean-Luc Mba" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Adresse Email</label>
                  <input type="email" defaultValue="jeanluc.mba@email.ga" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
              </div>
              <Button className="px-8">Enregistrer les modifications</Button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex gap-4 items-start">
                <AlertCircle className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Sécurité de vos SIMs</h4>
                  <p className="text-sm text-primary/70">
                    Vos miroirs Moov et Airtel sont protégés par un chiffrement AES-256 bits. Personne, pas même G-Mirror, ne peut lire vos SMS sans votre clé.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">Authentification à deux facteurs (2FA)</h4>
                      <p className="text-sm text-gray-500">Sécurisez votre compte avec un code envoyé par SMS.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={cn(
                      "w-14 h-8 rounded-full transition-all relative",
                      twoFactor ? "bg-green-500" : "bg-gray-300"
                    )}
                  >
                    <div className={cn("absolute top-1 w-6 h-6 bg-white rounded-full transition-all", twoFactor ? "right-1" : "left-1")} />
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold">Sessions Actives</h4>
                  <div className="divide-y divide-gray-50 border border-gray-50 rounded-3xl overflow-hidden">
                    <div className="p-4 flex justify-between items-center hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Smartphone size={18} className="text-gray-400" />
                        <div>
                          <p className="text-sm font-bold">MacBook Pro - Franceville</p>
                          <p className="text-[10px] text-green-500 font-bold uppercase">Session Actuelle</p>
                        </div>
                      </div>
                      <button className="text-xs text-gray-400 font-bold hover:text-red-500">Déconnecter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <h3 className="text-xl font-bold mb-6">Préférences de notification</h3>
              {[
                { label: 'Alertes SMS reçus', desc: 'Notification push lorsqu\'un nouveau SMS arrive.' },
                { label: 'Alertes Appels manqués', desc: 'Recevoir une alerte pour chaque appel non répondu.' },
                { label: 'Notifications de solde', desc: 'Alerte lorsque votre crédit G-Mirror est faible.' },
                { label: 'Sécurité', desc: 'Alertes lors d\'une nouvelle connexion à votre compte.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                  <div>
                    <h4 className="font-bold text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <button className="w-12 h-6 bg-primary/10 rounded-full relative">
                    <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-full" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};