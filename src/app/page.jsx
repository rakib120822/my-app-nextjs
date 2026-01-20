import BlogRecipes from "@/component/BlogRecipes";
import LatestSection from "@/component/latest-section/Latest-section";
import Newsletter from "@/component/Newsletter";
import Popular from "@/component/Popular";
import Review from "@/component/Review";
import Slider from "@/component/Slider";
import StorySection from "@/component/StorySection";

export default function Home() {
  return (
    <>
      <Slider />
      <LatestSection />
      <Popular />
      <StorySection />
      <BlogRecipes />
      <Review />
      <Newsletter />
    </>
  );
}
