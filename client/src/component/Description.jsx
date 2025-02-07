import React from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        {" "}
        Create Ai Imange
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {" "}
        Turn Your imagination into visuals
      </p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Inroducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Unleash the power of artificial intelligence to bring your ideas to
            life! Our cutting-edge AI-powered tool transforms text descriptions
            into stunning, high-quality images in seconds. Whether you’re an
            artist, designer, or just someone with a vivid imagination, this
            tool enables you to create visuals effortlessly.
          </p>
          <p className="text-gray-600">
            Ever imagined creating breathtaking images just by describing them
            in words? Now you can! Our AI-powered Text-to-Image Generator takes
            your thoughts and transforms them into visually stunning artwork in
            seconds. Whether you’re an artist, designer, storyteller, or just
            someone who loves creativity, this tool unlocks endless
            possibilities.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
