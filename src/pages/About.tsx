import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mountain, Heart, ShieldCheck, MapPin, Users, Award, Compass, Sparkles, Headphones, Wallet } from "lucide-react";
import SEO from "../components/SEO";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50,000+", label: "Happy Travellers" },
  { value: "100+", label: "Destinations Covered" },
  { value: "4.8/5", label: "Average Rating" },
];

const values = [
  { icon: Compass, title: "Local Himalayan Experts", desc: "Our team is born and raised in the hills — we know every pass, trail and hidden village personally." },
  { icon: Sparkles, title: "Curated Itineraries", desc: "Every tour is handcrafted around real experiences, not copy-paste packages." },
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Verified stays, experienced drivers and 24/7 on-trip assistance for total peace of mind." },
  { icon: Wallet, title: "Honest Pricing", desc: "Transparent, all-inclusive quotes with no hidden charges — from budget to luxury." },
  { icon: Heart, title: "Responsible Travel", desc: "We support local homestays, guides and communities across Himachal and Uttarakhand." },
  { icon: Headphones, title: "24/7 Support", desc: "A dedicated travel expert stays with you on WhatsApp throughout your journey." },
];

const pillars = [
  { icon: Mountain, title: "Our Story", text: "HimKingQueen began in 2010 with a single Innova and a simple belief — that the Himalayas should be experienced, not just seen. What started as weekend trips around Manali has grown into one of the region's most trusted travel companies." },
  { icon: Users, title: "Our Mission", text: "To make world-class Himalayan travel accessible, safe and unforgettable for every kind of traveller — backpackers, families, honeymooners and adventure seekers alike." },
  { icon: Award, title: "Why Travellers Trust Us", text: "Thousands of repeat guests and referrals each year. Recognised as a leading Himalayan tour operator for our honest service, deep local knowledge and thoughtfully crafted journeys." },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us — HimKingQueen Himalayan Travel Experts"
        description="Learn about himkingqueen — your trusted travel partner for Himachal Pradesh, Spiti Valley, Leh Ladakh, Uttarakhand and the Himalayas since 2010."
        keywords="about himkingqueen, himachal travel agency, himalaya tour operator, best travel agency himachal pradesh, manali tour operator"
        url="https://himkingqueen.onrender.com/about"
      />
      <div className="pt-20 pb-20 min-h-screen bg-[#faf9f6] dark:bg-[#0f0f1a]">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 bg-[#1a1a2e] overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60')] bg-cover bg-center" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display">About HimKingQueen</h1>
            <p className="text-gray-300 max-w-lg">Crafting unforgettable Himalayan journeys since 2010</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          {/* Stats */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 mb-14">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#b8860b] font-display">{s.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-7">
                <div className="w-12 h-12 rounded-xl bg-[#b8860b]/10 flex items-center justify-center text-[#b8860b] mb-4">
                  <p.icon size={24} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{p.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-display mb-3">Why Choose Us</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Everything we do is built around giving you a smoother, richer and safer Himalayan experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card p-6">
                <div className="w-11 h-11 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-[#b8860b] mb-4">
                  <v.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative rounded-3xl overflow-hidden bg-[#1a1a2e] px-6 sm:px-12 py-14 text-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60')] bg-cover bg-center" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-[#b8860b] font-semibold text-sm mb-3">
                <MapPin size={16} /> Let's plan together
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">Your Himalayan Adventure Starts Here</h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">Tell us your dream destination and our experts will craft a personalised itinerary just for you.</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/dream-destination" className="btn-primary text-sm !py-3 !px-7">Plan Your Trip</Link>
                <Link to="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-xl px-7 py-3 hover:bg-white/10 transition-colors">Explore Destinations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
