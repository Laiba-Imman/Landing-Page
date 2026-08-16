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
} from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Nova<span className="text-indigo-600">.</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#home"
              className="hover:text-indigo-600 transition"
            >
              Home
            </a>

            <a
              href="#features"
              className="hover:text-indigo-600 transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="hover:text-indigo-600 transition"
            >
              About
            </a>

            <a
              href="#testimonials"
              className="hover:text-indigo-600 transition"
            >
              Reviews
            </a>
          </div>

          {/* Button */}
          <button className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-200">
            Get Started
            <FaArrowRight size={12} />
          </button>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6"
      >

        {/* Background blobs */}
        <div className="absolute top-20 left-[-150px] w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl" />

        <div className="absolute top-40 right-[-150px] w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto text-center relative">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-7 shadow-sm">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            The future of productivity
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
            Turn your ideas into
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              something amazing.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-8">
            Nova gives your team everything they need to plan,
            create, collaborate and grow — all in one beautiful workspace.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-xl font-semibold shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1">
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-7 py-4 rounded-xl font-semibold shadow-sm transition-all hover:-translate-y-1">
              <FaPlay size={13} />
              See how it works
            </button>

          </div>


          {/* ================= DASHBOARD CARD ================= */}
          <div className="relative mt-20 max-w-5xl mx-auto">

            {/* Floating card 1 */}
            <div className="hidden md:flex absolute -left-12 top-20 z-20 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 items-center gap-3 animate-[bounce_4s_ease-in-out_infinite]">

              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <FaChartLine />
              </div>

              <div className="text-left">
                <p className="text-xs text-slate-400">
                  Growth
                </p>

                <p className="font-bold">
                  +28.4%
                </p>
              </div>

            </div>


            {/* Floating card 2 */}
            <div className="hidden md:flex absolute -right-10 bottom-20 z-20 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 items-center gap-3 animate-[bounce_5s_ease-in-out_infinite]">

              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <FaUsers />
              </div>

              <div className="text-left">
                <p className="text-xs text-slate-400">
                  New users
                </p>

                <p className="font-bold">
                  +1,240
                </p>
              </div>

            </div>


            {/* Main dashboard */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/70 p-3 md:p-5">

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 md:p-8">

                {/* Dashboard top */}
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                      <FaLayerGroup />
                    </div>

                    <div className="text-left">
                      <h3 className="font-bold">
                        Overview
                      </h3>

                      <p className="text-xs text-slate-400">
                        Your workspace
                      </p>
                    </div>

                  </div>

                  <div className="hidden sm:block text-xs text-slate-400">
                    Last 30 days
                  </div>

                </div>


                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-5">

                  {/* Card 1 */}
                  <div className="group bg-white rounded-2xl p-6 border border-slate-200 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100">

                    <div className="flex justify-between items-center">

                      <p className="text-sm text-slate-500">
                        Total Projects
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition">
                        <FaLayerGroup size={15} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      128
                    </h3>

                    <p className="text-sm text-green-500 mt-2">
                      +24% this month
                    </p>

                  </div>


                  {/* Card 2 */}
                  <div className="group bg-white rounded-2xl p-6 border border-slate-200 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100">

                    <div className="flex justify-between items-center">

                      <p className="text-sm text-slate-500">
                        Team Members
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition">
                        <FaUsers size={15} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      48
                    </h3>

                    <p className="text-sm text-green-500 mt-2">
                      +12% this month
                    </p>

                  </div>


                  {/* Card 3 */}
                  <div className="group bg-white rounded-2xl p-6 border border-slate-200 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-100">

                    <div className="flex justify-between items-center">

                      <p className="text-sm text-slate-500">
                        Growth
                      </p>

                      <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-110 transition">
                        <FaChartLine size={15} />
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold mt-5">
                      86%
                    </h3>

                    <p className="text-sm text-green-500 mt-2">
                      +18% this month
                    </p>

                  </div>

                </div>


                {/* Fake chart */}
                <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6">

                  <div className="flex justify-between mb-6">

                    <div>
                      <p className="text-sm text-slate-500">
                        Performance
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        $24,580
                      </p>
                    </div>

                    <span className="text-sm text-green-500 font-semibold">
                      +18.6%
                    </span>

                  </div>

                  <div className="flex items-end gap-2 h-28">

                    {[35, 50, 42, 68, 55, 75, 65, 90, 72, 100, 82, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-lg transition-all duration-500 hover:opacity-70"
                          style={{ height: `${height}%` }}
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


      {/* ================= LOGOS ================= */}
      <section className="border-y border-slate-200 bg-white py-8 px-6">

        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Trusted by modern teams
        </p>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16 text-slate-400 font-bold text-lg">

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
        className="px-6 py-24 md:py-32 bg-slate-50"
      >

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <span className="text-indigo-600 font-bold text-sm">
              POWERFUL FEATURES
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Everything you need.
              <span className="text-slate-400">
                {" "}Nothing you don't.
              </span>
            </h2>

            <p className="text-slate-500 mt-5 text-lg leading-8">
              Simple, powerful tools designed to help you work smarter
              and get more done.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-14">


            {/* Feature 1 */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-3 transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaBolt />
              </div>

              <h3 className="text-xl font-bold mt-7">
                Lightning Fast
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Everything is optimized for speed so your team can
                focus on meaningful work.
              </p>

              <div className="mt-6 flex items-center gap-2 text-indigo-600 text-sm font-semibold">
                Learn more
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>

            </div>


            {/* Feature 2 */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-3 transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaLock />
              </div>

              <h3 className="text-xl font-bold mt-7">
                Secure & Reliable
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Your data stays protected with modern security
                and reliable infrastructure.
              </p>

              <div className="mt-6 flex items-center gap-2 text-purple-600 text-sm font-semibold">
                Learn more
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>

            </div>


            {/* Feature 3 */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-3 transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaRocket />
              </div>

              <h3 className="text-xl font-bold mt-7">
                Easy to Use
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                A clean interface that anyone can understand
                without a complicated learning curve.
              </p>

              <div className="mt-6 flex items-center gap-2 text-pink-600 text-sm font-semibold">
                Learn more
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-24 md:py-32 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-indigo-600 font-bold text-sm">
              WHY NOVA?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Work smarter.
              <br />
              <span className="text-slate-400">
                Not harder.
              </span>
            </h2>

            <p className="text-slate-500 mt-6 leading-8 text-lg">
              Nova brings your projects, people and ideas together
              in one beautifully designed workspace.
            </p>


            <div className="space-y-4 mt-8">

              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FaCheck size={11} />
                </div>

                <span className="text-slate-600">
                  Simple project management
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FaCheck size={11} />
                </div>

                <span className="text-slate-600">
                  Real-time team collaboration
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FaCheck size={11} />
                </div>

                <span className="text-slate-600">
                  Powerful analytics
                </span>
              </div>

            </div>


            <button className="mt-9 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition">
              Explore Nova
            </button>

          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">

            <div className="group bg-indigo-50 border border-indigo-100 p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100">
              <h3 className="text-4xl font-bold text-indigo-600">
                10K+
              </h3>
              <p className="text-slate-500 mt-2">
                Active Users
              </p>
            </div>

            <div className="group bg-purple-50 border border-purple-100 p-7 rounded-3xl mt-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100">
              <h3 className="text-4xl font-bold text-purple-600">
                99.9%
              </h3>
              <p className="text-slate-500 mt-2">
                Uptime
              </p>
            </div>

            <div className="group bg-pink-50 border border-pink-100 p-7 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100">
              <h3 className="text-4xl font-bold text-pink-600">
                50+
              </h3>
              <p className="text-slate-500 mt-2">
                Countries
              </p>
            </div>

            <div className="group bg-cyan-50 border border-cyan-100 p-7 rounded-3xl mt-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100">
              <h3 className="text-4xl font-bold text-cyan-600">
                24/7
              </h3>
              <p className="text-slate-500 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section
        id="testimonials"
        className="px-6 py-24 md:py-32 bg-slate-50"
      >

        <div className="text-center max-w-2xl mx-auto">

          <span className="text-indigo-600 font-bold text-sm">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Loved by productive people.
          </h2>

          <p className="text-slate-500 mt-5">
            See why teams are choosing Nova to simplify their workflow.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">


          {/* Review 1 */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">

            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={14} />
              ))}
            </div>

            <p className="text-slate-600 mt-6 leading-7">
              "Nova completely changed the way our team works.
              Everything feels much more organized now."
            </p>

            <div className="mt-7 flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                SK
              </div>

              <div>
                <h4 className="font-semibold">
                  Sarah Khan
                </h4>

                <p className="text-slate-400 text-sm">
                  Product Designer
                </p>
              </div>

            </div>

          </div>


          {/* Review 2 */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">

            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={14} />
              ))}
            </div>

            <p className="text-slate-600 mt-6 leading-7">
              "The interface is beautiful and incredibly easy to use.
              I highly recommend it to every growing team."
            </p>

            <div className="mt-7 flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                AA
              </div>

              <div>
                <h4 className="font-semibold">
                  Ali Ahmed
                </h4>

                <p className="text-slate-400 text-sm">
                  Developer
                </p>
              </div>

            </div>

          </div>


          {/* Review 3 */}
          <div className="group bg-white border border-slate-200 p-8 rounded-3xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">

            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={14} />
              ))}
            </div>

            <p className="text-slate-600 mt-6 leading-7">
              "We save hours every week because everything we need
              is finally in one beautiful place."
            </p>

            <div className="mt-7 flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold">
                EW
              </div>

              <div>
                <h4 className="font-semibold">
                  Emma Wilson
                </h4>

                <p className="text-slate-400 text-sm">
                  Founder
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-24 bg-white">

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 md:p-16 text-center text-white shadow-2xl shadow-indigo-200">

          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-2xl" />

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to build something amazing?
            </h2>

            <p className="text-indigo-100 mt-5 max-w-xl mx-auto text-lg">
              Join thousands of people already using Nova
              to work smarter and move faster.
            </p>

            <button className="mt-9 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 hover:-translate-y-1 transition-all shadow-lg">
              Start for Free
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      
    </div>
  );
}