import { motion } from "framer-motion";
import { Clock, Mountain, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { allTreks } from "../data/treks";

const treks = allTreks.slice(-3).reverse();

const diffColor = {
  Easy: "text-green-600 bg-green-50",
  Moderate: "text-amber-600 bg-amber-50",
  Challenging: "text-orange-600 bg-orange-50",
  Hard: "text-red-600 bg-red-50",
};

const LatestTrekCard = ({ trek, index }) => (
  <motion.article className="card flex flex-col"
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.12, duration: 0.6 }}>
    <Link to="/treks">
      <div className="relative h-56 overflow-hidden">
        <img src={trek.image} alt={trek.title} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-xs font-semibold px-3 py-1 rounded-full">{trek.altitude}</span>
        <span className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${diffColor[trek.difficulty]}`}>
          <Mountain size={11} /> {trek.difficulty}
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <MapPin size={11} /> {trek.region}
        </span>
      </div>
    </Link>

    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-2 hover:text-[#b8860b] transition-colors">
        <Link to="/treks">{trek.title}</Link>
      </h3>
      <div className="flex flex-wrap gap-3 text-gray-400 dark:text-gray-500 text-xs mb-3">
        <span className="flex items-center gap-1"><Clock size={12} /> {trek.duration}</span>
        <span className="flex items-center gap-1"><Mountain size={12} /> {trek.altitude}</span>
        <span className="flex items-center gap-1">{trek.bestTime}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">{trek.desc}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
        <span className="text-xs text-gray-400 dark:text-gray-500">{trek.difficulty} · {trek.region}</span>
        <Link to="/treks" className="btn-primary text-sm !py-2.5 !px-5">
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </motion.article>
);

const LatestTreks = () => (
  <section className="py-24 px-4 bg-[#faf9f6] dark:bg-[#0f0f1a]">
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">Adventure Awaits</span>
        <h2 className="section-title mt-2 mb-4">
          Latest <span className="text-[#b8860b]">Treks</span>
        </h2>
        <p className="section-subtitle mx-auto">Newly added Himalayan treks with meals, tents & complete day-by-day itineraries</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek, i) => <LatestTrekCard key={trek.id} trek={trek} index={i} />)}
      </div>
      <div className="text-center mt-10">
        <Link to="/treks" className="btn-outline">
          View All Treks <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default LatestTreks;
