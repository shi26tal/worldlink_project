import {
  ArrowRight,
  CalendarCheck2,
  CalendarClock,
  Film,
  History,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const MyPlanPage = () => {
  return (
    <div className=" bg-[#f8f9fc] ml-64 mt-19 p-6 min-h-screen">
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-semibold">My Plan</h1>
          <p className="text-base text-[#454652]">
            Manage your subscription, view usage trends, and explore upgrades.
          </p>
        </div>
        <div>
          <button className="flex flex-row px-6 py-3 bg-[#3F51B5] rounded-xl text-white gap-2 items-center">
            <span>Change Plan</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* left */}
        <div className="col-span-7 flex flex-col gap-6">
          {/* plan */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-160"></div>

          {/* detail */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="mb-6 text-lg font-semibold">
              <h4>Subscription Details</h4>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6 items-center">
                <div className="p-4 text-[#3F51B5] bg-[#F8FAFC] rounded-lg">
                  <Wifi />
                </div>
                <div>
                  <h5 className="text-base font-semibold">
                    Smart Offer (1TV) 2079 250mbps/12mths
                  </h5>
                  <p className="text-[#64748B] text-sm">Internet Package</p>
                </div>
              </div>

              <div className="flex flex-row gap-6 items-center">
                <div className="p-4 text-[#3F51B5] bg-[#F8FAFC] rounded-lg">
                  <CalendarCheck2 />
                </div>
                <div>
                  <h5 className="text-base font-semibold">29 September 2025</h5>
                  <p className="text-[#64748B] text-sm">Start Date</p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-6 items-center">
                  <div className="p-4 text-[#3F51B5] bg-[#F8FAFC] rounded-lg">
                    <CalendarClock />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold">
                      29 September 2026
                    </h5>
                    <p className="text-[#64748B] text-sm">End Date</p>
                  </div>
                </div>
                <div>
                  <button className="flex flex-row gap-1 items-center font-semibold text-[#3F51B5] text-sm cursor-pointer">
                    <span>Pay Advance</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="col-span-5 flex flex-col gap-6">
          {/* nettv */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold">NETTV Details</h4>
            </div>
            <div className="flex flex-row justify-between mb-6">
              <div>
                <p className="text-[#64748B] text-sm">Box no.</p>
                <span className="text-base font-semibold">00226DCEE931</span>
              </div>
              <div>
                <button className="text-[#3F51B5] flex flex-row gap-2 items-center">
                  <span className="text-xs font-semibold">Make Payment</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="py-4 border-t border-[#F1F5F9] flex flex-col gap-1 ">
              <h4 className="text-base font-semibold">
                NETTV Basic Package - 1 Day- RESELLER
              </h4>
              <p className="text-sm text-[#64748B]">
                Status: 29 September 2025{" "}
              </p>
              <p className="text-sm text-[#64748B]">
                Status: 30 September 2026{" "}
              </p>
              <p className="text-sm text-[#64748B]">
                This package consist all live channel only
              </p>
            </div>
          </div>

          {/* perks */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Included Perks</h3>
            </div>

            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-row gap-4 items-center">
                <div className="p-3 text-[#4F46E5] bg-[#EEF2FF] rounded-lg">
                  <Film size={20} />
                </div>
                <div>
                  <p>NETTV Subscription</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="p-3 text-[#4F46E5] bg-[#EEF2FF] rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p>SafeNet Pro Active</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="p-3 text-[#4F46E5] bg-[#EEF2FF] rounded-lg">
                  <History size={20} />
                </div>
                <div>
                  <p>24/7 Priority Support</p>
                </div>
              </div>
            </div>

            <div>
              <button className="py-3 w-full cursor-pointer rounded-lg border border-[#E2E8F0] text-[#3F51B5] text-sm font-semibold">
                View All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
