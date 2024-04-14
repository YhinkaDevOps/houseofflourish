import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Services from "@/components/Services";
import WhyUS from "@/components/WhyUS";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <MissionStatement />
      <WhyUS />
    </div>
  );
}
