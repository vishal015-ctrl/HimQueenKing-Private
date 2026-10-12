import Hero from "../components/Hero";
import BudgetPlanner from "../components/BudgetPlanner";
import TourPackagesSection from "../components/TourPackagesSection";
import LatestTreks from "../components/LatestTreks";
import DestinationsSection from "../components/DestinationsSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";

const Home = () => (
  <>
    <SEO
      title="Best Himachal Pradesh, Shimla Manali & Himalaya Tour Packages 2026"
      description="Book curated tour packages to Shimla Manali, Spiti Valley, Leh Ladakh, Kasol, Rishikesh & more. HimKingQueen — the best travel agency in Himachal Pradesh for Himalaya tours, trekking, hotels & adventure packages."
      keywords="himachal pradesh tour packages, shimla manali tour package, himalaya trekking packages, manali tour package, spiti valley tour, leh ladakh tour, kasol backpacking trip, himachal trek packages, best travel agency himachal, shimla manali tour, manali tour, shimla tour, kedarnath yatra, rishikesh tour, himachal pradesh travel"
      url="https://himkingqueen.onrender.com"
    />
    <main>
      <Hero />
      <BudgetPlanner />
      <TourPackagesSection />
      <LatestTreks />
      <DestinationsSection />
      <Testimonials />
      <Newsletter />
    </main>
  </>
);

export default Home;
