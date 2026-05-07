import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import NewArrivals from "@/components/NewArrivals";
import AllBooks from "./all-books/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivals />
      <FeaturedBooks />
      <AllBooks />
    </div>
  );
}
