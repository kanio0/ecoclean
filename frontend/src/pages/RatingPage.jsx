const teams = [
  ['ЗеленыйГород', '2450', '8 участников · 18 точек'],
  ['ЭкоПатруль', '1890', '6 участников · 15 точек'],
  ['ЭкоГерои', '1247', '12 участников · 12 точек'],
  ['ЧистыйГород', '980', '4 участника · 8 точек']
];

export default function RatingPage() {
  return (
    <div className="page-grid rating-grid">
      <section className="card season-banner span-2">
        <div>
          <div className="mini-label light">До конца сезона</div>
          <div className="section-title white">45 дней</div>
        </div>
        <div className="progress-track bright"><div className="progress-bar brightfill" style={{ width: '62%' }}></div></div>
      </section>
      <section className="card span-2">
        <div className="section-title">Топ команд</div>
        <div className="team-rank-list">
          {teams.map(([name, pts, desc], idx) => (
            <div key={name} className={`rank-row ${name === 'ЭкоГерои' ? 'highlight' : ''}`}>
              <div className="rank-left">
                <div className="rank-medal">{idx + 1}</div>
                <div>
                  <div className="row-title">{name}</div>
                  <div className="row-sub">{desc}</div>
                </div>
              </div>
              <div className="rank-score">{pts}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
