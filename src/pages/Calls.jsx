import { useState } from 'react';
import { PhoneIncoming, PhoneOutgoing, PhoneMissed, Search, MoreVertical, Phone, Calendar } from 'lucide-react';
import { cn } from '../utils/cn';
import { Dialer } from '../components/dashboard/Dialer';

const callLogs = [
  { id: 1, name: 'Jean-Marc (USTM)', number: '+241 06 22 33 44', type: 'missed', time: '14:20', duration: '0s', operator: 'Moov' },
  { id: 2, name: 'Maman', number: '+241 07 44 55 66', type: 'incoming', time: '10:15', duration: '5m 20s', operator: 'Airtel' },
  { id: 3, name: '+241 06 00 11 22', number: '+241 06 00 11 22', type: 'outgoing', time: 'Hier', duration: '1m 45s', operator: 'Moov' },
  { id: 4, name: 'Boulangerie Franceville', number: '+241 07 88 99 00', type: 'incoming', time: 'Hier', duration: '30s', operator: 'Airtel' },
  { id: 5, name: 'Inconnu', number: '+241 06 55 66 77', type: 'missed', time: '2 fév.', duration: '0s', operator: 'Moov' },
];

export const Calls = () => {
  const [filter, setFilter] = useState('all');
  const [isDialerOpen, setIsDialerOpen] = useState(false);

  const filteredCalls = callLogs.filter(call => {
    if (filter === 'missed') return call.type === 'missed';
    return true;
  });

  const getCallIcon = (type) => {
    switch (type) {
      case 'incoming': return <PhoneIncoming size={18} className="text-green-500" />;
      case 'outgoing': return <PhoneOutgoing size={18} className="text-blue-500" />;
      case 'missed': return <PhoneMissed size={18} className="text-accent" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-darkBlue">Historique des Appels</h1>
          <p className="text-gray-500">Gérez vos communications vocales Moov et Airtel.</p>
        </div>
        <button 
          onClick={() => setIsDialerOpen(true)}
          className="bg-premium-gradient text-white px-8 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          <Phone size={20} />
          Passer un appel
        </button>
      </header>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        {/* Filters & Search */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex bg-gray-50 p-1 rounded-xl w-fit">
            <button 
              onClick={() => setFilter('all')}
              className={cn("px-6 py-2 rounded-lg text-sm font-bold transition-all", filter === 'all' ? "bg-white text-primary shadow-sm" : "text-gray-400 hover:text-gray-600")}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('missed')}
              className={cn("px-6 py-2 rounded-lg text-sm font-bold transition-all", filter === 'missed' ? "bg-white text-accent shadow-sm" : "text-gray-400 hover:text-gray-600")}
            >
              Manqués
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un contact..." 
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/10 w-full md:w-64"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                <th className="px-8 py-4">Contact / Numéro</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Opérateur</th>
                <th className="px-8 py-4">Heure / Durée</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredCalls.map((call) => (
                <tr key={call.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs",
                        call.type === 'missed' ? "bg-red-50 text-red-500" : "bg-primary/5 text-primary"
                      )}>
                        {call.name.substring(0, 1)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-darkBlue">{call.name}</p>
                        <p className="text-xs text-gray-400">{call.number}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      {getCallIcon(call.type)}
                      <span className={cn(
                        "text-xs font-medium capitalize",
                        call.type === 'missed' ? "text-accent" : "text-gray-600"
                      )}>
                        {call.type === 'missed' ? 'Manqué' : call.type === 'incoming' ? 'Entrant' : 'Sortant'}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold",
                      call.operator === 'Moov' ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"
                    )}>
                      {call.operator}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700">{call.time}</span>
                      <span className="text-[10px] text-gray-400">{call.duration}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-200 text-gray-500 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialer isOpen={isDialerOpen} onClose={() => setIsDialerOpen(false)} />
    </div>
  );
};