import { NavLink, Route, Routes } from 'react-router-dom';
import { Bell, LayoutDashboard, MapPinned, ShieldAlert, Gift, Users, Trophy, UserCircle2 } from 'lucide-react';
import DashboardPage from './pages/DashboardPage';
import MapPage from './pages/MapPage';
import ReportPage from './pages/ReportPage';
import RewardsPage from './pages/RewardsPage';
import TeamPage from './pages/TeamPage';
import RatingPage from './pages/RatingPage';
import ProfilePage from './pages/ProfilePage';

const nav = [
  { to: '/', label: 'Главная', icon: LayoutDashboard, end: true },
  { to: '/map', label: 'Карта', icon: MapPinned },
  { to: '/report', label: 'Разведка', icon: ShieldAlert },
  { to: '/rewards', label: 'Награды', icon: Gift },
  { to: '/team', label: 'Команда', icon: Users },
  { to: '/rating', label: 'Рейтинг', icon: Trophy },
  { to: '/profile', label: 'Профиль', icon: UserCircle2 }
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <div className="brand-mark">⟲</div>
            <div>
              <div className="brand-name">EcoClean</div>
              <div className="brand-sub">product dashboard</div>
            </div>
          </div>
          <nav className="nav-list">
            {nav.map(({ to, label, icon: Icon, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="season-card">
          <div className="mini-label">До конца сезона</div>
          <div className="season-days">45 дней</div>
          <div className="progress-track"><div className="progress-bar season"></div></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <div className="topbar-title">Eco Clean</div>
            <div className="topbar-subtitle">Продуктовая панель для городских эко-миссий</div>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button">Центральный район</button>
            <button className="icon-button"><Bell size={18} /></button>
            <div className="user-pill">
              <div className="avatar-small">A</div>
              <div>
                <div className="user-name">Anastasia</div>
                <div className="user-role">Captain</div>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}
