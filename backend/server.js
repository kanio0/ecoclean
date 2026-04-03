import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const spots = [
  { id: 1, x: '18%', y: '28%', status: 'clean', statusLabel: 'Чисто', reward: 40, title: 'Парк Победы', location: 'Центральный район', distance: '350 м', description: 'Точка уже очищена командой, можно провести разведку для продления контроля.' },
  { id: 2, x: '44%', y: '20%', status: 'care', statusLabel: 'Требует ухода', reward: 120, title: 'Сквер у школы', location: 'Район Ленина', distance: '1.5 км', description: 'Пластик и бумага около скамеек. После уборки точка может быть захвачена.' },
  { id: 3, x: '68%', y: '40%', status: 'care', statusLabel: 'Требует ухода', reward: 80, title: 'Clean the park corner', location: 'Park line', distance: '350 м', description: 'Небольшой смешанный мусор рядом с парковой дорожкой. Безопасная миссия.' },
  { id: 4, x: '78%', y: '10%', status: 'mine', statusLabel: 'Захвачена командой', reward: 150, title: 'Набережная', location: 'Северный кластер', distance: '2.1 км', description: 'Контроль активен. Через несколько дней потребуется разведка.' },
  { id: 5, x: '26%', y: '64%', status: 'unknown', statusLabel: 'Не определена', reward: 50, title: 'Остановка у рынка', location: 'Южный сектор', distance: '1.1 км', description: 'Статус не подтвержден. Разведка откроет точку для дальнейшего захвата.' }
];

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/dashboard', (_req, res) => {
  res.json({
    stats: { points: '1,247', controlled: 12, scouts: 23, rank: '#3' },
    spots
  });
});
app.get('/api/spots', (_req, res) => res.json(spots));

const PORT = 4000;
app.listen(PORT, () => console.log(`Eco Clean backend running on http://localhost:${PORT}`));
