import { FunctionComponent } from 'react';
import { Agent, TAgent } from './Agent';

type TAgentsCard = {
  label: string;
  className?: string;
};

const agents: TAgent[] = [
  {
    image: 'https://placeimg.com/192/192/people',
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
  {
    image: 'https://placeimg.com/192/192/people',
    name: 'Susi Susanti',
    profit: 3550000,
    sales: 5230000,
    transaction: 37,
  },
  {
    image: 'https://placeimg.com/192/192/people',
    name: 'Toko Pulsa III Depok',
    profit: 2860000,
    sales: 4500000,
    transaction: 38,
  },
  {
    image: 'https://placeimg.com/192/192/people',
    name: 'PT Suka Maju Bogor',
    profit: 2400000,
    sales: 4800000,
    transaction: 40,
  },
  {
    image: 'https://placeimg.com/192/192/people',
    name: 'Anton Antoman',
    profit: 2350000,
    sales: 2100000,
    transaction: 20,
  },
];

export const AgentsCard: FunctionComponent<TAgentsCard> = ({ label, className }) => {
  return (
    <div className={`dashboard-card ${className ? className : ''}`}>
      <div className="text-content font-bold mb-4">{label}</div>

      <div className="flex flex-col space-y-6 pl-4">
        {agents.map((agent) => (
          <Agent {...agent} key={agent.name} />
        ))}
      </div>
    </div>
  );
};
