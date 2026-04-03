import { Camera, MapPin, Upload } from 'lucide-react';

export default function ReportPage() {
  return (
    <div className="page-grid report-grid">
      <section className="card form-card span-2">
        <div className="section-title">Разведка / новая точка</div>
        <div className="section-subtitle">Экран максимально приближен к продуктовой логике из видео</div>

        <div className="upload-box">
          <Camera size={34} />
          <div className="upload-title">Сделать фото мусора</div>
          <div className="upload-sub">или загрузить из галереи</div>
          <button className="secondary-button with-icon"><Upload size={16} /> Выбрать файл</button>
        </div>

        <div className="input-grid">
          <div className="field wide">
            <label>Локация</label>
            <div className="location-box"><MapPin size={16} /> Текущая локация · Центральный парк</div>
          </div>
          <div className="field">
            <label>Категория</label>
            <div className="chip-row">
              <button className="chip active">Пластик</button>
              <button className="chip">Бумага</button>
              <button className="chip">Бутылки</button>
              <button className="chip">Смешанное</button>
            </div>
          </div>
          <div className="field">
            <label>Приоритет</label>
            <div className="chip-row">
              <button className="chip">Низкий</button>
              <button className="chip active">Средний</button>
              <button className="chip danger">Высокий</button>
            </div>
          </div>
          <div className="field wide">
            <label>Комментарий</label>
            <textarea placeholder="Опиши точку: скамейка, остановка, сквер, много пластика и бумаги..."></textarea>
          </div>
          <div className="check-row wide">
            <input type="checkbox" defaultChecked />
            <span>Эта локация безопасна </span>
          </div>
        </div>

        <div className="stack-buttons horizontal end">
          <button className="secondary-button">Сохранить черновик</button>
          <button className="primary-button">Отправить на модерацию</button>
        </div>
      </section>

      <section className="card info-panel">
        <div className="section-title">Как это работает</div>
        <div className="step-list wide compact">
          <div>1. Фото «до» подтверждает статус точки</div>
          <div>2. Модерация фиксирует «требует ухода» или «чисто»</div>
          <div>3. После уборки фото «после» закрывает миссию</div>
          <div>4. Команда получает очки с учетом размера</div>
        </div>
      </section>
    </div>
  );
}
