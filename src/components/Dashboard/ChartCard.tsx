import { FunctionComponent } from 'react';
import { MyAreaChart } from './AreaChart';

type TChart = {
  label: string;
  className?: string;
};

export const ChartCard: FunctionComponent<TChart> = ({ label, className }) => {
  return (
    <div className={`dashboard-card ${className ? className : ''}`}>
      <div className="text-content font-bold">{label}</div>

      <MyAreaChart />
    </div>
  );
};
