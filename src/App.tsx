import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { Repositories } from './components/Repositories';
import { PlaceholderView } from './components/PlaceholderView';
import { Login } from './components/Login';
import { Loading } from './components/Loading';
import { Users, BarChart3, Shield, Settings } from 'lucide-react';

function App() {
  const auth = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');

  if (auth.isLoading) {
    return <Loading />;
  }

  if (!auth.isAuthenticated) {
    return <Login />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'repositories':
        return <Repositories />;
      case 'users':
        return <PlaceholderView title="Users" description="Manage user access and permissions" icon={Users} />;
      case 'analytics':
        return <PlaceholderView title="Analytics" description="View usage statistics and trends" icon={BarChart3} />;
      case 'security':
        return <PlaceholderView title="Security" description="Manage security policies and vulnerability scanning" icon={Shield} />;
      case 'settings':
        return <PlaceholderView title="Configuration" description="Configure system settings and integrations" icon={Settings} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="ml-64 mt-16 p-8">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
