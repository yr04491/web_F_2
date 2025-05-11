import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Navigation from './components/Navigation';
import News from './components/News';
import Topics from './components/Topics';
import Diary from './components/Diary';
import Interview from './components/Interview';
import Footer from './components/Footer';
import Textbook from './pages/Textbook';
import Column from './pages/Column';
import Bbs from './pages/Bbs';
import DiaryPage from './pages/DiaryPage';
import Consult from './pages/Consult';
import ParentGroup from './pages/ParentGroup';
import FreeSchool from './pages/FreeSchool';
import HighSchool from './pages/HighSchool';
import About from './pages/About';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import ColumnDetail from './pages/ColumnDetail';
import InterviewDetail from './pages/InterviewDetail';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // スクロールが少ない場合や一番上の場合は常に表示
      if (currentScrollY <= 10) {
        setShowHeader(true);
        setShowNav(true);
      }
      else if (currentScrollY > lastScrollY.current + 5) {
        setShowHeader(false); // 下方向で非表示
        setShowNav(false);
      } if (currentScrollY < lastScrollY.current - 5) {
        // 上方向に5px以上スクロールした場合に表示
        setShowHeader(true);
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    // スロットリング関数を追加してパフォーマンスを改善
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <Router>
      <div className="App" style={{ paddingTop: '180px' }}>
        <Header className={showHeader ? '' : 'hide-header'} />
        <Navigation className={showNav ? '' : 'hide-nav'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/column" element={<Column />} />
          <Route path="/column/:id" element={<ColumnDetail />} />
          <Route path="/bbs" element={<Bbs />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/parent-group" element={<ParentGroup />} />
          <Route path="/free-school" element={<FreeSchool />} />
          <Route path="/high-school" element={<HighSchool />} />
          <Route path="/about" element={<About />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/diary/:id" element={<DiaryPage />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
