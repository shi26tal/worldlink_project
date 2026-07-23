import { ArrowLeft, Pencil } from "lucide-react";
import { useNavigate } from "react-router";
import Profile from "../assets/p.jpg";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      {/* back arrow */}
      <div className="mb-6">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="p-2 flex gap-6">
        <div className="overflow-visible w-fit">
          <div className="border-4 border-[#EDEEF1] rounded-2xl">
            <img
              src={Profile}
              alt="profile-image"
              className="h-30 w-30 rounded-xl object-cover"
            />
          </div>
          <div className="rounded-full w-fit p-2 bg-[#24389C]">
            <Pencil color="white" size={16}/>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <h3 className="text-3xl font-semibold">Choi Beomgyu</h3>
          <p className="text-sm">Customer ID: WL-882931</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6"></div>
    </div>
  );
};

export default ProfilePage;
