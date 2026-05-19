import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Search, 
  Globe, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Facebook, 
  Twitter, 
  Instagram,
  Play,
  Menu,
  X
} from 'lucide-react';

// --- Constants & Assets ---
const BRAND_AMBER = "#D99532";
const IMAGES = {
  hero: "/src/assets/images/mining_hero_panorama_1779107103783.png",
  excavator: "/src/assets/images/giant_wheel_excavator_1779107119531.png",
  rig: "/src/assets/images/offshore_drilling_rig_1779107136493.png",
  underground: "/src/assets/images/mining_operations_dark_1779107153031.png"
};

// --- Components ---

const Button = ({ children, variant = 'primary', className = "" }: { children: React.ReactNode, variant?: 'primary' | 'secondary' | 'outline' | 'amber', className?: string }) => {
  const base = "px-6 py-3 font-mono text-[11px] font-bold tracking-widest uppercase transition-all active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-base text-white hover:bg-zinc-800",
    secondary: "bg-white text-brand-base border border-brand-border hover:bg-zinc-50",
    outline: "border border-brand-border text-brand-base hover:border-brand-amber hover:text-brand-amber",
    amber: "bg-brand-amber text-brand-base hover:brightness-110"
  };
  
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold tracking-tighter mb-4 ${light ? 'text-white' : 'text-brand-base'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-sm md:text-base max-w-2xl font-sans leading-relaxed ${light ? 'text-zinc-400' : 'text-zinc-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-base flex items-center justify-center -skew-x-12">
              <span className="text-white font-bold text-lg select-none">G</span>
            </div>
            <span className="font-bold tracking-tighter text-xl">GREAT_LAKES</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono font-bold tracking-widest text-brand-base/60">
            <a href="#" className="hover:text-brand-amber transition-colors">NEWS</a>
            <a href="#" className="hover:text-brand-amber transition-colors">HISTORY</a>
            <a href="#" className="hover:text-brand-amber transition-colors">ABOUT</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-brand-base/40">
            <button className="hover:text-brand-base transition-colors"><Search size={18} /></button>
            <div className="h-4 w-[1px] bg-brand-border"></div>
            <button className="flex items-center gap-1 hover:text-brand-base transition-colors font-mono text-[11px] font-bold">
              EN <ChevronRight size={14} className="rotate-90" />
            </button>
          </div>
          <Button variant="amber" className="h-12 hidden md:flex">REQUEST A QUOTE <ArrowUpRight size={16} /></Button>
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-6 flex flex-col gap-4 lg:hidden"
        >
          <a href="#" className="font-mono text-sm font-bold tracking-widest py-2 border-b border-zinc-100">NEWS</a>
          <a href="#" className="font-mono text-sm font-bold tracking-widest py-2 border-b border-zinc-100">HISTORY</a>
          <a href="#" className="font-mono text-sm font-bold tracking-widest py-2 border-b border-zinc-100">ABOUT</a>
          <Button variant="amber">REQUEST A QUOTE</Button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-0 overflow-hidden bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] lg:text-[100px] font-bold leading-[0.9] tracking-tighter mb-8"
          >
            Powering the <br />
            <span className="text-brand-amber">Great Lakes Region.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-zinc-600 max-w-md font-sans text-lg mb-10 leading-relaxed"
          >
            Great Lakes Miners: Utilizing cutting-edge technology for responsible resource extraction across Uganda and the Congo — driving the heart of Africa's industrial future.
          </motion.p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group aspect-square lg:aspect-video rounded overflow-hidden shadow-2xl"
          >
            <img src={IMAGES.underground} alt="History" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/40 cursor-pointer hover:bg-white/40 transition-colors">
                <Play className="text-white fill-current" size={24} />
              </div>
              <p className="text-white font-mono text-[10px] uppercase font-bold tracking-[0.2em]">Our History</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 font-mono">
            <div>
              <div className="text-2xl font-bold tracking-tighter">1,27B</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Tons Extracted</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tighter">98%</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Clients Satisfied</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tighter">28</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Machine Row */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-brand-border/10">
        {[
          { label: 'The Strength', price: 'From $150k', active: true, isCTA: false },
          { label: 'Marine Unit', price: 'From $420k', active: false, isCTA: false },
          { label: 'Bore King', price: 'From $890k', active: false, isCTA: false },
          { label: 'X-Scout', price: 'From $12k', active: false, isCTA: false },
          { label: 'Check machines', price: 'View all (128)', active: false, isCTA: true },
          { label: 'Check machines', price: 'View all (128)', active: false, isCTA: true },
        ].map((item, i) => (
          <div key={i} className={`p-6 border-r border-brand-border/10 flex flex-col justify-end min-h-[220px] transition-all relative overflow-hidden group cursor-pointer 
            ${item.active ? 'bg-brand-amber text-brand-base' : 'bg-white hover:bg-zinc-50'}
            ${i === 5 ? 'bg-black text-white' : ''}
          `}>
            {item.active && (
              <img src={IMAGES.rig} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            )}
            <div className="relative z-10">
              <h3 className="font-bold text-sm tracking-tight mb-1">{item.label}</h3>
              <p className={`text-[10px] font-mono uppercase tracking-widest ${item.active ? 'text-brand-base' : 'text-zinc-400'}`}>{item.price}</p>
            </div>
            {!item.isCTA && (
              <div className={`mt-4 w-6 h-6 rounded-full border flex items-center justify-center ${item.active ? 'border-brand-base' : 'border-zinc-200'}`}>
                <ArrowUpRight size={12} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Vision = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <SectionHeader 
          title="We are redefining the boundaries of resource extraction"
          subtitle="Operating in the rich mineral belts of the Katanga and Kasese regions, our advanced machinery is designed for maximum efficiency with deep respect for the surrounding ecosystems."
        />
        <div className="flex gap-4">
          <Button variant="primary">LEARN MORE <ChevronRight size={16} /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Years of experience', val: '25' },
          { label: 'Total number of workers', val: '1,288' },
          { label: 'Current projects', val: '589+' },
        ].map((stat, i) => (
          <div key={i} className="space-y-4 pt-12 border-t border-brand-border/10">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">{stat.label}</h4>
            <div className="text-6xl font-bold tracking-tighter">{stat.val}</div>
            <p className="text-[11px] text-zinc-500 font-sans">Professional excellence in resource navigation.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MachineCatalog = () => (
  <section className="bg-brand-base text-white py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <SectionHeader 
          title="Innovative mining equipment solutions"
          subtitle="Explore our wide range of durable mining equipment. From Mining Drills to Conveyor Systems, we provide high-quality tools designed to increase productivity, enhance safety, and minimize environmental impact."
          light
        />
        <Button variant="outline" className="text-white border-zinc-700 hover:border-white">VIEW ALL (128) <ArrowUpRight size={16} /></Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 group relative rounded overflow-hidden h-[600px]">
          <img src={IMAGES.excavator} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-12">
            <div className="text-zinc-400 font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Earth Movers</div>
            <h3 className="text-5xl font-bold tracking-tighter mb-8">Titan Extractor 3000</h3>
            
            <div className="grid grid-cols-3 gap-12 border-t border-white/20 pt-8">
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">Diameter</span>
                <span className="text-3xl font-bold">20 meters</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">Volume</span>
                <span className="text-3xl font-bold">15 m³</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">Performance</span>
                <span className="text-3xl font-bold">240,000 m³</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          {[
            { cat: 'Mining Drills', sub: 'Construction', count: 5 },
            { cat: 'Earth Movers', sub: 'Land extraction', count: 4, active: true },
            { cat: 'Loaders and Trucks', sub: 'Transportation', count: 1 },
            { cat: 'Drilling Rigs', sub: 'Oil and gas, geothermal energy', count: 7 },
            { cat: 'Hydraulic Mining Shovels', sub: 'Quarrying', count: 6 },
            { cat: 'Excavators', sub: 'Demolition', count: 7 },
          ].map((item, i) => (
            <div key={i} className={`p-6 border-b border-white/10 flex justify-between items-center cursor-pointer transition-all hover:bg-white/5 ${item.active ? 'bg-brand-amber text-brand-base rounded' : ''}`}>
              <div>
                <h4 className="font-bold text-sm">{item.cat}</h4>
                <p className={`text-[10px] uppercase tracking-widest ${item.active ? 'text-brand-base' : 'text-zinc-500'}`}>{item.sub}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-bold ${item.active ? 'border-brand-base' : 'border-zinc-700'}`}>
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const OperationsMap = () => (
  <section className="bg-brand-base py-32 border-t border-white/5 relative overflow-hidden">
    {/* Abstract Map Background */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="w-full h-full" style={{ 
        backgroundImage: 'radial-gradient(circle at 10% 20%, white 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
      <SectionHeader 
        title="Global Extraction Lattice" 
        subtitle="Tracking over 80 active sites across all continents with real-time provenance verification." 
        light 
      />
      
      <div className="w-full aspect-[21/9] bg-zinc-900/50 rounded-xl border border-white/10 relative mt-12 group overflow-hidden">
        {/* Simplified Map Visualization */}
        <div className="absolute inset-0 p-12">
           {/* Static Dots */}
           {[
             { x: '52%', y: '58%', label: 'Kasese Copper Site' },
             { x: '54%', y: '65%', label: 'Katanga Deep Core' },
             { x: '51%', y: '52%', label: 'Rwenzori Extraction' },
             { x: '56%', y: '62%', label: 'Kolwezi Lithium Unit' },
             { x: '50%', y: '60%', label: 'Mubende Gold Site' },
           ].map((point, i) => (
             <motion.div 
               key={i}
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               className="absolute group/pin"
               style={{ left: point.x, top: point.y }}
             >
               <div className="w-4 h-4 bg-brand-amber rounded-full animate-pulse shadow-[0_0_15px_rgba(217,149,50,0.8)] cursor-pointer"></div>
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none whitespace-nowrap bg-brand-surface border border-brand-border p-3 text-[10px] font-mono text-white rounded">
                 <span className="text-zinc-500 uppercase block mb-1">Active Site</span>
                 {point.label}
               </div>
             </motion.div>
           ))}
        </div>
        
        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border border-white/10 font-mono rounded">
           <div className="flex gap-12">
             <div>
               <span className="block text-zinc-500 text-[8px] uppercase tracking-widest leading-none mb-2">Fleet Online</span>
               <span className="text-white text-xl font-bold">1,204 Units</span>
             </div>
             <div>
               <span className="block text-zinc-500 text-[8px] uppercase tracking-widest leading-none mb-2">Network Ping</span>
               <span className="text-brand-amber text-xl font-bold">12 ms</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const SustainabilityLedger = () => (
  <section className="py-32 bg-brand-offwhite">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">Mineral Provenance & Journey</h2>
        <p className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Immutable Extraction Ledger v4.1</p>
      </div>

      <div className="space-y-4">
        {[
          { date: '2024-05-18', hash: '0x882...F2', item: 'Cobalt-78', qty: '1.2 Tons', site: 'Katanga B' },
          { date: '2024-05-17', hash: '0x12A...E4', item: 'Copper Ore', qty: '9.4 Tons', site: 'Kasese North' },
          { date: '2024-05-15', hash: '0xDD4...A1', item: 'Gold Ore', qty: '0.4 Tons', site: 'Mubende East' },
        ].map((log, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-brand-border/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-brand-amber/40 transition-colors"
          >
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-[10px]">
              <div>
                <span className="block text-zinc-400 uppercase mb-1">Timestamp</span>
                <span className="font-bold">{log.date}</span>
              </div>
              <div>
                <span className="block text-zinc-400 uppercase mb-1">Chain Hash</span>
                <span className="text-brand-amber font-bold">{log.hash}</span>
              </div>
              <div>
                <span className="block text-zinc-400 uppercase mb-1">Resource</span>
                <span className="font-bold uppercase">{log.item}</span>
              </div>
              <div>
                <span className="block text-zinc-400 uppercase mb-1">Tonnage</span>
                <span className="font-bold">{log.qty}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] font-mono">
              <ShieldCheck size={16} /> VERIFIED
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-base text-white pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-amber flex items-center justify-center -skew-x-12">
              <span className="text-brand-base font-bold text-xl">G</span>
            </div>
            <span className="font-bold tracking-tighter text-3xl">GREAT_LAKES_MINERS</span>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm">
            Bridging the gap between tectonic potential and industrial supply. Based in Uganda and the Congo, GLM is the heart of African mineral innovation.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded hover:border-brand-amber hover:text-brand-amber transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:col-span-2">
          <div className="space-y-6">
            <h5 className="font-mono text-[11px] font-bold tracking-widest text-zinc-400 uppercase">Navigation</h5>
            <nav className="flex flex-col gap-3 text-sm font-sans">
              <a href="#" className="hover:text-brand-amber transition-colors">Our History</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Safety Protocols</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Sustainability Report</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Careers</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h5 className="font-mono text-[11px] font-bold tracking-widest text-zinc-400 uppercase">Contact</h5>
            <div className="text-sm font-sans space-y-3">
              <p>Plot 12, Kololo Hill Drive<br />Kampala, Uganda</p>
              <p className="text-brand-amber font-bold">hello@greatlakesminers.com</p>
              <p>+256 414 552 100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          © 2024 Great Lakes Miners. All rights reserved. // System Build: 4.09.2
        </div>
        <div className="flex gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Architecture</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terminal</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-amber selection:text-brand-base">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Vision />
        <MachineCatalog />
        <OperationsMap />
        <SustainabilityLedger />
        
        {/* Call to Action */}
        <section className="bg-brand-amber py-24 text-brand-base overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 text-[150px] font-bold leading-none opacity-10 pointer-events-none -mr-20 -mt-10 select-none">GLM</div>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Start your next <br /> project with us.</h2>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">Consult our engineering board today.</p>
            </div>
            <Button variant="primary" className="h-20 px-12 text-sm !rounded-none">INITIATE CONSULT <ArrowUpRight size={20} /></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
