import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("khabib@example.com");
  const [password, setPassword] = useState("Eagle29");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data));
      if (res.status === 200) {
        navigate("/feed");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <form
          className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>

          <p className="text-gray-400 text-sm mt-2">
            Please sign in to continue
          </p>

          <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
              required
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4 text-left">
            <button
              className="text-sm text-indigo-400 hover:underline"
              type="button"
            >
              Forget password?
            </button>
          </div>

          <button
            className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition active:bg-indigo-600"
            type="submit"
          >
            Login
          </button>

          <p className="text-gray-400 text-sm mt-3 mb-11">
            Don't have an account? click here
          </p>
        </form>
      </div>
      {/* Soft Backdrop*/}
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl" />
      </div>
    </>
  );
};

export default Login;
