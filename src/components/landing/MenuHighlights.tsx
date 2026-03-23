import React from 'react';

const dishes = [
  { name: 'Wild Caught Seabass', desc: 'Saffron infusion, heritage greens, sea foam', size: 'large', img: '/seabass.jpg' },
  { name: 'A5 Miyazaki Wagyu', size: 'small', img: '/wagyu.jpg' },
  { name: 'Velvet Cacao Sphere', size: 'small', img: '/dessert.jpg' },
  { name: 'The Reserve Old Fashioned', size: 'wide', img: '/drink.jpg' },
];

const MenuHighlights = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 px-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-[#C5A048] text-[10px] uppercase tracking-widest font-bold">Chef's Selection</span>
          <h2 className="text-white text-4xl font-serif mt-2">Menu Highlights</h2>
        </div>
        <button className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white border-b border-gray-800 pb-1">
          Explore Full Menu
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Featured Item */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
          <img src={dishes[0].img} alt={dishes[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white font-serif text-xl">{dishes[0].name}</h3>
            <p className="text-gray-400 text-xs mt-2 italic">{dishes[0].desc}</p>
          </div>
        </div>

        {/* Small Grid Items */}
        <div className="relative group overflow-hidden h-64">
           <img src={dishes[1].img} alt="" className="w-full h-full object-cover" />
           <div className="absolute bottom-4 left-4 text-white text-sm font-serif">{dishes[1].name}</div>
        </div>
        <div className="relative group overflow-hidden h-64">
           <img src={dishes[2].img} alt="" className="w-full h-full object-cover" />
           <div className="absolute bottom-4 left-4 text-white text-sm font-serif">{dishes[2].name}</div>
        </div>
        
        {/* Bottom Wide Item */}
        <div className="md:col-span-2 relative group overflow-hidden h-80">
           <img src={dishes[3].img} alt="" className="w-full h-full object-cover" />
           <div className="absolute bottom-4 left-4 text-white text-sm font-serif">{dishes[3].name}</div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;