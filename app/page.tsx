import Announcement from "./components/announcement";
import CustomerReview from "./components/customerreview";
import Jumbotron from "./components/jumbotron";
import NavigationHeader from "./components/navigationheader";

export default function Home() {
  return (
    <div>
      <Announcement />
      <NavigationHeader />
      <Jumbotron />
      <CustomerReview />
    </div>
  );
}
