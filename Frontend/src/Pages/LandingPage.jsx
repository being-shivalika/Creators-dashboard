import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [active, setActive] = useState("home");

  // ✅ SCROLL FUNCTION (YOU MISSED THIS)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // ✅ ACTIVE NAV TRACKING
  useEffect(() => {
    const sections = ["features", "pricing", "testimonials", "how-it-works"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold cursor-pointer text-[#4c5cd4] sm:text-xl md:text-3xl"
          >
            CreatorsHub
          </h1>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("features")}
              className={`${
                active === "features" ? "text-[#4c5cd4]" : "text-gray-700"
              } hover:text-[#4c5cd4] transition-colors`}
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`${
                active === "how-it-works" ? "text-[#4c5cd4]" : "text-gray-700"
              } hover:text-[#4c5cd4] transition-colors`}
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection("pricing")}
              className={`${
                active === "pricing" ? "text-[#4c5cd4]" : "text-gray-700"
              } hover:text-[#4c5cd4] transition-colors`}
            >
              Pricing
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className={`${
                active === "testimonials" ? "text-[#4c5cd4]" : "text-gray-700"
              } hover:text-[#4c5cd4] transition-colors`}
            >
              Testimonials
            </button>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-xs sm:text-sm md:text-base text-gray-700 border border-gray-400 rounded-lg py-2 px-3 sm:px-4 hover:bg-gray-100 transition-transform hover:scale-105">
                Log in
              </button>
            </Link>

            <Link to="/signup" className="w-full sm:w-auto">
              <button className="w-full text-xs sm:text-sm md:text-base px-3 sm:px-2 sm:w-auto py-2 bg-[#2639cc]  border border-indigo-800  text-white rounded-lg transition-transform hover:scale-105 ">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-25 bg-linear-to-br from-[#eef2ffb2] to-[#fce7f3b9]"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
          {/* LEFT CONTENT */}

          <div className="max-w-2xl">
            <p className="text-xs border border-[#4c5cd4] rounded-2xl py-2 px-6 mb-5 hover:border-[#0084ff] inline-block">
              Keep track of your brand deals, content, and payments — without
              the chaos
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center md:text-left">
              Manage every collaboration, deadline, and payment — <br />
              <span className="text-[#2D3678]"> all in one place</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              CreatorsHub helps you stay organized across brand deals, content
              planning, and payments so nothing slips through.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <button className="px-6 py-3 bg-[#2639cc] text-white rounded-xl border border-amber-400 font-semibold shadow hover:scale-105 transition">
                Get Started Free
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition">
                ▶ Watch Demo
              </button>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 mb-10">
              <div className="flex -space-x-3">
                <img
                  src="user1.jpg"
                  className="w-8 h-8 rounded-full border border-amber-400"
                />
                <img
                  src="user2.jpg"
                  className="w-8 h-8 rounded-full border border-amber-400"
                />
                <img
                  src="user3.jpg"
                  className="w-8 h-8 rounded-full border border-amber-400"
                />
              </div>
              <span className="text-sm text-gray-500">
                Trusted by 500+ creators
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center w-full md:w-auto md:p-0 sm:p-10 pb-5">
            <img
              src="thatstheonemain.png"
              alt="dashboard preview"
              className="w-full max-w-3xl sm:max-w-lg md:max-w-xl rounded-xl  shadow-2xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Everything you need to run your creator business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From tracking deals to managing content and payments, everything
              is organized in one system.
            </p>
          </div>

          {/* TOP FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Brand Deal Management",
                desc: "Track offers, negotiations, and deliverables in one place",
                icon: <i className="fa-regular fa-handshake"></i>,
              },
              {
                title: "Content Planner",
                desc: "Plan, schedule, and organize your content calendar",
                icon: <i className="fa-regular fa-calendar-days"></i>,
              },
              {
                title: "Deadline Tracking",
                desc: "Stay on top of deliverables with clear timelines",
                icon: <i className="fa-regular fa-alarm-clock"></i>,
              },
              {
                title: "Payment Tracker",
                desc: "Monitor invoices, pending payments, and earnings",
                icon: <i className="fa-solid fa-hand-holding-dollar"></i>,
              },
              {
                title: "Collaboration Hub",
                desc: "Manage multiple brands without losing context",
                icon: <i className="fa-solid fa-users"></i>,
              },
              {
                title: "Task Manager",
                desc: "Break down work into clear, actionable steps",
                icon: <i className="fa-solid fa-list-check "></i>,
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3] p-1 rounded-2xl shadow-sm hover:shadow-md transition-transform hover:scale-105 min-h-50"
              >
                <div className="bg-white/55 rounded-2xl h-50 p-6 text-center gap-4">
                  <div className="text-3xl mb-4 flex justify-center items-center gap-3 text-[#4c5cd4] pt-5 ">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[#2D3678]">
                    {f.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BIG FEATURE SHOWCASE */}
          <div className="grid md:grid-cols-2 md:gap-10 sm:gap-2 items-center">
            {/* TEXT */}
            <div className="mt-0">
              <h3 className="md:text-5xl sm:text-3xl font-bold mb-4 md:pb-10 sm:pb-0">
                Built around how creators actually work
              </h3>
              <p className="text-gray-600 mb-6">
                Instead of switching between chats, notes, and spreadsheets,
                CreatorsHub brings everything into one structured workflow you
                can rely on.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> See all
                  your brand deals in one dashboard
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Keep
                  track of deadlines and deliverables clearly
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Monitor
                  payments without manual tracking
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Stay
                  organized as your workload grows
                </li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center p-15 md:pt-5 sm:pt-0">
              <img
                src="thatstheonecolab.png"
                alt="dashboard preview"
                className="w-full max-w-md sm:max-w-2xl md:max-w-xl rounded-t-full rounded-b-xl shadow-2xl "
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3]"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              A simple way to manage your workflow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Set up your system once, and manage everything without confusion.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              {
                step: "01",
                title: "Add your collaborations",
                desc: "Store brand deals, requirements, and details in one place",
              },
              {
                step: "02",
                title: "Plan your content",
                desc: "Organize posts, campaigns, and timelines clearly",
              },
              {
                step: "03",
                title: "Track progress",
                desc: "Stay updated on deadlines and task completion",
              },
              {
                step: "04",
                title: "Manage payments",
                desc: "Keep track of invoices and know what's pending",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3] p-1  rounded-2xl shadow-sm text-center
                     hover:shadow-lg  min-h-45 flex flex-col justify-between transition-transform hover:scale-105"
              >
                <div className="bg-white/75 rounded-2xl h-45 p-6 sm:p-6">
                  <div>
                    <div className="text-sm font-semibold text-[#6C63FF] mb-2">
                      {item.step}
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 h-1 w-10 mx-auto bg-[#6C63FF] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* VISUAL FLOW SECTION */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Stay in control without extra effort
              </h3>
              <p className="text-gray-600 mb-6">
                With everything structured in one place, you don't have to rely
                on memory, scattered notes, or constant follow-ups.
              </p>

              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Clear
                  step-by-step workflow
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Better
                  visibility on deals & payments
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Organized
                  content planning system
                </li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="thatsthesecond.png"
                alt="workflow preview"
                className="w-3/5 max-w-md sm:max-w-lg md:max-w-xl rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#2D3678]">
              Simple pricing that grows with you
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when your creator business grows.
            </p>
          </div>

          {/* PRICING CARDS - Updated for Horizontal Scroll on Mobile */}
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible sm:pb-0 ">
            {/* FREE PLAN */}
            <div className="min-w-55 shrink-0 snap-center bg-white p-4 sm:p-6 rounded-2xl border shadow-sm flex flex-col sm:min-w-45 mt-5 transition-transform hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Free</h3>
              <p className="text-gray-600 text-sm mb-6">
                Perfect for getting started
              </p>
              <div className="text-3xl font-bold mb-6">
                ₹0 <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Manage up
                  to 5 collaborations
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Basic
                  content planning
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Task
                  tracking
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Limited
                  reminders
                </li>
              </ul>
              <button className="mt-auto border border-gray-300 py-2 rounded-2xl text-sm hover:bg-gray-100">
                Get Started
              </button>
            </div>

            {/* PRO PLAN (HIGHLIGHTED) */}
            <div className="min-w-55 shrink-0 snap-center bg-white p-4 sm:p-6 rounded-2xl border-2 border-[#6C63FF] shadow-md flex flex-col relative sm:min-w-45 mt-5  transition-transform hover:scale-105">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6C63FF] text-white text-md px-6 py-1 rounded-full whitespace-nowrap ">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <p className="text-gray-600 text-sm mb-6">
                For creators managing consistent work
              </p>
              <div className="text-3xl font-bold mb-6">
                ₹499 <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Unlimited
                  collaborations
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Advanced
                  content planner
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Smart
                  reminders & deadlines
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Payment
                  tracking
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Priority
                  support
                </li>
              </ul>
              <button className="mt-auto bg-[#6C63FF] text-white py-2 rounded-2xl text-sm hover:opacity-90">
                Start Free Trial
              </button>
            </div>

            {/* BUSINESS PLAN */}
            <div className="min-w-55 flex shrink-0 snap-center bg-white p-4 sm:p-6 rounded-2xl border shadow-sm flex-col sm:min-w-45 mt-5  transition-transform hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">Business</h3>
              <p className="text-gray-600 text-sm mb-6">For teams & agencies</p>
              <div className="text-3xl font-bold mb-6">
                ₹999 <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Team
                  collaboration tools
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i>{" "}
                  Multi-user access
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Advanced
                  analytics
                </li>
                <li>
                  <i className="fa-solid fa-check text-[#6366F1]"></i> Dedicated
                  support
                </li>
              </ul>
              <button className="mt-auto border border-gray-300 py-2 rounded-2xl text-sm hover:bg-gray-100">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="text-center mt-10 text-gray-600">
            <p>
              Designed to save time, reduce missed payments, and keep your
              workflow clear as you scale
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Creators using CreatorsHub
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how creators are managing their workflow more clearly.
            </p>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Aarav Sharma",
                role: "YouTuber",
                text: "I can finally see all my brand deals in one place instead of jumping between chats and notes.",
                image: "user1.jpg",
              },
              {
                name: "Riya Patel",
                role: "Instagram Creator",
                text: "Deadlines are much easier to track now. I don't feel like I'm missing things anymore.",
                image: "user2.jpg",
              },
              {
                name: "Karan Mehta",
                role: "Content Strategist",
                text: "The payment tracking makes a big difference. I know exactly what's pending.",
                image: "user3.jpg",
              },
              {
                name: "Neha Kapoor",
                role: "Influencer",
                text: "It's simple, clean, and fits how I already work. its an amazing tool",
                image: "user2.jpg",
              },
              {
                name: "Aditya Verma",
                role: "Freelancer",
                text: "I manage multiple clients now without losing track of anything.",
                image: "user3.jpg",
              },
              {
                name: "Simran Kaur",
                role: "Lifestyle Creator",
                text: "Feels like this was built specifically for my workflow.",
                image: "user1.jpg",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3] p-1 rounded-2xl shadow-sm hover:shadow-md flex flex-col justify-between transition-transform hover:scale-105"
              >
                <div className="bg-white p-6 rounded-2xl">
                  <p className="text-gray-600 text-sm sm:text-base mb-6">
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-3">
                    {/* Dynamic background image using template literals */}
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center text-white flex items-center justify-center text-sm font-semibold"
                      style={{ backgroundImage: `url(${t.image})` }}
                    >
                      {/* Fallback text only if image fails to load or isn't present */}
                      {!t.image && t.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-linear-to-br from-[#cfd9fb] to-[#FCE7F3] border-t py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* TOP CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Start organizing your creator workflow today
            </h2>
            <p className="text-gray-600 mb-6">
              Set up your system once and manage everything from one place.
            </p>

            <button className="px-6 py-3 bg-[#6C63FF] text-white rounded-xl font-semibold hover:opacity-90">
              Get Started Free
            </button>
          </div>

          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10 text-sm">
            {/* BRAND */}
            <div className="col-span-2 sm:col-span-3 md:col-span-1">
              <h3 className="text-lg font-bold text-[#4c5cd4] mb-3">
                CreatorsHub
              </h3>
              <p className="text-gray-600">
                CreatorsHub helps creators manage brand deals, content, and
                payments in one organized system.
              </p>
            </div>

            {/* PRODUCT */}
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button onClick={() => scrollToSection("features")}>
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("how-it-works")}>
                    How it works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")}>
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@creatorshub.com</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-[#001088] pt-6 text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} CreatorsHub. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
