import Hero from '@/components/landing/Hero';
import MenuHighlights from '@/components/landing/MenuHighlights';

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      
      {/* 3D Selector Section */}
      <section className="bg-[#111] py-24 px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-white text-4xl font-serif mb-6 leading-tight">Interactive 3D <br/> Table Selector</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
            Control your destiny with our proprietary digital concierge. Experience your evening before it begins by selecting your exact seat within our high-fidelity 3D map.
          </p>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest text-[#C5A048] font-bold">
            <li className="flex items-center gap-3"><span>◈</span> Real-time Perspective</li>
            <li className="flex items-center gap-3"><span>◈</span> Ambient Lighting Preview</li>
          </ul>
        </div>
        <div className="relative aspect-video bg-[#1A1A1A] border border-white/5 rounded-sm overflow-hidden">
          {/* Use a placeholder image or a Three.js canvas here */}
          <img src="/3d-preview.jpg" alt="3D Map" className="w-full h-full object-cover opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-6 border border-[#C5A048]/30 backdrop-blur-sm">
             <span className="text-[#C5A048] text-[10px] uppercase font-bold">Table 27</span>
             <p className="text-gray-400 text-[9px] mt-1">Panoramic view of the Grand Hall, ideal for intimate conversations.</p>
          </div>
        </div>
      </section>

      <MenuHighlights />

      <footer className="bg-black pt-20 pb-10 px-12 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] uppercase tracking-widest text-gray-500">
          <div className="col-span-1">
            <h4 className="text-[#C5A048] mb-6 italic font-serif normal-case text-lg">Lumière Reserve</h4>
            <p className="leading-loose">Bespoke culinary experiences tailored to the modern epicurean.</p>
          </div>
          {/* Add other footer links here... */}
        </div>
      </footer>
    </main>
  );
}