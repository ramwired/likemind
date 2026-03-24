import { useNavigate, Link } from "react-router-dom";

const LandingNavbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-[#ffcbdd]/50 shadow-[0_4px_30px_rgba(255,203,221,0.1)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Brand/Logo */}
          <Link
            to="/"
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

          {/* Center: "Floating Island" Links (Pure Tailwind) */}
          <div className="hidden md:flex items-center bg-[#ffcbdd]/10 border border-[#ffcbdd]/30 rounded-full px-2 py-1.5 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-[15px] font-bold text-[#3e000c]/80 hover:text-[#7c0b2b] hover:bg-[#ffcbdd]/40 rounded-full transition-all duration-300 ease-out"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Authentication Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-6">
              <button
                onClick={() => navigate("/login")}
                className="text-[15px] font-bold text-[#3e000c] hover:text-[#fb4b4e] transition-colors active:scale-95"
              >
                Log In
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="px-7 py-2.5 text-[15px] font-bold text-[#fb4b4e] bg-transparent border-2 border-[#fb4b4e] hover:bg-[#fb4b4e] hover:text-white rounded-full transition-all duration-300 active:scale-95"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button className="md:hidden flex items-center justify-center p-2.5 rounded-full bg-[#ffcbdd]/20 text-[#3e000c] hover:bg-[#ffcbdd]/40 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
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

export default LandingNavbar;
