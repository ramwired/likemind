const Profile = () => {
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
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    about:
      "Passionate software developer exploring the MERN stack. I love building seamless user experiences and constantly learning new tools to push the boundaries of web architecture.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Figma"],
    vibe: {
      lookingFor: "Open source collaborators 🤝",
      listeningTo: "Starboy - The Weeknd",
      // Swapped lime green for Strawberry Red
      statusColor: "bg-[#fb4b4e]",
    },
    prompts: [
      {
        question: "My most irrational fear...",
        answer:
          "Accidentally pushing an infinite loop to production on a Friday afternoon.",
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

  return (
    // Swapped selection highlight to Pastel Petal & Night Bordeaux
    <div className="min-h-screen bg-[#f3efe8] py-8 px-4 sm:px-8 font-sans text-[#1a1a1a] selection:bg-[#ffcbdd] selection:text-[#3e000c] flex justify-center items-start">
      <div className="max-w-[1280px] w-full space-y-6">
        {/* === BENTO GRID MAIN LAYOUT === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
          {/* LEFT COLUMN: Controls & Vibe Ticket */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Box 1: Actions Control Panel */}
            <div className="bg-white border border-[#1a1a1a] rounded-[2rem] p-[22px] flex flex-col w-full h-auto">
              <div className="mb-5 mt-1.5">
                <h3 className="text-xl font-medium tracking-tight text-[#1a1a1a]">
                  Preferences
                </h3>
              </div>

              <div className="flex flex-col gap-[11px]">
                {/* Primary Action Button - Now uses Pastel Petal and Night Bordeaux */}
                <button className="group w-full flex items-center justify-between px-[18px] py-[11px] rounded-xl border border-[#3e000c] bg-[#ffcbdd] hover:bg-[#3e000c] hover:text-[#ffcbdd] text-sm font-medium text-[#3e000c] transition-all duration-300 shadow-[2px_2px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
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
                <button className="w-full flex items-center gap-3 px-[18px] py-[11px] rounded-xl border border-transparent hover:border-[#1a1a1a] hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-[#1a1a1a] transition-colors">
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

              <div className="w-full h-[1px] bg-gray-200 my-[18px]"></div>

              {/* Danger Action Button - Hover text is already Strawberry Red */}
              <button className="w-full flex items-center gap-3 px-[18px] py-2.5 text-sm font-bold text-gray-400 hover:text-[#fb4b4e] hover:bg-red-50 rounded-xl transition-colors">
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
            <div className="border border-[#1a1a1a] rounded-[2rem] bg-white relative flex flex-col w-full flex-1">
              {/* Ticket Top Half */}
              <div className="bg-[#e9e4d9] rounded-t-[2rem] p-6 pb-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-4xl font-medium tracking-tighter leading-[1.1] text-[#1a1a1a]">
                    Current
                    <br />
                    vibe
                  </h2>
                  {/* Status tag changed to Pastel Petal and Night Bordeaux border/text */}
                  <span className="bg-[#ffcbdd] border border-[#3e000c] text-[#3e000c] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-1.5 shrink-0 ml-2">
                    <span
                      className={`w-2 h-2 rounded-full ${user.vibe.statusColor} animate-pulse`}
                    ></span>
                    LIVE
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-800 leading-tight mb-1">
                    Looking for:
                  </p>
                  <p className="text-base font-medium text-[#1a1a1a] leading-tight">
                    {user.vibe.lookingFor}
                  </p>
                </div>
              </div>

              {/* Ticket Divider Row */}
              <div className="relative h-0 w-full flex items-center z-10">
                <div className="absolute left-[-1px] w-5 h-8 bg-[#f3efe8] rounded-r-full border border-[#1a1a1a] border-l-0"></div>
                <div className="w-full h-[1px] bg-[#1a1a1a]"></div>
                <div className="absolute right-[-1px] w-5 h-8 bg-[#f3efe8] rounded-l-full border border-[#1a1a1a] border-r-0"></div>
              </div>

              {/* Ticket Bottom Half */}
              <div className="p-6 pt-8 rounded-b-[2rem] bg-white mt-auto">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-[#1a1a1a] mb-2">
                  <span>On Repeat</span>
                  <span>Now</span>
                </div>
                <div className="w-full h-[1px] bg-[#1a1a1a] mb-6"></div>

                <div className="flex justify-between items-end gap-2">
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-4xl sm:text-[2.5rem] font-medium tracking-tighter leading-none mb-1 text-[#1a1a1a] truncate">
                      {user.vibe.listeningTo.split(" - ")[0]}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 truncate">
                      {user.vibe.listeningTo.split(" - ")[1]}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <div className="h-[46px] w-[46px] flex items-center justify-center bg-white rounded-md p-0.5 border border-gray-200 overflow-hidden">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://open.spotify.com/"
                        alt="QR Code Mockup"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">
                      Spotify
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Avatar/Hero & Skills */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Box 3: Main Identity */}
            <div className="relative border border-[#1a1a1a] rounded-[2rem] overflow-hidden flex flex-col justify-end flex-1 group bg-white min-h-[300px]">
              <img
                src={user.coverPhoto}
                alt="Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 rounded-full border-2 border-[#1a1a1a] overflow-hidden bg-white shrink-0 shadow-lg">
                    <img
                      src={user.profile}
                      alt={user.firstName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-medium text-white tracking-tighter leading-none mb-1">
                      {user.firstName}
                    </h2>
                    {/* Replaced yellow text with Pastel Petal */}
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

            {/* Box 4: Skills & Interests Bento */}
            <div className="bg-[#e7e3d9] border border-[#1a1a1a] rounded-[2rem] p-6 flex flex-col shrink-0">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-medium tracking-tight text-[#1a1a1a]">
                  Skills & Interests
                </h3>
                <svg
                  className="w-6 h-6 text-[#1a1a1a] opacity-40"
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
                {user.skills.map((skill, i) => (
                  // Replaced black hover with Night Bordeaux and text with Pastel Petal
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/50 border border-[#1a1a1a] rounded-full text-xs font-semibold text-[#1a1a1a] hover:bg-[#3e000c] hover:text-[#ffcbdd] hover:border-[#3e000c] transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Free Flowing Prompt & Bio */}
          <div className="lg:col-span-5 relative flex flex-col justify-center py-6 px-6 sm:px-12 h-full overflow-hidden">
            <div className="flex flex-col justify-center flex-1 relative z-10 w-full">
              {/* Floating Tag - Using Pastel Petal and Night Bordeaux */}
              <div className="mb-6 mt-2">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#3e000c] bg-[#ffcbdd] text-[#3e000c] text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_#3e000c] transform -rotate-2">
                  Featured Prompt ✨
                </span>
              </div>

              {/* Question */}
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-[#1a1a1a] leading-[1.05] mb-6">
                {user.prompts[0].question.replace("...", "")}
                <span className="text-[#fb4b4e]">...</span>
              </h2>

              {/* Answer */}
              <div className="flex gap-4 items-start mb-12">
                {/* Quote mark is already Pastel Petal, untouched */}
                <span className="text-6xl text-[#ffcbdd] font-serif leading-none pt-2 opacity-80 shrink-0">
                  "
                </span>
                <p className="text-2xl sm:text-[1.75rem] text-gray-800 font-serif italic leading-tight mt-2">
                  {user.prompts[0].answer}
                </p>
              </div>

              {/* Bio Section with Static SVG Divider */}
              <div className="mt-auto pt-6">
                {/* Decorative SVG: Swapped to Dark Amaranth */}
                <svg
                  className="w-16 h-3 mb-5 text-[#7c0b2b] opacity-80"
                  viewBox="0 0 100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="square"
                >
                  <path d="M0 10 L 30 10 M 40 10 L 100 10" />
                </svg>

                <p className="text-base lg:text-lg font-medium text-gray-600 leading-relaxed max-w-md">
                  <span className="text-[#1a1a1a] font-bold block mb-1">
                    About Me //
                  </span>
                  {user.about}
                </p>
              </div>
            </div>
          </div>

          {/* === FULL-WIDTH GALLERY ROW === */}
          <div className="lg:col-span-12 bg-white border border-[#1a1a1a] rounded-[2rem] p-6 flex flex-col gap-5 mt-2">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-2xl font-medium tracking-tight leading-none">
                Workspace &<br />
                Moments
              </h3>
              {/* Swapped to Pastel Petal & Night Bordeaux */}
              <span className="bg-[#ffcbdd] border border-[#3e000c] text-[#3e000c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                8 Photos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {user.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl border border-[#1a1a1a] overflow-hidden group bg-gray-100 cursor-pointer"
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
    </div>
  );
};

export default Profile;
