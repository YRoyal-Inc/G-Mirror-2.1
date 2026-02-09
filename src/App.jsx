import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { Messages } from './pages/Messages';
import { Calls } from './pages/Calls';
import { Billing } from './pages/Billing';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Site Vitrine Public */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Application Dashboard Privée */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <DashboardHome />
          </DashboardLayout>
        } />

        <Route path="/dashboard/messages" element={
          <DashboardLayout>
            <Messages />
          </DashboardLayout>
        } />

        <Route path="/dashboard/calls" element={
          <DashboardLayout>
            <Calls />
          </DashboardLayout>
        } />

        <Route path="/dashboard/billing" element={
          <DashboardLayout>
            <Billing />
          </DashboardLayout>
        } />

        <Route path="/dashboard/settings" element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        } />
        
        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;