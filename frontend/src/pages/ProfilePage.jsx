import StatCard from '../components/StatCard';

export default function ProfilePage() {
  return (
    <div className="page-grid profile-grid">
      <section className="card profile-header span-2">
        <div className="profile-avatar">A</div>
        <div>
          <div className="section-title">Andrey</div>
          <div className="profile-badges"><span className="mini-badge green">Level 4</span><span className="section-subtitle">Eco Hero</span></div>
          <div className="progress-wrap">
            <div className="mini-row"><span>Level 4 Progress</span><span>320 / 500 XP</span></div>
            <div className="progress-track"><div className="progress-bar" style={{ width: '64%' }}></div></div>
          </div>
        </div>
      </section>
      <div className="stat-grid four span-2">
        <StatCard value="23" label="Missions completed" />
        <StatCard value="12" label="Spots reported" />
        <StatCard value="1240" label="Total points earned" />
        <StatCard value="8" label="Areas cleaned" />
      </div>
      <section className="card span-2">
        <div className="section-title">Достижения</div>
        <div className="badge-grid">
          <div className="achievement active">Первая миссия</div>
          <div className="achievement active">5 очисток</div>
          <div className="achievement active">Защитник парка</div>
          <div className="achievement">Герой недели</div>
        </div>
      </section>
    </div>
  );
}
