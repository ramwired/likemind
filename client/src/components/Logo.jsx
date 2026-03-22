const Logo = () => {
  return (
    // Set to pt-4 (a little top spacing) and pb-0 (zero bottom spacing)
    <header className="w-full flex justify-center items-center bg-[#ffcbdd]/20 pt-4 pb-0">
      <div className="shrink-0 flex items-center cursor-pointer group relative">

        {/* Bigger Infinity Knot — centered with LikeMind */}
        <svg
          className="w-14 h-14 -mr-2 origin-center group-hover:scale-105 transition-transform duration-500 ease-out relative z-20"
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
              id="string-glow"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="1.6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Soft glow — subtle, not thick */}
          <path
            d="M12 20 C 4 12, 4 28, 12 20 C 20 12, 28 12, 28 20 C 28 28, 20 28, 12 20 Z"
            stroke="#fb4b4e"
            strokeWidth="2.4"
            strokeOpacity="0.22"
            filter="url(#string-glow)"
          />

          {/* Core knot — thin & crisp */}
          <path
            d="M12 20 C 4 12, 4 28, 12 20 C 20 12, 28 12, 28 20 C 28 28, 20 28, 12 20"
            stroke="#d10000"
            strokeWidth="1.2"
            className="group-hover:stroke-[#fb4b4e] transition-colors duration-300"
          />
        </svg>

        {/* Brand Text */}
        <span className="text-2xl font-black tracking-tighter text-[#3e000c] relative z-10">
          LikeMind
        </span>

      </div>
    </header>
  );
};

export default Logo;
