import React from 'react';
import { useParams } from 'react-router-dom';

const interviews = [
  '親の会「つながりの場」立ち上げの想いを聞きました',
  'フリースクール「みんなの居場所」設立のきっかけ',
  '通信制高校「希望学園」先生のインタビュー',
  '不登校経験者の親に聞く「今伝えたいこと」',
];

function InterviewDetail() {
  const { id } = useParams();
  const title = interviews[id] || 'インタビュー詳細';
  return <h2>{title}</h2>;
}

export default InterviewDetail; 