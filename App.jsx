import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';

// 13 Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { ExploreSubjectsPage } from './pages/ExploreSubjectsPage';
import { RankedResultsPage } from './pages/RankedResultsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ConnectionsPage } from './pages/ConnectionsPage';
import { ChatPage } from './pages/ChatPage';
import { VideoRoomPage } from './pages/VideoRoomPage';
import { CalendarSessionsPage } from './pages/CalendarSessionsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SettingsPage } from './pages/SettingsPage';

function AppContent() {
  const { isAuthenticated, loading } = useAuth();
  const [currentTab, setCurrentTab] = useState('landing');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [targetProfileUserId, setTargetProfileUserId] = useState(null);
  const [activeVideoSession, setActiveVideoSession] = useState(null);

  // If user becomes authenticated and is on landing or auth, route them to dashboard
  React.useEffect(() => {
    if (isAuthenticated && (currentTab === 'landing' || currentTab === 'auth')) {
      setCurrentTab('dashboard');
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center text-2xl shadow-lg animate-bounce">
          🌱
        </div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          Loading Skill Bloom...
        </p>
      </div>
    );
  }

  // If inside active Video Room, render full-bleed video room experience
  if (activeVideoSession) {
    return (
      <VideoRoomPage
        session={activeVideoSession}
        onLeaveRoom={() => {
          setActiveVideoSession(null);
          setCurrentTab('sessions');
        }}
      />
    );
  }

  const handleSelectSubject = (subj) => {
    setSelectedSubject(subj);
    setCurrentTab('ranked');
  };

  const handleViewPeerProfile = (userId) => {
    setTargetProfileUserId(userId);
    setCurrentTab('peer-profile');
  };

  const handleStartVideoCall = (session) => {
    setActiveVideoSession(session);
  };

  const renderActivePage = () => {
    switch (currentTab) {
      case 'landing':
        return (
          <LandingPage
            onStartLearning={() => setCurrentTab(isAuthenticated ? 'dashboard' : 'auth')}
            onExploreSubjects={() => setCurrentTab('subjects')}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'auth':
        return (
          <AuthPage
            onSuccess={() => setCurrentTab('dashboard')}
          />
        );

      case 'dashboard':
        return (
          <DashboardPage
            onNavigate={(tab) => setCurrentTab(tab)}
            onSelectSubject={handleSelectSubject}
            onViewPeerProfile={handleViewPeerProfile}
            onJoinSession={handleStartVideoCall}
          />
        );

      case 'subjects':
        return (
          <ExploreSubjectsPage
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'ranked':
        return (
          <RankedResultsPage
            subject={selectedSubject}
            onBack={() => setCurrentTab('subjects')}
            onViewPeerProfile={handleViewPeerProfile}
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      case 'profile':
        return (
          <ProfilePage
            targetUserId={null} // self
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      case 'peer-profile':
        return (
          <ProfilePage
            targetUserId={targetProfileUserId}
            onNavigate={(tab) => setCurrentTab(tab)}
            onBack={() => setCurrentTab('ranked')}
          />
        );

      case 'portfolio':
        return <PortfolioPage />;

      case 'connections':
        return (
          <ConnectionsPage
            onNavigate={(tab) => setCurrentTab(tab)}
            onViewProfile={handleViewPeerProfile}
          />
        );

      case 'chat':
        return (
          <ChatPage
            onStartVideoCall={handleStartVideoCall}
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      case 'sessions':
        return (
          <CalendarSessionsPage
            onStartVideoCall={handleStartVideoCall}
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      case 'notifications':
        return (
          <NotificationsPage
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      case 'settings':
        return (
          <SettingsPage
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        );

      default:
        return (
          <LandingPage
            onStartLearning={() => setCurrentTab(isAuthenticated ? 'dashboard' : 'auth')}
            onExploreSubjects={() => setCurrentTab('subjects')}
            onSelectSubject={handleSelectSubject}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          if (tab === 'profile') setTargetProfileUserId(null);
          setCurrentTab(tab);
        }}
      />

      <main className="flex-1 pt-6 sm:pt-8">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-800">
            <span>🌱</span>
            <span>Skill Bloom</span>
            <span className="text-slate-300">•</span>
            <span className="text-brand-600 font-semibold italic">"Share Your Skills. Grow Together."</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Exclusively built for college student peer learning. Zero paid classes, genuine academic empowerment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
