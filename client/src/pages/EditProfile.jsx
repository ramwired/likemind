import { useState, useEffect } from "react";

const EditProfile = () => {
  // --- Cinematic Focus Mode State ---
  const [isFocusMode, setIsFocusMode] = useState(false);

  // --- Dynamic Floating Dash State ---
  const [activeField, setActiveField] = useState(null);

  // --- AI Generation States ---
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);

  // --- Form Data State (Aligned with Mongoose Schema) ---
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Jonathan",
    location: "Los Angeles, CA",
    headline: "Backend Developer | Visual Storyteller & Director",
    lookingFor: "Open source collaborators 🤝",
    listeningToTrack: "Cornfield Chase",
    listeningToArtist: "Hans Zimmer",
    promptQuestion: "You handle challenges with quiet confidence...",
    promptAnswer:
      "Accidentally pushing a breaking database migration during a film premiere.",
    about:
      "Passionate about building scalable backends and creating rich UIs with JSX and Tailwind CSS. When I'm off the keyboard, you can usually find me behind a lens, exploring cinematic software and directing short films to bring stories to life.",
  });

  // --- Mongoose Schema Limits ---
  const fieldLimits = {
    firstName: { max: 30, label: "First Name" },
    lastName: { max: 30, label: "Last Name" },
    location: { max: 50, label: "Location" },
    headline: { max: 80, label: "Headline" },
    lookingFor: { max: 35, label: "Looking For" },
    listeningToTrack: { max: 40, label: "Track" },
    listeningToArtist: { max: 40, label: "Artist" },
    promptQuestion: { max: 40, label: "Prompt Question" },
    promptAnswer: { max: 100, label: "Prompt Answer" },
    about: { max: 500, label: "About Me" },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field, isCinematic = false) => {
    setActiveField(field);
    if (isCinematic) setIsFocusMode(true);
  };

  const handleBlur = (isCinematic = false) => {
    setActiveField(null);
    if (isCinematic) setIsFocusMode(false);
  };

  // --- Skills State ---
  const [skills, setSkills] = useState([
    "Node.js",
    "JSX",
    "Tailwind CSS",
    "System Design",
    "Directing",
    "Pre-production",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const [skillError, setSkillError] = useState("");

  // NEW: Real-time tracker that watches the skills array
  useEffect(() => {
    const remaining = 6 - skills.length;

    if (remaining > 0) {
      if (skills.length === 0) {
        setSkillError(
          "Every masterpiece starts somewhere. Add 6 skills to begin.",
        );
      } else if (remaining === 1) {
        setSkillError(
          "Almost there. Add 1 more skill to complete your canvas.",
        );
      } else {
        setSkillError(
          `Your canvas needs depth. Add ${remaining} more skills to save.`,
        );
      }
    } else {
      setSkillError(""); // Instantly clears the message when they hit 6
    }
  }, [skills.length]); // This tells React to run this logic every time the length changes

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && newSkill.trim() && skills.length < 50) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      // Notice we removed the manual error clearing here—useEffect handles it automatically now!
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSaveSkills = () => {
    // We only need to check if they are allowed to close now.
    // If they have less than 6, the error is already visible, so the button just won't close the modal.
    if (skills.length >= 6) {
      setIsSkillsExpanded(false);
    }
  };

  const handleEnhancePrompt = () => {
    setIsGeneratingPrompt(true);
    setIsFocusMode(true);
    setTimeout(() => {
      setIsGeneratingPrompt(false);
      setIsFocusMode(false);
    }, 2000);
  };

  const handleEnhanceBio = () => {
    setIsGeneratingBio(true);
    setIsFocusMode(true);
    setTimeout(() => {
      setIsGeneratingBio(false);
      setIsFocusMode(false);
    }, 2000);
  };

  const coverPhoto =
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop";
  const profilePhoto =
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop";
  const photos = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen relative py-8 px-4 sm:px-8 font-sans text-[#3e000c] selection:bg-[#ffcbdd] selection:text-[#3e000c] flex justify-center items-start overflow-hidden bg-[#fdfafb] pb-32">
      {/* === INNOVATIVE BACKGROUND === */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${isFocusMode ? "opacity-30" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e000c1a_1px,transparent_1px),linear-gradient(to_bottom,#3e000c1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffcbdd] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fb4b4e] rounded-full mix-blend-multiply filter blur-[150px] opacity-15"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f8e9ed] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"></div>
      </div>

      {/* === MAIN CONTENT WRAPPER === */}
      <div className="max-w-[1280px] w-full space-y-6 relative z-10">
        {/* === HEADER (Cleaned Up) === */}
        <div
          className={`w-full flex justify-between items-end px-2 transition-all duration-700 ease-in-out ${isFocusMode ? "opacity-30 blur-[2px]" : "opacity-100"}`}
        >
          <div>
            <h1 className="text-3xl font-medium text-[#3e000c] tracking-tight">
              Your Canvas
            </h1>
            <p className="text-[#3e000c]/60 mt-1 text-sm font-medium">
              Click any dashed element to edit your profile directly.
            </p>
          </div>

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
          <div
            className={`lg:col-span-3 flex flex-col gap-5 transition-all duration-700 ease-in-out origin-top-left ${isFocusMode ? "opacity-30 blur-[3px] scale-[0.98] pointer-events-none grayscale-[30%]" : "opacity-100 scale-100 grayscale-0"}`}
          >
            {/* Box 1: Compact Identity Block*/}
            <div className="bg-[#fff5f7] border border-[#3e000c] rounded-[2rem] flex flex-col w-full shadow-sm h-[276px] relative overflow-hidden transition-all hover:shadow-md group">
              {/* Industrial "Warning Tape" Header */}
              <div className="bg-[#fb4b4e] text-white px-5 py-2 flex justify-between items-center shrink-0 border-b border-[#3e000c]">
                <span className="font-mono text-[9px] font-black tracking-[0.2em] uppercase">
                  USR_ID // ACTIVE
                </span>
                <div className="w-1.5 h-1.5 bg-white rounded-none animate-ping"></div>
              </div>

              <div className="p-5 flex flex-col flex-1 h-full relative z-10">
                {/* Top: Overlapping Avatar and Offset Name Blocks */}
                <div className="flex items-start gap-4 mb-4 shrink-0">
                  {/* Harsh Square Avatar */}
                  <div className="relative group/avatar cursor-pointer shrink-0 z-20 mt-1">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#3e000c] bg-white shadow-[2px_2px_0_#3e000c] group-hover/avatar:shadow-[4px_4px_0_#fb4b4e] group-hover/avatar:-translate-y-1 transition-all duration-300 -rotate-3 group-hover/avatar:rotate-0">
                      <img
                        src={profilePhoto}
                        alt="Avatar"
                        className="w-full h-full object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* The True Overlap: Clashing Name Blocks */}
                  <div className="flex-1 w-full min-w-0 flex flex-col">
                    {/* Tilted First Name Block */}
                    <div className="bg-[#3e000c] transform rotate-1 mb-[-8px] relative z-10 shadow-sm">
                      <input
                        name="firstName"
                        maxLength={fieldLimits.firstName.max}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("firstName")}
                        onBlur={() => handleBlur()}
                        type="text"
                        placeholder="First name"
                        className="text-[15px] font-extrabold  text-white leading-none   focus:outline-none w-full px-1 py-3 text-center transition-colors"
                      />
                    </div>
                    {/* Overlapping Last Name Block */}
                    <div className="bg-[#ffcbdd] transform -rotate-1 relative z-20 shadow-md ">
                      <input
                        name="lastName"
                        maxLength={fieldLimits.lastName.max}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("lastName")}
                        onBlur={() => handleBlur()}
                        type="text"
                        placeholder="Last name"
                        className="text-[15px] font-extrabold  text-[#3e000c] leading-none  focus:outline-none w-full px-1 py-2 text-center transition-color"
                      />
                    </div>
                  </div>
                </div>

                {/* Middle: Technical Location Tag */}
                <div className="flex w-full mb-3 shrink-0 bg-white shadow-sm overflow-hidden rounded-sm border border-[#3e000c]">
                  <div className="bg-[#3e000c] text-white font-mono text-[10px] font-bold px-3 py-1.5 flex items-center justify-center shrink-0 uppercase tracking-widest border-r border-[#3e000c]">
                    LOC
                  </div>
                  <input
                    name="location"
                    maxLength={fieldLimits.location.max}
                    value={formData.location}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("location")}
                    onBlur={() => handleBlur()}
                    type="text"
                    className="text-[11px] font-black tracking-widest uppercase text-[#fb4b4e] bg-transparent border-b border-dashed border-transparent focus:outline-none w-full px-2 py-1.5 transition-colors"
                  />
                </div>

                {/* Bottom: Monospace Terminal Headline */}
                <textarea
                  name="headline"
                  maxLength={fieldLimits.headline.max}
                  value={formData.headline}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("headline")}
                  onBlur={() => handleBlur()}
                  className="text-[#3e000c] font-mono text-[11px] leading-relaxed w-full bg-white/50 border border-dashed border-transparent hover:border-[#3e000c]/40 focus:border-[#fb4b4e] focus:outline-none rounded-none p-3 resize-none flex-1 mt-auto text-left transition-colors"
                />
              </div>
            </div>

            {/* Box 2: Vibe Ticket */}
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
                    <span className="w-2 h-2 rounded-full bg-[#fb4b4e] animate-pulse"></span>
                    LIVE
                  </span>
                </div>
                <div className="relative z-10 mt-2">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#3e000c]/50 leading-tight mb-1">
                    Looking for:
                  </p>
                  <input
                    name="lookingFor"
                    maxLength={fieldLimits.lookingFor.max}
                    value={formData.lookingFor}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("lookingFor")}
                    onBlur={() => handleBlur()}
                    type="text"
                    className="text-base font-medium text-[#3e000c] leading-tight bg-white/60 w-full px-2 py-1 -ml-2 rounded-md backdrop-blur-sm border border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative h-0 w-full flex items-center z-20">
                <div className="absolute left-[-1px] w-5 h-8 bg-[#fdfafb] rounded-r-full border border-[#3e000c] border-l-0"></div>
                <div className="w-full border-t-2 border-dashed border-[#3e000c]/20"></div>
                <div className="absolute right-[-1px] w-5 h-8 bg-[#fdfafb] rounded-l-full border border-[#3e000c] border-r-0"></div>
              </div>

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
                      name="listeningToTrack"
                      maxLength={fieldLimits.listeningToTrack.max}
                      value={formData.listeningToTrack}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("listeningToTrack")}
                      onBlur={() => handleBlur()}
                      type="text"
                      className="text-2xl sm:text-3xl font-medium tracking-tighter leading-none text-[#3e000c] truncate bg-transparent border-b border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none w-full pb-1"
                    />
                    <input
                      name="listeningToArtist"
                      maxLength={fieldLimits.listeningToArtist.max}
                      value={formData.listeningToArtist}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("listeningToArtist")}
                      onBlur={() => handleBlur()}
                      type="text"
                      className="text-xs font-bold text-[#3e000c]/60 truncate italic bg-transparent border-b border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none w-3/4 pb-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Cover & Skills */}
          <div
            className={`lg:col-span-4 flex flex-col gap-5 transition-all duration-700 ease-in-out origin-top ${isFocusMode ? "opacity-30 blur-[3px] scale-[0.98] pointer-events-none grayscale-[30%]" : "opacity-100 scale-100 grayscale-0"}`}
          >
            {/* Box 3: Cover Photo */}
            <div className="relative border border-[#3e000c] rounded-[2rem] overflow-hidden flex flex-col justify-end flex-1 group/cover bg-[#f8e9ed] min-h-[300px]">
              <img
                src={coverPhoto}
                alt="Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover/cover:opacity-50 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity pointer-events-none z-20">
                <span className="bg-white/90 text-[#3e000c] text-xs px-4 py-2 rounded-full font-bold shadow-lg border border-[#3e000c]">
                  Update Cover
                </span>
              </div>
            </div>

            {/* Box 4: Skills & Interests Bento (Locked Preview Trigger) */}
            <div
              onClick={() => setIsSkillsExpanded(true)}
              className="bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col shrink-0 h-[192px] cursor-pointer group hover:bg-[#fff5f7] hover:shadow-[4px_4px_0_#3e000c] transition-all duration-300 relative"
            >
              <div className="flex justify-between items-start mb-5 shrink-0">
                <div className="flex items-center gap-3">
                  {/* Centered Syntax Bracket */}
                  <div className="flex items-center font-mono text-[#fb4b4e] shrink-0">
                    <span className="text-[28px] opacity-40 font-light leading-none -translate-y-[2px]">
                      {"{"}
                    </span>
                    <span className="font-black text-lg mx-1.5 leading-none">
                      {skills.length}
                    </span>
                    <span className="text-[28px] opacity-40 font-light leading-none -translate-y-[2px]">
                      {"}"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium tracking-tight text-[#3e000c] group-hover:text-[#fb4b4e] transition-colors leading-none">
                      Skills & Interests
                    </h3>
                    {/* Subtitle Action */}
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3e000c]/40 group-hover:text-[#fb4b4e] transition-colors flex items-center gap-1">
                      Click to edit all
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact locked body code (Hard crop preview) */}
              <div className="flex flex-wrap content-start gap-2 w-full flex-1 overflow-hidden pointer-events-none">
                {skills.map((skill, i) => (
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

          {/* RIGHT COLUMN: Cinematic Focus Text Areas WITH AI MAGIC ✨ */}
          <div
            className={`lg:col-span-5 relative flex flex-col h-full overflow-hidden transition-all duration-700 ease-in-out ${isFocusMode ? "scale-[1.02] z-30 drop-shadow-2xl bg-white/40 rounded-3xl -mx-4 px-4" : ""}`}
          >
            <div className="flex flex-col flex-1 relative z-10 w-full h-full pt-6 pb-0 px-6 sm:px-12 gap-8">
              {/* TOP SECTION: Prompt */}
              <div className="flex flex-col shrink-0 h-[280px] lg:h-[320px]">
                <div className="mb-2 flex items-center shrink-0 w-full">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#3e000c] bg-[#ffcbdd]/40 text-[#3e000c] text-[10px] font-black uppercase tracking-widest transform -rotate-2">
                    Edit Prompt ✨
                  </span>

                  <button
                    onClick={handleEnhancePrompt}
                    disabled={isGeneratingPrompt}
                    className={`ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                      isGeneratingPrompt
                        ? "bg-[#f8e9ed] border-[#fb4b4e] text-[#fb4b4e] cursor-not-allowed"
                        : "bg-gradient-to-r from-[#ffcbdd]/50 to-[#f8e9ed]/50 border-[#3e000c]/20 text-[#3e000c] hover:border-[#fb4b4e] hover:shadow-[2px_2px_0_#fb4b4e] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    }`}
                  >
                    {isGeneratingPrompt ? (
                      <span className="animate-spin w-3 h-3 border-2 border-[#fb4b4e] border-t-transparent rounded-full inline-block"></span>
                    ) : (
                      "✨ AI Magic"
                    )}
                  </button>
                </div>

                {isGeneratingPrompt && (
                  <div className="w-full flex flex-col gap-3 mb-1 pb-1 shrink-0 py-2">
                    <div className="h-10 w-full bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-xl"></div>
                    <div className="h-10 w-2/3 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-xl"></div>
                  </div>
                )}

                <textarea
                  name="promptQuestion"
                  maxLength={fieldLimits.promptQuestion.max}
                  value={formData.promptQuestion}
                  onChange={handleInputChange}
                  rows="2"
                  onFocus={() => handleFocus("promptQuestion", true)}
                  onBlur={() => handleBlur(true)}
                  className={`text-4xl lg:text-[2.60rem] font-serif tracking-tighter text-[#3e000c] leading-[1.05] mb-1 pb-1 bg-transparent border-b border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none w-full transition-colors resize-none shrink-0 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#3e000c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#3e000c]/40 [&::-webkit-scrollbar-thumb]:rounded-full ${isGeneratingPrompt ? "hidden" : "block"}`}
                />

                <div className="flex gap-4 items-start shrink-0 mt-2 relative">
                  <span className="text-6xl text-[#ffcbdd] font-serif leading-none pt-2 opacity-80 shrink-0">
                    "
                  </span>

                  {isGeneratingPrompt && (
                    <div className="w-full flex flex-col gap-4 mt-2 px-2 -ml-2 shrink-0">
                      <div className="h-8 w-full bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-lg"></div>
                      <div className="h-8 w-11/12 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-lg"></div>
                      <div className="h-8 w-4/5 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-lg"></div>
                    </div>
                  )}

                  <textarea
                    name="promptAnswer"
                    maxLength={fieldLimits.promptAnswer.max}
                    value={formData.promptAnswer}
                    onChange={handleInputChange}
                    rows="4"
                    onFocus={() => handleFocus("promptAnswer", true)}
                    onBlur={() => handleBlur(true)}
                    disabled={isGeneratingPrompt}
                    className={`w-full text-2xl sm:text-[1.75rem] text-[#3e000c] font-serif italic leading-tight mt-2 bg-transparent border border-dashed border-transparent hover:border-[#3e000c]/20 focus:border-[#fb4b4e] focus:outline-none rounded-xl p-2 -ml-2 resize-none transition-colors overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#3e000c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#3e000c]/40 [&::-webkit-scrollbar-thumb]:rounded-full ${isGeneratingPrompt ? "hidden" : "block"}`}
                  />
                </div>
              </div>

              {/* BOTTOM SECTION: About Me */}
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
                  <div className="flex items-center w-full mb-1 shrink-0">
                    <span className="text-[#3e000c] font-bold block">
                      About Me //
                    </span>

                    <button
                      onClick={handleEnhanceBio}
                      disabled={isGeneratingBio}
                      className={`ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                        isGeneratingBio
                          ? "bg-[#f8e9ed] border-[#fb4b4e] text-[#fb4b4e] cursor-not-allowed"
                          : "bg-gradient-to-r from-[#ffcbdd]/50 to-[#f8e9ed]/50 border-[#3e000c]/20 text-[#3e000c] hover:border-[#fb4b4e] hover:shadow-[2px_2px_0_#fb4b4e] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      }`}
                    >
                      {isGeneratingBio ? (
                        <span className="animate-spin w-3 h-3 border-2 border-[#fb4b4e] border-t-transparent rounded-full inline-block"></span>
                      ) : (
                        "✨ AI Magic"
                      )}
                    </button>
                  </div>

                  {isGeneratingBio && (
                    <div className="w-full flex flex-col gap-3 px-2 -ml-2 mt-3">
                      <div className="h-5 w-full bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-md"></div>
                      <div className="h-5 w-full bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-md"></div>
                      <div className="h-5 w-11/12 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-md"></div>
                      <div className="h-5 w-4/5 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-md"></div>
                      <div className="h-5 w-3/4 bg-gradient-to-r from-[#fb4b4e]/25 to-[#ffcbdd]/40 animate-pulse rounded-md"></div>
                    </div>
                  )}

                  <textarea
                    name="about"
                    maxLength={fieldLimits.about.max}
                    value={formData.about}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("about", true)}
                    onBlur={() => handleBlur(true)}
                    disabled={isGeneratingBio}
                    className={`flex-1 text-base lg:text-lg font-medium text-[#3e000c]/80 leading-relaxed w-full bg-transparent border border-dashed border-transparent hover:border-[#3e000c]/30 focus:border-[#fb4b4e] focus:outline-none rounded-xl p-2 -ml-2 pr-4 resize-none transition-colors max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#3e000c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#3e000c]/40 [&::-webkit-scrollbar-thumb]:rounded-full ${isGeneratingBio ? "hidden" : "block"}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === FULL-WIDTH GALLERY ROW === */}
          <div
            className={`lg:col-span-12 bg-white/95 backdrop-blur-sm border border-[#3e000c] rounded-[2rem] p-6 flex flex-col gap-5 mt-2 transition-all duration-700 ease-in-out origin-top ${isFocusMode ? "opacity-30 blur-[3px] scale-[0.98] pointer-events-none grayscale-[30%]" : "opacity-100 scale-100 grayscale-0"}`}
          >
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

              {photos.map((photo, index) => (
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

      {/* === NEW: FLOATING DYNAMIC COUNTER (Electric Gold + Deep Orange Border) === */}
      <div
        className={`fixed bottom-8 right-4 sm:right-8 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform pointer-events-none ${
          activeField && fieldLimits[activeField]
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        {activeField && fieldLimits[activeField] && (
          <div className="bg-[#ffd000]/95 backdrop-blur-xl border border-[#ff7b00] px-4 py-2 rounded-full shadow-[2px_2px_0_#ff7b00] flex items-center gap-3">
            {/* 1. Context */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fb4b4e] animate-pulse border border-[#3e000c]/20"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#3e000c]/80">
                Editing:{" "}
                <span className="text-[#3e000c]">
                  {fieldLimits[activeField].label}
                </span>
              </span>
            </div>

            {/* Subtle Divider */}
            <div className="w-px h-3.5 bg-[#ff7b00]/50"></div>

            {/* 2. Capacity Metric */}
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e000c]/80">
                Limit
              </span>
              <div className="flex items-baseline">
                <span
                  className={`text-sm font-black leading-none tracking-tighter transition-colors duration-300 ${
                    (formData[activeField]?.length || 0) >=
                    fieldLimits[activeField].max
                      ? "text-[#fd0307]" // 100% Reached: Pure Red
                      : (formData[activeField]?.length || 0) >=
                          fieldLimits[activeField].max * 0.8
                        ? "text-[#fd0307]" // 80%+ Reached: Near Limit Red
                        : (formData[activeField]?.length || 0) >=
                            fieldLimits[activeField].max * 0.5
                          ? "text-[#9b00ca]" // 50%+ Reached: indigo
                          : "text-[#3e000c]" // Normal State: Dark Maroon
                  }`}
                >
                  {formData[activeField]?.length || 0}
                </span>
                <span className="text-[10px] font-bold text-[#3e000c]/60 ml-0.5">
                  /{fieldLimits[activeField].max}
                </span>
              </div>
            </div>
          </div>
        )}
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

      {/* === THE EDITORIAL CANVAS (Cinematic Glow + Prominent Light Grid) === */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isSkillsExpanded
            ? "opacity-100 pointer-events-auto bg-[#fdfafb]"
            : "opacity-0 pointer-events-none translate-y-8 bg-transparent"
        }`}
      >
        {/* Layer 1: Cinematic Soft Glow (Mesh Gradient) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffcbdd] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#fb4b4e] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f8e9ed] rounded-full mix-blend-multiply filter blur-[120px] opacity-90"></div>
        </div>

        {/* Layer 2: Prominent Architectural Light Grid */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(62, 0, 12, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(62, 0, 12, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Top Navigation Bar (Keeping your chosen Glassmorphic Glow error state!) */}
        <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-6 sm:px-12 w-full shrink-0 gap-4 sm:gap-0">
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full ${skills.length >= 50 ? "bg-[#fb4b4e]" : "bg-[#3e000c]"} animate-pulse`}
            ></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#3e000c]">
              Skills Canvas • {skills.length}/50
            </span>
          </div>

          <div className="flex items-center gap-4 self-end sm:self-auto">
            {/* THE RED ERROR MESSAGE (Option 1: Glassmorphic Glow) */}
            {skillError && (
              <div className="hidden sm:flex items-center gap-2.5 px-5 py-2 bg-white/40 backdrop-blur-md rounded-full shadow-[0_8px_16px_rgba(251,75,78,0.15)] border border-[#fb4b4e]/30 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-[#fb4b4e] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#fb4b4e] translate-y-[1px]">
                  {skillError}
                </span>
              </div>
            )}

            {/* THE FIX: Button visually and functionally locks until they hit 6 skills */}
            <button
              onClick={handleSaveSkills}
              disabled={skills.length < 6}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border-2 text-xs font-black uppercase tracking-widest transition-all duration-100 ${
                skills.length >= 6
                  ? "border-[#3e000c] bg-white text-[#3e000c] shadow-[4px_4px_0_#3e000c] hover:bg-[#fff5f7] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#3e000c] cursor-pointer"
                  : "border-[#3e000c]/20 bg-[#fdfafb]/50 text-[#3e000c]/30 shadow-none cursor-not-allowed"
              }`}
            >
              Save & Close
            </button>
          </div>
        </div>

        {/* Mobile Error Fallback */}
        {skillError && (
          <div className="sm:hidden w-full flex justify-center relative z-20 -mt-2 mb-4 px-6">
            <div className="flex items-center justify-center gap-2.5 px-5 py-2 w-full bg-white/40 backdrop-blur-md rounded-full shadow-[0_8px_16px_rgba(251,75,78,0.15)] border border-[#fb4b4e]/30 transition-all duration-300">
              <svg
                className="w-3.5 h-3.5 text-[#fb4b4e] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-[10px] font-black tracking-widest uppercase text-[#fb4b4e] translate-y-[1px]">
                {skillError}
              </span>
            </div>
          </div>
        )}

        {/* Main Centered Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 sm:px-12 pb-20">
          {/* Structured Massive Input */}
          <div className="w-full relative mb-10 shrink-0 group">
            <input
              type="text"
              maxLength={50}
              disabled={skills.length >= 50}
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={handleAddSkill}
              placeholder={
                skills.length >= 50
                  ? "Maximum capacity reached."
                  : "Type a skill & press Enter..."
              }
              className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-[#3e000c] bg-transparent outline-none placeholder:text-[#3e000c]/20 pb-6 transition-all"
              autoFocus={isSkillsExpanded}
            />
            {/* Animated Dashed Baseline */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(to_right,#3e000c_50%,transparent_50%)] bg-[length:12px_2px] opacity-20 group-focus-within:opacity-100 group-focus-within:bg-[linear-gradient(to_right,#fb4b4e_50%,transparent_50%)] transition-all duration-300"></div>
          </div>

          {/* THE INTEGRATED PILL LIST */}
          {/* THE FIX: Added pt-6 (padding-top) so the hover elements in the top row don't get clipped by the overflow-y container. Added pb-12 for bottom breathing room. */}
          <div className="flex flex-wrap justify-center content-start gap-4 max-h-[50vh] overflow-y-auto w-full px-4 pt-6 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group relative px-6 py-2.5 bg-white border-2 border-[#fb4b4e]/50 rounded-full text-base font-semibold text-[#3e000c] hover:bg-[#fff5f7] hover:border-[#fb4b4e] transition-all duration-300 cursor-default shadow-[2px_2px_0_rgba(62,0,12,0.05)] hover:shadow-[3px_3px_0_#fb4b4e] hover:-translate-y-0.5"
              >
                {/* Text with Zen strike-through on hover */}
                <span className="group-hover:line-through decoration-2 decoration-[#fb4b4e]/50 transition-all duration-300">
                  {skill}
                </span>

                {/* THE CROSS: No spin, just a clean scale-up pop, adjusted outward slightly so it doesn't crowd the text */}
                <div
                  onClick={() => removeSkill(skill)}
                  className="absolute -top-2.5 -right-2.5 bg-[#fb4b4e] text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-[2px_2px_0_#3e000c] hover:scale-110 border-2 border-[#3e000c] transform scale-75 group-hover:scale-100"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            ))}

            {skills.length === 0 && (
              <div className="w-full flex flex-col items-center justify-center mt-8 opacity-40">
                <span className="text-4xl mb-3">🍃</span>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3e000c]">
                  Your canvas is blank
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
