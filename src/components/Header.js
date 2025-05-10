import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ className = '' }) {
  return (
    <header className={`header ${className}`}>
      <Link to="/" className="logo">Minakano</Link>
      <div className="header-actions">
        <input type="text" className="search" placeholder="検索..." />
        <button className="login-btn">ログイン</button>
        <button className="register-btn">無料会員登録</button>
      </div>
    </header>
  );
}

export default Header; 