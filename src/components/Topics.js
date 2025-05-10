import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';
import sampleImg from '../assets/sample1.jpg';
import { useNavigate } from 'react-router-dom';

const topics = [
  { title: '子どもの気持ちに寄り添うためにできること' },
  { title: '親自身の心のケアについて語ろう' },
  { title: '家族で過ごす時間の工夫' },
  { title: '不安な気持ちを分かち合う場所' },
  { title: '小さな前進を一緒に喜ぼう' },
];

function Topics() {
  return (
    <section className="topics" id="topics-section">
      <h2>新着トピック</h2>
      <ul className="topics-list">
        {topics.map((topic, idx) => (
          <li key={idx} className="topic-item">
            <img src={sampleImg} alt="トピック画像" className="topic-img" />
            <Link to={`/topic/${idx}`} className="topic-title-link">
              <span className="topic-title">{topic.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Topics; 