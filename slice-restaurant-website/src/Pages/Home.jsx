import { Helmet } from "react-helmet";
import Testimonals from "../Components/Testimonals";
import Banner from "../Components/Banner";
import DeliverOnTime from "../Components/DeliverOnTime";
import HotFood from "../Components/HotFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - Home</title>
        <link rel="" href="" />
      </Helmet>

      <Banner></Banner>
      <HotFood></HotFood>
      <DeliverOnTime></DeliverOnTime>
      <Testimonals></Testimonals>
    </div>
  );
};

export default Home;
