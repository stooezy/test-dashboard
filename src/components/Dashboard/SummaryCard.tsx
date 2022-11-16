import { FunctionComponent } from 'react';
import { formatterPrice, formatterSeparator } from '~/util';

const getCommentColor = (trend: 'up' | 'down' | 'same') => {
  switch (trend) {
    case 'up':
      return 'text-success';
    case 'down':
      return 'text-error';
    case 'same':
      return 'text-caution';
  }
};

type TSummaryCard = {
  label: string;
  summary: number;
  comment: string;
  type: 'price' | 'transactions';
  trend: 'up' | 'down' | 'same';
};

export const SummaryCard: FunctionComponent<TSummaryCard> = ({ comment, label, summary, trend, type }) => {
  const showData =
    type == 'price' ? formatterPrice.format(summary) : `${formatterSeparator.format(summary)} transactions`;
  return (
    <div className="dashboard-card w-full">
      <div className="text-content font-bold">{label}</div>
      <div className="font-bold text-3xl ">{showData}</div>
      <div className={`flex justify-end mt-1 font-bold text-sm ${getCommentColor(trend)}`}>
        <img src={`/icons/ic_trend_${trend}.svg`} alt={`trend ${trend}`} />
        <span className="ml-1.5">{comment}</span>
      </div>
    </div>
  );
};
