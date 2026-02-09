import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Delete, Smartphone } from 'lucide-react';
import { Button } from '../common/Button';

export const Dialer = ({ isOpen, onClose }) => {
  const [number, setNumber] = useState('');
  const [selectedSim, setSelectedSim] = useState('moov');

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const addDigit = (digit) => {
    if (number.length < 15) setNumber(prev => prev + digit);
  };

  const removeDigit = () => {
    setNumber(prev => prev.slice(0, -1));
  };

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
        className="bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="p-6 text-center">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedSim('moov')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${selectedSim === 'moov' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}
              >
                MOOV
              </button>
              <button 
                onClick={() => setSelectedSim('airtel')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${selectedSim === 'airtel' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400'}`}
              >
                AIRTEL
              </button>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={20} />
            </button>
          </div>

          <div className="mb-8 h-12 flex items-center justify-center">
            <span className="text-3xl font-display font-bold text-darkBlue tracking-wider">
              {number || 'Saisir un numéro'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {keys.map(key => (
              <button
                key={key}
                onClick={() => addDigit(key)}
                className="w-16 h-16 rounded-full bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center transition-colors group"
              >
                <span className="text-2xl font-bold text-darkBlue group-active:scale-90 transition-transform">{key}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between px-8">
            <div className="w-12" /> {/* Spacer */}
            <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-200 hover:scale-105 transition-all active:scale-95">
              <Phone size={28} fill="currentColor" />
            </button>
            <button 
              onClick={removeDigit}
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-darkBlue transition-colors"
            >
              <Delete size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};