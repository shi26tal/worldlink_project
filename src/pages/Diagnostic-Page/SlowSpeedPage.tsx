import { CircleAlert, Dot, RotateCcw, RouterIcon } from "lucide-react";
import Navbar from "./Navbar";
import GaugeComponent from "react-gauge-component";


const SlowSpeedPage = () => {
  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="flex my-8 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Network Diagnostics</h2>
          <p className="text-[#5C5E65] text-base">
            Deep system scan of your fiber connection and hardware status.
          </p>
        </div>
        <button className="flex gap-2 items-center text-white py-2.5 px-4.5 bg-[#003EC7] rounded-full">
          <RotateCcw size={20} />
          <span>Re-run Scan</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 bg-white rounded-xl border border-[#C3C5D9] p-8">
          <div className="flex justify-center">
            <h4 className="uppercase text-[#737688] text-sm font-semibold">
              Network Health
            </h4>
          </div>
          <div className="my-6">
            <div className="relative h-40 flex justify-center items-center">
              <GaugeComponent
                type="radial"
                minValue={0}
                maxValue={360}
                startAngle={-180}
                endAngle={180}
                arc={{
                  width: 0.18,
                  cornerRadius: 0,
                  subArcs: [{ color: "#003EC7" }],
                }}
                labels={{
                  valueLabel: {
                    formatTextValue: () => "",
                  },
                  tickLabels: {
                    hideMinMax: true,
                  },
                }}
                pointer={{ hide: true }}
              />

              <div className="absolute flex flex-col items-center">
                <span className="font-bold text-5xl">79</span>
                <span className=" text-sm  text-[#737688]">/ 100</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex text-[#005569] pl-2.5 pr-4 py-2 rounded-full bg-[#006F891A] w-fit items-center">
              <Dot size={20} strokeWidth={6} />
              <span className="text-sm font-semibold">Overall: Good</span>
            </div>
          </div>

          <div className="flex justify-center">
            <p className="text-xs text-[#5C5E65] text-center">
              Your connection is currently stable. A minor latency spike was
              detected in the last hour.
            </p>
          </div>
        </div>

        <div className="col-span-8 bg-white rounded-xl border border-[#C3C5D9] p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Smart Recommendations</h1>
          </div>
          <div className="grid grid-cols-6 gap-6 mb-6">

            <div className="col-span-3 border border-[#C3C5D94D] bg-[#EFF4FF] rounded-xl p-6">
                <div className="p-3 rounded-xl bg-[#003EC71A] w-fit mb-4">
                  <RouterIcon color="#003EC7"/>
                </div>
                <div className="py-2">
                  <h4 className="text-sm mb-2">Firmware Update Available</h4>
                  <p className="text-[#5C5E65] text-xs">A new security patch is available for your
router. Updating will improve stability.</p>
                </div>
            </div>

            <div className="col-span-3 border border-[#C3C5D94D] bg-[#EFF4FF] rounded-xl p-6">

              <div className="p-3 rounded-xl bg-[#003EC71A] w-fit mb-4">
                  <RouterIcon color="#003EC7"/>
                </div>
                <div className="py-2">
                  <h4 className="text-sm mb-2">Firmware Update Available</h4>
                  <p className="text-[#5C5E65] text-xs">A new security patch is available for your
router. Updating will improve stability.</p>
                </div>

            </div>

          </div>

          <div>
            <div>
              <CircleAlert />
              <p>
                Premium users get 24/7 dedicated monitoring.
                <span>Upgrade now</span>
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SlowSpeedPage;
