import { useEffect, useState } from 'react';
import { ArrowRight, Camera, Flag, MapPin, ShieldCheck, Sparkles, Target } from 'lucide-react';
import StatCard from '../components/StatCard';
import SpotMap from '../components/SpotMap';

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/dashboard')
      .then((r) => r.json())
      .then((data) => {
        setDashboard(data);
        setSelected(data.spots[1]);
      })
      .catch(() => {});
  }, []);

  if (!dashboard) return <div className="loading">Загружаем панель Eco Clean…</div>;

  return (
    <div className="page-grid dashboard-grid">
      <section className="hero-product card">
        <div>
          <div className="mini-badge green">Экосистема продукта</div>
          <h1>EcoClean</h1>
          <div className="hero-actions">
            <button className="primary-button">Открыть карту</button>
            <button className="ghost-button">Создать команду</button>
          </div>
        </div>
        <div className="hero-side-stack">
          <div className="metric-panel">
            <div className="metric-big">1,247</div>
            <div className="metric-caption">Очков у команды за сезон</div>
          </div>
          <div className="mini-progress card subtle">
            <div className="mini-label">До активации новой точки</div>
            <div className="progress-track"><div className="progress-bar" style={{ width: '72%' }}></div></div>
            <div className="mini-row"><span>72%</span><span>3 действия осталось</span></div>
          </div>
        </div>
      </section>

      <div className="stat-grid four">
        <StatCard value={dashboard.stats.points} label="Очков" accent="accent-green" />
        <StatCard value={dashboard.stats.controlled} label="Точек под контролем" />
        <StatCard value={dashboard.stats.scouts} label="Разведок" />
        <StatCard value={dashboard.stats.rank} label="Место в сезоне" />
      </div>

      <SpotMap spots={dashboard.spots} selectedId={selected?.id} onSelect={setSelected} />

      <section className="card mission-panel">
        <div className="panel-top">
          <div>
            <div className="section-title">Фокус-миссия</div>
            <div className="section-subtitle">Ближайшая кликабельная задача</div>
          </div>
          <div className="mini-badge orange">+{selected?.reward} очков</div>
        </div>
        {selected && (
          <>
            <div className="mission-photo"></div>
            <h3>{selected.title}</h3>
            <div className="info-list compact">
              <span><MapPin size={16} /> {selected.location}</span>
              <span><Target size={16} /> {selected.statusLabel}</span>
              <span><Sparkles size={16} /> {selected.distance}</span>
            </div>
            <p className="panel-text">{selected.description}</p>
            <div className="step-list">
              <div><Camera size={16} /> Фото до и модерация</div>
              <div><ShieldCheck size={16} /> Уборка и безопасный маршрут</div>
              <div><Flag size={16} /> Фото после и захват точки</div>
            </div>
            <div className="stack-buttons">
              <button className="primary-button">Открыть миссию</button>
              <button className="secondary-button">Отправить на разведку</button>
            </div>
          </>
        )}
      </section>

      <section className="card actions-panel span-2">
        <div className="section-title">Быстрые действия</div>
        <div className="action-grid">
          <button className="action-card blue"><MapPin size={18} /> Захватить точку <ArrowRight size={16} /></button>
          <button className="action-card lilac"><Camera size={18} /> Отправить фотоотчет <ArrowRight size={16} /></button>
          <button className="action-card green"><ShieldCheck size={18} /> Провести разведку <ArrowRight size={16} /></button>
          <button className="action-card sand"><Flag size={18} /> Продлить контроль <ArrowRight size={16} /></button>
        </div>
      </section>
    </div>
  );
}
