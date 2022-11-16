type TMenu = {
  icon?: string;
  label: string;
  to: string;
  isActive: boolean;
  children?: TMenu[];
};

export const MENUS: TMenu[] = [
  {
    icon: 'ic_dashboard',
    isActive: false,
    label: 'Dashboard',
    to: '/',
  },
  {
    icon: 'ic_balance',
    isActive: false,
    label: 'Balance',
    to: '/balance',
  },
  {
    icon: 'ic_transaction',
    isActive: false,
    label: 'Transaction',
    to: '/transaction',
  },
  {
    icon: 'ic_product',
    isActive: false,
    label: 'Product',
    to: '/product',
  },
  {
    icon: 'ic_channel',
    isActive: false,
    label: 'Channel',
    to: '',
    children: [
      {
        icon: '',
        label: 'Agent',
        isActive: false,
        to: '/channel/agent',
      },
      {
        icon: '',
        label: 'Balance',
        isActive: false,
        to: '/channel/balance',
      },
      {
        icon: '',
        label: 'Transaction',
        isActive: false,
        to: '/channel/transaction',
      },
    ],
  },
];
