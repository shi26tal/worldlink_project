import {
  ArrowRight,
  History,
  RouterIcon,
  Ticket,
  TriangleAlert,
} from "lucide-react";

const SupportPage = () => {
  return (
    <div className="bg-[#f8f9fc] ml-64 mt-20 p-6 min-h-screen">
      {/* head customer support */}
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-semibold">Customer Support</h1>
          <p className="text-base text-[#454652]">
            How can we help you today with your WorldLink connection?
          </p>
        </div>
        <div>
          <button className="flex flex-row px-6 py-3 bg-[#EA580C] rounded-xl text-white gap-2 items-center">
            <TriangleAlert size={26} />
            <span>Report Problem</span>
          </button>
        </div>
      </div>

      {/* 2 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* latest ticket */}
        <div className="col-span-5 bg-white rounded-2xl shadow-md p-6 ">
          <div className="flex flex-row justify-between items-center mb-6">
            <div className="flex flex-row gap-2">
              <Ticket className="text-[#24389C]" size={22} />
              <p className="text-base font-semibold">Latest Ticket</p>
            </div>

            <p className="uppercase text-[#2B4088] bg-[#9CB0FF] py-1 px-3 text-[10px] rounded-2xl">
              In Progress
            </p>
          </div>

          <div className="flex flex-row gap-3 items-center mb-4">
            <span className="bg-[#EDEEF1] rounded-full p-2.5">
              {" "}
              <RouterIcon className="text-[#24389C]" />
            </span>
            <div>
              <p className="text-base font-bold">
                Issue: Intermittent Connection
              </p>
              <p className="text-[#454652] text-sm">Ticket ID: #WL-902421</p>
            </div>
          </div>

          <p className="text-[#454652] text-base tracking-wide mb-16">
            Our technical team is currently investigating the node in your area.
            Estimated resolution time is 2-4 hours.
          </p>
          <div className=" border-t border-[#C5C5D41A] pt-8">
            <button className="flex flex-row cursor-pointer text-[#24389C]  ">
              <span>View Full History</span>
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* ticket history */}
        <div className="col-span-7 bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-row gap-2">
              <History className="text-[#24389C]" />
              <p>Ticket History</p>
            </div>
            <button className="text-[#24389C] cursor-pointer text-base">
              View All
            </button>
          </div>
          <div className="flex flex-row justify-between items-center border-b border-[#C5C5D41A] py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#4ADE80] text-[10px] uppercase bg-[#4ADE801A] px-3 py-1 rounded-2xl">
                Resolved
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b border-[#C5C5D41A] py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#2B4088] text-[10px] uppercase bg-[#9CB0FF] px-3 py-1 rounded-2xl">
                In Progress
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-3">
            <div>
              <p className="text-[#454652] text-xs">#WL-882103</p>
              <h4 className="text-base">Bandwidth Upgrade Request</h4>
              <p className="text-[#454652] text-xs">Oct 24,2023</p>
            </div>
            <div>
              <p className="text-[#4ADE80] text-[10px] uppercase bg-[#4ADE801A] px-3 py-1 rounded-2xl">
                Resolved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-70 mb-6">FAQ</div>

      {/* 4 */}
      <div className="grid grid-cols-12 gap-6">
        {/* phone */}
        <div className="col-span-4 bg-white rounded-2xl shadow-md p-6"></div>

        {/* email */}
        <div className="col-span-4 bg-white rounded-2xl shadow-md p-6"></div>

        {/* branch */}
        <div className="col-span-4 bg-white rounded-2xl shadow-md p-6"></div>
      </div>
    </div>
  );
};

export default SupportPage;
