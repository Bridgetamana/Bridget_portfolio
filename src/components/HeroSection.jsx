import React from "react";
import HeroImage from "../assets/img/Bridget-amana.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="w-full mx-auto max-w-6xl p-6 lg:px-8 lg:mt-16"
      id="about"
    >
      <motion.div className="gap-12 items-center flex flex-col-reverse lg:flex-row flex-wrap justify-center">
        <motion.div
          className="max-w-md"
          initial={{ x: "-9rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "fade-in",
          }}
        >
          <img
            src={HeroImage}
            alt="Bridget Amana's Thumbnail"
            className="w-full rounded-full"
          />
        </motion.div>
        <motion.div
          className="max-w-md"
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <h1 className="text-3xl font-bold mb-4 text-[#570071] dark:text-[#df8dff] ">
            Hello, I'm Bridget Amana🙃
          </h1>
          <p className="text-xl">
            A front-end developer passionate about creating interactive and
            user-friendly websites, with a focus on responsiveness and
            accessibility.{" "}
          </p>
          <button className="uppercase mt-8">
            <a
              href="https://drive.google.com/file/d/1UyfpR2KMKrsS1Tm87jLSvIE4P6CoUBwP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#5F5263] py-3 px-5 hover:bg-[#570471] text-[#570471] hover:text-[#F0EDF0] hover:border-0 dark:text-[#DF8DFF] dark:hover:bg-[#DF8DFF] dark:hover:text-[#221C25] dark:border-[#BCB0C1] transition-all duration-500"
            >
              Download CV
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
