import { FunctionComponent } from 'react';
import { Product, TProduct } from './Product';

type TProductsCard = {
  label: string;
  className?: string;
};

const topProducts: TProduct[] = [
  {
    icon: '/images/logo_maxim.svg',
    name: 'Maxim',
    price: 150000,
    transactions: 150,
  },
  { icon: '/images/logo_telkomsel.svg', name: 'Telkomsel', price: 25000, transactions: 98 },
  { icon: '/images/logo_three.svg', name: 'Three', price: 50000, transactions: 74 },
  { icon: '/images/logo_ovo.svg', name: 'OVO', price: 100000, transactions: 68 },
  { icon: '/images/logo_pln.svg', name: 'PLN Postpaid', transactions: 68 },
];

export const ProductsCard: FunctionComponent<TProductsCard> = ({ label, className }) => {
  return (
    <div className={`dashboard-card ${className ? className : ''}`}>
      <div className="text-content font-bold">{label}</div>
      <div className="mt-4 flex w-full space-y-4 space-x-0 md:space-y-0 md:space-x-4 flex-wrap md:flex-nowrap">
        {topProducts.map((product) => (
          <Product
            icon={product.icon}
            name={product.name}
            transactions={product.transactions}
            key={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
