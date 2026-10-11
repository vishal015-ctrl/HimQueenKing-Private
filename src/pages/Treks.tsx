import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, TrendingUp, Calendar, MessageCircle, ChevronDown, ChevronUp, UtensilsCrossed, Tent, MapPin, Mountain, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { allTreks } from "../data/treks";


const difficulties = ["All", "Easy", "Moderate", "Challenging", "Hard"];
const regions = ["All", "HP", "UK"];
const diffColor = { Easy: "text-green-600 bg-green-50", Moderate: "text-amber-600 bg-amber-50", Challenging: "text-orange-600 bg-orange-50", Hard: "text-red-600 bg-red-50" };

const Treks = () => {
  const [diffFilter, setDiffFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [search] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = allTreks.filter((t) => {
    const matchDiff = diffFilter === "All" || t.difficulty === diffFilter;
    const matchRegion = regionFilter === "All" || (regionFilter === "HP" && t.region.includes("HP")) || (regionFilter === "UK" && (t.region.includes("UK") || t.region.includes("Uttarakhand")));
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.region.toLowerCase().includes(search.toLowerCase());
    return matchDiff && matchRegion && matchSearch;
  });

  const handleEnquire = (trek) => {
    const msg = `Hi! I'm interested in the ${trek.title} trek (${trek.difficulty}, ${trek.duration}). Can you share details about budget, meals, and tent/accommodation?`;
    window.open(`https://wa.me/919805556015?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Best Trekking Packages in Himachal Pradesh & Uttarakhand — Himalaya Treks"
        description="Discover the best trekking packages in Himachal Pradesh & Uttarakhand. Kheerganga, Chuddhar, Kinner Kailash, Shrikhand Mahadev, Hampta Pass, Kedarkantha treks with day-by-day itinerary, meals & tent info."
        keywords="himachal pradesh trekking, himalaya trek packages, kheerganga trek, chuddhar trek, kinner kailash trek, shrikhand mahadev trek, hampta pass trek, kedarkantha trek, best treks in himachal, trekking packages india, himachal trek packages"
        url="https://himkingqueen.onrender.com/treks"
      />
      <div className="pt-20 pb-20 min-h-screen bg-[#faf9f6] dark:bg-[#0f0f1a]">
      <div className="relative h-64 sm:h-80 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60')] bg-cover bg-center" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display">Trek Adventures</h1>
          <p className="text-gray-300 max-w-lg">Himachal Pradesh & Uttarakhand treks with meals, tents & complete details</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg p-4 flex items-center gap-3 mb-6 border border-gray-100 dark:border-gray-700">
          <Search size={20} className="text-gray-400 dark:text-gray-500 shrink-0" />
          <input type="text" placeholder="Search treks by name or region..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none text-sm" />
        </div> */}

        <div className="flex flex-wrap gap-2 mb-4">
          {regions.map((r) => (
            <button key={r} onClick={() => setRegionFilter(r)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              regionFilter === r ? "bg-[#b8860b] text-white border-[#b8860b]" : "bg-white dark:bg-[#1a1a2e] text-gray-600 dark:text-gray-400 hover:border-[#b8860b] hover:text-[#b8860b] border-gray-200 dark:border-gray-700"
            }`}>
              {r === "All" ? "All Regions" : r === "HP" ? "Himachal Pradesh" : "Uttarakhand"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {difficulties.map((d) => (
            <button key={d} onClick={() => setDiffFilter(d)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              diffFilter === d ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "bg-white dark:bg-[#1a1a2e] text-gray-600 dark:text-gray-400 hover:border-[#1a1a2e] hover:text-[#1a1a2e] border-gray-200 dark:border-gray-700"
            }`}>
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((trek, i) => {
            const isOpen = expanded === trek.id;
            return (
              <Fragment key={trek.id}>
                <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={trek.image} alt={trek.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-xs font-semibold px-3 py-1 rounded-full">{trek.altitude}</span>
                    <span className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${diffColor[trek.difficulty]}`}>
                      <Mountain size={11} /> {trek.difficulty}
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <MapPin size={12} /> {trek.region}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-[#b8860b] transition-colors">{trek.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Clock size={12} /> {trek.duration}</span>
                      <span className="flex items-center gap-1"><TrendingUp size={12} /> {trek.altitude}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {trek.bestTime}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{trek.desc}</p>
                    <ul className="space-y-1.5 mb-4">
                      {trek.itinerary.slice(0, 3).map((day) => (
                        <li key={day.day} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" /> {day.day} · {day.title}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center gap-1.5 text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 px-3 py-1.5 rounded-full font-medium">
                        <UtensilsCrossed size={12} /> Meals Included
                      </div>
                      <div className="flex items-center gap-1.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                        <Tent size={12} /> {trek.tentInfo.split('.')[0]}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <button onClick={() => handleEnquire(trek)} className="flex items-center gap-1.5 text-[#25D366] text-sm font-semibold hover:underline">
                        <MessageCircle size={14} /> Enquire
                      </button>
                      <button onClick={() => setExpanded(isOpen ? null : trek.id)} className="btn-primary text-sm !py-2.5 !px-5">
                        {isOpen ? "Hide" : "Itinerary"} {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>
                </motion.article>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }} className="overflow-hidden md:col-span-2 lg:col-span-3">
                      <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 md:p-6 space-y-6">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{trek.title} — Day-by-Day Itinerary</h4>
                          <button onClick={() => setExpanded(null)} className="text-gray-400 hover:text-[#b8860b] text-sm font-semibold shrink-0">Close</button>
                        </div>
                        <div className="space-y-3">
                          {trek.itinerary.map((day, j) => (
                            <div key={j} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-9 h-9 rounded-full bg-[#b8860b] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                  {day.day.replace("Day ", "")}
                                </div>
                                {j < trek.itinerary.length - 1 && <div className="w-0.5 flex-1 bg-[#b8860b]/20 mt-1" />}
                              </div>
                              <div className="pb-3 flex-1">
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                  <h5 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{day.title}</h5>
                                  <ul className="mt-2 space-y-1">
                                    {day.activities.map((act, k) => (
                                      <li key={k} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] mt-1.5 shrink-0" />{act}
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full font-medium">🍽 {day.meals}</span>
                                    {day.stay && day.stay !== "-" && (
                                      <span className="text-xs text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full font-medium">🛏 {day.stay}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5">
                          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"><UtensilsCrossed size={16} className="text-amber-600" /> Meals Information</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{trek.mealsInfo}</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
                          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2"><Tent size={16} className="text-blue-600" /> Tent & Accommodation</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{trek.tentInfo}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Fragment>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">
            <p className="text-lg font-medium">No treks match your filters</p>
            <p className="text-sm">Try adjusting your region or difficulty filters</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Treks;
