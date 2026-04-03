export default function TeamPage() {
  return (
    <div className="page-grid team-grid">
      <section className="card team-header-card span-2">
        <div className="team-title-block">
          <div className="team-kicker">Команда</div>
          <div className="team-name-large">ЭкоГерои</div>
          <div className="team-meta-row">
            <span className="mini-badge green">Активная команда</span>
            <span className="team-created">Дата создания: 15 января 2024</span>
          </div>
        </div>
        <div className="stat-grid three compact-grid">
          <div className="mini-stat"><strong>1,247</strong><span>Очков</span></div>
          <div className="mini-stat"><strong>12</strong><span>Точек</span></div>
          <div className="mini-stat"><strong>3</strong><span>Место</span></div>
        </div>
      </section>

      <section className="card">
        <div className="section-title">Командный цикл</div>
        <div className="step-list wide compact">
          <div>1. После регистрации — статус «Неактивная» на 14 дней</div>
          <div>2. Первая уборка активирует команду</div>
          <div>3. Контроль точки длится 21 день</div>
          <div>4. На 14-й день нужна разведка для продления</div>
        </div>
      </section>

      <section className="card">
        <div className="section-title">Карточка команды</div>
        <div className="team-data-list">
          <div className="team-data-row"><span>Название</span><strong>ЭкоГерои</strong></div>
          <div className="team-data-row"><span>Дата создания</span><strong>15 января 2024</strong></div>
          <div className="team-data-row"><span>Капитан</span><strong>Andrey</strong></div>
          <div className="team-data-row"><span>Район</span><strong>Центральный</strong></div>
        </div>
      </section>

      <section className="card span-2">
        <div className="section-title">Контролируемые точки</div>
        <div className="spot-list">
          <div className="spot-row selected"><div><div className="row-title">Парк Победы</div><div className="row-sub">Парк · Чисто · 8 дней до проверки</div></div><div className="row-right">+100</div></div>
          <div className="spot-row"><div><div className="row-title">Центральная площадь</div><div className="row-sub">Площадь · Чисто · 5 дней до проверки</div></div><div className="row-right">+100</div></div>
          <div className="spot-row"><div><div className="row-title">Сквер у школы</div><div className="row-sub">Сквер · Требует ухода · нужна уборка</div></div><div className="row-right">+75</div></div>
        </div>
      </section>
    </div>
  );
}

