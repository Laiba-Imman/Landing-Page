import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold">
          Nova<span className="text-indigo-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#features" className="hover:text-white">
            Nova Features
          </a>
          <a href="#about" className="hover:text-white">
            About Features 
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
        </div>

        <button className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 rounded-lg text-sm font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section id="home" className="px-6 md:px-16 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm">
            ✨ The future of productivity
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Build something
            <span className="text-indigo-400"> amazing </span>
            with Nova
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A simple and powerful platform designed to help you manage, create
            and grow your ideas faster than ever.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-7 py-3.5 rounded-xl font-semibold">
              Get Started →
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold">
              Explore Features
            </button>
          </div>

          {/* Hero Card */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="bg-slate-900 rounded-xl p-6 md:p-10">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-indigo-500/10 rounded-xl p-6 text-left">
                  <p className="text-slate-400 text-sm">Total Projects</p>
                  <h3 className="text-3xl font-bold mt-2">128</h3>
                  <p className="text-green-400 text-sm mt-2">+24% this month</p>
                </div>

                <div className="bg-purple-500/10 rounded-xl p-6 text-left">
                  <p className="text-slate-400 text-sm">Team Members</p>
                  <h3 className="text-3xl font-bold mt-2">48</h3>
                  <p className="text-green-400 text-sm mt-2">+12% this month</p>
                </div>

                <div className="bg-pink-500/10 rounded-xl p-6 text-left">
                  <p className="text-slate-400 text-sm">Growth</p>
                  <h3 className="text-3xl font-bold mt-2">86%</h3>
                  <p className="text-green-400 text-sm mt-2">+18% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-16 py-20 bg-slate-900/50">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-indigo-400 font-semibold">FEATURES</p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Everything you need
          </h2>

          <p className="text-slate-400 mt-5">
            Powerful tools that make your workflow easier and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-2xl">
              ⚡
            </div>

            <h3 className="text-xl font-bold mt-6">Lightning Fast</h3>

            <p className="text-slate-400 mt-3 leading-7">
              Everything is optimized for speed so you can focus on your
              important work.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
              🔒
            </div>

            <h3 className="text-xl font-bold mt-6">Secure & Reliable</h3>

            <p className="text-slate-400 mt-3 leading-7">
              Your data stays protected with modern security and reliable
              infrastructure.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl">
              🚀
            </div>

            <h3 className="text-xl font-bold mt-6">Easy to Use</h3>

            <p className="text-slate-400 mt-3 leading-7">
              A simple interface that anyone can understand without a
              complicated learning curve.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-indigo-400 font-semibold">WHY NOVA?</p>

            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Work smarter,
              <br />
              not harder.
            </h2>

            <p className="text-slate-400 mt-6 leading-8">
              Nova brings all your essential tools together in one beautiful
              workspace. Plan your projects, collaborate with your team and
              track your progress from one place.
            </p>

            <button className="mt-8 bg-white text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-indigo-500/10 border border-indigo-400/20 p-7 rounded-2xl">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-slate-400 mt-2">Active Users</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-400/20 p-7 rounded-2xl mt-8">
              <h3 className="text-4xl font-bold">99.9%</h3>
              <p className="text-slate-400 mt-2">Uptime</p>
            </div>

            <div className="bg-pink-500/10 border border-pink-400/20 p-7 rounded-2xl">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-slate-400 mt-2">Countries</p>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-400/20 p-7 rounded-2xl mt-8">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-slate-400 mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 py-20 bg-slate-900/50">
        <div className="text-center">
          <p className="text-indigo-400 font-semibold">TESTIMONIALS</p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Loved by users
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
          <div className="bg-white/5 border border-white/10 p-7 rounded-2xl">
            <p className="text-yellow-400">★★★★★</p>

            <p className="text-slate-300 mt-5 leading-7">
              "Nova completely changed the way our team works. Everything feels
              much more organized now."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold">Sarah Khan</h4>
              <p className="text-slate-500 text-sm">Product Designer</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-7 rounded-2xl">
            <p className="text-yellow-400">★★★★★</p>

            <p className="text-slate-300 mt-5 leading-7">
              "The interface is beautiful and incredibly easy to use. I highly
              recommend it."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold">Ali Ahmed</h4>
              <p className="text-slate-500 text-sm">Developer</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-7 rounded-2xl">
            <p className="text-yellow-400">★★★★★</p>

            <p className="text-slate-300 mt-5 leading-7">
              "We save hours every week because everything we need is finally in
              one place."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold">Emma Wilson</h4>
              <p className="text-slate-500 text-sm">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-16">
        

          <p className="text-indigo-100 mt-5 max-w-xl mx-auto">
            Join thousands of people already using Nova to build better things.
          </p>

          <button className="mt-8 bg-white text-indigo-600 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-100">
            Start for Free →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-16 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold">
            Nova<span className="text-indigo-400">.</span>
          </h2>


          <div className="flex gap-5 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
