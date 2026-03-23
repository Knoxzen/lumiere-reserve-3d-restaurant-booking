import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col">

      <div className="relative z-20 flex-1 flex flex-col justify-center px-12 max-w-4xl">
        <h1 className="text-white text-7xl font-serif leading-tight">
          The Art of <br />
          <span className="italic text-[#C5A048]">Ephemeral</span> Dining
        </h1>
        <p className="text-gray-300 mt-6 max-w-lg leading-relaxed text-sm">
          Experience a curated journey where culinary excellence meets digital precision.
          Every table is a stage, every dish a masterpiece.
        </p>
        <div className="flex gap-6 mt-10">
          <button className="bg-[#C5A048] text-black px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors">
            Book Your Table
          </button>
          <button className="border border-white/30 text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;