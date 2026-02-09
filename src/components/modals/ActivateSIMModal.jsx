import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const ActivateSIMModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [operator, setOperator] = useState('');

  const steps = [
    { title: "Sélectionner l'Opérateur", desc: "Choisissez votre réseau local." },
    { title: "Numéro de téléphone", desc: "Saisissez votre numéro gabonais." },
    { title: "Vérification", desc: "Code envoyé par SMS." },
    { title: "Confirmation", desc: "Votre miroir est prêt." }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-darkBlue/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 pb-0 flex justify-between items-start">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Étape {step} sur 4</span>
            <h2 className="text-2xl font-display font-bold text-darkBlue mt-1">{steps[step-1].title}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => { setOperator('moov'); setStep(2); }}
                className="p-6 border-2 border-gray-100 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all text-center group"
              >
                <img src="../../g_mirror_logos_png/moov_africa_gabon_telecom_logo.jpg" alt="Moov" className="h-12 mx-auto mb-4 object-contain" />
                <span className="font-bold text-gray-700">Moov Africa</span>
              </button>
              <button 
                onClick={() => { setOperator('airtel'); setStep(2); }}
                className="p-6 border-2 border-gray-100 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all text-center"
              >
                <img src="../../g_mirror_logos_png/R.jpg" alt="Airtel" className="h-12 mx-auto mb-4 object-contain" />
                <span className="font-bold text-gray-700">Airtel Gabon</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">+241</span>
                <input 
                  type="tel" 
                  placeholder="06 00 00 00" 
                  className="w-full pl-16 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary outline-none transition-all text-lg font-bold"
                />
              </div>
              <p className="text-sm text-gray-500 flex gap-2">
                <Shield size={16} className="text-green-500 flex-shrink-0" />
                Nous allons envoyer un code de vérification à ce numéro pour confirmer que vous en êtes le propriétaire.
              </p>
              <Button onClick={() => setStep(3)} className="w-full py-4 text-lg">
                Envoyer le code <ArrowRight size={20} />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4].map(i => (
                  <input key={i} type="text" maxLength="1" className="w-14 h-16 text-center text-2xl font-bold border-2 border-gray-100 rounded-2xl focus:border-primary outline-none bg-gray-50" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Vous n'avez pas reçu le code ? <button className="text-primary font-bold">Renvoyer</button>
              </p>
              <Button onClick={() => setStep(4)} className="w-full py-4 text-lg">
                Vérifier le compte
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold">Miroir Activé !</h3>
              <p className="text-gray-500">
                Votre puce {operator === 'moov' ? 'Moov Africa' : 'Airtel'} est désormais synchronisée. Vous pouvez recevoir vos SMS et appels ici.
              </p>
              <Button onClick={onClose} className="w-full py-4 text-lg">
                Accéder au Dashboard
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};