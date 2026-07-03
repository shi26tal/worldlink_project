import SearchIcon from "../assets/icon/search.png";
import Bell from "../assets/icon/belli.png";
import Profile from "../assets/icon/profile-icon.png";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 flex flex-row justify-end gap-6 w-full bg-[#f8f9fc] p-5">
        <div className="flex gap-2 w-68 bg-[#E7E8EB] py-2 px-5 rounded-3xl">
          <input
            type="text"
            placeholder="Search devices or settings..."
            className="w-full text-[14px] placeholder:text-[14px]"
          />
          <img src={SearchIcon} alt="Search" className="w-6 h-6" />
        </div>
        <div className="flex items-center">
          <img src={Bell} alt="Notification" className="w-6 h-6 " />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-[12px] font-semibold"> Choi Beomgyu</p>
          <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>
    </div>
  );
};

export default Header;
