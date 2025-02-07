import React from "react";
import {assets} from "../assets/assets.js";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";


export const GenerateBtn = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/result");
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        See the magic.Try Now
      </h1>
      <button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>
    </motion.div>
  );
};
export default GenerateBtn;
