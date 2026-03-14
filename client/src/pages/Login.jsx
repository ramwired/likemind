import React from "react";

const Login = () => {
  return (
    <div className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex bg-[#fafafa] font-sans px-3 pb-3 lg:px-4 lg:pb-4 overflow-hidden">
      {/* LEFT SIDE - Gallery Wall & Horizontal Framed Art */}
      <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative px-8">
        {/* ... rest of your left side code ... */}
        {/* The Larger, Horizontal "Photo Frame" */}
        {/* Increased width to 100% of container and max-w-2xl to fix gaps */}
        <div className="relative w-full max-w-2xl aspect-4/3 bg-white p-5 lg:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex flex-col rounded-sm transition-transform duration-500 hover:scale-[1.01]">
          {/* Inner Matte Edge & Art Container */}
          <div className="relative w-full grow border border-gray-200 bg-[#3e000c] overflow-hidden shadow-inner">
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="#111" strokeWidth="3" strokeLinejoin="miter">
                {/* --- LARGE BACKGROUND PLANES --- */}
                {/* Colors perfectly matched to your SCSS palette */}
                <polygon points="0,0 600,0 400,400 0,600" fill="#7c0b2b" />{" "}
                {/* dark-amaranth */}
                <polygon
                  points="600,0 1000,0 1000,500 700,300"
                  fill="#d10000"
                />{" "}
                {/* brick-ember */}
                <polygon
                  points="1000,500 1000,1000 400,1000 600,700"
                  fill="#fb4b4e"
                />{" "}
                {/* strawberry-red */}
                <polygon
                  points="0,600 400,1000 0,1000"
                  fill="#ffcbdd"
                  opacity="0.1"
                />{" "}
                {/* pastel-petal */}
                {/* --- THE FRACTURED PORTRAIT --- */}
                <polygon
                  points="250,150 450,180 500,500 300,550"
                  fill="#ffcbdd"
                />
                <polygon
                  points="300,550 500,500 450,850 200,800"
                  fill="#fb4b4e"
                />
                <polygon points="450,180 600,350 500,500" fill="#d10000" />
                {/* Focal Eye 1 */}
                <g transform="translate(350, 320)">
                  <path d="M -60,0 Q 0,-40 60,0 Q 0,40 -60,0 Z" fill="white" />
                  <circle cx="10" cy="0" r="22" fill="#3e000c" />{" "}
                  {/* night-bordeaux */}
                  <circle cx="18" cy="-8" r="6" fill="white" stroke="none" />
                </g>
                {/* Right Side Fragment */}
                <polygon
                  points="500,200 750,250 800,600 550,650"
                  fill="#7c0b2b"
                />
                <polygon
                  points="550,650 800,600 700,900 450,850"
                  fill="#3e000c"
                />
                {/* Focal Eye 2 */}
                <g transform="translate(680, 420) rotate(-15)">
                  <ellipse cx="0" cy="0" rx="45" ry="25" fill="#ffcbdd" />
                  <circle cx="0" cy="0" r="15" fill="#d10000" />
                  <path
                    d="M -45,0 Q 0,-30 45,0"
                    fill="none"
                    stroke="#111"
                    strokeWidth="4"
                  />
                </g>
                {/* Abstract Mouth / Lips Fragment */}
                <path
                  d="M 400,700 Q 480,640 560,700 Q 480,740 400,700"
                  fill="#ffcbdd"
                />
                <line x1="400" y1="700" x2="560" y2="700" strokeWidth="4" />
                {/* Dramatic Intersection Lines */}
                <line
                  x1="500"
                  y1="0"
                  x2="500"
                  y2="1000"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                />
                <line
                  x1="0"
                  y1="500"
                  x2="1000"
                  y2="500"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                />
                {/* Highlight accents */}
                <circle
                  cx="150"
                  cy="150"
                  r="40"
                  fill="#fb4b4e"
                  opacity="0.5"
                  stroke="none"
                />
                <rect
                  x="800"
                  y="800"
                  width="80"
                  height="80"
                  fill="#ffcbdd"
                  opacity="0.2"
                  stroke="none"
                  transform="rotate(45 840 840)"
                />
              </g>
            </svg>
          </div>

          {/* Gallery Plaque / Signature */}
          <div className="w-full text-center mt-3">
            <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">
              To be seen is the deepest human hunger.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      {/* Shifted slightly left by reducing lg:p-6 to lg:pl-0 to close center gap */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 lg:pr-12 lg:pl-0 relative bg-[#fafafa]">
        <div className="w-full max-w-sm">
          <div className="mb-5 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-[#3e000c] mb-1">
              Welcome back
            </h2>
            <p className="text-sm text-[#7c0b2b]/80 font-medium">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-[#111] rounded-xl hover:bg-[#ffcbdd]/20 transition-all text-[#3e000c] font-black text-sm shadow-[3px_3px_0px_0px_#111] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_#111]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
              Google
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t-2 border-[#111]/10"></div>
            </div>
            <div className="relative px-3 bg-[#fafafa] text-xs font-black text-[#7c0b2b]/60 uppercase tracking-wider">
              Or
            </div>
          </div>

          <form className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-[#3e000c] mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#111]/20 bg-white text-[#3e000c] text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-[#fb4b4e] transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3e000c] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#111]/20 bg-white text-[#3e000c] text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-0 focus:border-[#fb4b4e] transition-all font-medium"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#fb4b4e] focus:ring-[#fb4b4e] border-2 border-[#111]/30 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs font-bold text-[#7c0b2b]/80 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <div className="text-xs">
                <a
                  href="#"
                  className="font-bold text-[#fb4b4e] hover:text-[#d10000] transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-3 flex justify-center py-3 px-4 rounded-xl border-2 border-[#111] shadow-[3px_3px_0px_0px_#111] text-sm font-black text-white bg-[#fb4b4e] hover:bg-[#d10000] focus:outline-none transition-all active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_0px_#111] uppercase tracking-wide"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-center text-xs font-bold text-[#7c0b2b]/80">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-black text-[#fb4b4e] hover:text-[#d10000] transition-colors ml-1 underline decoration-2 underline-offset-4"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
