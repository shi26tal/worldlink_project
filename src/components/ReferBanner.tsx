import { useNavigate } from "react-router";
import { Gift } from "lucide-react";
import { useDispatch } from "react-redux";
import { startReferral } from "../redux";
import type { AppDispatch } from "../redux/store";

const ReferBanner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(startReferral());

    navigate('/refer')
  };

  return (
    <div className="h-full bg-[#3F51B5] flex flex-col items-center  justify-center rounded-xl shadow-md p-8 text-center">
      <Gift size={46} className="mb-4 text-[#CACFFF]" />
      <p className="text-[#CACFFF] font-semibold mb-3">Refer & Earn</p>
      <button
        className="text-[#24389C] px-6 py-3 bg-white rounded-xl w-full cursor-pointer"
        onClick={handleClick}
      >
        Refer Now
      </button>
    </div>
  );
};

export default ReferBanner;
