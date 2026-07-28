import { ArrowLeft, Pencil, ShieldCheck, User } from "lucide-react";
import { useNavigate } from "react-router";
import Profile from "../assets/p.jpg";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back arrow */}
      <div className="mb-6">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-end mb-10">
        <div className="p-2 flex gap-6">
          <div className="overflow-visible w-fit">
            <div className="border-4 border-[#EDEEF1] rounded-2xl relative">
              <img
                src={Profile}
                alt="profile-image"
                className="h-30 w-30 rounded-xl object-cover"
              />
            </div>
            <div className="absolute rounded-full w-fit p-2 top-73 left-98 z-20 bg-[#24389C]">
              <Pencil color="white" size={14} />
            </div>
          </div>

          <div className="flex flex-col justify-between py-4">
            <h3 className="text-3xl font-semibold">Choi Beomgyu</h3>
            <p className="text-sm">Customer ID: WL-882931</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="text-[#24389C] px-6 py-3 rounded-lg border cursor-pointer border-[#C5C5D4] hover:bg-[#ededed]">Edit Profile</button>
          <button className="text-white bg-[#24389C] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#37489d]">Save Changes</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        
        {/* left */}
        <div className="col-span-9">

          {/* personal info */}
        <div className=" bg-white p-5">
          <div className="flex flex-row justify-between items-center mb-6">
            <p>Personal Information</p>
            <User />
          </div>
          <div className="grid grid-cols-6 gap-6">

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Full Name</label>
              <input type="text" placeholder="Choi Beomgyu" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Email</label>
              <input type="email" placeholder="choibeomgyu@example.com" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Mobile Number</label>
              <input type="number" placeholder="+977 98XXXXXXXX" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Alternative Number</label>
              <input type="number" placeholder="Add secondary contact" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Gender</label>
        
              <input type="text" placeholder="Male" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold">Address</label>
              <input type="text" placeholder="Naikap" className="p-3 bg-[#F2F3F6] border border-[#C5C5D4] rounded-lg placeholder:text-sm outline-none"/>
            </div>

          </div>

        </div>

        </div>

        

        {/* employee verification */}

        <div className="col-span-3 bg-[#24389C] p-5 rounded-xl h-52">

          <div className="flex gap-2 mb-3">
            <ShieldCheck color="white"/>
            <p className="uppercase text-white">Quick Verify</p>
          </div>

          <div className="mb-3">
            <p className="text-white text-sm">Verify your status as a WorldLink Employee to unlock special corporate benefits and direct support.</p>
          </div>

          <div>
            <button className="w-full p-2 bg-white text-[#24389C] text-base rounded-lg cursor-pointer hover:bg-amber-50">Employee Verification</button>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ProfilePage;
