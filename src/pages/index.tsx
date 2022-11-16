import { BalanceCard } from '~/components/Card/BalanceCard';
import { AgentsCard } from '~/components/Dashboard/AgentsCard';
import { ChartCard } from '~/components/Dashboard/ChartCard';
import { ProductsCard } from '~/components/Dashboard/ProductsCard';
import { SummaryCard } from '~/components/Dashboard/SummaryCard';
import { Layout } from '~/components/Layout/Layout';
import { UserControl } from '~/components/Navigation/UserControl';

function App() {
  return (
    <Layout>
      <div className="flex">
        <div className="pt-8 px-14 w-full ">
          <section id="header">
            <div className="font-bold text-3xl">Dashboard</div>
            <div className="text-content text-lg font-bold">Today’s date: Sun, 10 April 2022</div>
          </section>

          <div className="grid grid-cols-3 gap-4 my-16">
            <SummaryCard
              comment="0.3% compared to 7 days ago"
              label="Profit"
              summary={11500000}
              trend="down"
              type="price"
            />
            <SummaryCard
              comment="0.5% compared to 7 days ago"
              label="Sales"
              summary={56000000}
              trend="up"
              type="price"
            />
            <SummaryCard
              comment="same as 7 days ago"
              label="Transaction"
              summary={1090}
              trend="same"
              type="transactions"
            />

            <div className="col-span-2">
              <ChartCard label="Sales Chart" />
              <ProductsCard label="Top 5 Products" className="mt-4" />
            </div>
            <AgentsCard label="Top 5 Agents" />
          </div>
        </div>
        <div className="min-w-[408px] bg-primary-klikoo-80">
          <div className="p-8">
            <div className="w-full flex justify-center">
              <UserControl />
            </div>

            <div className="mt-8">
              <BalanceCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
