import Hero from "../components/Hero";
import Collection from "../components/Collection";
import BenefitsHeader from "../components/Benefits";
import BenefitsList from "../components/BenefitsList";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <BenefitsHeader />
      <BenefitsList />
      <HowItWorks />
    </>
  );
};

export default Home;
