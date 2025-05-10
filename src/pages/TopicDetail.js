import React from 'react';
import { useParams } from 'react-router-dom';

const topics = [
  '子どもの気持ちに寄り添うためにできること',
  '親自身の心のケアについて語ろう',
  '家族で過ごす時間の工夫',
  '不安な気持ちを分かち合う場所',
  '小さな前進を一緒に喜ぼう',
];

function TopicDetail() {
  const { id } = useParams();
  const title = topics[id] || 'トピック詳細';
  return <h2>{title}</h2>;
}

export default TopicDetail; 