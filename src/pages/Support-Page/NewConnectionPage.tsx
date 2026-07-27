import { ArrowLeft, Asterisk, Mail, Phone, User } from "lucide-react";
import { useNavigate } from "react-router";
import Map from "../../components/Map";

const NewConnectionPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/support");
  };

  return (
    <div className="bg-[#F8F9FC] min-h-screen p-4 md:p-6">
      {/* back */}
      <div className="mb-4">
        <div className="bg-white text-[#24389C] w-fit p-3 rounded-full items-center flex hover:bg-[#e9ebf5]">
          <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 h-185">
          {/* map */}
          <Map />
        </div>

        <div className="col-span-4 bg-white border border-[#C5C5D433] rounded-xl p-6">
          <div className="mb-6">
            <p className="text-base mb-1 font-semibold">Customer Details</p>
            <p className="text-[#757684] text-xs">
              Fill out the information below to initiate your request.
            </p>
          </div>

          {/* form */}

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Your name
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>
              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <User color="#757684" size={18} />
                <input
                  type="text"
                  required={true}
                  placeholder="Shi"
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Mobile no.
                <span>
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>
              <div className="bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg flex flex-row gap-4 items-center">
                <Phone color="#757684" size={18} />
                <input
                  type="number"
                  required={true}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Email
                <span>
                 
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>

              <div>
                <Mail />
                <input
                  type="email"
                  required={true}
                  placeholder="shi@example.com"
                  className="w-full bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#454652] text-xs font-semibold flex gap-0.5">
                Address{" "}
                <span>
                  {" "}
                  <Asterisk color="#BA1A1A" size={10} strokeWidth={2} />
                </span>
              </label>
              <input
                type="text"
                required={true}
                placeholder="Full installation address"
                className="w-full bg-[#F2F3F6] border border-[#00000000] p-3 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConnectionPage;
