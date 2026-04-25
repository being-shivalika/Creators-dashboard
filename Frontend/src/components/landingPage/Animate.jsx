import React, { useEffect } from "react";
import { animate } from "animejs";

const Animate = () => {
  useEffect(() => {
    // ✅ Entrance animation
    animate(".square", {
      opacity: [0, 1],
      translateY: ["3rem", "0rem"],
      scale: [0.95, 1],
      duration: 1000,
      easing: "easeOutQuad",
    });

    // ✅ Subtle floating animation (loop)
    animate(".square", {
      translateY: ["0rem", "-1rem", "0rem"],
      duration: 3000,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
        Welcome
      </h1>

      {/* Row container */}
      <div className="flex justify-center md:justify-start">
        <div className="square rounded-xl overflow-hidden">
          <img
            src="manage.jpg"
            alt="dashboard preview"
            className="w-64 sm:w-80 md:w-96 lg:w-md h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Animate;
