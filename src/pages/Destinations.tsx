import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Users, Mountain, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { tours } from "../data/travelData";
import type { BudgetLevel } from "../data/travelData";
import { allTreks } from "../data/treks";
import SEO from "../components/SEO";

const budgetLevels: { key: "All" | BudgetLevel; label: string }[] = [
  { key: "All", label: "All Budgets" },
  { key: "budget", label: "Budget" },
  { key: "mid", label: "Mid Range" },
  { key: "premium", label: "Premium" },
  { key: "luxury", label: "Luxury" },
];

const difficulties = ["All", "Easy", "Moderate", "Challenging", "Hard"];
const diffColor = { Easy: "text-green-600 bg-green-50", Moderate: "text-amber-600 bg-amber-50", Challenging: "text-orange-600 bg-orange-50", Hard: "text-red-600 bg-red-50" };

const tabs = [
  { key: "tours", label: "Tour Packages" },
  { key: "treks", label: "Treks" },
] as const;
type Tab = (typeof tabs)[number]["key"];

const Destinations = () => {
  const [tab, setTab] = useState<Tab>("tours");
  const [budgetFilter, setBudgetFilter] = useState<string>("All");
  const [trekDiff, setTrekDiff] = useState("All");

  const filteredTours = tours.filter((t) => budgetFilter === "All" || t.budget === budgetFilter);
  const filteredTreks = allTreks.filter((t) => trekDiff === "All" || t.difficulty === trekDiff);

  const tabFilters = (
    <>
      {tab === "tours" && (
        <div className="flex flex-wrap gap-2 mb-8">
          {budgetLevels.map((b) => (
            <button key={b.key} onClick={() => setBudgetFilter(b.key)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              budgetFilter === b.key ? "bg-[#b8860b] text-white border-[#b8860b]" : "bg-white dark:bg-[#1a1a2e] text-gray-600 dark:text-gray-400 hover:border-[#b8860b] hover:text-[#b8860b] border-gray-200 dark:border-gray-700"
            }`}>
              {b.label}
            </button>
          ))}
        </div>
      )}
      {tab === "treks" && (
        <div className="flex flex-wrap gap-2 mb-8">
          {difficulties.map((d) => (
            <button key={d} onClick={() => setTrekDiff(d)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              trekDiff === d ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "bg-white dark:bg-[#1a1a2e] text-gray-600 dark:text-gray-400 hover:border-[#1a1a2e] hover:text-[#1a1a2e] border-gray-200 dark:border-gray-700"
            }`}>
              {d}
            </button>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="pt-20 pb-20 min-h-screen bg-[#faf9f6] dark:bg-[#0f0f1a]">
      <SEO
        title="Tour Packages & Treks — Himachal Pradesh, Uttarakhand & Ladakh"
        description="Browse our tour packages and treks across Himachal Pradesh, Uttarakhand, Ladakh and beyond. Budget to luxury Himalaya journeys with expert guides."
        keywords="himachal tour packages, himalaya treks, uttarakhand tours, leh ladakh tour, spiti valley tour, manali tour package, kedarkantha trek, hampta pass trek, trekking packages india"
        url="https://himkingqueen.onrender.com/destinations"
      />
      <div className="relative h-64 sm:h-80 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60')] bg-cover bg-center" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display">Explore the Himalayas</h1>
          <p className="text-gray-300 max-w-lg">Tour packages and treks across Himachal, Uttarakhand & Ladakh</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Tabs */}
        <div className="inline-flex flex-wrap rounded-full bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-700 p-1 mb-6 shadow-lg">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              tab === t.key ? "bg-[#b8860b] text-white shadow" : "text-gray-600 dark:text-gray-400 hover:text-[#b8860b]"
            }`}>
              {t.label}
            </button>
          ))}
        </div>

        {tabFilters}

        {/* Tours */}
        {tab === "tours" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, i) => (
                <motion.article key={tour.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card group">
                  <Link to={`/tours/${tour.id}`}>
                    <div className="relative h-56 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-xs font-semibold px-3 py-1 rounded-full">{tour.badge}</span>
                      <span className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${diffColor[tour.difficulty]}`}>
                        <Mountain size={11} /> {tour.difficulty}
                      </span>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <MapPin size={12} /> {tour.destination}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-[#b8860b] transition-colors">
                      <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Clock size={12} /> {tour.duration}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {tour.group}</span>
                      <span className="flex items-center gap-1"><Star size={12} fill="#f59e0b" color="#f59e0b" /> {tour.rating} ({tour.reviews})</span>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {tour.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-xs text-gray-400 dark:text-gray-500">{tour.duration} · {tour.difficulty}</div>
                      <Link to={`/tours/${tour.id}`} className="btn-primary text-sm !py-2.5 !px-5">
                        Get Quote <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {filteredTours.length === 0 && (
              <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                <p className="text-lg font-medium">No tours match your filter</p>
                <p className="text-sm">Try a different budget</p>
              </div>
            )}
          </>
        )}

        {/* Treks */}
        {tab === "treks" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek, i) => (
                <motion.article key={trek.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card group flex flex-col">
                  <Link to="/treks">
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
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-[#b8860b] transition-colors">{trek.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Clock size={12} /> {trek.duration}</span>
                      <span className="flex items-center gap-1"><TrendingUp size={12} /> {trek.altitude}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{trek.desc}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{trek.difficulty} · {trek.bestTime}</span>
                      <Link to="/treks" className="btn-primary text-sm !py-2.5 !px-5">
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {filteredTreks.length === 0 && (
              <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                <p className="text-lg font-medium">No treks match your filter</p>
                <p className="text-sm">Try a different difficulty</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Destinations;
