import { useEffect, useMemo, useState } from 'react';
import { Clock3, Filter, MapPin, ShieldCheck, Star } from 'lucide-react';
import SpotMap from '../components/SpotMap';

export default function MapPage() {
  const [spots, setSpots] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('http://localhost:4000/api/spots').then((r) => r.json()).then((data) => {
      setSpots(data);
      setSelected(data[0]);
    });
  }, []);

  const filtered = useMemo(() => filter === 'all' ? spots : spots.filter((s) => s.status === filter), [spots, filter]);

  return (
    <div className="page-grid map-grid">
      <section className="toolbar-row card span-2">
        <div>
          <div className="section-title">Карта точек</div>
        </div>
        <div className="toolbar-actions">
          {[
            ['all', 'Все'],
            ['care', 'Требует ухода'],
            ['clean', 'Чисто'],
            ['unknown', 'Не определена'],
            ['mine', 'Мои точки']
          ].map(([value, label]) => (
            <button key={value} className={`chip ${filter === value ? 'active' : ''}`} onClick={() => setFilter(value)}>{label}</button>
          ))}
          <button className="icon-button"><Filter size={18} /></button>
        </div>
      </section>

      <SpotMap spots={filtered} selectedId={selected?.id} onSelect={setSelected} />

      <section className="card list-panel">
        <div className="section-title">Ближайшие точки</div>
        <div className="spot-list">
          {filtered.map((spot) => (
            <button key={spot.id} className={`spot-row ${selected?.id === spot.id ? 'selected' : ''}`} onClick={() => setSelected(spot)}>
              <div>
                <div className="row-title">{spot.title}</div>
                <div className="row-sub">{spot.location}</div>
              </div>
              <div className="row-right">+{spot.reward}</div>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <section className="card mission-detail span-2">
          <div className="mission-detail-photo"></div>
          <div>
            <div className="panel-top">
              <div>
                <div className="section-title">{selected.title}</div>
                <div className="section-subtitle">Детали точки и текущий статус</div>
              </div>
              <div className="mini-badge redish">{selected.statusLabel}</div>
            </div>
            <div className="info-list wrap">
              <span><MapPin size={16} /> {selected.location}</span>
              <span><Clock3 size={16} /> 10–15 минут</span>
              <span><Star size={16} /> +{selected.reward} очков</span>
              <span><ShieldCheck size={16} /> Безопасная миссия</span>
            </div>
            <p className="panel-text">{selected.description}</p>
            <div className="step-list wide">
              <div>1. Забронировать уборку в приложении</div>
              <div>2. Сделать фото «до» и отправить на модерацию</div>
              <div>3. Провести уборку и загрузить фото «после»</div>
              <div>4. Получить подтверждение и захватить точку</div>
            </div>
            <div className="stack-buttons horizontal">
              <button className="primary-button">Начать миссию</button>
              <button className="secondary-button">Небезопасно</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
