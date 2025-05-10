import React from 'react';
import { useParams } from 'react-router-dom';

const columns = [
  '2025.5.4　6月オンライン親の会【Minakano cafe】開催＆募集開始のご案内',
  '2025.5.2　不登校経験者に聴く〜あの頃のキモチ〜Special Minakano cafe',
  '2025.4.28　ゴールデンウィークの相談先（追記あり）',
  '2025.4.17　5月オンライン親の会【Minakano cafe】開催＆募集開始のご案内',
  '2025.3.27　いつでも倒れ込めるベッド',
];

function ColumnDetail() {
  const { id } = useParams();
  const title = columns[id] || 'コラム詳細';
  return <h2>{title}</h2>;
}

export default ColumnDetail; 