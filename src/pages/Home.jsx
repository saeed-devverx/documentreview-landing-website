import React from "react";
import MainHero from "../components/homePages/MainHero";
import Dropbox from "../components/homePages/Dropbox";
import Video from "../components/homePages/Video";
import ReviewTool from "../components/homePages/ReviewTool";
import TableSection from "../components/homePages/TableSection";
import SaveMoney from "../components/homePages/SaveMoney";
import Founder from "../components/homePages/Founder";
import FAQ from "../components/homePages/FAQ";


const Home = () => {
  return (
    <>
      <div>
        <MainHero />
        <Dropbox />
        <Video />
        <ReviewTool />
        <TableSection />
        <SaveMoney />
        <Founder />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
