import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { logout } from "../utils/userSlice";
import { removeConnections } from "../utils/connectionSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownNavigation = (path) => {
    navigate(path);
    setIsProfileOpen(false);
  };
  const handleLogout = async() => {
    try {
     await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(logout());
      dispatch(removeConnections());
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      dispatch(logout());
      dispatch(removeConnections());
      navigate("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-[#ffcbdd]/60 shadow-[0_1px_3px_rgba(255,203,221,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left: Brand/Logo */}
          <Link
            to="/feed"
            className="shrink-0 flex items-center cursor-pointer group relative"
          >
            <svg
              className="w-14 h-14 -mr-2 origin-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ease-out relative z-20"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: "translateY(2px)" }}
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="string-glow-landing"
                  x="-25%"
                  y="-25%"
                  width="150%"
                  height="150%"
                >
                  <feGaussianBlur stdDeviation="1.6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path
                d="M12 20 C 4 12, 4 28, 12 20 C 20 12, 28 12, 28 20 C 28 28, 20 28, 12 20 Z"
                stroke="#fb4b4e"
                strokeWidth="2.4"
                strokeOpacity="0.22"
                filter="url(#string-glow-landing)"
              />
              <path
                d="M12 20 C 4 12, 4 28, 12 20 C 20 12, 28 12, 28 20 C 28 28, 20 28, 12 20"
                stroke="#d10000"
                strokeWidth="1.2"
                className="group-hover:stroke-[#fb4b4e] transition-colors duration-300"
              />
            </svg>
            <span className="text-2xl font-black tracking-tighter text-[#3e000c] relative z-10">
              LikeMind
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => navigate("/feed")}
              className="group flex items-center px-4 py-2.5 rounded-full bg-[#ffcbdd]/40 text-[#7c0b2b] font-semibold transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Feed
            </button>

            <button
              onClick={() => navigate("/connections")}
              className="group flex items-center px-4 py-2.5 rounded-full text-[#3e000c]/70 font-medium hover:bg-[#ffcbdd]/20 hover:text-[#3e000c] transition-all"
            >
              <svg
                className="w-5 h-5 mr-2 text-[#3e000c]/50 group-hover:text-[#7c0b2b] group-hover:scale-110 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Connections
            </button>

            <button
              onClick={() => navigate("/requests")}
              className="group flex items-center px-4 py-2.5 rounded-full text-[#3e000c]/70 font-medium hover:bg-[#ffcbdd]/20 hover:text-[#3e000c] transition-all relative"
            >
              <div className="relative mr-2">
                <svg
                  className="w-5 h-5 text-[#3e000c]/50 group-hover:text-[#7c0b2b] group-hover:scale-110 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d10000] text-[9px] font-bold text-white ring-2 ring-white">
                  3
                </span>
              </div>
              Requests
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all bg-[#fb4b4e] rounded-full shadow-[0_4px_14px_0_rgba(251,75,78,0.39)] hover:bg-[#d10000] hover:shadow-[0_6px_20px_rgba(209,0,0,0.23)] active:scale-95">
              Find Match
            </button>

            <div className="hidden sm:block h-8 w-px bg-[#ffcbdd]/60"></div>

            {/* Profile Avatar & Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 focus:outline-none group"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
              >
                <div
                  className={`relative p-0.5 rounded-full transition-all ${
                    isProfileOpen
                      ? "bg-linear-to-tr from-[#fb4b4e] to-[#7c0b2b] shadow-md"
                      : "bg-transparent group-hover:bg-linear-to-tr group-hover:from-[#fb4b4e] group-hover:to-[#7c0b2b] group-hover:shadow-md"
                  }`}
                >
                  <img
                    src={
                      userData?.profile ||
                      "https://i.pinimg.com/236x/47/29/8f/47298fa216d3b8589663aaabbd0fef80.jpg"
                    }
                    alt="Profile"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl border border-[#ffcbdd]/60 rounded-2xl shadow-lg py-2 z-50 transform opacity-100 scale-100 transition-all origin-top-right">
                  <div className="px-4 py-2 border-b border-[#ffcbdd]/40 mb-1">
                    <p className="text-sm font-semibold text-[#3e000c]">
                      {userData?.firstName} {userData?.lastName}
                    </p>
                    <p className="text-xs text-[#7c0b2b]/70">
                      {userData?.emailId}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDropdownNavigation("/profile")}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-[#3e000c]/80 hover:bg-[#ffcbdd]/30 hover:text-[#7c0b2b] transition-colors"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => handleDropdownNavigation("/settings")}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-[#3e000c]/80 hover:bg-[#ffcbdd]/30 hover:text-[#7c0b2b] transition-colors"
                  >
                    Settings
                  </button>

                  <div className="h-px bg-[#ffcbdd]/40 my-1"></div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-[#d10000] hover:bg-[#ffcbdd]/30 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden flex items-center justify-center p-2 rounded-full text-[#3e000c]/70 hover:bg-[#ffcbdd]/40 hover:text-[#3e000c] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
