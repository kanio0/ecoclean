const rewards = [
  ['Free coffee', 'Local Coffee House', '300'],
  ['20% off pizza', 'Pizza Place', '450'],
  ['15% off books', 'City Bookstore', '400'],
  ['Reusable bottle discount', 'Eco Shop', '250']
];

export default function RewardsPage() {
  return (
    <div className="page-grid rewards-grid">
      <section className="balance-card card span-2">
        <div>
          <div className="mini-label">Твои очки</div>
          <div className="balance-value">540</div>
          <div className="section-subtitle bright">Обменивай очки на локальные награды</div>
        </div>
        <div className="spark-badge">✦</div>
      </section>
      <section className="card span-2">
        <div className="section-title">Партнерские награды</div>
        <div className="section-subtitle">Sponsored local partners</div>
        <div className="reward-list">
          {rewards.map(([title, partner, points], i) => (
            <div key={title} className="reward-row">
              <div className={`reward-cover cover-${i + 1}`}></div>
              <div className="reward-body">
                <div className="row-title">{title}</div>
                <div className="row-sub">{partner}</div>
              </div>
              <div className="reward-cta">
                <div className="points-text">{points} points</div>
                <button className="primary-button small">Redeem</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
