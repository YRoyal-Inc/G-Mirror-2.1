import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, CheckCircle2, ArrowRight, Wallet, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';

export const RechargeModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulation du délai de paiement Mobile Money
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose} className="absolute inset-0 bg-darkBlue/60 backdrop-blur-sm" />
      
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="p-8 pb-0 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-display font-bold text-darkBlue">Recharger mon compte</h2>
            <p className="text-sm text-gray-500">Créditez votre portefeuille G-Mirror</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {['1000', '2000', '5000', '10000'].map((val) => (
                  <button 
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`p-4 rounded-2xl border-2 font-bold transition-all ${amount === val ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-600 hover:border-gray-200'}`}
                  >
                    {val} FCFA
                  </button>
                ))}
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="Autre montant" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary outline-none font-bold"
                />
              </div>
              <Button onClick={() => setStep(2)} disabled={!amount} className="w-full py-4">Continuer</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="font-bold text-sm text-gray-500 uppercase">Choisir l'opérateur</p>
              <button 
                onClick={() => { setOperator('airtel'); setStep(3); }}
                className="w-full p-4 border-2 border-gray-100 rounded-2xl flex items-center justify-between hover:border-red-500 hover:bg-red-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Airtel_logo.svg/2560px-Airtel_logo.svg.png" className="h-6" alt="Airtel" />
                  <span className="font-bold">Airtel Money</span>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-red-500" />
              </button>
              <button 
                onClick={() => { setOperator('moov'); setStep(3); }}
                className="w-full p-4 border-2 border-gray-100 rounded-2xl flex items-center justify-between hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_Moov_Africa.png/1200px-Logo_Moov_Africa.png" className="h-8" alt="Moov" />
                  <span className="font-bold">Moov Money</span>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500" />
              </button>
              <Button onClick={() => setStep(1)} variant="ghost" className="w-full">Retour</Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Montant à payer</p>
                <p className="text-3xl font-display font-bold text-darkBlue">{amount} FCFA</p>
              </div>
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-600">Numéro {operator === 'airtel' ? 'Airtel' : 'Moov'}</label>
                <input type="tel" placeholder="06x xx xx xx" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-primary font-bold" />
              </div>
              <Button onClick={handlePayment} className="w-full py-4" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : `Payer avec ${operator === 'airtel' ? 'Airtel' : 'Moov'}`}
              </Button>
              <p className="text-xs text-gray-400">Une notification push sera envoyée sur votre téléphone pour valider la transaction.</p>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Recharge réussie !</h3>
                <p className="text-gray-500 mt-2">Votre solde a été crédité de {amount} FCFA.</p>
              </div>
              <Button onClick={onClose} className="w-full py-4">Fermer</Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};