import { BadgeCheck, PrinterCheck, RotateCcw, User } from "lucide-react";
import Navbar from "./Navbar";
import GaugeComponent from "react-gauge-component";

const AccountPage = () => {
  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      <Navbar />

      <div className="flex my-8 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Account Diagnostics</h2>
          <p className="text-[#5C5E65] text-base">
            Administrative health check and financial overview.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex gap-2 items-center text-[#454652] py-2.5 px-4.5 bg-white rounded-lg border border-[#C5C5D4]">
            <PrinterCheck size={20} />
            <span>Print Report</span>
          </button>
          <button className="flex gap-2 items-center text-white py-2.5 px-4.5 bg-[#24389C] rounded-lg">
            <RotateCcw size={20} />
            <span>Refresh Status</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* left */}
        <div className="col-span-4">
          <div className="bg-white rounded-2xl border border-[#C5C5D44D] p-6">
            <h5 className="text-[#454652] uppercase text-base tracking-wide text-center mt-2">
              Account Vitality
            </h5>

            <div className="my-6">
              <div className="relative h-50 flex justify-center items-center">
                <GaugeComponent
                  type="radial"
                  minValue={0}
                  maxValue={360}
                  startAngle={-180}
                  endAngle={180}
                  arc={{
                    width: 0.15,
                    cornerRadius: 0,
                    subArcs: [{ color: "#24389C" }],
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
                  <span className=" text-[#24389C] text-5xl">82</span>
                  <span className=" text-base text-[#454652]">Admin Score</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-1.5 px-3 bg-[#DCFCE7] rounded-full w-fit mb-3 mx-auto">
              <span className="uppercase text-[#166534] text-xs font-bold">Optimal Health</span>
            </div>
            <div className="text-center text-[#454652] px-3">
              <p className="text-sm">All administrative flags are cleared and
active.</p>
            </div>

          </div>
        </div>

        {/* right1 */}
        <div className="col-span-4">
                  {/* 1 */}
          <div className="bg-white border border-[#C5C5D44D] p-6 flex gap-4">
            <div className="w-fit h-fit p-3 rounded-xl bg-[#24389C1A]">
              <User fill="#24389C" />
            </div>

            <div className="flex flex-col gap-2">
              <p>Account Status</p>
              <p>Active</p>
              <div className="flex gap-2 items-center text-[#16A34A]">
                <BadgeCheck size={18}/>
                <span className="text-xs">Identify Verified</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountPage;
