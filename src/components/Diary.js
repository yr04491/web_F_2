import React from 'react';
import './Diary.css';
import { Link } from 'react-router-dom';

function Diary() {
  const diaries = [
    '今日は子どもと一緒に散歩しました',
    '悩んだ日々も、少しずつ前向きに',
    '親としてできることを考える毎日',
    '子どもの笑顔が見られた日',
    '自分の気持ちも大切にしたい',
  ];

  return (
    <section className="diary" id="diary-section">
      <h2>新着交換日記</h2>
      <ul className="diary-list">
        {diaries.map((title, idx) => (
          <li key={idx}>
            <Link to={`/diary/${idx}`}>{`『${title}』`}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Diary; 