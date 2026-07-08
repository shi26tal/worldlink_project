import { useNavigate } from 'react-router';
import Refer from '../assets/icon/refer.png'

const ReferBanner = () => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/refer')
  }

  return (
    <div className="h-full bg-[#3F51B5] flex flex-col items-center  justify-center rounded-xl shadow-md px-12 py-8 text-center">
      <img src={Refer} alt="refer" className="w-8 h-8 mb-5" />
      <p className="text-[#CACFFF] font-semibold mb-3">Refer & Earn</p>
      <button className="text-[#24389C] px-6 py-3 bg-white rounded-xl w-full cursor-pointer" onClick={handleClick}>
        Refer Now
      </button>
    </div>
  );
};

export default ReferBanner;
