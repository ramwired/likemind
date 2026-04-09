import React, { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Feed = () => {
  const feedUsers = [
    {
      id: 1,
      firstName: "Alex",
      lastName: "Chen",
      headline: "Frontend Dev | UI/UX Enthusiast",
      age: 26,
      mainPhoto:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
      photos: [
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
      ],
      about:
        "I love building accessible, pixel-perfect interfaces. Always down for a coffee chat about design systems or the latest React features.",
      skills: ["React", "Tailwind CSS", "Figma", "UI Design"],
      prompts: [
        {
          question: "A tech hot take I stand by...",
          answer:
            "Tailwind is better than CSS-in-JS and I will not be taking questions at this time.",
        },
      ],
      vibe: {
        lookingFor: "A side-project co-founder 🚀",
        listeningTo: "Pink + White - Frank Ocean",
        statusColor: "bg-emerald-400",
      },
      location: "Remote",
      mindSync: {
        badge: "Top 1% Discovery",
        headline: "The Unicorn Overlap",
        insight:
          "Statistically, only 1 in roughly 300 profiles share your exact blend of UI/UX obsession and alt-R&B music taste.",
        urgencyText: "Algorithm anomaly detected.",
      },
      isExpanded: true,
    },
    {
      id: 2,
      firstName: "Jordan",
      lastName: "Smith",
      headline: "Fullstack Engineer & Weekend Hiker",
      age: 28,
      mainPhoto:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
      photos: [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526772662000-4f8828255b72?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400&auto=format&fit=crop",
      ],
      about:
        "Building scalable backend systems by day, conquering mountain trails by weekend. Looking for tech friends who also love the outdoors!",
      skills: ["Node.js", "MongoDB", "Express", "Hiking"],
      prompts: [
        {
          question: "Two truths and a lie...",
          answer:
            "I've hiked Mount Fuji, I use Vim by choice, I once dropped a production database.",
        },
      ],
      vibe: {
        lookingFor: "Weekend hiking buddies 🏔️",
        listeningTo: "The Less I Know The Better - Tame Impala",
        statusColor: "bg-[#fb4b4e]",
      },
      location: "Seattle, WA",
      mindSync: {
        badge: "Rare Find",
        headline: "Code & Canopy",
        insight:
          "Finding another backend dev who actually touches grass is rare. You two are in the top 3% of users who match this specific vibe.",
        urgencyText: "High synergy connection.",
      },
      isExpanded: true,
    },
    {
      id: 3,
      firstName: "Maya",
      lastName: "Patel",
      headline: "Product Manager & Coffee Snob",
      age: 29,
      mainPhoto:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      photos: [
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506844902196-e1792b0ce899?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
      ],
      about:
        "Translating dev-speak to business requirements since 2019. I firmly believe most meetings could be an email, and the best products are built over good espresso.",
      skills: ["Agile", "Jira", "User Research", "Strategy"],
      prompts: [
        {
          question: "My most irrational fear...",
          answer:
            "Deploying on a Friday at 4:45 PM. It's not a fear, it's just common sense.",
        },
      ],
      vibe: {
        lookingFor: "Devs who care about UX 🎨",
        listeningTo: "Texas Hold 'Em - Beyoncé",
        statusColor: "bg-amber-400",
      },
      location: "Austin, TX",
      mindSync: {
        badge: "Strategic Pair",
        headline: "The Builder/Manager Overlap",
        insight:
          "You both value clean code and clear requirements. She writes the tickets, you build the features. Perfect synergy.",
        urgencyText: "Strong collaboration potential.",
      },
      isExpanded: true,
    },
  ];

  // 1. State for managing the current card
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState(1); // Default to right just in case
  const user = feedUsers[currentIndex]; // The active user to display

  // 2. Action handlers
  const handlePass = useCallback(async () => {
    if (!user) return;
    try {
      setExitDirection(1); // CHANGED: Pass now slides RIGHT (1)
      // TODO: Add your backend route call here
      // await axios.post(`/api/users/${user.id}/pass`);
      console.log(`Passed on user: ${user.firstName} (ID: ${user.id})`);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error passing on user:", error);
    }
  }, [user]);

  const handleConnect = useCallback(async () => {
    if (!user) return;
    try {
      setExitDirection(-1); // CHANGED: Connect now slides LEFT (-1)
      // TODO: Add your backend route call here
      // await axios.post(`/api/users/${user.id}/connect`);
      console.log(`Connected with user: ${user.firstName} (ID: ${user.id})`);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error connecting with user:", error);
    }
  }, [user]);

  // 3. Global Keydown Listener for Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent action if typing in an input field
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      // Swapped keyboard logic so intuition matches the new visual direction
      if (e.code === "Space" || e.key === "ArrowRight") {
        e.preventDefault();
        handlePass(); // Space or Right Arrow = Pass (Right)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleConnect(); // Left Arrow = Connect (Left)
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePass, handleConnect]);

  // 4. Animation rules for the cards
  const cardVariants = {
    initial: { opacity: 0, scale: 0.95, zIndex: 0 },
    animate: { opacity: 1, scale: 1, zIndex: 1, transition: { duration: 0.4 } },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 1 ? 600 : -600, // Still works exactly the same!
      rotate: direction === 1 ? 10 : -10,
      zIndex: 10,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };
  const truncateAboutMe = (about) => {
    const MAX_LENGTH = 134;
    const truncatedValue = about.slice(0, MAX_LENGTH);
    if (about.length > MAX_LENGTH) {
      const last = truncatedValue.lastIndexOf(" ");
      if (last === -1) {
        return truncatedValue + "...";
      }
      return truncatedValue.slice(0, last) + "...";
    }
    return about;
  };
  return (
    <div className="min-h-screen font-sans py-12 px-4 sm:px-8 bg-[#fdfafb] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,203,221,0.6)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        {/* AnimatePresence wrapper for mounting/unmounting cards */}
        <AnimatePresence mode="popLayout" custom={exitDirection}>
          {user ? (
            <motion.div
              key={user.id}
              custom={exitDirection}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* === LEFT SIDE: MAIN BENTO GRID === */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
                  {/* TILE 1: HERO IDENTITY */}
                  <div className="md:col-span-2 md:row-span-2 relative bg-[#f8e9ed] rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] overflow-hidden min-h-[400px] flex flex-col justify-end group">
                    <img
                      src={user.photos[0]}
                      alt="Cover"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Alternative: A subtle dark shadow just at the bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white shrink-0">
                          <img
                            src={user.mainPhoto}
                            alt={user.firstName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-4xl font-black text-white leading-none tracking-tight shadow-sm">
                            {user.firstName}
                          </h2>
                          <span className="text-xl font-bold text-white">
                            {user.age} yrs
                          </span>
                        </div>
                      </div>
                      <p className="text-white/90 font-semibold text-lg leading-tight mb-2">
                        {user.headline}
                      </p>
                    </div>
                  </div>

                  {/* TILE 2: VIBE CHECK */}
                  <div className="md:col-span-2 bg-[#3e000c] text-white rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#fb4b4e] p-6 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-10">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcbdd] mb-4 flex items-center gap-2 relative z-10">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${user.vibe.statusColor} animate-pulse`}
                      ></span>{" "}
                      Current Vibe
                    </h3>
                    <div className="space-y-4 relative z-10">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
                          Looking For
                        </p>
                        <p className="font-bold text-lg">
                          {user.vibe.lookingFor}
                        </p>
                      </div>
                      <div className="w-full h-[2px] bg-white/10"></div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
                          On Repeat
                        </p>
                        <p className="font-bold text-sm text-[#ffcbdd] italic flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                            />
                          </svg>
                          {user.vibe.listeningTo}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TILE 3: BIO */}
                  <div className="md:col-span-1 bg-[#fff5f7] rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#3e000c] mb-3 border-b-2 border-[#3e000c]/20 pb-2">
                      About Me //
                    </h3>
                    <p className="text-[#3e000c] text-sm font-semibold leading-relaxed">
                      {truncateAboutMe(user.about)}
                    </p>
                  </div>

                  {/* TILE 4: SKILLS & STACK */}
                  <div className="md:col-span-1 bg-white rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#3e000c] mb-3 border-b-2 border-[#3e000c]/20 pb-2">
                      Skills & Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-[#ffcbdd]/30 border-2 border-[#3e000c] text-[#3e000c] font-black rounded text-[10px] uppercase"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TILE 5: PROMPTS */}
                  {user.isExpanded && (
                    <div className="md:col-span-2 bg-[#fb4b4e] rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-6 flex flex-col justify-center">
                      {user.prompts.map((prompt, idx) => (
                        <div key={idx}>
                          <h3 className="text-[11px] font-black uppercase tracking-widest text-[#3e000c] bg-white inline-block px-3 py-1 rounded-md border-2 border-[#3e000c] mb-3 transform -rotate-1">
                            {prompt.question}
                          </h3>
                          <p className="text-white font-bold text-lg leading-tight md:pr-8">
                            "{prompt.answer}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TILE 6: MINI GALLERY */}
                  {user.isExpanded && (
                    <div className="md:col-span-2 grid grid-cols-3 gap-2 bg-white rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-4">
                      {user.photos.slice(1, 4).map((photo, index) => (
                        <div
                          key={index}
                          className="w-full aspect-square rounded-xl border-2 border-[#3e000c] overflow-hidden bg-gray-100"
                        >
                          <img
                            src={photo}
                            alt="Gallery"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* === RIGHT SIDE: ACTION SIDEBAR === */}
                <div className="lg:w-[300px] flex flex-col gap-4 shrink-0">
                  {/* ISOLATED ACTIONS TILE */}
                  <div className="bg-white rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-5 relative overflow-hidden group">
                    <div
                      className="absolute inset-0 opacity-[0.15] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.25]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #3e000c 0, #3e000c 1px, transparent 1px, transparent 8px)",
                      }}
                    ></div>

                    <div className="relative z-10 flex flex-col">
                      <div className="flex justify-between items-center mb-4 border-b-2 border-[#3e000c]/10 pb-2">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#3e000c]">
                          Next Move
                        </h3>
                        <span className="text-[9px] font-bold text-[#3e000c]/40 uppercase tracking-widest">
                          Awaiting
                        </span>
                      </div>

                      <div className="flex gap-3 w-full">
                        <button
                          onClick={handleConnect}
                          className="flex-[1.5] py-3 bg-emerald-300 text-[#3e000c] hover:bg-emerald-400 font-black text-xs border-2 border-[#3e000c] rounded-xl shadow-[3px_3px_0_#3e000c] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0_#3e000c] transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-2 group/connect"
                        >
                          <svg
                            className="w-4 h-4 group-hover/connect:-rotate-12 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                            />
                          </svg>
                          Connect
                        </button>

                        <button
                          onClick={handlePass}
                          className="flex-1 py-3 bg-[#fff5f7] text-[#3e000c] hover:bg-[#ffcbdd] font-black text-[10px] border-2 border-[#3e000c] rounded-xl shadow-[2px_2px_0_#3e000c] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0_#3e000c] transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-1.5 group/pass"
                        >
                          Pass
                          <svg
                            className="w-3.5 h-3.5 opacity-70 group-hover/pass:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* HQ TILE */}
                  <div className="bg-[#f8e9ed] rounded-3xl border-4 border-[#3e000c] shadow-[6px_6px_0_#3e000c] p-5">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-[#3e000c] mb-2 border-b-2 border-[#3e000c]/10 pb-2">
                      HQ
                    </h3>
                    <p className="text-[#3e000c] font-black text-lg flex items-center gap-2">
                      📍 {user.location}
                    </p>
                  </div>

                  {/* THE "TICKET/DOSSIER" MIND SYNC TILE */}
                  <div className="bg-white rounded-3xl border-4 border-[#3e000c] shadow-[8px_8px_0_#fb4b4e] flex-1 flex flex-col relative overflow-hidden group">
                    <div className="bg-[#fb4b4e] text-white px-5 py-3 border-b-4 border-[#3e000c] flex justify-between items-center">
                      <span className="font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Mind Sync Alert
                      </span>
                      <svg
                        className="w-4 h-4 text-[#3e000c]"
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

                    <div className="p-5 flex flex-col flex-1">
                      <div className="inline-block bg-[#ffcbdd] text-[#3e000c] border-2 border-[#3e000c] font-black uppercase tracking-widest text-[9px] px-3 py-1 -rotate-2 mb-6 self-start shadow-[2px_2px_0_#3e000c]">
                        ☄️ {user.mindSync.badge}
                      </div>

                      <div className="flex flex-col flex-1 justify-center mb-2">
                        <h4 className="font-black text-[#3e000c] text-2xl uppercase leading-none mb-3">
                          {user.mindSync.headline}
                        </h4>
                        <p className="font-bold text-[#3e000c]/70 text-[13px] leading-relaxed">
                          {user.mindSync.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Empty State when there are no more users to display */
            /* Premium Upsell Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[60vh] flex flex-col items-center justify-center text-[#3e000c] px-4"
            >
              {/* Premium Icon Badge */}
              <div className="w-24 h-24 mb-6 rounded-full bg-amber-300 border-4 border-[#3e000c] flex items-center justify-center shadow-[6px_6px_0_#3e000c] relative">
                <div className="absolute -top-2 -right-2 bg-white text-[10px] font-black uppercase tracking-widest border-2 border-[#3e000c] px-2 py-1 rounded-md rotate-12">
                  Pro
                </div>
                <span className="text-4xl">🚀</span>
              </div>

              {/* Catchy Headline */}
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-center">
                Expand Your Universe
              </h2>

              {/* Value Proposition Copy */}
              <p className="font-bold text-[#3e000c]/70 max-w-md text-center mb-8 text-[15px] leading-relaxed">
                You've hit your daily discovery limit. Upgrade to{" "}
                <span className="text-[#fb4b4e] font-black uppercase tracking-wider">
                  Premium
                </span>{" "}
                to unlock infinite profiles, advanced Mind Sync filters, and
                priority matching.
              </p>

              {/* Action Button */}
              <button className="py-4 px-8 bg-[#fb4b4e] text-white hover:bg-[#e03a3d] font-black text-xs sm:text-sm border-4 border-[#3e000c] rounded-2xl shadow-[6px_6px_0_#3e000c] active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0px_0px_0_#3e000c] transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-3 group">
                Unlock Premium
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              {/* Subtle Alternative text */}
              <button className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#3e000c]/40 hover:text-[#3e000c]/80 transition-colors underline decoration-2 underline-offset-4">
                Or wait 12 hours for your next drop
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Feed;
