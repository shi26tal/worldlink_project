import { Gift, MoveRight, Plus, Timer, Wifi } from "lucide-react";
import ReferImg from "../assets/Img.png";
import { useState } from "react";

const ReferPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="bg-[#f8f9fc] ml-64 mt-20 p-6 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl">Referrals & Rewards</h1>
        <p className="text-[#64748B] text-base">
          Spread the speed. Invite your friends and family to join WorldLink.
        </p>
      </div>

      <div className="flex flex-col mx-20 bg-white border-[#F1F5F9] shadow-sm h-auto rounded-lg">
        <div className="bg-[linear-gradient(90deg,rgba(63,81,181,0.05)_0%,rgba(63,81,181,0)_100%)] mt-6 flex flex-row items-center justify-between p-10">
          <div className="max-w-100">
            <h1 className="text-3xl font-bold mb-4">
              Refer WorldLink to your friends{" "}
              <span className="text-[#3F51B5]">and receive awards </span>{" "}
            </h1>
            <p className="text-[#475569] text-base">
              Grow our network and get exclusive benefits for every successful
              connection.
            </p>
          </div>
          <div>
            <img src={ReferImg} alt="refer image" />
          </div>
        </div>

        <div className="p-10 bg-white flex flex-col gap-6">
          <div className="mb-6">
            <p>Refer Offer</p>
          </div>
          <div className="flex flex-row p-5 border-[#F1F5F9] items-center shadow-xs rounded-lg gap-4">
            <div className="text-[#3F51B5] p-3 bg-[#3F51B51A] rounded-lg">
              <Wifi />
            </div>
            <p className="text-base font-semibold">
              1 month of internet and NETTV service for both the referrer and
              the person referred
            </p>
          </div>

          <div className="flex flex-row p-5 border-2 border-[#3F51B533] bg-[#3F51B50D] items-center shadow-xs rounded-lg gap-4 relative">
            <div className="rounded-bl-lg rounded-tr-lg py-1 px-2 uppercase text-white bg-[#3F51B5] absolute top-0 right-0">
              <p className="text-[8px]">Most Popular</p>
            </div>
            <div className="text-white p-3 bg-[#3F51B5] rounded-lg">
              <Gift />
            </div>
            <p className="text-base text-[#3F51B5] font-semibold">
              If referred 3 friends/families a referrer will get 3 Months
              internet and NETTV subscription with FREE Dual-Band Router
            </p>
          </div>

          <div className="flex flex-row p-5 border-[#E2E8F0] bg-[] items-center shadow-xs rounded-lg gap-4">
            <div className="text-[#94A3B8]">
              <Timer />
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-sm text-[#475569] font-normal">
                Only Valid for 3, 6, or 12 months internet packages.
              </p>
              <span className="text-sm text-[#3F51B5]">Terms & Condition </span>
              <MoveRight className="text-[#3F51B5]" />
            </div>
          </div>
        </div>

        <div className="px-10 pb-10 flex flex-col gap-4 items-center">
          <button
            onClick={() => setShowOverlay(true)}
            className="w-full bg-[#3F51B5] shadow-sm text-white rounded-xl py-4 flex items-center justify-center gap-2 "
          >
            <Plus size={20} />
            <span>Refer a friend</span>
          </button>

          {showOverlay && (
            <>
              <div
                onClick={() => setShowOverlay(false)}
                className="fixed inset-0 bg-black/50 z-40"
              ></div>

              <div>
                <h2>Refer a friend</h2>
                <p>Invite your friend</p>
              </div>
            </>
          )}

          <button className="w-full border-2 py-4 border-[#E2E8F0] rounded-xl">
            View refer history
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferPage;
