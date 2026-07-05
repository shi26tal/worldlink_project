import Live from "../assets/live.png";

import Speed from "../assets/icon/speed.png";
import ReferBanner from "../components/ReferBanner";
import Update from "../assets/icon/update.png";
import Ticket from "../assets/icon/ticket.png";
import AI from "../assets/icon/ai.jpg";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f8f9fc] ml-64 mt-20 p-6 min-h-screen">
        <div className="grid grid-cols-12 gap-6">
          {/* Live Network Status Card */}
          <div className="col-span-12 justify-between flex bg-white p-8 rounded-lg shadow-md text-[#424751]">
            <div>
              <div className="flex items-center gap-1 pb-2">
                <img src={Live} alt="Live status" className="w-4 h-4" />
                <h3 className=" text-[16px] font-normal">
                  Live Network Status
                </h3>
              </div>

              <p className="pb-2">Connect & Optimal</p>
              <p className="text-[#424751]">
                Your connection is performing at 98% efficiency. No outages
                reported in the Kathmandu Valley area.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="p-5 border border-[#C2C6D31A] text-center bg-[#FFFFFF80]">
                <p className="text-[#424751]">Latency</p>
                <span className="text-[#003D7C]">12ms</span>
              </div>
              <div className="p-5 border border-[#C2C6D31A] text-center bg-[#FFFFFF80]">
                <p className="text-[#424751]">Uptime</p>
                <span className="text-[#003D7C]">24d 5h</span>
              </div>
            </div>
          </div>

          {/* current download speed */}
          <div className="col-span-4 bg-[#38BDF8B2] p-8 rounded-lg shadow-md">
            <h3 className="text-[#424751] text-center font-normal tracking-[0.8px] mt-10 mb-6">
              CURRENT DOWNLOAD SPEED
            </h3>
            <div className="h-32 flex justify-center items-center">
              245 Mbps
            </div>

            <div className="flex border-t border-[#C2C6D333] pb-6 pt-6 justify-between">
              <div className="p-7 pb-0">
                <p>Upload</p>
                <span>112 Mbps</span>
              </div>
              <div className="p-7 pb-0">
                <p>Jitter</p>
                <span>2 ms</span>
              </div>
            </div>
          </div>

          {/* active subscriptions */}
          <div className="col-span-5 bg-white p-8 rounded-lg shadow-md text-[#424751]">
            <div className="flex flex-row justify-between items-start">
              <div>
                <h3 className="uppercase text-[16px] tracking-wide">
                  Active Subscriptions
                </h3>
                <p className="text-[#003D7C] text-[16px]">
                  Fiber Advantage Plus
                </p>
              </div>

              <span className="bg-[#003D7C1A] text-[#003D7C] px-4 py-2 rounded-full">
                300 Mbps
              </span>
            </div>
            <div className="grid-cols-2 grid gap-y-4 mt-8 font-normal text-[16px]">
              <p>Billing Cycle</p>

              <p className="text-right">Monthly</p>

              <p>Next Renewal</p>

              <p className="text-right">Oct 24,2023</p>

              <p>Status</p>

              <p className="text-right text-[#16A34A]">Auto-pay Active</p>
            </div>
            <div className="bg-[#C2C6D31A] rounded-xl p-4 mt-8">
              <div className="flex flex-row gap-3">
                <div className="bg-[#003D7C] rounded-lg p-3">
                  <img src={Update} alt="update" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1C2E]">
                    Upgrade Available
                  </h3>
                  <p className="text-sm text-[#424751]">
                    Switch to 1Gbps for just NPR 500 more.
                  </p>
                </div>
              </div>

              <button className="text-[#003D7C] bg-white mt-5 w-full rounded-lg border border-[#C2C6D34D] py-3 font-medium">
                Renew or Upgrade Plan
              </button>
            </div>
          </div>

          {/* speed test & refer*/}
          <div className="col-span-3 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-[#1E40AF] font-bold mb-6">Speed Test</p>
              <button className="bg-[#4251B6] w-full cursor-pointer text-white rounded-xl flex flex-row items-center justify-center gap-2 px-6 py-3">
                <img src={Speed} alt="speed" />
                <span>Start Test</span>
              </button>
            </div>
            <div className="flex-1">
              <ReferBanner />
            </div>
          </div>

          {/* WeeklyUsage */}
          <div className="col-span-5 bg-white rounded-xl shadow-md p-8">
            Weekly Usage
          </div>

          {/* Latest Ticket */}
          <div className="col-span-4 bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-between">
              <div className="flex flex-row gap-1">
                <h3 className="font-bold text-[#1E40AF]">Latest Ticket</h3>
                <p className="text-[#1E40AF] font-bold">(0)</p>
              </div>
              <button className="bg-[#E67E22] rounded-lg text-white px-4 py-2">
                Report Problem
              </button>
            </div>
            <div className="flex flex-col items-center mt-14">
              <div className=" p-6 bg-[#F3F4F6] rounded-full">
                <img src={Ticket} alt="ticket" className="w-8" />
              </div>

              <h3 className="mt-6 font-semibold">No Ticket Yet</h3>
              <p className="text-center text-[#6B7280] mt-3 mx-8">
                Facing issues with the internet? Report a problem if you need
                support.
              </p>
              <button className="uppercase mt-8 rounded-full bg-[#0C3D81] text-white py-3 px-8">
                Chat with live agent
              </button>
            </div>
          </div>

          {/* AI Diagnostic */}
          <div className="col-span-3 bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col items-center mt-4">
              <div className="p-6 bg-[#F3F4F6] rounded-full">
                <img src={AI} alt="ai" className="w-8" />
              </div>
              <h3 className="font-medium mt-4 text-[16px]">AI Diagnostic</h3>
              <p className="mt-4 text-[#424751] text-center text-[14px]">
                WorldLink AI has scanned your hardware. No bottlenecks detected.
              </p>
              <div className="mt-6 px-4 py-2 text-[12px] text-center bg-[#F0FDF4] text-[#16A34A] w-full">Signal Strength: Excellent</div>
              <div className="mt-3 px-4 py-2 text-[12px] text-center bg-[#EFF6FF] text-[#2563EB] w-full">Router Heat: Normal</div>

              <button className="mt-12 text-[#003D7C] text-[16px] cursor-pointer">Run Full Scan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
