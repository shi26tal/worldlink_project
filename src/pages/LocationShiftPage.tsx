import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router";

const LocationShiftPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/support");
  };

  return (
    <div className="bg-[#F8F9FC] p-4 md:p-6">
      {/* back arrow */}
      <div className="mb-4">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      {/* map */}

      <div className="bg-[#FFFFFF] rounded-2xl p-8 w-fit">
        <div className="mb-8">
          <p>Select address from the map</p>
        </div>

        <div className="flex flex-row gap-4 bg-[#DEE0FF4D] border border-[#DEE0FF80] rounded-lg p-5">
          <div className="p-3 bg-white rounded-lg">
            <MapPin color="#3F51B5" />
          </div>
          <div>
            <p className="text-[#24389C]">Current Address</p>
            <p className="text-[#454652]">naikap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationShiftPage;
