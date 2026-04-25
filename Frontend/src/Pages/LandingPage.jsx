import React, { useEffect } from "react";
import { Link } from "react-router";
import Animate from "../components/landingPage/Animate";
import { animate, stagger, splitText } from "animejs";
import DotGrid from "../components/landingPage/DotGrid";

const LandingPage = () => {
  useEffect(() => {
    // ✅ Split into words (better for readability than chars)
    const { words } = splitText(".hero-text", {
      words: { wrap: "clip" },
    });

    // ✅ Clean SaaS-style animation (rise + fade)
    animate(words, {
      opacity: [0, 1],
      translateY: ["1.5rem", "0rem"],
      delay: stagger(120),
      duration: 500,
      easing: "easeOutCubic",
    });
  }, []);

  useEffect(() => {
    // ✅ Subtle floating animation (loop)
    animate(".square", {
      translateY: ["0rem", "-1rem", "0rem"],
      duration: 3000,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        {/* DOT GRID BACKGROUND */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <DotGrid
            dotSize={4}
            gap={14}
            baseColor="#e5e7eb"
            activeColor="#7c3aed"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            resistance={600}
            returnDuration={1.2}
          />
        </div>

        {/* NAVBAR */}
        <nav className="flex items-center justify-between mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#3A3F8F] font-semibold creators-hub">
            creatorsHub
          </h1>

          <div className="flex gap-3">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg bg-[#4C5BD4] text-white">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-4 py-2 rounded-lg bg-[#FF7A70] text-white">
                Get Started
              </button>
            </Link>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 flex-1">
          {/* TEXT */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2D2F5B] font-bold leading-tight mb-5">
              Manage your brand deals, content, and deadlines — all in one place
            </h1>

            <p className="text-[#4A4F7A] text-sm sm:text-base md:text-lg mb-4">
              Plan content, track collaborations, and stay organized without the
              chaos.
            </p>

            <p className="text-[#4a4f7ad6] text-sm sm:text-base mb-6">
              Built for creators managing multiple brand collaborations.
            </p>

            <Link to="/signup">
              <button className="px-6 py-3 rounded-xl bg-[#FF7A70] text-white font-semibold shadow-lg hover:scale-105 transition">
                Start Managing Now
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center w-full">
            <img
              src="content.jpg"
              alt="dashboard preview"
              className="square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-t-full rounded-b-md "
            />
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="mt-12 md:mt-16 text-center mx-auto px-4 sm:px-6 md:px-12 lg:px-20 bg-white/50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          Everything you need to stay organized
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Manage your collaborations, track your content progress, and organize
          your work efficiently — all from one dashboard built for creators.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-6 p-5 gap-10">
          <div className="square rounded-xl overflow-hidden p-5 border border-gray-200 w-200">
            <p className="text-[#4a4f7ad6] text-sm sm:text-base md:text-lg mb-5 md:mb-6 text-center">
              <img
                src="collaborate.png"
                alt="dashboard preview"
                className="w-55 sm:w-60 md:w-96 lg:w-md h-auto "
              />{" "}
              Keep all brand collaborations in one place
            </p>
          </div>
          <div className="square rounded-xl overflow-hidden p-5 border border-gray-200 w-200">
            <p className="text-[#4a4f7ad6] text-sm sm:text-base md:text-lg mb-5 md:mb-6 text-center">
              <img
                src="plan.png"
                alt="dashboard preview"
                className="w-65 sm:w-60 md:w-96 lg:w-md h-auto "
              />{" "}
              Plan and track your content easily
            </p>
          </div>
          <div className="square rounded-xl overflow-hidden p-5 border border-gray-200 w-300">
            <p className="text-[#4a4f7ad6] text-sm sm:text-base md:text-lg mb-5 md:mb-6 text-center">
              <img
                src="deadline.png"
                alt="dashboard preview"
                className="h-80 w-7xl sm:w-2xl sm:h-60"
              />{" "}
              Never miss deadlines or payments
            </p>
          </div>
        </div>
      </section>

      <Animate />
    </>
  );
};

export default LandingPage;
