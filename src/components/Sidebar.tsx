import Logo from "../assets/worldLinkLogo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <section>
        <div className="bg-[#4251B6] fixed top-0 left-0 z-40 w-64 h-full flex flex-col p-6 text-white font-bold text-[16px]">
          {/* logo */}
          <div className="py-8">
            <img src={Logo} alt="worldlink logo" />
          </div>

          {/* dashboard */}
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
      </section>
    </div>
  );
};

export default Sidebar;
