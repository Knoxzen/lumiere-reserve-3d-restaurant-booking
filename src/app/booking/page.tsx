"use client";

import React from 'react';

import { User, Clock, Calendar, Edit2, CheckCircle } from 'lucide-react';

const LumiereReserve = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 font-sans selection:bg-yellow-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/5">
        <div className="text-[#C5A048] italic font-serif text-2xl font-semibold tracking-wide">
          Lumière Reserve
        </div>
        <div className="flex gap-10 text-xs uppercase tracking-[0.2em] font-medium items-center">
          <a href="#" className="hover:text-white transition-colors">Reservations</a>
          <a href="#" className="hover:text-white transition-colors">Menu</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <User className="w-5 h-5 text-[#C5A048] cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <h1 className="text-white text-6xl font-serif mb-4 leading-tight">
            Complete your <br />
            <span className="italic">experience.</span>
          </h1>
          <p className="text-gray-400 max-w-md mb-12 leading-relaxed">
            Please provide your details below to secure your placement at Lumière. 
            Every request is handled with meticulous care by our kitchen and floor team.
          </p>

          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A048] font-bold">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Julianne Vasseur"
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#C5A048] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A048] font-bold">Email Address</label>
                <input 
                  type="email" 
                  placeholder="j.vasseur@domain.com"
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#C5A048] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A048] font-bold">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+33 (0) 1 23 45 67 89"
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#C5A048] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#C5A048] font-bold">Special Requests</label>
                <input 
                  type="text" 
                  placeholder="Anniversary, dietary preferences..."
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#C5A048] transition-colors"
                />
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-[#C5A048] hover:bg-[#D4AF37] text-black font-bold py-4 px-12 rounded-sm transition-all uppercase text-xs tracking-widest">
                Confirm Reservation
              </button>
              <p className="mt-4 text-[9px] uppercase tracking-widest text-gray-500">
                By confirming, you agree to our 24h cancellation policy.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Detail Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#1A1A1A] p-10 rounded-sm border border-white/5 shadow-2xl">
            <h2 className="text-[#C5A048] font-serif text-3xl mb-1">Reservation Detail</h2>
            <p className="text-gray-500 text-xs mb-10 tracking-wide">Table 12 • 7:30 PM • 2 Guests</p>

            <div className="space-y-8">
              {/* Schedule */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3"><Calendar className="w-5 h-5 text-[#C5A048]" /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Schedule</p>
                    <p className="text-white">October 24th, 2024</p>
                  </div>
                </div>
                <Edit2 className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer" />
              </div>

              {/* Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-3"><Clock className="w-5 h-5 text-[#C5A048]" /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Time</p>
                    <p className="text-white">19:30 — 21:30</p>
                  </div>
                </div>
                <Edit2 className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer" />
              </div>

              {/* Table Location Map Placeholder */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Table Location</span>
                  <span className="text-[10px] italic text-[#C5A048]">The Conservatory</span>
                </div>
                <div className="relative aspect-video bg-[#222] rounded-sm flex items-center justify-center overflow-hidden border border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   <div className="w-4 h-4 bg-[#C5A048] rounded-full shadow-[0_0_15px_rgba(197,160,72,0.6)] animate-pulse"></div>
                   {/* Abstract Map Lines would go here */}
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-sm border-l-2 border-[#C5A048]">
                  <User className="w-4 h-4 text-[#C5A048]" />
                  <span className="text-xs text-white uppercase tracking-widest">Guest Details</span>
                  <div className="w-2 h-2 bg-[#C5A048] rounded-full ml-auto"></div>
                </div>
                <div className="flex items-center gap-3 p-4 opacity-40">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-20 mt-12 border-t border-white/5 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-[#C5A048] italic font-serif text-lg mb-4">Lumière Reserve</h3>
          <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">
            © 2024 Lumière Reserve. <br /> The Digital Maître d' Experience.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-[#C5A048] mb-6 font-bold">Discovery</h4>
          <ul className="text-xs space-y-3 text-gray-500">
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Our Cellar</li>
            <li className="hover:text-white cursor-pointer">Private Dining</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-[#C5A048] mb-6 font-bold">Legal</h4>
          <ul className="text-xs space-y-3 text-gray-500">
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Newsletter</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-[#C5A048] mb-6 font-bold">Connect</h4>
          <ul className="text-xs space-y-3 text-gray-500">
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Location</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LumiereReserve;