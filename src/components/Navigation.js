import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ className = '' }) {
  const handleScrollOrNavigate = (e, sectionId, path) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <nav className={`navigation ${className}`}>
      <Link to="/column" className="nav-item" onClick={e => handleScrollOrNavigate(e, 'news-section', '/column')}>先輩ママコラム</Link>
      <Link to="/topic" className="nav-item" onClick={e => handleScrollOrNavigate(e, 'topics-section', '/topic')}>トピック</Link>
      <Link to="/interview" className="nav-item" onClick={e => handleScrollOrNavigate(e, 'interview-section', '/interview')}>インタビュー</Link>
      <Link to="/diary" className="nav-item" onClick={e => handleScrollOrNavigate(e, 'diary-section', '/diary')}>交換日記</Link>
      <Link to="/textbook" className="nav-item">不登校の教科書</Link>
      <Link to="/bbs" className="nav-item">Minakanoでひろがる</Link>
      <Link to="/consult" className="nav-item">個別相談</Link>
      <Link to="/parent-group" className="nav-item">親の会情報</Link>
      <Link to="/free-school" className="nav-item">フリースクール情報</Link>
      <Link to="/high-school" className="nav-item">通信制高校情報</Link>
      <Link to="/about" className="nav-item">Minakanoについて</Link>
    </nav>
  );
}

export default Navigation; 