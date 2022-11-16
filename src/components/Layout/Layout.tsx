/* eslint-disable jsx-a11y/label-has-associated-control */
import { FunctionComponent, PropsWithChildren } from 'react';
import { MENUS } from './menus';

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const nav = useLocation();
  const menus = useMemo(() => MENUS.map((menu) => ({ ...menu, isActive: menu.to == nav.pathname })), [nav.pathname]);
  return (
    <div className="bg-sidebar">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-white">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
          {children}
        </div>
        <div className="drawer-side bg-sidebar">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div>
            <div className="font-bold text-3xl text-center py-8 text-primary">SalesDash</div>
            <ul className="menu p-4 w-[280px] text-content space-y-4">
              {menus.map((menu) => {
                return menu.children ? (
                  <li key={menu.label}>
                    <div>
                      <div className="collapse collapse-arrow w-full">
                        <input type="checkbox" className="min-h-fit" />
                        <div className={`flex collapse-title p-0 min-h-fit ${menu.isActive ? 'text-primary' : ''}`}>
                          <img src={`/icons/${menu.icon}.svg`} alt={menu.label} />
                          <div className="ml-3 font-bold">{menu.label}</div>
                        </div>
                        <div className="collapse-content pl-0">
                          <ul className="menu p-4 w-full text-content">
                            {menu.children.map((child) => (
                              <li key={child.label}>
                                <div className="ml-3 font-bold">{child.label}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={menu.label}>
                    <div className={`flex justify-between ${menu.isActive ? 'text-primary' : ''}`}>
                      <img src={`/icons/${menu.icon}.svg`} alt={menu.label} />
                      <div className="font-bold w-full">{menu.label}</div>
                      {menu.isActive ? (
                        <div className="bg-primary w-1.5 min-h-full rounded-tl-md rounded-bl-md">&nbsp;</div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div>
              <div className="divider"></div>

              <ul className="menu p-4 w-[280px] text-content">
                <li>
                  <div>
                    <img src={`/icons/ic_logout.svg`} alt="Logout" />
                    <div className="font-bold text-">Logout</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
