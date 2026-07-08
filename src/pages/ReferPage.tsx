import { Wifi } from "lucide-react";

const ReferPage = () => {
  return (
    <div className="bg-[#f8f9fc] ml-64 mt-20 p-6 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl">Referrals & Rewards</h1>
        <p className="text-[#64748B] text-base">
          Spread the speed. Invite your friends and family to join WorldLink.
        </p>
      </div>

      <div className="flex flex-col mx-20 bg-white border-[#F1F5F9] shadow-sm h-auto">
        <div className="bg-[linear-gradient(90deg,rgba(63,81,181,0.05)_0%,rgba(63,81,181,0)_100%)] mt-6 flex flex-row p-10">
          <div>
            <h1>Refer WorldLink to your friends and receive awards</h1>
            <p>
              Grow our network and get exclusive benefits for every successful
              connection.
            </p>
          </div>
          <div>image</div>
        </div>

        <div className="p-10 bg-white">
            <div className="mb-6">
                <p>Refer Offer</p>
            </div>
            <div className="flex flex-row p-5 border-[#F1F5F9] shadow-xs rounded-lg">
                <Wifi className="text-[#3F51B5]"/>

                1 month of internet and NETTV service for both the referrer and the person referred

            </div>
        </div>
      </div>
    </div>
  );
};

export default ReferPage;
