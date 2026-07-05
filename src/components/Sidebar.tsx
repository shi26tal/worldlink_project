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
          <div className="ml-4 my-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-[#003D7C]" : "text-white"
              }
            >
              Dashboard
            </NavLink>
          </div>

          <div className="ml-4 my-4">
            <NavLink to="my-plan">My Plan</NavLink>
          </div>

          <div className="ml-4 my-4">
            <NavLink to="bills-and-payments">Bills & Payments</NavLink>
          </div>

          <div className="ml-4 my-4">
            <NavLink to="supports">Supports</NavLink>
          </div>

          <div className="ml-4 my-4">
            <NavLink to="router-settings">Router Settings</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
