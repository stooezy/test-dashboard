import { FunctionComponent } from 'react';
import { formatterSeparator } from '~/util';

export type TProduct = {
  icon: string;
  name: string;
  price?: number;
  transactions: number;
};
export const Product: FunctionComponent<TProduct> = ({ icon, name, price, transactions }) => {
  return (
    <div className="w-full h-full border-4 border-primary-klikoo rounded-xl text-center px-1 py-4">
      <img src={icon} alt={name} className="mx-auto h-14" />
      <div className="mt-1 text-primary font-bold">{name}</div>
      {price ? (
        <div className="mt-1 text-content text-sm font-bold">{formatterSeparator.format(price)}</div>
      ) : (
        <div className="mt-1 text-content text-sm font-bold opacity-0">{formatterSeparator.format(0)}</div>
      )}
      <div className="text-lg font-bold text-dark">
        {transactions} <span className="text-xs">transactions</span>
      </div>
    </div>
  );
};
