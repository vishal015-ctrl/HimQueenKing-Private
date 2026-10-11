import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations, budgetRanges } from "../data/travelData";

const featuredIds = [1, 3, 2, 7, 6, 9];
const featured = featuredIds
  .map((id) => destinations.find((d) => d.id === id))
  .filter(Boolean);

const DestinationCard = ({ dest, index }) => (
  <motion.article className="card group"
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.08, duration: 0.5 }}>
    <Link to={`/destinations/${dest.id}`}>
      <div className="relative overflow-hidden h-56">
        <img src={dest.image} alt={dest.name} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span className={`absolute top-3 left-3 ${dest.badgeBg} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {dest.badge}
        </span>
        <span className={`absolute top-3 right-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full ${budgetRanges[dest.budget].color}`}>
          {budgetRanges[dest.budget].label}
        </span>
        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
          {dest.tags.map(t => (
            <span key={t} className="bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs px-2.5 py-0.5 rounded-full font-medium">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs mb-1.5">
          <MapPin size={12} /> {dest.region}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-2 group-hover:text-[#b8860b] transition-colors">{dest.name}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <span className="font-semibold text-gray-900 dark:text-gray-100">{dest.rating}</span>
          <span>({dest.reviews.toLocaleString()} reviews)</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 dark:text-gray-500">{dest.region}</span>
          <span className="text-[#b8860b] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const DestinationsSection = () => (
  <section className="py-24 px-4 bg-white dark:bg-[#1a1a2e]">
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">Top Destinations</span>
        <h2 className="section-title mt-2 mb-4">
          Explore <span className="text-[#b8860b]">Main Places</span> in India
        </h2>
        <p className="section-subtitle mx-auto">From the mountains of Himachal & Ladakh to the holy towns of Uttarakhand — the most loved destinations, handpicked for you</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((dest, i) => <DestinationCard key={dest.id} dest={dest} index={i} />)}
      </div>

      <div className="text-center mt-10">
        <Link to="/destinations" className="btn-outline">
          View All Destinations <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default DestinationsSection;
