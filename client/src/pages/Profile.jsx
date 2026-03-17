import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Static dummy data directly mapping to your Mongoose userSchema
  const user = {
    firstName: "Bukayo",
    lastName: "Saka",
    emailId: "saka@example.com",
    age: 24,
    gender: "male",
    profile:
      "https://i.pinimg.com/236x/47/29/8f/47298fa216d3b8589663aaabbd0fef80.jpg",
    about:
      "Passionate software developer exploring the MERN stack. I love building seamless user experiences.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Figma",
      "Open Source",
      "Coffee Brewing",
    ],
  };
  const navigate = useNavigate();

  return (
    // Outer wrapper matching the Navbar's subtle off-white aesthetic
    <div className="min-h-screen bg-[#fafafa] font-sans sm:py-6">
      {/* Main Feed Column */}
      <div className="max-w-2xl mx-auto bg-white sm:border sm:rounded-2xl border-[#111]/10 overflow-hidden shadow-sm">
        {/* 1. Sticky Header */}
        <div className="flex items-center px-4 py-3 sticky top-0 bg-white/90 backdrop-blur-md z-20 border-b border-[#ffcbdd]/40">
          <button className="p-2 rounded-full hover:bg-[#ffcbdd]/20 transition-colors mr-4 text-[#3e000c]">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#3e000c] leading-tight">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-xs text-[#7c0b2b]/70 font-bold uppercase tracking-wider">
              {user.skills.length} Interests
            </p>
          </div>
        </div>

        {/* 2. Cover Photo - Using the SCSS Gradient concept */}
        <div className="h-40 sm:h-52 w-full bg-linear-to-r from-[#3e000c] via-[#7c0b2b] to-[#fb4b4e] relative overflow-hidden">
          {/* Subtle overlay to tie into Likemind's brand string-of-fate aesthetic */}
          <div className="absolute inset-0 bg-[#fb4b4e]/20 mix-blend-overlay"></div>
        </div>

        {/* 3. Profile Info Section */}
        <div className="px-4 pb-4">
          {/* Avatar & Action Buttons Row */}
          <div className="flex justify-between items-start relative">
            {/* Overlapping Avatar */}
            <div className="-mt-16 sm:-mt-20 relative z-10">
              <img
                src={user.profile}
                alt={`${user.firstName}'s avatar`}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white bg-white shadow-sm"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex gap-2">
              <button className="px-4 py-1.5 sm:px-5 sm:py-2 border-2 border-[#111]/10 rounded-full font-bold text-sm text-[#3e000c] hover:bg-[#ffcbdd]/20 hover:border-[#ffcbdd] transition-colors">
                Change Password
              </button>
              <button
                className="px-4 py-1.5 sm:px-5 sm:py-2 bg-[#fb4b4e] hover:bg-[#d10000] text-white rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_0_rgba(251,75,78,0.39)]"
                onClick={() => navigate("/edit")}
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* User Details */}
          <div className="mt-3">
            <h1 className="text-2xl font-extrabold text-[#3e000c] leading-tight">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-[#7c0b2b] text-sm font-bold">{user.emailId}</p>
          </div>

          {/* Bio */}
          <div className="mt-4 text-[#3e000c]/90 text-[15px] leading-relaxed font-medium">
            {user.about}
          </div>

          {/* Meta Details */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm font-bold text-[#7c0b2b]/60 uppercase tracking-wider text-[11px]">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#fb4b4e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{user.gender}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#fb4b4e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Age {user.age}</span>
            </div>
          </div>

          {/* Social Proof Stats tailored to Likemind Models */}
          <div className="flex items-center gap-5 mt-4 text-[13px]">
            <button className="hover:underline group">
              <span className="font-black text-[#3e000c] group-hover:text-[#fb4b4e] transition-colors">
                42
              </span>{" "}
              <span className="text-[#7c0b2b]/70 font-medium">Connections</span>
            </button>
            <button className="hover:underline group">
              <span className="font-black text-[#3e000c] group-hover:text-[#fb4b4e] transition-colors">
                12
              </span>{" "}
              <span className="text-[#7c0b2b]/70 font-medium">
                Pending Requests
              </span>
            </button>
          </div>
        </div>

        {/* 4. Navigation Tabs (Tailored to Likemind features) */}
        <div className="flex border-b border-[#111]/10 mt-2">
          <button className="flex-1 text-center py-4 font-black text-[#3e000c] relative hover:bg-[#ffcbdd]/10 transition-colors uppercase tracking-widest text-[12px]">
            Interests
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#fb4b4e] rounded-t-full"></div>
          </button>
          <button className="flex-1 text-center py-4 font-bold text-[#7c0b2b]/50 hover:text-[#3e000c] hover:bg-[#ffcbdd]/10 transition-colors uppercase tracking-widest text-[12px]">
            About
          </button>
        </div>

        {/* 5. Content Area (Interests/Skills mapped to User Schema) */}
        <div className="p-4 sm:p-6 bg-white min-h-[250px]">
          <h2 className="font-black text-[#3e000c] mb-5 text-[15px] uppercase tracking-wide">
            Hobbies & Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="relative px-4 py-2.5 bg-[#7c0b2b]/10 backdrop-blur-md border border-white/60 shadow-[0_8px_16px_-4px_rgba(124,11,43,0.2)] text-[#7c0b2b] font-bold tracking-wide rounded-2xl text-[13px] hover:bg-[#fb4b4e]/15 hover:text-[#d10000] hover:border-white/80 hover:shadow-[0_12px_24px_-4px_rgba(251,75,78,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                {/* The Glass Reflection Sweep */}
                <span className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></span>

                <span className="relative z-10">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
