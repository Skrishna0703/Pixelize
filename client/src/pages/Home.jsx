import React from "react";
import Header from "../component/Header";
import { Steps } from "../component/Steps";
import { Description } from "../component/Description";
import { GenerateBtn } from "../component/GenerateBtn";

export const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <GenerateBtn />
      {/* <Footer/> */}
    </div>
  );
};
export default Home;
