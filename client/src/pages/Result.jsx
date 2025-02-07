import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setisImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setImage(image);
        setisImageLoaded(true);
      }
    }

    setLoading(false);
  };
  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex flex-col  min-h-[90vh] justify-center items-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rouneded" alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 w-full {loading ? 'transition-all duration-[10s]' : 'w-0'}`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}> Loading.....</p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe What You Want Generate"
            className=" placeholder-color flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-zinc-800 text-white px-10 py-3 sm:px-16 text-sm rounded-full"
          >
            {" "}
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 rounded-full mt-10">
          <p
            onClick={() => {
              setisImageLoaded(false);
            }}
            className="bg-transparent rounded-full cursor-pointer border border-zinc-900 text-black px-8 py-3"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};
export default Result;
