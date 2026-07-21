import Logo from "../assets/worldLinkLogo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <section>
        <div
          className={`bg-[#4251B6] fixed top-0 left-0 z-40 h-full text-white font-bold text-[16px] flex flex-col transition-all duration-300
        w-64 p-6`}
        >
          {/* logo */}
          <div className="py-6 flex flex-col items-center gap-5">
            <NavLink to="/">
              <img src={Logo} alt="WorldLink Logo" />
            </NavLink>

            {/* <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu size={28} />
            </button> */}
          </div>

          {/* dashboard */}
          <div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Dashboard
              </NavLink>
            </div>

            <div>
              <NavLink
                to="my-plan"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                My Plan
              </NavLink>
            </div>

            <div>
              <NavLink
                to="bills-and-payments"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Bills & Payments
              </NavLink>
            </div>

            <div>
              <NavLink
                to="support"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Support
              </NavLink>
            </div>

            <div>
              <NavLink
                to="router-settings"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Router Settings
              </NavLink>
            </div>

            <div>
              <NavLink
                to="offers"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Offers
              </NavLink>
            </div>

            <div>
              <NavLink
                to="benefits"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0F4C97] text-white rounded-lg p-3 block"
                    : "text-white p-3 block"
                }
              >
                Benefits
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
