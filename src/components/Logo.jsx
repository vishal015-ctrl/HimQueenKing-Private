import { Mountain } from "lucide-react";

const Logo = ({ name = "HimKingQueen", accent = "Queen", tagline = "Himalayan Journeys", compact = false }) => {
  const parts = name.split(accent);
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-[#d4a017] via-[#b8860b] to-[#8a6508] flex items-center justify-center shadow-md shadow-[#b8860b]/25 ring-1 ring-black/5 shrink-0">
        <Mountain size={22} className="text-white" strokeWidth={2.25} />
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/25 to-transparent" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none text-left">
          <span className="font-display text-[1.1rem] lg:text-[1.3rem] font-bold tracking-tight text-[#1a1a2e] dark:text-white">
            {parts[0]}
            <span className="text-[#b8860b]">{accent}</span>
            {parts[1]}
          </span>
          <span className="mt-1 text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
            {tagline}
          </span>
        </span>
      )}
    </span>
  );
};

export default Logo;
