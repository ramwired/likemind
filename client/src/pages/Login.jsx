import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/illustration2.png";

const Login = () => {
  const [emailId, setEmailID] = useState("khabib@example.com");
  const [password, setPassword] = useState("Eagle29");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true },
      );
      if (res.status === 200) {
        navigate("/feed");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid emailID or password");
      }
    }
  };

  return (
    // Outer wrapper
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full flex items-center justify-center bg-[#ffcbdd]/20 font-sans p-4 lg:p-6">
      {/* THE MAIN CARD - Scaled down to max-w-3xl for a very compact, tight feel */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(62,0,12,0.15)] overflow-hidden border border-[#111]/5 group">
        {/* LEFT SIDE - IMAGE SECTION WITH EFFECT     */}
        <div className="w-full sm:w-5/12 h-48 sm:h-auto relative bg-[#3e000c] overflow-hidden">
          {/* 1. The Image with slow zoom on hover */}
          <img
            src={illustration}
            alt="Login aesthetic"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          />
          {/* 2. Brand Tint - Multiplies your red/pink palette into the image */}
          <div className="absolute inset-0 bg-[#fb4b4e]/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-60"></div>
          {/* 3. Subtle bottom gradient to restore that rich, moody aesthetic */}
          <div className="absolute inset-0 bg-linear-to-t from-[#3e000c]/80 via-[#3e000c]/20 to-transparent pointer-events-none"></div>
        </div>

        {/* RIGHT SIDE - Form Area */}
        <div className="w-full sm:w-7/12 p-6 sm:p-8 lg:p-10 relative flex flex-col justify-center bg-[#fafafa]">
          <div className="w-full mx-auto">
            {/* TABS */}
            <div className="flex w-full mb-5 border-b-2 border-[#111]/10 relative">
              <button className="flex-1 pb-2 text-[13px] font-black text-[#3e000c] uppercase tracking-wider relative">
                Sign In
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#fb4b4e]"></div>
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="flex-1 pb-2 text-[13px] font-bold text-[#7c0b2b]/40 hover:text-[#7c0b2b] transition-colors uppercase tracking-wider"
              >
                Sign Up
              </button>
            </div>

            {/* HEADERS */}
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3e000c] mb-0.5">
                Welcome back
              </h2>
              <p className="text-[13px] text-[#7c0b2b]/80 font-medium">
                Enter your credentials to access your profile.
              </p>
            </div>

            {/* ERROR BOX */}
            {error && (
              <span className="flex items-center gap-2 px-3 py-2 mb-4 text-[13px] font-bold text-[#d10000] bg-[#ffcbdd]/40 border-2 border-[#d10000] rounded-xl shadow-[2px_2px_0px_0px_#d10000] animate-[pulse_0.3s_ease-in-out]">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </span>
            )}

            {/* FORM */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-[11px] font-bold text-[#3e000c] mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={emailId}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#111]/20 bg-white text-[#3e000c] text-[13px] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-[#fb4b4e] transition-all font-medium"
                  onChange={(e) => {
                    setError("");
                    setEmailID(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#3e000c] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[#111]/20 bg-white text-[#3e000c] text-[13px] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-[#fb4b4e] transition-all font-medium"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
              </div>
              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 text-[#fb4b4e] focus:ring-[#fb4b4e] border-2 border-[#111]/30 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-1.5 block text-[11px] font-bold text-[#7c0b2b]/80 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-[11px]">
                  <a
                    href="#"
                    className="font-bold text-[#fb4b4e] hover:text-[#d10000] transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full mt-2 flex justify-center py-2.5 px-4 rounded-xl border-2 border-[#111] shadow-[2px_2px_0px_0px_#111] text-[13px] font-black text-white bg-[#fb4b4e] hover:bg-[#d10000] focus:outline-none transition-all active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_#111] uppercase tracking-widest"
              >
                Sign in
              </button>
            </form>

            {/* DIVIDER */}
            <div className="relative flex items-center justify-center my-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t-2 border-[#111]/10"></div>
              </div>
              <div className="relative px-3 bg-[#fafafa] text-[10px] font-black text-[#7c0b2b]/40 uppercase tracking-widest">
                Or
              </div>
            </div>

            {/* GOOGLE BUTTON */}
            <div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#111] rounded-xl hover:bg-[#ffcbdd]/40 transition-all text-[#3e000c] font-black text-[13px] shadow-[2px_2px_0px_0px_#111] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_#111]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
