import React from 'react';
import { useParams } from 'react-router-dom';

const columns = [
  '2025.5.4　子どもの「今」を受け止めるために〜親としてできること〜',
  '2025.5.2　不登校を経験した親の声〜あの時の気持ち〜',
  '2025.4.28　家で過ごすゴールデンウィークのヒント',
  '2025.4.17　親子で話そう「これからのこと」〜小さな一歩を応援する〜',
  '2025.3.27　心が疲れたときにできるセルフケア',
];

function ColumnDetail() {
  const { id } = useParams();
  const title = columns[id] || 'コラム詳細';
  return <h2>{title}</h2>;
}

export default ColumnDetail; 