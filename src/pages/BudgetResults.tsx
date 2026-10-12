import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Mountain, Star, TrendingUp, Users } from "lucide-react";
import { tours, budgetRanges } from "../data/travelData";
import type { BudgetLevel } from "../data/travelData";
import { allTreks } from "../data/treks";
import SEO from "../components/SEO";

const levelOrder: BudgetLevel[] = ["budget", "mid", "premium", "luxury"];

const diffColor = {
  Easy: "text-green-600 bg-green-50",
  Moderate: "text-amber-600 bg-amber-50",
  Challenging: "text-orange-600 bg-orange-50",
  Hard: "text-red-600 bg-red-50",
};

const BudgetResults = () => {
  const { level } = useParams<{ level: string }>();
  const valid = level && (levelOrder as string[]).includes(level);
  const lvl = (valid ? level : "budget") as BudgetLevel;
  const range = budgetRanges[lvl];

  const matchingTours = tours.filter((t) => t.budget === lvl);
  const matchingTreks = allTreks.filter((t) => t.budget === lvl);

  if (!valid) {
    return (
      <>
        <SEO title="Budget Not Found — HimKingQueen" url="https://himkingqueen.onrender.com" />
        <div className="pt-40 pb-32 min-h-screen bg-[#faf9f6] dark:bg-[#0f0f1a] px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Budget level not found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Pick a budget from the planner below.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </>
    );
  }

  return (
    <div className="pt-20 pb-20 min-h-screen bg-[#faf9f6] dark:bg-[#0f0f1a]">
      <SEO
        title={`${range.label} Tours & Treks — ${range.range} | HimKingQueen`}
        description={`Explore ${range.label} tour packages and treks in ${range.range} range. Curated Himalaya tours and treks matching your budget — no surprises, no hidden costs.`}
        keywords="budget tours himachal, himalaya tour packages, budget friendly treks, tour packages"
        url={`https://himkingqueen.onrender.com/budget/${lvl}`}
      />

      <div className="relative h-64 sm:h-80 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=60')] bg-cover bg-center" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${range.color}`}>
            {range.range}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display">{range.label}<span className="text-[#b8860b]"> Budget</span></h1>
          <p className="text-gray-300 max-w-lg">Tours & treks curated for your budget — no surprises, no hidden costs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-wrap gap-2 mb-10">
          {levelOrder.map((key) => {
            const r = budgetRanges[key];
            const active = key === lvl;
            return (
              <Link key={key} to={`/budget/${key}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  active ? "bg-[#b8860b] text-white border-[#b8860b]" : "bg-white dark:bg-[#1a1a2e] text-gray-600 dark:text-gray-400 hover:border-[#b8860b] hover:text-[#b8860b] border-gray-200 dark:border-gray-700"
                }`}>
                {r.label}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {matchingTours.map((tour, i) => (
            <motion.article key={tour.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card group">
              <Link to={`/tours/${tour.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-xs font-semibold px-3 py-1 rounded-full">{tour.badge}</span>
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
                  <span className="text-xs text-gray-400 dark:text-gray-500">{tour.duration} · {tour.difficulty}</span>
                  <Link to={`/tours/${tour.id}`} className="btn-primary text-sm !py-2.5 !px-5">
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {matchingTreks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchingTreks.map((trek, i) => (
              <motion.article key={trek.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="card group">
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
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-[#b8860b] transition-colors">{trek.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} /> {trek.duration}</span>
                    <span className="flex items-center gap-1"><TrendingUp size={12} /> {trek.altitude}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{trek.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {trek.itinerary.slice(0, 3).map((day) => (
                      <li key={day.day} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" /> {day.day} · {day.title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{trek.difficulty} · {trek.region}</span>
                    <Link to="/treks" className="btn-primary text-sm !py-2.5 !px-5">
                      View Trek <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {matchingTours.length === 0 && matchingTreks.length === 0 && (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">
            <p className="text-lg font-medium">No tours or treks match this budget yet</p>
            <p className="text-sm">Try another budget range</p>
          </div>
        )}

        {matchingTreks.length === 0 && (
          <div className="text-center py-16 mb-8">
            <Link to="/treks" className="btn-outline">Explore All Treks <ArrowRight size={16} /></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetResults;