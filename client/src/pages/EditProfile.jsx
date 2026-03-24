import React, { useState } from "react";

const EditProfile = () => {
  // Using state to make the skills and UI feel interactive out of the box
  const [skills, setSkills] = useState([
    "Node.js",
    "JSX",
    "Tailwind CSS",
    "System Design",
    "Directing",
    "Pre-production",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const user = {
    firstName: "Alex",
    lastName: "Jonathan",
    headline: "Backend Developer | Visual Storyteller & Director",
    location: "Los Angeles, CA",
    profile:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    coverPhoto:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop",
    about:
      "Passionate about building scalable backends and creating rich UIs with JSX and Tailwind CSS. When I'm off the keyboard, you can usually find me behind a lens, exploring cinematic software and directing short films to bring stories to life.",
    vibe: {
      lookingFor: "Open source collaborators 🤝",
      listeningToTrack: "Cornfield Chase",
      listeningToArtist: "Hans Zimmer",
      statusColor: "bg-[#fb4b4e]",
    },
    prompts: [
      {
        question: "My most irrational fear...",
        answer:
          "Accidentally pushing a breaking database migration during a film premiere.",
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
    ],
  };

  return (
    <div className="min-h-screen relative py-8 px-4 sm:px-8 font-sans text-[#3e000c] selection:bg-[#ffcbdd] selection:text-[#3e000c] flex justify-center items-start overflow-hidden bg-[#fdfafb] pb-32">
      {/* === INNOVATIVE BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e000c1a_1px,transparent_1px),linear-gradient(to_bottom,#3e000c1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffcbdd] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fb4b4e] rounded-full mix-blend-multiply filter blur-[150px] opacity-15"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f8e9ed] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"></div>
      </div>

      {/* === MAIN CONTENT WRAPPER === */}
      <div className="max-w-[1280px] w-full space-y-6 relative z-10">
        {/* HEADER */}
        <div className="w-full flex justify-between items-end px-2">
          <div>
            <h1 className="text-3xl font-medium text-[#3e000c] tracking-tight">
              Your Canvas
            </h1>
            <p className="text-[#3e000c]/60 mt-1 text-sm font-medium">
              Click any dashed element to edit your profile directly.
            </p>
          </div>

          {/* NEW: PREVIEW IN FEED BUTTON */}
          <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#3e000c] bg-[#ffcbdd]/40 hover:bg-[#ffcbdd] px-5 py-2 rounded-full border border-[#3e000c] transition-all duration-300 shadow-[2px_2px_0_#3e000c] hover:shadow-[4px_4px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0_#3e000c]">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Preview in Feed
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
          {/* LEFT COLUMN: Identity & Vibe Ticket */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Box 1: Compact Identity Block */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-[22px] flex flex-col w-full shadow-sm">
              <h3 className="text-xl font-medium tracking-tight text-[#3e000c] leading-none mb-5 mt-1.5">
                Identity
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="relative group/avatar cursor-pointer shrink-0 mt-1">
                  <div className="w-16 h-16 rounded-full border border-[#3e000c]/20 overflow-hidden bg-white shadow-sm group-hover/avatar:border-[#fb4b4e] transition-colors">
                    <img
                      src={user.profile}
                      alt={user.firstName}
                      className="w-full h-full object-cover group-hover/avatar:opacity-40 transition-opacity"
                    />
                  </div>
                </div>
                <div className="flex-1 w-full min-w-0 flex flex-col gap-1">
                  <input
                    type="text"
                    defaultValue={user.firstName}
                    className="text-lg font-medium text-[#3e000c] tracking-tight leading-none bg-transparent border-b border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none w-full px-1 -ml-1 truncate"
                  />
                  <input
                    type="text"
                    defaultValue={user.lastName}
                    className="text-lg font-medium text-[#3e000c] tracking-tight leading-none bg-transparent border-b border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none w-full px-1 -ml-1 truncate"
                  />
                  <input
                    type="text"
                    defaultValue={user.location}
                    className="text-[10px] font-bold tracking-widest uppercase text-[#3e000c]/50 bg-transparent border-b border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none w-full px-1 -ml-1 mt-1"
                  />
                </div>
              </div>
              <textarea
                rows="2"
                defaultValue={user.headline}
                className="text-[#3e000c] text-sm font-medium leading-relaxed w-full bg-[#fff5f7]/50 border border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none rounded-xl p-3 resize-none"
              />
            </div>

            {/* Box 2: Vibe Ticket */}
            <div className="border border-[#3e000c] rounded-[2rem] bg-transparent relative flex flex-col w-full flex-1 shadow-sm transition-all duration-500 group">
              {/* Ticket Top Half */}
              <div className="bg-[#fff5f7] backdrop-blur-sm rounded-t-[2rem] p-6 pb-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
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
                  <input
                    type="text"
                    defaultValue={user.vibe.lookingFor}
                    className="text-base font-medium text-[#3e000c] leading-tight bg-white/60 w-full px-2 py-1 -ml-2 rounded-md backdrop-blur-sm border border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none"
                  />
                </div>
              </div>

              {/* Ticket Divider Row */}
              <div className="relative h-0 w-full flex items-center z-20">
                <div className="absolute left-[-1px] w-5 h-8 bg-[#fdfafb] rounded-r-full border border-[#3e000c] border-l-0"></div>
                <div className="w-full border-t-2 border-dashed border-[#3e000c]/20"></div>
                <div className="absolute right-[-1px] w-5 h-8 bg-[#fdfafb] rounded-l-full border border-[#3e000c] border-r-0"></div>
              </div>

              {/* Ticket Bottom Half */}
              <div className="p-6 pt-8 rounded-b-[2rem] bg-[#fff5f7] backdrop-blur-sm relative overflow-hidden mt-auto">
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <div className="relative z-10 text-[11px] font-black uppercase tracking-widest text-[#3e000c]/50 mb-6 flex justify-between items-center">
                  <span>On Repeat</span>
                </div>
                <div className="relative z-10 flex justify-between items-end gap-2">
                  <div className="flex flex-col min-w-0 w-full gap-1">
                    <input
                      type="text"
                      defaultValue={user.vibe.listeningToTrack}
                      className="text-2xl sm:text-3xl font-medium tracking-tighter leading-none text-[#3e000c] truncate bg-transparent border-b border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none w-full pb-1"
                    />
                    <input
                      type="text"
                      defaultValue={user.vibe.listeningToArtist}
                      className="text-xs font-bold text-[#3e000c]/60 truncate italic bg-transparent border-b border-dashed border-transparent focus:border-[#fb4b4e] focus:outline-none w-3/4 pb-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Cover & Skills */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Box 3: Cover Photo */}
            <div className="relative border border-[#3e000c] rounded-[2rem] overflow-hidden flex flex-col justify-end flex-1 group/cover bg-[#f8e9ed] min-h-[300px]">
              <img
                src={user.coverPhoto}
                alt="Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover/cover:opacity-50 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity pointer-events-none z-20">
                <span className="bg-white/90 text-[#3e000c] text-xs px-4 py-2 rounded-full font-bold shadow-lg border border-[#3e000c]">
                  Update Cover
                </span>
              </div>
            </div>

            {/* Box 4: Skills Editable Bento */}
            <div className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col shrink-0">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-medium tracking-tight text-[#3e000c]">
                  Skills & Interests
                </h3>
                <span className="text-[10px] uppercase font-bold text-[#3e000c]/50 tracking-wider">
                  Edit Mode
                </span>
              </div>

              <div className="flex flex-wrap items-start gap-2 mt-auto">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative px-3 py-1.5 bg-[#ffcbdd]/30 border border-[#3e000c] rounded-full text-xs font-semibold text-[#3e000c] cursor-pointer hover:bg-[#fb4b4e] hover:text-white transition-all duration-300"
                  >
                    {skill}
                    <div
                      onClick={() => removeSkill(skill)}
                      className="absolute -top-1 -right-1 bg-[#3e000c] text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                ))}

                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={handleAddSkill}
                  placeholder="+ Add (Press Enter)"
                  className="px-3 py-1.5 bg-transparent border border-dashed border-[#3e000c]/40 rounded-full text-xs font-semibold text-[#3e000c] focus:outline-none focus:border-[#fb4b4e] w-36"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Free Flowing Prompt & Bio (Finely Tuned Split) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center py-4 px-6 sm:px-12 h-full overflow-hidden">
            <div className="flex flex-col justify-center flex-1 relative z-10 w-full h-full">
              <div className="mb-1 flex justify-between items-center shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#3e000c] bg-[#ffcbdd]/40 text-[#3e000c] text-[10px] font-black uppercase tracking-widest transform -rotate-2">
                  Edit Prompt ✨
                </span>
                <svg
                  className="w-4 h-4 text-[#3e000c]/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              <textarea
                rows="2"
                defaultValue={user.prompts[0].question}
                className="text-4xl lg:text-5xl font-medium tracking-tighter text-[#3e000c] leading-[1.05] mb-1 bg-transparent border-b border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none w-full pb-1 transition-colors resize-none shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              />

              <div className="flex gap-4 items-start mb-2 shrink-0">
                <span className="text-6xl text-[#ffcbdd] font-serif leading-none pt-2 opacity-80 shrink-0">
                  "
                </span>
                {/* INCREASED to 4 rows for a bit more breathing room */}
                <textarea
                  rows="4"
                  defaultValue={user.prompts[0].answer}
                  className="w-full text-2xl sm:text-[1.75rem] text-[#3e000c] font-serif italic leading-tight mt-2 bg-transparent border border-dashed border-transparent hover:border-[#3e000c]/20 focus:border-[#fb4b4e] focus:outline-none rounded-xl p-2 -ml-2 resize-none transition-colors [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                />
              </div>

              <div className="mt-auto pt-0 pb-2 shrink-0">
                <svg
                  className="w-16 h-3 mb-2 text-[#fb4b4e] opacity-80"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="square"
                >
                  <path d="M0 10 L 30 10 M 40 10 L 100 10" />
                </svg>

                <div className="flex flex-col max-w-md">
                  <span className="text-[#3e000c] font-bold block mb-1">
                    About Me //
                  </span>
                  {/* DECREASED to 7 rows to perfectly offset the height change above */}
                  <textarea
                    rows="7"
                    defaultValue={user.about}
                    className="text-base lg:text-lg font-medium text-[#3e000c]/80 leading-relaxed w-full bg-transparent border border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none rounded-xl p-2 -ml-2 resize-none transition-colors [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  />
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#3e000c]/50">
                Hover to remove, click empty to add
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              <div className="aspect-square rounded-2xl border-2 border-dashed border-[#3e000c]/30 flex flex-col items-center justify-center cursor-pointer hover:border-[#fb4b4e] hover:bg-[#fb4b4e]/5 transition-all group">
                <svg
                  className="w-8 h-8 text-[#3e000c]/40 group-hover:text-[#fb4b4e] mb-1 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-[10px] font-bold text-[#3e000c]/50 group-hover:text-[#fb4b4e] uppercase tracking-wider">
                  Upload
                </span>
              </div>

              {user.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl border border-[#3e000c] overflow-hidden group relative bg-gray-100 cursor-pointer"
                >
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-[#fb4b4e] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ACTION BAR */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-2xl border-2 border-[#3e000c] p-2 rounded-full shadow-[0_20px_40px_-15px_rgba(62,0,12,0.3)] flex items-center gap-2 z-50">
        <button className="px-6 py-3 text-sm font-bold text-[#3e000c]/60 hover:text-[#fb4b4e] hover:bg-[#fb4b4e]/10 rounded-full transition-colors uppercase tracking-wider">
          Discard
        </button>
        <button className="bg-[#3e000c] hover:bg-[#fb4b4e] text-white px-8 py-3 rounded-full font-bold text-sm transition-all active:scale-95 uppercase tracking-wider flex items-center gap-2">
          Save Canvas
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
