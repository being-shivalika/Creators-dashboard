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
              <button className="w-full text-xs sm:text-sm md:text-base px-3 sm:px-2 sm:w-auto py-2 bg-[#fca001]  border border-indigo-800  text-white rounded-lg transition-transform hover:scale-105 ">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-25 bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3]"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#7e4cd4fb] mb-4 text-center md:text-left border border-[#674cd4a0] rounded-full w-max px-5 py-1 mx-auto md:mx-0">
              Built for Content Creators
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center md:text-left">
              Manage your brand deals, content, and deadlines — <br />
              <span className="text-[#2D3678]"> all in one place</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              Track collaborations, stay organized, and never miss a payment
              again.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <button className="px-6 py-3 bg-[#2639cc] text-white rounded-xl border border-amber-400 font-semibold shadow hover:scale-105 transition">
                Get Started Free
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition">
                ▶ Watch Demo
              </button>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-3 mb-10">
              <div className="flex -space-x-3">
                <img src="user1.jpg" className="w-8 h-8 rounded-full border" />
                <img src="user2.jpg" className="w-8 h-8 rounded-full border" />
                <img src="user3.jpg" className="w-8 h-8 rounded-full border" />
              </div>
              <span className="text-sm text-gray-500">
                Trusted by 500+ creators
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="thatstheone.png"
              alt="dashboard preview"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-t-full rounded-b-xl shadow-2xl"
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
              Manage collaborations, content, payments, and workflows — all in
              one system.
            </p>
          </div>

          {/* TOP FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Brand Deal Management",
                desc: "Track offers, negotiations, and deliverables.",
                icon: "🤝",
              },
              {
                title: "Content Planner",
                desc: "Plan and schedule your content calendar.",
                icon: "📅",
              },
              {
                title: "Deadline Tracking",
                desc: "Stay ahead with smart reminders.",
                icon: "⏰",
              },
              {
                title: "Payment Tracker",
                desc: "Monitor invoices and payment status.",
                icon: "💰",
              },
              {
                title: "Collaboration Hub",
                desc: "Manage multiple brands in one place.",
                icon: "📂",
              },
              {
                title: "Task Manager",
                desc: "Break work into actionable tasks.",
                icon: "✅",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-[#EEF2FF] to-[#FCE7F3] p-6 rounded-2xl shadow-sm hover:shadow-md transition-transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* FEATURE CATEGORIES */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {/* WORKFLOW */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Workflow</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Content planning system</li>
                <li>✔ Task & checklist management</li>
                <li>✔ Campaign tracking</li>
                <li>✔ Smart reminders</li>
              </ul>
            </div>

            {/* COLLABORATIONS */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Collaborations</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Brand deal tracking</li>
                <li>✔ Negotiation notes</li>
                <li>✔ Deliverables management</li>
                <li>✔ Communication logs</li>
              </ul>
            </div>

            {/* FINANCE */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Finance</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Payment tracking</li>
                <li>✔ Invoice management</li>
                <li>✔ Earnings overview</li>
                <li>✔ Due payment alerts</li>
              </ul>
            </div>
          </div>

          {/* BIG FEATURE SHOWCASE */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Built for real creator workflows
              </h3>
              <p className="text-gray-600 mb-6">
                CreatorsHub replaces messy spreadsheets, scattered chats, and
                missed deadlines with one clean, powerful system.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>✔ One dashboard for everything</li>
                <li>✔ Clear visibility on deals & payments</li>
                <li>✔ Better organization, less stress</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="thatstheone.png"
                alt="dashboard preview"
                className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-t-full rounded-b-xl shadow-2xl"
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
              How CreatorsHub works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple system to manage your entire creator workflow without
              chaos.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              {
                step: "01",
                title: "Add Collaborations",
                desc: "Create and manage your brand deals in one place.",
              },
              {
                step: "02",
                title: "Plan Content",
                desc: "Organize posts, campaigns, and deliverables.",
              },
              {
                step: "03",
                title: "Track Progress",
                desc: "Stay updated with deadlines and tasks.",
              },
              {
                step: "04",
                title: "Get Paid",
                desc: "Monitor payments and never miss invoices.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/35 p-5 sm:p-6 rounded-2xl shadow-sm text-center
                     hover:shadow-md  min-h-45 flex flex-col justify-between transition-transform hover:scale-105"
              >
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

                <div className="mt-4 h-1 w-10 mx-auto bg-[#6C63FF] rounded-full"></div>
              </div>
            ))}
          </div>

          {/* VISUAL FLOW SECTION */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                From chaos to clarity
              </h3>
              <p className="text-gray-600 mb-6">
                Instead of juggling spreadsheets, emails, and chats —
                CreatorsHub gives you a structured workflow to manage everything
                in one place.
              </p>

              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>✔ Clear step-by-step workflow</li>
                <li>✔ Better visibility on deals & payments</li>
                <li>✔ Organized content planning system</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="thatstheone.png"
                alt="workflow preview"
                className="w-3/5 max-w-md sm:max-w-lg md:max-w-xl rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when your creator business grows.
            </p>
          </div>

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FREE PLAN */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Free</h3>
              <p className="text-gray-600 text-sm mb-6">
                Perfect for getting started
              </p>

              <div className="text-3xl font-bold mb-6">
                ₹0 <span className="text-sm text-gray-500">/month</span>
              </div>

              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>✔ Manage up to 3 collaborations</li>
                <li>✔ Basic content planning</li>
                <li>✔ Task tracking</li>
                <li>✔ Limited reminders</li>
              </ul>

              <button className="mt-auto border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100">
                Get Started
              </button>
            </div>

            {/* PRO PLAN (HIGHLIGHTED) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#6C63FF] shadow-md flex flex-col relative">
              {/* BADGE */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6C63FF] text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>

              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <p className="text-gray-600 text-sm mb-6">For serious creators</p>

              <div className="text-3xl font-bold mb-6">
                ₹499 <span className="text-sm text-gray-500">/month</span>
              </div>

              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>✔ Unlimited collaborations</li>
                <li>✔ Advanced content planner</li>
                <li>✔ Smart reminders & deadlines</li>
                <li>✔ Payment tracking</li>
                <li>✔ Priority support</li>
              </ul>

              <button className="mt-auto bg-[#6C63FF] text-white py-2 rounded-lg text-sm hover:opacity-90">
                Start Free Trial
              </button>
            </div>

            {/* BUSINESS PLAN */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Business</h3>
              <p className="text-gray-600 text-sm mb-6">For teams & agencies</p>

              <div className="text-3xl font-bold mb-6">
                ₹999 <span className="text-sm text-gray-500">/month</span>
              </div>

              <ul className="space-y-3 text-gray-600 text-sm mb-8">
                <li>✔ Team collaboration tools</li>
                <li>✔ Multi-user access</li>
                <li>✔ Advanced analytics</li>
                <li>✔ Dedicated support</li>
              </ul>

              <button className="mt-auto border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Loved by creators worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how creators are managing their workflow better with
              CreatorsHub.
            </p>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Aarav Sharma",
                role: "YouTuber",
                text: "Managing brand deals used to be chaos. Now everything is structured and easy to track.",
              },
              {
                name: "Riya Patel",
                role: "Instagram Creator",
                text: "I finally stopped missing deadlines. This tool actually keeps me organized.",
              },
              {
                name: "Karan Mehta",
                role: "Content Strategist",
                text: "The payment tracking alone saved me hours every week.",
              },
              {
                name: "Neha Kapoor",
                role: "Influencer",
                text: "Simple, clean, and exactly what creators need. No unnecessary complexity.",
              },
              {
                name: "Aditya Verma",
                role: "Freelancer",
                text: "I manage multiple clients now without losing track of anything.",
              },
              {
                name: "Simran Kaur",
                role: "Lifestyle Creator",
                text: "Feels like this was built specifically for my workflow.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/65 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6C63FF] text-white flex items-center justify-center text-sm font-semibold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#4c5cd455] border-t py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* TOP CTA */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to organize your creator workflow?
            </h2>
            <p className="text-gray-600 mb-6">
              Start managing your collaborations, content, and payments today.
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
                A simple system to manage your creator business — from deals to
                payments.
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
          <div className="border-t pt-6 text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} CreatorsHub. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
