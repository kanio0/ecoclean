export default function TeamPage() {
  return (
    <div className="page-grid team-grid">
      <section className="card team-hero span-2">
        <div>
          <div className="section-title">ЭкоГерои</div>
          <div className="section-subtitle">Создана 15 января 2024 · Активная команда</div>
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
        <div className="section-title">Контролируемые точки</div>
        <div className="spot-list">
          <div className="spot-row selected"><div><div className="row-title">Парк Победы</div><div className="row-sub">Чисто · 8 дней до проверки</div></div><div className="row-right">+100</div></div>
          <div className="spot-row"><div><div className="row-title">Центральная площадь</div><div className="row-sub">Чисто · 5 дней до проверки</div></div><div className="row-right">+100</div></div>
          <div className="spot-row"><div><div className="row-title">Сквер у школы</div><div className="row-sub">Требует ухода · нужна уборка</div></div><div className="row-right">+75</div></div>
        </div>
      </section>
    </div>
  );
}
