import { FunctionComponent } from 'react';
import { formatterPrice, formatterSeparator } from '~/util';

export type TAgent = {
  image: string;
  name: string;
  profit: number;
  sales: number;
  transaction: number;
};

export const Agent: FunctionComponent<TAgent> = ({ image, name, profit, sales, transaction }) => {
  return (
    <div className="flex space-x-6">
      <div className="avatar h-fit mt-3">
        <div className="w-16 rounded-full ring ring-primary-klikoo ring-offset-base-100 ring-offset-2">
          <img src={image} alt={name} />
        </div>
      </div>
      <div>
        <div className="font-bold text-primary">{name}</div>
        <table className="text-sm text-content">
          <tbody>
            <tr>
              <td className="font-semibold">Profit</td>
              <td className="font-bold text-bold text-dark">{formatterPrice.format(profit)}</td>
            </tr>
            <tr>
              <td className="font-semibold">Sales</td>
              <td className="font-bold text-bold text-dark">{formatterPrice.format(sales)}</td>
            </tr>
            <tr>
              <td className="font-semibold">Transactions</td>
              <td className="font-bold text-bold text-dark">{formatterSeparator.format(transaction)} transactions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
