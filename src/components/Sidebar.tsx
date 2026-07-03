import Logo from '../assets/worldLinkLogo.png'

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
            <a href="/">Dashboard</a>
          </div>

          <div className="ml-4 my-4">
            <a href="/my-plan">My Plan</a>
          </div>

          <div className="ml-4 my-4">
            <a href="/bills-and-payments">Bills & Payments</a>
          </div>

          <div className="ml-4 my-4">
            <a href="/supports">Supports</a>
          </div>

          <div className="ml-4 my-4">
            <a href="/router-settings">Router Settings</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
