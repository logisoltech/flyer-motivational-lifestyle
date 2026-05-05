import Hero from "./Cx/Hero";
import HelicopterSection from "./Cx/HelicopterSection";
import VideoTwo from "./Cx/VideoTwo";
import FlyerDesignSection from "./Cx/FlyerDesignSection";
import Video from "./Cx/Video";
import FutureSwimSection from "./Cx/FutureSwimSection";
import FlyerParkDesignSection from "./Cx/FlyerParkDesignSection";
import Footer from "./Cx/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-visible">
      <Hero />
      <HelicopterSection />
      <VideoTwo />
      <FlyerDesignSection
        sectionId="flyer-designs"
        title="1 Flyer Design"
        imageSrc="/flyer-1.png"
        imageAlt="1 Flyer design views: plan, front, and side"
      />
      <FlyerDesignSection
        title="2 Flyer Design"
        imageSrc="/flyer-2.png"
        imageAlt="2 Flyer design views"
      />
      <FlyerDesignSection
        title="3 Flyer Design"
        imageSrc="/flyer-3.png"
        imageAlt="3 Flyer design views"
      />
      <Video />
      <FutureSwimSection />
      {/* <FlyerParkDesignSection /> */}
      <Footer />
    </div>
  );
}
