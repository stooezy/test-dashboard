import { FunctionComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatterPrice } from '~/util';

const data = [
  {
    date: '04 Apr ‘22',
    sales: 2000000,
  },
  {
    date: '06 Apr ‘22',
    sales: 4000000,
  },
  {
    date: '08 Apr ‘22',
    sales: 4000000,
  },
  {
    date: '10 Apr ‘22',
    sales: 6000000,
  },
];

export const MyAreaChart: FunctionComponent = () => {
  return (
    <div className="w-full h-96 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 48,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="1" y2="1">
              <stop offset="50%" stopColor="#6584FF" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(val) => formatterPrice.format(val)} />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#545DFF" fill="url(#colorUv)" strokeWidth={5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
