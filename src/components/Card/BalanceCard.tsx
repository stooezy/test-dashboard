import { FunctionComponent } from 'react';
import { formatterPrice } from '~/util';

export const BalanceCard: FunctionComponent = () => {
  return (
    <div className="dashboard-card relative">
      <button className="absolute right-4 top-4">
        <img src="/icons/ic_three_dot.svg" alt="menu" />
      </button>
      <div className="text-content font-bold text-center">Total balance</div>
      <div className="text-dark font-bold text-center text-4xl mt-6">{formatterPrice.format(1580000000)}</div>
      <button className="bg-primary text-white w-full mt-6 font-bold text-lg capitalize py-4 h-fit rounded-xl hover:bg-opacity-95">
        Top Up
      </button>
    </div>
  );
};
