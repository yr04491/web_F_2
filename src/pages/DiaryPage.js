import React from 'react';
import { useParams } from 'react-router-dom';

const diaries = [
  '今日は子どもと一緒に散歩しました',
  '悩んだ日々も、少しずつ前向きに',
  '親としてできることを考える毎日',
  '子どもの笑顔が見られた日',
  '自分の気持ちも大切にしたい',
];

function DiaryPage() {
  const { id } = useParams();
  const title = diaries[id] || '交換日記';
  return <h2>{title}</h2>;
}

export default DiaryPage; 