import Live from "../assets/live.png";

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
          <div className="col-span-4 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-[#424751] text-center font-normal tracking-[0.8px] mt-10 mb-6">
              CURRENT DOWNLOAD SPEED
            </h3>
            <div className="h-32 flex justify-center items-center">
              Speed Meter
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
          <div className="col-span-5 bg-white p-8 rounded-lg shadow-md ">
            <h3>Active Subscriptions</h3>
          </div>

          {/* speed test & refer*/}
          <div className="col-span-3 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">Speed Test</div>

            <div className="bg-[#4454C4] text-white rounded-xl shadow-md p-6 flex-1">
              Refer & Earn
            </div>
          </div>

          {/* Weekly Usage */}
          <div className="col-span-5 bg-white rounded-xl shadow-md p-8">
            Weekly Usage
          </div>

          {/* Latest Ticket */}
          <div className="col-span-4 bg-white rounded-xl shadow-md p-8">
            Latest Ticket
          </div>

          {/* AI Diagnostic */}
          <div className="col-span-3 bg-white rounded-xl shadow-md p-8">
            AI Diagnostic
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
