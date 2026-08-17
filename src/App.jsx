import React from "react";
import {
  FaArrowRight,
  FaBolt,
  FaLock,
  FaRocket,
  FaCheck,
  FaStar,
  FaUsers,
  FaChartLine,
  FaLayerGroup,
  FaPlay,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCircle,
  FaBars,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight"
          >
            Nova
            <span className="text-indigo-400">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">

            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#reviews"
              className="hover:text-white transition"
            >
              Reviews
            </a>

          </div>

          {/* Button */}
          <button className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30">
            Get Started
            <FaArrowRight size={12} />
          </button>

          <button className="md:hidden text-slate-300">
            <FaBars size={20} />
          </button>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen pt-36 pb-24 px-6 flex items-center"
      >

        {/* Background Glow */}
        <div className="absolute top-20 left-[-200px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />

        <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />


        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>

            The future of productivity

          </div>


          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">

            Build.
            <span className="text-slate-500"> Create.</span>

            <br />

            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Grow.
            </span>

          </h1>


          <p className="max-w-2xl mx-auto mt-7 text-lg md:text-xl text-slate-400 leading-8">
            Nova is a powerful workspace designed to help modern
            teams manage projects, collaborate better and turn ideas
            into reality.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 px-7 py-4 rounded-xl font-semibold shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1">

              Start Building

              <FaArrowRight
                className="group-hover:translate-x-1 transition"
              />

            </button>


            <button className="flex items-center justify-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1">

              <FaPlay size={12} />

              Watch Demo

            </button>

          </div>


          {/* ================= DASHBOARD ================= */}
          <div className="relative mt-20 max-w-5xl mx-auto">


            {/* Floating Growth Card */}
            <div className="hidden md:flex absolute -left-14 top-20 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 items-center gap-3 shadow-2xl shadow-indigo-500/10 animate-bounce">

              <div className="w-11 h-11 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                <FaChartLine />
              </div>

              <div className="text-left">
                <p className="text-xs text-slate-500">
                  Monthly Growth
                </p>

                <p className="font-bold text-green-400">
                  +28.4%
                </p>
              </div>

            </div>


            {/* Floating Users Card */}
            <div className="hidden md:flex absolute -right-12 bottom-20 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 items-center gap-3 shadow-2xl shadow-purple-500/10 animate-pulse">

              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FaUsers />
              </div>

              <div className="text-left">
                <p className="text-xs text-slate-500">
                  New Users
                </p>

                <p className="font-bold">
                  +1,240
                </p>
              </div>

            </div>


            {/* Main Dashboard */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-3xl p-2 md:p-4 shadow-2xl shadow-indigo-500/10">

              <div className="bg-slate-900/90 rounded-2xl border border-white/10 p-5 md:p-8">


                {/* Top */}
                <div className="flex justify-between items-center mb-8">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">

                      <FaLayerGroup />

                    </div>

                    <div className="text-left">

                      <h3 className="font-bold">
                        Overview
                      </h3>

                      <p className="text-xs text-slate-500">
                        Your workspace
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-slate-500">
                    Last 30 days
                  </span>

                </div>


                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-5">


                  {/* Card 1 */}
                  <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.06] hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300">

                    <div className="flex justify-between">

                      <p className="text-sm text-slate-400">
                        Total Projects
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition">
                        <FaLayerGroup size={14} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      128
                    </h3>

                    <p className="text-sm text-green-400 mt-2">
                      +24% this month
                    </p>

                  </div>


                  {/* Card 2 */}
                  <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.06] hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300">

                    <div className="flex justify-between">

                      <p className="text-sm text-slate-400">
                        Team Members
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition">
                        <FaUsers size={14} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      48
                    </h3>

                    <p className="text-sm text-green-400 mt-2">
                      +12% this month
                    </p>

                  </div>


                  {/* Card 3 */}
                  <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.06] hover:border-pink-500/40 hover:-translate-y-2 transition-all duration-300">

                    <div className="flex justify-between">

                      <p className="text-sm text-slate-400">
                        Growth
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-110 transition">
                        <FaChartLine size={14} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      86%
                    </h3>

                    <p className="text-sm text-green-400 mt-2">
                      +18% this month
                    </p>

                  </div>

                </div>


                {/* Chart */}
                <div className="mt-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6">

                  <div className="flex justify-between items-center mb-7">

                    <div className="text-left">

                      <p className="text-sm text-slate-500">
                        Performance
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        $24,580
                      </p>

                    </div>

                    <span className="text-sm text-green-400 font-semibold">
                      +18.6%
                    </span>

                  </div>


                  {/* Bars */}
                  <div className="flex items-end gap-2 h-32">

                    {[35, 50, 42, 65, 55, 75, 60, 90, 72, 100, 82, 95].map(
                      (height, index) => (

                        <div
                          key={index}
                          className="flex-1 bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-400 rounded-t-md hover:opacity-70 transition-all duration-300"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST ================= */}
      <section className="border-y border-white/10 bg-white/[0.02] py-10 px-6">

        <p className="text-center text-xs text-slate-600 font-semibold uppercase tracking-[0.25em] mb-7">
          Trusted by modern teams
        </p>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16 text-slate-600 font-bold text-lg">

          <span>VERCEL</span>
          <span>Stripe</span>
          <span>Notion</span>
          <span>Linear</span>
          <span>Framer</span>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="relative px-6 py-24 md:py-32"
      >

        <div className="absolute left-0 top-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto relative">


          <div className="max-w-2xl">

            <span className="text-indigo-400 font-bold text-sm tracking-wider">
              POWERFUL FEATURES
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">

              Everything you need.

              <span className="text-slate-600">
                {" "}Nothing you don't.
              </span>

            </h2>

            <p className="text-slate-400 mt-5 text-lg leading-8">
              Powerful tools wrapped in a simple and beautiful
              experience.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-14">


            {/* Feature 1 */}
            <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 hover:-translate-y-3 transition-all duration-500">

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

                  <FaBolt />

                </div>

                <h3 className="text-xl font-bold mt-7">
                  Lightning Fast
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Everything is optimized for speed so your
                  team can focus on meaningful work.
                </p>

                <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mt-6">

                  Learn more

                  <FaArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition"
                  />

                </div>

              </div>

            </div>


            {/* Feature 2 */}
            <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-3 transition-all duration-500">

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

                  <FaLock />

                </div>

                <h3 className="text-xl font-bold mt-7">
                  Secure & Reliable
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Your data stays protected with modern
                  security and reliable infrastructure.
                </p>

                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mt-6">

                  Learn more

                  <FaArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition"
                  />

                </div>

              </div>

            </div>


            {/* Feature 3 */}
            <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-pink-500/40 hover:-translate-y-3 transition-all duration-500">

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">

                  <FaRocket />

                </div>

                <h3 className="text-xl font-bold mt-7">
                  Easy to Use
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  A clean interface that anyone can understand
                  without a complicated learning curve.
                </p>

                <div className="flex items-center gap-2 text-pink-400 text-sm font-semibold mt-6">

                  Learn more

                  <FaArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="px-6 py-24 md:py-32 bg-white/[0.02] border-y border-white/5"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">


          <div>

            <span className="text-indigo-400 font-bold text-sm">
              WHY NOVA?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">

              Work smarter.

              <br />

              <span className="text-slate-600">
                Not harder.
              </span>

            </h2>

            <p className="text-slate-400 mt-6 text-lg leading-8">
              Nova brings your projects, people and ideas
              together in one powerful workspace.
            </p>


            <div className="space-y-4 mt-8">

              {[
                "Simple project management",
                "Real-time team collaboration",
                "Powerful analytics",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">

                    <FaCheck size={10} />

                  </div>

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>


            <button className="mt-9 bg-white text-slate-950 px-6 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 hover:-translate-y-1 transition">
              Explore Nova
            </button>

          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-indigo-500/10 border border-indigo-500/20 p-7 rounded-3xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-4xl font-bold text-indigo-400">
                10K+
              </h3>

              <p className="text-slate-400 mt-2">
                Active Users
              </p>

            </div>


            <div className="bg-purple-500/10 border border-purple-500/20 p-7 rounded-3xl mt-8 hover:-translate-y-2 transition duration-300">

              <h3 className="text-4xl font-bold text-purple-400">
                99.9%
              </h3>

              <p className="text-slate-400 mt-2">
                Uptime
              </p>

            </div>


            <div className="bg-pink-500/10 border border-pink-500/20 p-7 rounded-3xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-4xl font-bold text-pink-400">
                50+
              </h3>

              <p className="text-slate-400 mt-2">
                Countries
              </p>

            </div>


            <div className="bg-cyan-500/10 border border-cyan-500/20 p-7 rounded-3xl mt-8 hover:-translate-y-2 transition duration-300">

              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="text-slate-400 mt-2">
                Support
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section
        id="reviews"
        className="px-6 py-24 md:py-32"
      >

        <div className="text-center max-w-2xl mx-auto">

          <span className="text-indigo-400 font-bold text-sm">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Loved by productive people.
          </h2>

          <p className="text-slate-400 mt-5">
            See why teams choose Nova to simplify their workflow.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">


          {[
            {
              name: "Sarah Khan",
              role: "Product Designer",
              initials: "SK",
              text: "Nova completely changed the way our team works. Everything feels much more organized now.",
            },
            {
              name: "Ali Ahmed",
              role: "Developer",
              initials: "AA",
              text: "The interface is beautiful and incredibly easy to use. I highly recommend Nova.",
            },
            {
              name: "Emma Wilson",
              role: "Founder",
              initials: "EW",
              text: "We save hours every week because everything we need is finally in one beautiful place.",
            },
          ].map((review, index) => (

            <div
              key={review.name}
              className="group bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:-translate-y-3 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >

              <div className="flex gap-1 text-yellow-400">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={13} />
                ))}

              </div>


              <p className="text-slate-300 mt-6 leading-7">
                "{review.text}"
              </p>


              <div className="mt-7 flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">

                  {review.initials}

                </div>

                <div>

                  <h4 className="font-semibold">
                    {review.name}
                  </h4>

                  <p className="text-slate-500 text-sm">
                    {review.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-24">

        <div className="relative overflow-hidden max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 md:p-16 text-center shadow-2xl shadow-indigo-500/20">

          {/* Glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />


          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to build something amazing?
            </h2>

            <p className="text-indigo-100 mt-5 max-w-xl mx-auto text-lg">
              Join thousands of people already using Nova
              to work smarter and move faster.
            </p>

            <button className="group mt-9 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 hover:-translate-y-1 transition-all shadow-xl">

              Start for Free

              <FaArrowRight
                className="inline ml-2 group-hover:translate-x-1 transition"
              />

            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black/30 px-6 md:px-10 py-12">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>

              <h2 className="text-2xl font-bold">
                Nova<span className="text-indigo-400">.</span>
              </h2>

              <p className="text-slate-500 mt-4 leading-7 max-w-xs">
                A modern workspace designed to help teams
                build better things together.
              </p>


              <div className="flex gap-3 mt-6">

                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>


            {/* Product */}
            <div>

              <h4 className="font-semibold">
                Product
              </h4>

              <div className="space-y-3 mt-5 text-sm text-slate-500">

                <p className="hover:text-white cursor-pointer transition">
                  Features
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Pricing
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Integrations
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Updates
                </p>

              </div>

            </div>


            {/* Company */}
            <div>

              <h4 className="font-semibold">
                Company
              </h4>

              <div className="space-y-3 mt-5 text-sm text-slate-500">

                <p className="hover:text-white cursor-pointer transition">
                  About
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Careers
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Contact
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Blog
                </p>

              </div>

            </div>


            {/* Legal */}
            <div>

              <h4 className="font-semibold">
                Legal
              </h4>

              <div className="space-y-3 mt-5 text-sm text-slate-500">

                <p className="hover:text-white cursor-pointer transition">
                  Privacy
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Terms
                </p>

                <p className="hover:text-white cursor-pointer transition">
                  Security
                </p>

              </div>

            </div>

          </div>


          {/* Bottom */}
          <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-600">

            <p>
              © 2026 Nova. All rights reserved.
            </p>

            <p>
              Built with React & Tailwind CSS.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}