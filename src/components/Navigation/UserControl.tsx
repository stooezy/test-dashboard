import { FunctionComponent } from 'react';
import { formatterPrice } from '~/util';

export const UserControl: FunctionComponent = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <button className="cursor-pointer m-1 flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="profile" />
          </div>
        </div>

        <div className="text-left pl-4 hidden md:block">
          <div className="font-bold text-xl text-dark">Budi Budiman</div>
          <div className="font-bold text-content">Owner at PT Suka Maju</div>
        </div>

        <img src="/icons/ic_chevron_down.svg" alt="open menu" className="px-3" />
      </button>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <div className="text-center mt-4">
          <span className="font-bold">Total Balance {formatterPrice.format(1580000000)}</span>
          <button className="bg-primary text-white w-full mt-2 font-bold text-lg capitalize py-2 h-fit rounded-xl hover:bg-opacity-95">
            Top Up
          </button>
        </div>
      </ul>
    </div>
  );
};
