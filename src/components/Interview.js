import React from 'react';
import './Interview.css';
import { Link } from 'react-router-dom';

const interviews = [
  '親の会「つながりの場」立ち上げの想いを聞きました',
  'フリースクール「みんなの居場所」設立のきっかけ',
  '通信制高校「希望学園」先生のインタビュー',
  '不登校経験者の親に聞く「今伝えたいこと」',
];

function Interview() {
  return (
    <section className="interview" id="interview-section">
      <h2>新着インタビュー</h2>
      <ul className="interview-list">
        {interviews.map((title, idx) => (
          <li key={idx}>
            <Link to={`/interview/${idx}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Interview; 