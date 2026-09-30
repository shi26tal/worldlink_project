import { Check, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { loginApi } from "../api/auth.api";
import { loginSchema } from "@/validation/auth.validation";
import { toast } from "sonner";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("http://localhost:5002/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       userName,
    //       password,
    //     }),
    //   });

    //   if(!response.ok){
    //     throw new Error("Invalid username or password")
    //   }

    //   const data = await response.json();
    //   console.log("login success", data);

    //   localStorage.setItem("token",data.result.token.accessToken);

    //   navigate("/");
    // } catch (error) {
    //   console.error("login error", error);
    // }

    // validation

    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
      });

      return;
    }

    setErrors({});

    try {
      const data = await loginApi(username, password);

      console.log("login success", data);

      localStorage.setItem("token", data.result.token.accessToken);
      // localStorage.setItem("userId",JSON.stringify(data.result.user.id))

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials", {
        position: "top-center",
        className: "bg-red"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-105 px-4 pt-30">
        <div className="text-left">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-[#454652] text-base">
            Please login to access your account
          </p>
        </div>

        <div className="text-center mt-10">
          <h1 className="text-[#0066B2] text-3xl font-bold">Customer Portal</h1>
          <p className="text-[#6B7280] text-base mt-1">Login</p>
        </div>

        <form onSubmit={handleLogin}>
          {/* username */}

          <div className="relative mt-18">
            <label className="absolute left-3 -top-2 bg-white px-1 text-xs text-[#6B7280]">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="beomgyu"
              className="w-full p-4 rounded-lg border border-[#E5E7EB] bg-[#EEF3FF] text-base text-[#3f4653] outline-none focus:border-[#4169c5]"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>

          {/* password */}
          <div className="relative mt-5">
            <label className="absolute left-3 -top-2 bg-white px-1 text-xs text-[#6B7280]">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="12345"
              className="w-full p-4 rounded-lg border border-[#E5E7EB] bg-[#EEF3FF] text-base text-[#3f4653] outline-none focus:border-[#4169c5]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}

          <div className="flex items-center justify-between mt-5 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded-sm flex items-center justify-center ${
                  rememberMe ? "bg-[#0878bd]" : "border border-[#9ca3af]"
                }`}
              >
                {rememberMe && <Check size={12} className="text-white" />}
              </button>

              <span className="text-[12px] text-[#4f5868]">Remember me</span>
            </label>

            <button className="text-[12px] font-semibold text-[#006bb6]">
              Forgot Password ?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-4 text-base font-semibold text-center bg-[#4251B6] text-white rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
