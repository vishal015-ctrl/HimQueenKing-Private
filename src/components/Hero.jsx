import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ChevronDown, Star, ArrowRight, Users, ShieldCheck, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../data/travelData";
import heroHimalaya from "../assets/hero-himalaya.jpg";
import destSpiti from "../assets/destinations/dest-spiti.jpg";
import destLeh from "../assets/destinations/dest-leh-ladakh.jpg";
import destManali from "../assets/destinations/dest-manali.jpg";
import destValley from "../assets/destinations/dest-valley-of-flowers.jpg";
import destChitkul from "../assets/destinations/dest-chitkul.jpg";
import destShimla from "../assets/destinations/dest-shimla.jpg";
import dieWithMemories from "../assets/die with memories.jpg";
import justGoOut from "../assets/just go out.jpg";
import lifeIsTooShort from "../assets/life is too short.jpg";
import sryNetflix from "../assets/srynetflix.jpg";
import peace from "../assets/peace.jpg";

const slides = [
  {
    image: heroHimalaya,
    title: "Discover the",
    highlight: "Himalayas",
    subtitle: "Handcrafted journeys through India's most breathtaking mountain landscapes",
    tag: "Mountain Escapes",
  },
  {
    image: destSpiti,
    title: "Into the Wild",
    highlight: "Spiti Valley",
    subtitle: "Ancient monasteries, cold deserts and the world's highest inhabited villages",
    tag: "Off-Beat Adventures",
  },
  {
    image: destLeh,
    title: "Land of High",
    highlight: "Passes",
    subtitle: "Turquoise lakes, barren peaks and unforgettable road trips across Ladakh",
    tag: "Ladakh Expeditions",
  },
  {
    image: destManali,
    title: "Escape to",
    highlight: "Manali",
    subtitle: "Snow-clad peaks, pine forests and café culture in the heart of Himachal",
    tag: "Hill Station Getaways",
  },
  {
    image: destShimla,
    title: "The Queen of",
    highlight: "Hills",
    subtitle: "Colonial charm, the Mall Road and pine-clad slopes in Himachal's summer capital",
    tag: "Shimla Getaways",
  },
  {
    image: destValley,
    title: "Walk Through",
    highlight: "Blooming Valleys",
    subtitle: "Trek to alpine meadows carpeted with a hundred species of wildflowers",
    tag: "Trekking Paradise",
  },
  {
    image: destChitkul,
    title: "Off the",
    highlight: "Beaten Path",
    subtitle: "Hidden villages and untouched valleys waiting to be explored",
    tag: "Hidden Gems",
  },
  {
    image: dieWithMemories,
    fit: "80% 150%",
    title: "Die With",
    highlight: "Memories",
    subtitle: "Collect moments, not things — every trip writes a story worth keeping",
    tag: "Make Memories",
  },
  {
    image: justGoOut,
    fit: "100% 100%",
    title: "Just",
    highlight: "Go Out",
    subtitle: "Pack your bags and wander — the mountains are calling your name",
    tag: "Wander Often",
  },
  {
    image: lifeIsTooShort,
    fit: "100% 90%",
    title: "Life Is",
    highlight: "Too Short",
    subtitle: "Don't wait for the perfect moment — take the trip and make it perfect",
    tag: "Live Now",
  },
  {
    image: sryNetflix,
    fit: "100% 100%",
    title: "Sorry",
    highlight: "Netflix",
    subtitle: "This season's best drama is the one happening out on the trail",
    tag: "Offline Mode",
  },
  {
    image: peace,
    fit: "90% 100%",
    title: "Find Your",
    highlight: "Peace",
    subtitle: "Escape the noise and rediscover calm in the heart of the Himalayas",
    tag: "Inner Peace",
  },
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const trust = [
  { icon: Star, label: "4.9/5 Traveler Rating" },
  { icon: Users, label: "12,000+ Happy Travelers" },
  { icon: ShieldCheck, label: "100% Customizable" },
  { icon: Headphones, label: "24/7 Trip Support" },
];

const Hero = () => {
  const [deck] = useState(() => shuffle(slides));
  const [current, setCurrent] = useState(0);
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % deck.length), 6000);
    return () => clearInterval(timer);
  }, [deck]);

  const slide = deck[current];

  const handleSearch = (e) => {
    e.preventDefault();
    const q = destination.trim().toLowerCase();
    if (!q) {
      setResults([]);
      setSearched(false);
      return;
    }
    const matches = destinations
      .filter((d) => d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q))
      .slice(0, 5);
    setResults(matches);
    setSearched(true);
  };

  return (
    <section className="relative h-[92vh] min-h-150 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} transition={{ duration: 1.6 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-70"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div
            className={`absolute inset-x-0 bottom-0 bg-center bg-no-repeat ${slide.fit ? "top-16 lg:top-20" : "top-0"}`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: slide.fit ?? "cover" }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center gap-7">
        <AnimatePresence mode="wait">
          <motion.div key={current + "t"} initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }} className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium">
              <MapPin size={13} /> {slide.tag}
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]">
              {slide.title}{" "}
              <span className="text-[#f0c75e]">{slide.highlight}</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">{slide.subtitle}</p>
          </motion.div>
        </AnimatePresence>

        {/* Search */}
        <div className="relative w-full max-w-2xl">
          <motion.form onSubmit={handleSearch} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 flex items-center gap-2 w-full shadow-2xl">
            <div className="flex items-center gap-3 flex-1 px-4 py-3">
              <MapPin size={18} className="text-[#b8860b] shrink-0" />
              <div className="flex flex-col min-w-0">
                <label className="text-gray-400 text-xs font-medium">Where do you want to go?</label>
                <input
                  className="bg-transparent text-gray-900 text-sm outline-none placeholder:text-gray-400 w-full"
                  placeholder="Manali, Ladakh, Spiti..."
                  value={destination}
                  onChange={e => { setDestination(e.target.value); setSearched(false); }}
                />
              </div>
            </div>
            <button type="submit" className="bg-[#b8860b] hover:bg-[#996f08] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-300 shrink-0 text-sm">
              <Search size={16} /> Explore Tours
            </button>
          </motion.form>

          {/* Location Search Results */}
          <AnimatePresence>
            {searched && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 right-0 top-full mt-3 bg-white rounded-2xl shadow-2xl p-3 text-left z-30 max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-2 pb-2">
                      {results.length} location{results.length > 1 ? "s" : ""} found
                    </p>
                    <div className="grid gap-2">
                      {results.map((d) => (
                        <button key={d.id} type="button" onClick={() => navigate(`/destinations/${d.id}`)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition text-left w-full">
                          <img src={d.image} alt={d.name} className="h-14 w-14 rounded-lg object-cover shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-gray-900 truncate">{d.name}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
                              <MapPin size={11} /> {d.region}
                            </p>
                          </div>
                          <span className="ml-auto flex items-center gap-1 text-xs text-amber-600 font-medium shrink-0">
                            <Star size={12} fill="#f59e0b" color="#f59e0b" /> {d.rating}
                          </span>
                          <ArrowRight size={16} className="text-gray-300 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="p-6 text-center text-gray-500 text-sm">
                    <p className="font-medium text-gray-700">No location found for "{destination}"</p>
                    <button type="button" onClick={() => navigate(`/tours?search=${encodeURIComponent(destination.trim())}`)}
                      className="mt-2 text-[#b8860b] font-semibold inline-flex items-center gap-1">
                      Browse all tours <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-xs sm:text-sm">
          {trust.map((t) => (
            <span key={t.label} className="flex items-center gap-1.5">
              <t.icon size={14} className="text-[#f0c75e]" fill={t.icon === Star ? "#f0c75e" : "none"} /> {t.label}
            </span>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2">
          {deck.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#b8860b]" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* Scroll */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10">
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
