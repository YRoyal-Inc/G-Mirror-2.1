import { useState } from 'react';
import { Search, Send, Phone, User, CheckCheck, MoreHorizontal } from 'lucide-react';
import { cn } from '../utils/cn';

const conversations = [
  { id: 1, name: 'BGFIBank', lastMsg: 'Votre code OTP est 4429', time: '10:30', unread: 1, operator: 'Airtel', avatar: 'BG' },
  { id: 2, name: 'Maman', lastMsg: 'Tu as pu réparer ton téléphone ?', time: 'Hier', unread: 0, operator: 'Airtel', avatar: 'M' },
];

export const Messages = () => {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
      <div className="w-full max-w-[320px] border-r border-gray-100 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-sm outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <button key={chat.id} onClick={() => setActiveChat(chat)} className={cn("w-full p-4 flex gap-3 transition-colors", activeChat.id === chat.id ? "bg-primary/5 border-r-4 border-primary" : "hover:bg-gray-50")}>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs">{chat.avatar}</div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center"><h4 className="font-bold text-sm">{chat.name}</h4><span className="text-[10px] text-gray-400">{chat.time}</span></div>
                <p className="text-xs text-gray-500 truncate">{chat.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gray-50/20">
        <div className="p-6 bg-white border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{activeChat.avatar}</div>
            <div><h3 className="font-bold">{activeChat.name}</h3><p className="text-xs text-gray-500">Via {activeChat.operator}</p></div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full"><Phone size={18} /></button>
          </div>
        </div>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm">
              {activeChat.lastMsg}
              <p className="text-[10px] text-gray-400 mt-1">{activeChat.time}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex gap-4">
            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Répondre..." className="flex-1 px-4 py-3 bg-gray-50 rounded-xl outline-none" />
            <button className="p-3 bg-primary text-white rounded-xl"><Send size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};