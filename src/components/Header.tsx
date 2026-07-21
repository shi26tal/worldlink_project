

import Profile from "../assets/icon/profile-icon.png";
import {  Bell , LogOut, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-40 flex items-center justify-end  bg-[#F8F9FC] px-6 py-5 ">

      <div className="flex items-center gap-3 md:gap-5 w-full justify-end">
        {/* Search */}
        <div className="flex items-center shrink bg-[#E7E8EB] rounded-full px-4 py-2 w-full max-w-68">
          <input
            type="text"
            placeholder="Search devices or settings..."
            className="flex-1 bg-transparent text-sm placeholder:text-sm outline-none"
          />
          <Search size={18} className="text-[#757684]" />
        </div>

        {/* Notification */}
        <button className="shrink-0 text-[#454652]">
          <Bell size={22} fill="#454652" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <p className="hidden md:block text-xs font-semibold whitespace-nowrap">
            Choi Beomgyu
          </p>

          <img
            src={Profile}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />

          <button>
            <LogOut size={20} className="text-[#24389C]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
