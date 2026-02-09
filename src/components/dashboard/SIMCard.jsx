import { Signal, Battery, MoreVertical } from 'lucide-react';

export const SIMCard = ({ operator, number, status, signal }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 group hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl ${operator.includes('Airtel') ? 'bg-red-600' : 'bg-blue-600'}`}>
          {operator[0]}
        </div>
        <div>
          <h3 className="font-bold">{operator}</h3>
          <p className="text-xs text-gray-400">Gabon Telecom</p>
        </div>
      </div>
      <MoreVertical size={20} className="text-gray-300" />
    </div>
    <div className="space-y-4">
      <p className="text-lg font-display font-bold text-darkBlue">{number}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
          <span className="capitalize">{status}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Signal size={16} className={signal > 2 ? 'text-green-500' : ''} />
          <Battery size={16} />
        </div>
      </div>
    </div>
  </div>
);