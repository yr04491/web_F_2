import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const newsList = [
  '2025.5.4　子どもの「今」を受け止めるために〜親としてできること〜',
  '2025.5.2　不登校を経験した親の声〜あの時の気持ち〜',
  '2025.4.28　家で過ごすゴールデンウィークのヒント',
  '2025.4.17　親子で話そう「これからのこと」〜小さな一歩を応援する〜',
  '2025.3.27　心が疲れたときにできるセルフケア',
];

function News() {
  return (
    <section className="news" id="news-section">
      <h2>新着先輩ママコラム</h2>
      <ul className="news-list">
        {newsList.map((item, idx) => (
          <li key={idx}>
            <Link to={`/column/${idx}`} className="news-title-link">{item}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News; 