import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainVisual.css';
import sampleImg from '../assets/sample1.jpg';

const images = [sampleImg, sampleImg, sampleImg]; // 同じ画像を3枚分

function MainVisual() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="main-visual">
      <div className="slider">
        <img src={images[current]} alt="スライド" className="slider-img" />
      </div>
      <h1 className="main-title">親子の未来を応援する情報サイト</h1>
      <p className="main-subtext">不登校や子育てに悩むご家族のための安心できる場所を目指しています。</p>
      <button className="main-btn" onClick={() => navigate('/about')}>サービス案内を見る</button>
    </section>
  );
}

export default MainVisual; 