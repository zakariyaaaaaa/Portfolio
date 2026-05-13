import HeroImg from "@/assets/images/Mee.png";
import OlovaLogo from "@/assets/images/logo.jpg";

const stats = [
  { num: "2+", label: "years exp" },
  { num: "10+", label: "projects" },
  { num: "1", label: "framework" },
];

const skills = ["React", "Node.js", "OlovaJS"];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-36 bg-[#04081A] text-white overflow-hidden">

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 space-y-14">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 text-[11px] font-mono text-gray-500 border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.03]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          about me
        </div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold lg:text-5xl leading-[1.1] tracking-tight">
          Developer, Designer,{" "}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
            Creator,
          </span>{" "}
          Innovator
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:gap-14 items-start">

          {/* ── Image Card ── */}
          <div
            className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a1628]"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={HeroImg}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Zakaria Boutlane"
            />

            {/* subtle teal corner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#04081A] via-[#04081A]/80 to-transparent">
              <p className="text-white font-semibold text-sm">Zakaria Boutlane</p>
              <p className="text-gray-500 text-xs font-mono mt-0.5">// JavaScript Developer</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-teal-900/30 text-teal-300 border border-teal-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-6">

            {/* Description */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                Hello! I'm Zakaria Boutlane, a passionate JavaScript developer specializing in
                creating innovative web solutions and user-friendly interfaces.{" "}
                <span className="font-semibold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                My focus is on making web development faster, easier, and accessible to all
                developers. Currently expanding into backend development to grow as a full-stack
                developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group/stat relative rounded-xl p-3 text-center border border-white/[0.06] bg-white/[0.03] hover:border-teal-500/30 hover:bg-teal-500/[0.05] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                  <div className="text-xl font-extrabold font-mono text-white">{stat.num}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative rounded-r-xl border-l-2 border-teal-500 bg-teal-950/20 p-5 overflow-hidden">
              <div className="absolute top-3 right-4 text-5xl font-serif text-teal-500/10 leading-none select-none">"</div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                "I'm a lifelong learner and innovator, driven by a desire to contribute to the
                developer community with new ideas and tools that deliver real value."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white font-mono flex-shrink-0">
                  ZB
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Zakaria Boutlane, Creator of</p>
                  <div className="flex items-center gap-2 mt-1">
                    <img src={OlovaLogo} alt="Olova Logo" className="h-4 w-auto" />
                    <span className="text-xs text-teal-400 font-mono">Zakariya_9f</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
