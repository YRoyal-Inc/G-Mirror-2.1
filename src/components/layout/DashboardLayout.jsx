import { Sidebar } from '../dashboard/Sidebar';
import { Bell, Search, User, Menu } from 'lucide-react';

export const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex">
    <Sidebar />
    <div className="flex-1 flex flex-col min-w-0">
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-sm outline-none" />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
          </button>
          <div className="flex items-center gap-3 ml-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold">Jean-Luc Mba</p>
              <p className="text-xs text-gray-500">Franceville, GA</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center text-white">
              <User size={20} />
            </div>
          </div>
        </div>
      </header>
      <main className="p-8 flex-1 overflow-y-auto">{children}</main>
    </div>
  </div>
);