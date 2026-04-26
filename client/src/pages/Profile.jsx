import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { logout } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeConnections } from "../utils/connectionSlice";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const user = {
    firstName: "Bukayo",
    lastName: "Saka",
    emailId: "saka@example.com",
    headline: "MERN Stack Developer | UI/UX Enthusiast",
    age: 24,
    gender: "male",
    location: "London, UK",
    profile:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    coverPhoto:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop",
    about:
      "I’m someone who values growth, consistency, and learning at a deep level. I enjoy building things, solving problems, and improving systems step by step. I focus on discipline and clarity while staying curious about new ideas. I believe progress comes from small, consistent actions, and I’m always working toward becoming more skilled, thoughtful, and effective in everything I do.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Figma"],
    vibe: {
      lookingFor: "Open source collaborators 🤝",
      listeningTo: "Starboy - The Weeknd",
      statusColor: "bg-[#fb4b4e]",
    },
    prompts: [
      {
        question: "You handle challenges with quiet confidence",
        answer:
          "Focus daily, learn constantly, and act with intent; small steps build lasting success over time now.",
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop",
    ],
  };

  const handleLogout = async () => {
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
    <div className="min-h-screen relative py-8 px-4 sm:px-8 font-sans text-[#3e000c] selection:bg-[#ffcbdd] selection:text-[#3e000c] flex justify-center items-start overflow-hidden bg-[#fdfafb]">
      {/* === INNOVATIVE BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Architectural Grid - Bumped opacity to 1a for more visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e000c1a_1px,transparent_1px),linear-gradient(to_bottom,#3e000c1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Glowing Mesh Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffcbdd] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fb4b4e] rounded-full mix-blend-multiply filter blur-[150px] opacity-15"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f8e9ed] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"></div>
      </div>

      {/* === MAIN CONTENT WRAPPER === */}
      <div className="max-w-[1280px] w-full space-y-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
          {/* LEFT COLUMN: Controls & Vibe Ticket */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Box 1: Actions Control Panel */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-[22px] flex flex-col w-full h-auto">
              <div className="mb-5 mt-1.5">
                <h3 className="text-xl font-medium tracking-tight text-[#3e000c]">
                  Preferences
                </h3>
              </div>

              <div className="flex flex-col gap-[11px]">
                {/* Primary Action Button */}
                <button
                  className="group w-full flex items-center justify-between px-[18px] py-[11px] rounded-xl border border-[#3e000c] bg-[#ffcbdd]/40 hover:bg-[#3e000c]/80 hover:text-[#ffcbdd] text-sm font-medium text-[#3e000c] transition-all duration-300 active:translate-x-0.5 active:translate-y-0.5"
                  onClick={() => navigate("/edit")}
                >
                  <span>Edit Profile</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                {/* Secondary Action Button */}
                <button className="w-full flex items-center gap-3 px-[18px] py-[11px] rounded-xl border border-transparent hover:border-[#3e000c] hover:bg-[#fff5f7] text-sm font-medium text-[#3e000c]/70 hover:text-[#3e000c] transition-colors">
                  <svg
                    className="w-4 h-4 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  Change Password
                </button>
              </div>

              <div className="w-full h-[1px] bg-[#3e000c]/20 my-[18px]"></div>

              {/* Danger Action Button */}
              <button
                className="w-full flex items-center gap-3 px-[18px] py-2.5 text-sm font-bold text-[#3e000c]/50 hover:text-[#fb4b4e] hover:bg-[#fff5f7] rounded-xl transition-colors"
                onClick={handleLogout}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Log out
              </button>
            </div>

            {/* Box 2: Vibe Ticket */}
            <div className="border border-[#3e000c] rounded-[2rem] bg-transparent relative flex flex-col w-full flex-1 shadow-sm hover:shadow-md transition-all duration-500 group">
              {/* Ticket Top Half */}
              <div className="bg-[#fff5f7] backdrop-blur-sm rounded-t-[2rem] p-6 pb-8 relative overflow-hidden">
                {/* --- DOT MATRIX BACKGROUND --- */}
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <h2 className="text-4xl font-medium tracking-tighter leading-[1.1] text-[#3e000c]">
                    Current
                    <br />
                    vibe
                  </h2>
                  <span className="bg-white border border-[#3e000c] text-[#3e000c] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-1.5 shrink-0 ml-2 shadow-[2px_2px_0_#3e000c]">
                    <span
                      className={`w-2 h-2 rounded-full ${user.vibe.statusColor} animate-pulse`}
                    ></span>
                    LIVE
                  </span>
                </div>
                <div className="relative z-10 mt-2">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#3e000c]/50 leading-tight mb-1">
                    Looking for:
                  </p>
                  <p className="text-lg font-medium text-[#3e000c] leading-tight bg-white/60 inline-block px-2 py-0.5 -ml-2 rounded-md backdrop-blur-sm">
                    {user.vibe.lookingFor}
                  </p>
                </div>
              </div>

              {/* Ticket Divider Row */}
              <div className="relative h-0 w-full flex items-center z-20">
                <div className="absolute left-[-1px] w-5 h-8 bg-[#fdfafb] rounded-r-full border border-[#3e000c] border-l-0"></div>
                <div className="w-full border-t-2 border-dashed border-[#3e000c]/20"></div>
                <div className="absolute right-[-1px] w-5 h-8 bg-[#fdfafb] rounded-l-full border border-[#3e000c] border-r-0"></div>
              </div>

              {/* Ticket Bottom Half */}
              <div className="p-6 pt-8 rounded-b-[2rem] bg-[#fff5f7] backdrop-blur-sm mt-auto relative overflow-hidden">
                {/* --- DOT MATRIX BACKGROUND --- */}
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                {/* Content */}
                <div className="relative z-10 text-[11px] font-black uppercase tracking-widest text-[#3e000c]/50 mb-6">
                  <span>On Repeat</span>
                </div>
                <div className="relative z-10 flex justify-between items-end gap-2">
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-4xl sm:text-[2.5rem] font-medium tracking-tighter leading-none mb-1 text-[#3e000c] truncate">
                      {user.vibe.listeningTo.split(" - ")[0]}
                    </h4>
                    <p className="text-sm font-bold text-[#3e000c]/60 truncate italic">
                      {user.vibe.listeningTo.split(" - ")[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Avatar/Hero & Skills */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Box 3: Main Identity */}
            <div className="relative border border-[#3e000c] rounded-[2rem] overflow-hidden flex flex-col justify-end flex-1 group bg-[#f8e9ed] min-h-[300px]">
              <img
                src={user.coverPhoto}
                alt="Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 rounded-full border-2 border-white overflow-hidden bg-white shrink-0 shadow-lg">
                    <img
                      src={
                        userData?.profile ||
                        "https://i.pinimg.com/236x/47/29/8f/47298fa216d3b8589663aaabbd0fef80.jpg"
                      }
                      alt={user.firstName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-medium text-white tracking-tighter leading-none mb-1">
                      {userData?.firstName}
                    </h2>
                    <span className="text-sm font-bold tracking-widest uppercase text-white">
                      {user.age} yrs • {user.location.split(",")[0]}
                    </span>
                  </div>
                </div>
                <p className="text-white text-base font-medium leading-relaxed max-w-sm">
                  {user.headline}
                </p>
              </div>
            </div>

            {/* Box 4: Skills & Interests Bento (Vertical Stack Strategy) */}
            <div
              onClick={() => setIsSkillsExpanded(true)}
              className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col shrink-0 h-[183px] cursor-pointer group hover:bg-[#fff5f7] hover:shadow-[4px_4px_0_#3e000c] transition-all duration-300 relative"
            >
              {/* THE FIX: Changed to items-start and added a container to stack title/subtitle */}
              <div className="flex justify-between items-start mb-5 shrink-0">
                <div className="flex items-center gap-3">
                  {/* Your adament bracket size - perfectly centered with the first line of text */}
                  <div className="flex items-center font-mono text-[#fb4b4e] shrink-0">
                    <span className="text-[28px] opacity-40 font-light leading-none -translate-y-[2px]">
                      {"{"}
                    </span>
                    <span className="font-black text-lg mx-1.5 leading-none">
                      {(userData?.skills || user.skills).length}
                    </span>
                    <span className="text-[28px] opacity-40 font-light leading-none -translate-y-[2px]">
                      {"}"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium tracking-tight text-[#3e000c] group-hover:text-[#fb4b4e] transition-colors leading-none">
                      Skills & Interests
                    </h3>

                    {/* THE FIX: Sentence moved here to avoid horizontal "messiness" */}
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3e000c]/40 group-hover:text-[#fb4b4e] transition-colors flex items-center gap-1">
                      Click to view all
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact locked body code (Hard crop, renders all) */}
              <div className="flex flex-wrap content-start gap-2 w-full flex-1 overflow-hidden pointer-events-none">
                {(userData?.skills || user.skills).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#ffcbdd]/30 border border-[#3e000c]/50 rounded-full text-xs font-semibold text-[#3e000c] whitespace-nowrap mb-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Free Flowing Prompt & Bio (Maximized Space) */}
          <div className="lg:col-span-5 relative flex flex-col h-full overflow-hidden">
            <div className="flex flex-col flex-1 relative z-10 w-full h-full pt-6 pb-0 px-6 sm:px-12 gap-8">
              {/* TOP SECTION: Prompt */}
              {/* THE FIX: Locked height to exactly 280px (or 320px on desktop) so it NEVER stretches the grid. */}
              <div className="flex flex-col shrink-0 h-[280px] lg:h-[320px]">
                <div className="mb-2 shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#3e000c] bg-[#ffcbdd]/40 text-[#3e000c] text-[10px] font-black uppercase tracking-widest transform -rotate-2">
                    Featured Prompt ✨
                  </span>
                </div>

                {/* Added line-clamp-3 as a failsafe for the 40-character limit */}
                <h2 className="text-4xl lg:text-[2.60rem] font-serif tracking-tighter text-[#3e000c] leading-[1.05] mb-1 pb-1 shrink-0 line-clamp-3">
                  {user.prompts[0].question.replace("...", "")}
                  <span className="text-[#fb4b4e]">...</span>
                </h2>

                <div className="flex gap-4 items-start shrink-0 mt-2">
                  <span className="text-6xl text-[#ffcbdd] font-serif leading-none pt-2 opacity-80 shrink-0">
                    "
                  </span>
                  {/* Added line-clamp-4 as a failsafe for the 100-character limit */}
                  <p className="w-full text-2xl sm:text-[1.75rem] text-[#3e000c] font-serif italic leading-tight mt-2 p-2 -ml-2 bg-transparent line-clamp-4">
                    {user.prompts[0].answer}
                  </p>
                </div>
              </div>

              {/* BOTTOM SECTION: About Me */}
              {/* THE FIX: Replaced the massive mt-16 with mt-2. The locked height of the section above now provides all the necessary spacing automatically! */}
              <div className="flex flex-col flex-1 min-h-0 mt-2">
                <svg
                  className="w-16 h-3 mb-2 text-[#fb4b4e] opacity-80 shrink-0"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="square"
                >
                  <path d="M0 10 L 30 10 M 40 10 L 100 10" />
                </svg>

                <div className="flex flex-col flex-1 min-h-0 max-w-md">
                  <span className="text-[#3e000c] font-bold block mb-1 shrink-0">
                    About Me //
                  </span>
                  <p className="text-base lg:text-lg font-medium text-[#3e000c]/80 leading-relaxed w-full p-2 -ml-2 pr-4 max-h-[220px] overflow-y-auto bg-transparent [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#3e000c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#3e000c]/40 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {user.about}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === FULL-WIDTH GALLERY ROW === */}
          <div className="lg:col-span-12 bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col gap-5 mt-2">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-2xl font-medium tracking-tight text-[#3e000c] leading-none">
                Camera Roll
              </h3>
              <span className="bg-[#ffcbdd]/40 border border-[#3e000c] text-[#3e000c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                8 Photos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {user.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl border border-[#3e000c] overflow-hidden group bg-gray-100 cursor-pointer"
                >
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === SPATIAL MORPH MODAL (Expanded Skills Panel) === */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${
          isSkillsExpanded ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isSkillsExpanded
              ? "bg-[#3e000c]/30 backdrop-blur-md"
              : "bg-transparent backdrop-blur-none"
          }`}
          onClick={() => setIsSkillsExpanded(false)}
        ></div>

        <div
          className={`relative w-fit min-w-[320px] sm:min-w-[400px] max-w-3xl bg-white border-2 border-[#3e000c] rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(62,0,12,0.4)] transform-gpu transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isSkillsExpanded
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b-2 border-dashed border-[#3e000c]/20 pb-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-[#3e000c]">
                Skills Canvas
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fb4b4e] animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#3e000c]/50">
                  {(userData?.skills || user.skills).length} Confirmed Interests
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsSkillsExpanded(false)}
              className="w-12 h-12 bg-[#ffcbdd]/40 hover:bg-[#fb4b4e] text-[#3e000c] hover:text-white rounded-full flex items-center justify-center border border-[#3e000c] transition-all duration-300 shadow-[2px_2px_0_#3e000c] hover:shadow-[4px_4px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Full List of Skills */}
          <div className="flex flex-wrap gap-2.5 max-h-[60vh] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#3e000c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#3e000c]/40 [&::-webkit-scrollbar-thumb]:rounded-full">
            {(userData?.skills || user.skills).map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#f8e9ed] border border-[#3e000c] rounded-full text-sm font-semibold text-[#3e000c] hover:bg-[#3e000c] hover:text-[#ffcbdd] transition-all duration-300 cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
