import { LayoutDashboard, MessageSquare, Phone, Settings, LogOut, CreditCard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Aperçu', path: '/dashboard' },
  { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/messages' },
  { icon: <Phone size={20} />, label: 'Appels', path: '/dashboard/calls' },
  { icon: <CreditCard size={20} />, label: 'Abonnement', path: '/dashboard/billing' },
  { icon: <Settings size={20} />, label: 'Paramètres', path: '/dashboard/settings' },
];

export const Sidebar = () => (
  <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 hidden lg:flex flex-col">
    <div className="p-6 flex items-center gap-3">
      <img src="https://storage.googleapis.com/lexis-ia.firebasestorage.app/users/Z9nAjAuFZ6cAHwvC6897zJjNXA13/projects/c84c5b46-d10c-42d2-90a3-65d7f5908d54/logos/logo-primary.svg" alt="G-Mirror" className="h-8" />
      
    </div>
    <nav className="flex-1 px-4 py-4 space-y-1">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} end className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50'}`}>
          {item.icon} {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="p-4 border-t border-gray-100">
      <NavLink to="/" className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:text-red-600 transition-all font-medium">
        <LogOut size={20} /> Quitter l'App
      </NavLink>
    </div>
  </aside>
);