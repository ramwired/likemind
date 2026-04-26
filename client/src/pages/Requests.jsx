import React, { useState, useRef } from "react";

const Requests = () => {
  // Dummy data patterned after your Feed/Profile structures
  const [requests, setRequests] = useState([
    {
      id: "65a1b2c3d4e5",
      firstName: "Elena",
      lastName: "Rostova",
      headline: "Senior Backend Engineer | Rust & Go",
      age: 27,
      location: "Berlin, DE",
      profile:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      coverPhoto:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop",
      about:
        "I’m someone who values growth, consistency, and learning at a deep level. I enjoy building things, solving problems, and improving systems step by step. I focus on discipline and clarity while staying curious about new ideas. I believe progress comes from small, consistent actions, and I’m always working toward becoming more skilled, thoughtful, and effective in everything I do.",
      skills: ["Rust", "Go", "PostgreSQL", "Docker", "AWS", "Redis", "gRPC"],
      vibe: {
        lookingFor: "Frontend wizards 🪄",
        listeningTo: "Midnight City - M83",
        statusColor: "bg-[#fb4b4e]",
      },
      prompts: [
        {
          question: "You handle challenges with quiet confidence...",
          answer:
            "Focus daily, learn constantly, and act with intent; small steps build lasting success over time now",
        },
      ],
      photos: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
      ],
      mindSync: {
        badge: "High Synergy",
        headline: "Backend & Beats",
        insight:
          "You both share an obsession with robust database architecture and indie synth-pop.",
      },
      timeAgo: "2 hours ago",
    },
    {
      id: "65a1b2c3d4e6",
      firstName: "Marcus",
      lastName: "Chen",
      headline: "UI/UX Designer | Tools for Filmmakers",
      age: 25,
      location: "Toronto, CA",
      profile:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      coverPhoto:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
      about:
        "I’m someone who values growth, consistency, and learning at a deep level. I enjoy building things, solving problems, and improving systems step by step. I focus on discipline and clarity while staying curious about new ideas. I believe progress comes from small, consistent actions, and I’m always working toward becoming more skilled, thoughtful, and effective in everything I do.",
      skills: [
        "Figma",
        "Framer",
        "UI/UX",
        "CSS",
        "Storyboarding",
        "After Effects",
        "Prototyping",
      ],
      vibe: {
        lookingFor: "Creative devs 🎨",
        listeningTo: "Starboy - The Weeknd",
        statusColor: "bg-amber-400",
      },
      prompts: [
        {
          question: "You handle challenges with quiet confidence...",
          answer:
            "Focus daily, learn constantly, and act with intent; small steps build lasting success over time now",
        },
      ],
      photos: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=400&auto=format&fit=crop",
      ],
      mindSync: {
        badge: "Creative Pair",
        headline: "Builder / Designer",
        insight:
          "Statistically, devs with your stack highly rate collaborating with layout perfectionists like Marcus.",
      },
      timeAgo: "5 hours ago",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(requests[0] || null);

  // Ref for the scrollable container
  const scrollContainerRef = useRef(null);

  // Scroll handler for the buttons (smooth scrolling handled via JS, not CSS)
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // 400px card + 20px gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleReviewRequest = async (id, status) => {
    try {
      console.log(`Action: ${status} for user ${id}`);
      const updatedRequests = requests.filter((req) => req.id !== id);
      setRequests(updatedRequests);
      if (selectedUser?.id === id) {
        setSelectedUser(updatedRequests[0] || null);
      }
    } catch (error) {
      console.error("Failed to review request:", error);
    }
  };

  return (
    <div className="min-h-screen relative py-8 px-4 sm:px-8 font-sans text-[#3e000c] selection:bg-[#ffcbdd] selection:text-[#3e000c] flex flex-col items-center bg-[#fdfafb] overflow-hidden">
      {/* === INNOVATIVE BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e000c1a_1px,transparent_1px),linear-gradient(to_bottom,#3e000c1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffcbdd] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fb4b4e] rounded-full mix-blend-multiply filter blur-[150px] opacity-15"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f8e9ed] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"></div>
      </div>

      <div className="max-w-[1280px] w-full relative z-10 flex flex-col gap-6">
        {/* === ARCHITECTURAL HEADER === */}
        <div className="w-full mb-8 border-b-4 border-[#3e000c] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            {/* The Eyebrow: Establishes context with high-contrast micro-typography */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#fb4b4e]"></div>
              <span className="font-black uppercase tracking-[0.25em] text-[10px] text-[#3e000c]/60">
                Network Activity
              </span>
            </div>

            {/* The Anchor: Extreme typographic scale and tight tracking for mass */}
            <div className="flex items-start gap-4 mt-1">
              <h1 className="text-6xl sm:text-[5rem] font-black tracking-tighter text-[#3e000c] leading-[0.85] uppercase">
                Connections
              </h1>

              {/* Intentional Disruption: Breaks the grid slightly to draw the eye */}
              <div className="bg-[#fb4b4e] text-white border-2 border-[#3e000c] shadow-[4px_4px_0_#3e000c] rounded-full w-12 h-12 flex items-center justify-center shrink-0 -mt-2 -rotate-6">
                <span className="font-black text-xl">{requests.length}</span>
              </div>
            </div>
          </div>

          {/* Secondary Hierarchy: The Clean Editorial Footnote */}
          <div className="max-w-[300px] flex flex-col gap-1.5">
            <span className="text-[#3e000c] font-black text-[12px] tracking-[0.2em] uppercase mb-1">
              யாதும் ஊரே யாவரும் கேளிர்
            </span>

            <p className="text-[#3e000c]/60 font-bold text-[10px] uppercase tracking-widest">
              Written over two millennia ago.
            </p>

            <a
              href="https://en.wikipedia.org/wiki/Kaniyan_Pungundranar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fb4b4e] hover:text-[#3e000c] inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest transition-colors w-fit mt-1 group/link"
            >
              <span className="border-b-2 border-transparent group-hover/link:border-[#3e000c]">
                Read more
              </span>
              <svg
                className="w-3 h-3 -translate-y-[0.5px] transition-transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* === TOP PANEL: HORIZONTAL REQUEST LIST === */}
        <div className="w-full">
          {requests.length === 0 ? (
            <div className="bg-white/80 border-2 border-dashed border-[#3e000c]/20 rounded-[2rem] p-8 text-center flex flex-col items-center justify-center h-44">
              <span className="text-3xl mb-3">🍃</span>
              <p className="text-[#3e000c]/50 font-bold uppercase tracking-widest text-xs">
                No pending requests
              </p>
            </div>
          ) : (
            <div className="flex flex-col relative w-full">
              {/* Swipe/Click Hint: Pixel-perfect card alignment */}
              <div className="flex items-center pl-24 mb-3 w-full">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3e000c]/40">
                  Select a card to view full profile
                </span>
              </div>

              {/* Flex Container for Buttons and List */}
              <div className="flex items-center gap-4 w-full">
                {/* Left Arrow Button */}
                <button
                  onClick={() => scroll("left")}
                  className="shrink-0 w-14 h-14 bg-white border-2 border-[#3e000c] rounded-full flex items-center justify-center shadow-[3px_3px_0_#3e000c] hover:bg-[#f8e9ed] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  aria-label="Scroll left"
                >
                  <svg
                    className="w-6 h-6 text-[#3e000c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex-1 flex flex-row gap-5 overflow-x-auto pb-4 pt-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      onClick={() => setSelectedUser(req)}
                      className={`relative w-[400px] shrink-0 p-6 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-300 overflow-hidden flex flex-col ${
                        selectedUser?.id === req.id
                          ? "bg-[#fff5f7] border-[#3e000c] shadow-[4px_4px_0_#3e000c] -translate-y-1"
                          : "bg-white/95 border-[#3e000c]/20 hover:border-[#3e000c] hover:bg-[#f8e9ed] shadow-sm"
                      }`}
                    >
                      <div className="flex items-start gap-5 relative z-10 h-full">
                        {/* Avatar Container */}
                        <div className="w-[76px] h-[76px] rounded-full border-2 border-[#3e000c] overflow-hidden shrink-0 bg-white shadow-sm">
                          <img
                            src={req.profile}
                            alt={req.firstName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 min-w-0 flex flex-col h-full">
                          <div className="flex justify-between items-center mb-1.5">
                            <h3 className="text-[22px] font-black tracking-tight text-[#3e000c] truncate leading-none">
                              {req.firstName} {req.lastName}
                            </h3>
                            <span className="text-[10px] font-bold text-[#3e000c]/40 shrink-0 ml-3">
                              {req.timeAgo}
                            </span>
                          </div>

                          {/* THE FIX: Added min-h-[42px] to lock the height for 1-line vs 2-line headlines */}
                          <p className="text-[13px] font-medium text-[#3e000c]/70 line-clamp-2 mb-4 leading-relaxed min-h-[42px]">
                            {req.headline}
                          </p>

                          <div className="flex gap-3 mt-auto items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReviewRequest(req.id, "accepted");
                              }}
                              className="flex-1 py-2.5 bg-emerald-300 hover:bg-emerald-400 text-[#3e000c] text-[11px] font-black uppercase tracking-widest border border-[#3e000c] rounded-xl shadow-[2px_2px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex justify-center items-center gap-1.5"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Accept
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReviewRequest(req.id, "rejected");
                              }}
                              className="w-12 h-full flex items-center justify-center bg-[#fff5f7] hover:bg-[#ffcbdd] text-[#3e000c] border border-[#3e000c] rounded-xl shadow-[2px_2px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all py-2.5"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={() => scroll("right")}
                  className="shrink-0 w-14 h-14 bg-[#fb4b4e] border-2 border-[#3e000c] rounded-full flex items-center justify-center shadow-[3px_3px_0_#3e000c] hover:bg-[#ffcbdd] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group/btn"
                  aria-label="Scroll right"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover/btn:text-[#3e000c] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* === BOTTOM PANEL: FULL PROFILE PREVIEW === */}
        {selectedUser ? (
          <div className="w-full space-y-6 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* LEFT COLUMN: Mind Sync & Vibe Ticket (Spatially Locked to Profile Parity) */}
              <div className="lg:col-span-3 flex flex-col gap-5">
                {/* Box 1: Mind Sync (Locked to exactly 274px to perfectly match the Profile Preferences box) */}
                <div className="bg-white rounded-[2rem] border border-[#3e000c] shadow-[4px_4px_0_#fb4b4e] flex flex-col relative overflow-hidden group h-[274px] shrink-0">
                  <div className="bg-[#fb4b4e] text-white px-[22px] py-[14px] border-b border-[#3e000c] flex justify-between items-center shrink-0">
                    <span className="font-black uppercase tracking-[0.2em] text-[11px] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                      Mind Sync
                    </span>
                    <svg
                      className="w-5 h-5 text-white/80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="p-[22px] flex flex-col flex-1 relative bg-white/95 justify-center">
                    <div
                      className="absolute inset-0 opacity-[0.05] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                        backgroundSize: "12px 12px",
                      }}
                    ></div>
                    <div className="relative z-10 flex flex-col">
                      <div className="inline-block self-start bg-[#ffcbdd] text-[#3e000c] border border-[#3e000c] font-black uppercase tracking-widest text-[10px] px-3 py-1.5 -rotate-2 mb-4 shadow-[2px_2px_0_#3e000c]">
                        ☄️ {selectedUser.mindSync.badge}
                      </div>
                      <h4 className="font-black text-[#3e000c] text-2xl uppercase leading-none mb-2">
                        {selectedUser.mindSync.headline}
                      </h4>
                      <p className="font-bold text-[#3e000c]/70 text-[13px] leading-relaxed line-clamp-3">
                        {selectedUser.mindSync.insight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Box 2: Vibe Ticket (Completely restored to exact Profile.jsx specs) */}
                <div className="border border-[#3e000c] rounded-[2rem] bg-transparent relative flex flex-col w-full flex-1 shadow-sm transition-all duration-500 group">
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
                          className={`w-2 h-2 rounded-full ${selectedUser.vibe.statusColor} animate-pulse`}
                        ></span>
                        LIVE
                      </span>
                    </div>
                    <div className="relative z-10 mt-2">
                      <p className="text-[11px] font-black uppercase tracking-wider text-[#3e000c]/50 leading-tight mb-1">
                        Looking for:
                      </p>
                      <p className="text-lg font-medium text-[#3e000c] leading-tight bg-white/60 inline-block px-2 py-0.5 -ml-2 rounded-md backdrop-blur-sm">
                        {selectedUser.vibe.lookingFor}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-0 w-full flex items-center z-20">
                    <div className="absolute left-[-1px] w-5 h-8 bg-[#fdfafb] rounded-r-full border border-[#3e000c] border-l-0"></div>
                    <div className="w-full border-t-2 border-dashed border-[#3e000c]/20"></div>
                    <div className="absolute right-[-1px] w-5 h-8 bg-[#fdfafb] rounded-l-full border border-[#3e000c] border-r-0"></div>
                  </div>

                  <div className="p-6 pt-8 rounded-b-[2rem] bg-[#fff5f7] backdrop-blur-sm mt-auto relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.15] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#3e000c 1.5px, transparent 1.5px)",
                        backgroundSize: "16px 16px",
                      }}
                    ></div>
                    <div className="relative z-10 text-[11px] font-black uppercase tracking-widest text-[#3e000c]/50 mb-6">
                      <span>On Repeat</span>
                    </div>
                    <div className="relative z-10 flex flex-col min-w-0">
                      <h4 className="text-4xl sm:text-[2.5rem] font-medium tracking-tighter leading-none mb-1 text-[#3e000c] truncate">
                        {selectedUser.vibe.listeningTo.split(" - ")[0]}
                      </h4>
                      <p className="text-sm font-bold text-[#3e000c]/60 truncate italic">
                        {selectedUser.vibe.listeningTo.split(" - ")[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MIDDLE COLUMN: Avatar/Hero & Skills */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                <div className="relative border border-[#3e000c] rounded-[2rem] overflow-hidden flex flex-col justify-end flex-1 group bg-[#f8e9ed] min-h-[300px]">
                  <img
                    src={selectedUser.coverPhoto}
                    alt="Cover"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-20 h-20 rounded-full border-2 border-white overflow-hidden bg-white shrink-0 shadow-lg">
                        <img
                          src={selectedUser.profile}
                          alt={selectedUser.firstName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-4xl font-medium text-white tracking-tighter leading-none mb-1">
                          {selectedUser.firstName}
                        </h2>
                        <span className="text-sm font-bold tracking-widest uppercase text-[#ffcbdd]">
                          {selectedUser.age} yrs •{" "}
                          {selectedUser.location.split(",")[0]}
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-base font-medium leading-relaxed max-w-sm">
                      {selectedUser.headline}
                    </p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col shrink-0">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-[#3e000c]">
                      Skills & Interests
                    </h3>
                    <svg
                      className="w-6 h-6 text-[#3e000c] opacity-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {selectedUser.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#ffcbdd]/30 border border-[#3e000c] rounded-full text-xs font-semibold text-[#3e000c] hover:bg-[#3e000c] hover:text-[#ffcbdd] transition-all duration-300 cursor-default"
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
                      {selectedUser.prompts[0].question.replace("...", "")}
                      <span className="text-[#fb4b4e]">...</span>
                    </h2>

                    <div className="flex gap-4 items-start shrink-0 mt-2">
                      <span className="text-6xl text-[#ffcbdd] font-serif leading-none pt-2 opacity-80 shrink-0">
                        "
                      </span>
                      {/* Added line-clamp-4 as a failsafe for the 100-character limit */}
                      <p className="w-full text-2xl sm:text-[1.75rem] text-[#3e000c] font-serif italic leading-tight mt-2 p-2 -ml-2 bg-transparent line-clamp-4">
                        {selectedUser.prompts[0].answer}
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
                        {selectedUser.about}
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
                    {selectedUser.photos.length} Photos
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {selectedUser.photos.map((photo, index) => (
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
        ) : (
          <div className="w-full h-[400px] flex flex-col items-center justify-center opacity-50">
            <span className="text-6xl mb-4">👀</span>
            <p className="text-2xl font-medium tracking-tight text-[#3e000c]">
              No profile selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
