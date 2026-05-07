import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivals />
      <FeaturedBooks />
    </div>
  );
}
