const colors = {
  clean: 'spot clean',
  care: 'spot care',
  unknown: 'spot unknown',
  mine: 'spot mine'
};

export default function SpotMap({ spots = [], selectedId, onSelect }) {
  return (
    <div className="map-card card">
      <div className="map-toolbar">
        <div>
          <div className="section-title">Живая карта</div>
          <div className="section-subtitle">Кликабельные точки, статусы и награды</div>
        </div>
        <div className="search-mock">Поиск района или локации</div>
      </div>

      <div className="map-surface">
        <div className="grid-lines"></div>
        {spots.map((spot) => (
          <button
            key={spot.id}
            className={`${colors[spot.status]} ${selectedId === spot.id ? 'selected' : ''}`}
            style={{ left: spot.x, top: spot.y }}
            onClick={() => onSelect?.(spot)}
          >
            <span className="spot-points">+{spot.reward}</span>
          </button>
        ))}
      </div>

      <div className="legend-row">
        <span><i className="dot clean"></i> Чисто</span>
        <span><i className="dot care"></i> Требует ухода</span>
        <span><i className="dot unknown"></i> Не определена</span>
        <span><i className="dot mine"></i> Захвачена командой</span>
      </div>
    </div>
  );
}
