import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const ConnectionsPage = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections.connections);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await axios.get(BASE_URL + "/user/connections", {
          withCredentials: true,
        });
        dispatch(addConnections(res.data));
      } catch (err) {
        console.error(err.message);
      }
    };
    if (!connections) fetchConnections();
  }, [dispatch, connections]);
  return (
    // FULL-BLEED WRAPPER: Holds the background and the absolute-positioned orbs
    <div className="relative h-[calc(100vh-80px)] w-full bg-slate-50 overflow-hidden">
      {/* Architectural Grid - Bumped opacity to 1a for more visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e000c1a_1px,transparent_1px),linear-gradient(to_bottom,#3e000c1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      {/* ========================================================================= */}
      {/* BACKGROUND MESH ORBS (Brick & Bordeaux Combo)                             */}
      {/* ========================================================================= */}
      {/* Top Left: Pastel Petal glow - keeps the airy, light foundation */}
      <div className="absolute -top-[15%] -left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#ffcbdd] opacity-70 blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* Bottom Right: Brick Ember - a deeper, truer red for a more grounded accent */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d10000] opacity-15 blur-[150px] pointer-events-none mix-blend-multiply"></div>

      {/* Center: Night Bordeaux - a very faint, deep shadow to elegantly bridge the two */}
      <div className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-[#3e000c] opacity-[0.04] blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT CONTAINER (Z-INDEX LIFTED ABOVE ORBS)                        */}
      {/* ========================================================================= */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex gap-6 p-4 md:p-6">
        {/* ---------------------------------------------------------------------- */}
        {/* LEFT PANEL: The "Master" List                                          */}
        {/* ---------------------------------------------------------------------- */}
        <div className="w-full md:w-80 lg:w-96 bg-white/80 backdrop-blur-xl border border-[#3e000c]/30 rounded-[2rem] flex flex-col overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* The Goldilocks spacing: px-6 pt-6 pb-5 */}
          <div className="px-6 pt-6 pb-5 border-b border-[#3e000c]/10">
            {/* The Goldilocks spacing: mb-4 */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-serif tracking-tight text-[#3e000c] ">
                Connections
              </h2>

              <div className="flex gap-2 items-center">
                <span className="bg-white/50 border border-[#3e000c]/20 text-[#3e000c]/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {connections?.length || 0} Total
                </span>
                <span className="bg-[#ffcbdd]/40 border border-[#3e000c] text-[#3e000c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  2 Unread
                </span>
              </div>
            </div>

            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 absolute left-4 top-3.5 text-[#3e000c]/50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search network..."
                className="w-full bg-white/50 border border-[#3e000c] rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb4b4e]/20 transition-all placeholder:text-[#3e000c]/40 text-[#3e000c]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {connections?.map((user, i) => (
              <div
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#3e000c] cursor-pointer transition-all shadow-sm"
                key={i}
              >
                <div className="relative">
                  <img
                    className="w-12 h-12 rounded-full object-cover border border-[#3e000c]"
                    src={
                      user.profile ||
                      "https://i.pinimg.com/236x/47/29/8f/47298fa216d3b8589663aaabbd0fef80.jpg"
                    }
                    alt="avatar"
                  />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#fb4b4e] rounded-full border border-[#3e000c]"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="font-medium tracking-tight text-[#3e000c] truncate text-sm">
                      {user.firstName} {user.lastName}
                    </h3>
                    <span className="text-[10px] text-[#3e000c]/60 font-bold uppercase tracking-wider">
                      1m
                    </span>
                  </div>
                  <p className="text-xs text-[#3e000c]/70 truncate font-medium">
                    Sent an attachment
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------------- */}
        {/* RIGHT PANEL: The "Detail" View (Active Chat Hub)                       */}
        {/* ---------------------------------------------------------------------- */}
        <div className="hidden md:flex flex-1 bg-white/80 backdrop-blur-xl border border-[#3e000c]/30 rounded-[2rem] flex-col overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
          <div className="px-5 py-3 border-b border-[#3e000c]/10 flex items-center justify-between z-10 bg-white/40 backdrop-blur-md">
            <div className="group flex items-center gap-4 cursor-pointer hover:bg-[#ffcbdd]/40 p-2 rounded-2xl transition-colors -ml-2">
              <img
                className="w-10 h-10 rounded-full object-cover border border-[#3e000c]"
                src="https://i.pravatar.cc/150?img=32"
                alt="Jane Doe"
              />
              <div>
                <h2 className="text-lg font-medium tracking-tight text-[#3e000c] group-hover:text-[#fb4b4e] leading-none mb-1">
                  Jane Doe
                </h2>
                <p className="text-xs text-[#3e000c]/60">
                  Frontend Architect • TechCorp
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2.5 text-[#3e000c]/60 hover:text-[#fb4b4e] hover:bg-[#fb4b4e]/10 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-transparent">
            <div className="flex items-center justify-center">
              <span className="bg-white/80 backdrop-blur-sm border border-[#3e000c] text-[#3e000c] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Today, 10:24 AM
              </span>
            </div>

            <div className="flex items-end gap-2 max-w-[80%]">
              <img
                className="w-6 h-6 rounded-full mb-1 border border-[#3e000c]"
                src="https://i.pravatar.cc/150?img=32"
                alt="Jane"
              />
              <div className="bg-white border border-[#3e000c] text-[#3e000c] px-5 py-3.5 rounded-2xl rounded-bl-sm shadow-sm text-sm leading-relaxed">
                Those mesh orbs completely change the vibe. It looks so much
                more alive now!
              </div>
            </div>

            <div className="flex items-end gap-2 flex-row-reverse self-end max-w-[80%]">
              <div className="bg-[#7c0b2b] border border-[#3e000c] text-white px-5 py-3.5 rounded-2xl rounded-br-sm shadow-[2px_2px_0px_0px_rgba(62,0,12,1)] text-sm leading-relaxed">
                Right? The way the colors bleed through the frosted glass is
                chef's kiss. 🤌
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-white/90 backdrop-blur-2xl border-2 border-[#3e000c] p-1.5 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(62,0,12,0.3)] flex items-end gap-2 transition-all">
              <button className="p-3 text-[#3e000c]/60 hover:text-[#fb4b4e] hover:bg-[#fb4b4e]/10 rounded-full transition-colors shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
              </button>

              <textarea
                rows="1"
                placeholder="Write a message..."
                className="flex-1 max-h-32 bg-transparent border-none focus:outline-none text-sm font-medium text-[#3e000c] py-3.5 resize-none placeholder:text-[#3e000c]/40"
              />

              <button className="bg-[#3e000c] hover:bg-[#fb4b4e] text-white rounded-full p-3 m-0.5 transition-colors shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsPage;
