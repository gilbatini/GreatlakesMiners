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
  hero: "https://lh3.googleusercontent.com/u/0/d/1PxQYRbg63J9_4-Cwi_8r8CvDStvMizhI",
  refining: "https://lh3.googleusercontent.com/u/0/d/1AIJT-3lFF7bfl1w09qReQGJAgHxfqOhc",
  pure_gold: "https://lh3.googleusercontent.com/u/0/d/14HzTsRCNYu6_ky40KAK8TAul4zPEyWtf",
  worker: "https://lh3.googleusercontent.com/u/0/d/1Rr0W46BkC5OV-ySCal7JWBqxTnRqhyLn",
  protection: "https://lh3.googleusercontent.com/u/0/d/1UC_2CtyV_Pmthpk4a7SMjBVSDd4TXcEg",
  nuggets: "https://lh3.googleusercontent.com/u/0/d/1XuA6tjsTpvJoB1bK6PT-tWAl2kxrAX1U",
  visit: "https://lh3.googleusercontent.com/u/0/d/1hFgYED-WLsE1P0gkJbawjb1NjitaD8iO",
  licensing_bg: "https://lh3.googleusercontent.com/u/0/d/1mksjigTjSnu6SZOw6vmL8hH72ORkCqAR",
  logo: "https://lh3.googleusercontent.com/u/0/d/1kEvnOt8R7ZEQmYQqlTQ1dBWHxTfuUcrl",
  footer_logo: "https://lh3.googleusercontent.com/u/0/d/177c12Cod9DhsZERiXTvP_ewQoaDXbrqd"
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
          <div className="flex items-center gap-3">
            <div className="h-12">
              <img src={IMAGES.logo} alt="Great Lakes Miners" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono font-bold tracking-widest text-brand-base/60">
            <a href="#" className="hover:text-brand-amber transition-colors">SERVICES</a>
            <a href="#" className="hover:text-brand-amber transition-colors">PROJECTS</a>
            <a href="#" className="hover:text-brand-amber transition-colors">PARTNERS</a>
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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img 
          style={{ y: y1 }}
          src={IMAGES.hero} 
          className="w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-offwhite/50 via-transparent to-brand-offwhite"></div>
      </div>
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
            Great Lakes Miners SMC Ltd: Uganda's premier, state-of-the-art precious metal refining and mineral consultancy firm. Ethically sourcing gold and diamonds for the global market.
          </motion.p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group aspect-square lg:aspect-video rounded overflow-hidden shadow-2xl"
          >
            <img src={IMAGES.worker} alt="Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/40 cursor-pointer hover:bg-white/40 transition-colors">
                <Play className="text-white fill-current" size={24} />
              </div>
              <p className="text-white font-mono text-[10px] uppercase font-bold tracking-[0.2em]">Our Operations</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 font-mono">
            <div>
              <div className="text-2xl font-bold tracking-tighter">15+</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tighter">99.99%</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Gold Purity</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tighter">2</div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Global Hubs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Machine Row */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-brand-border/10">
        {[
          { label: 'The Aurum', price: 'Pure Gold 24K', active: true, isCTA: false, image: IMAGES.pure_gold },
          { label: 'Kilo-Moto Unit', price: 'Deep Core', active: false, isCTA: false, image: IMAGES.refining },
          { label: 'Busia Shaft', price: 'High Yield', active: false, isCTA: false, image: IMAGES.nuggets },
          { label: 'Lode Master', price: 'Scanning', active: false, isCTA: false, image: IMAGES.worker },
          { label: 'Check assets', price: 'View all (128)', active: false, isCTA: true, image: IMAGES.protection },
          { label: 'Check assets', price: 'View all (128)', active: false, isCTA: true, image: IMAGES.hero },
        ].map((item, i) => (
          <div key={i} className={`p-6 border-r border-brand-border/10 flex flex-col justify-end min-h-[220px] transition-all relative overflow-hidden group cursor-pointer 
            ${item.active ? 'bg-brand-amber text-brand-base' : 'bg-white hover:bg-zinc-50'}
            ${i === 5 ? 'bg-black text-white' : ''}
          `}>
            <img src={item.image} className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${item.active ? 'opacity-60' : 'opacity-0 group-hover:opacity-20'}`} referrerPolicy="no-referrer" />
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
          title="Visionary Leaders in Mineral Sovereignty"
          subtitle="Under the leadership of Executive Director Mr. Benard Mungu Feni, we are transitioning from a localized operation into a key institutional partner for sovereign entities."
        />
        <div className="space-y-8">
          <div className="border-l-2 border-brand-amber pl-6">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Leadership</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-400">BF</div>
              <div>
                <p className="font-bold text-sm">Mr. Benard Mungu Feni</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Executive Director</p>
              </div>
            </div>
            <p className="text-lg font-sans leading-relaxed text-brand-base italic">
              "To become the largest, most trusted direct supplier of ethically sourced and processed precious minerals (gold and diamonds) to the global market."
            </p>
          </div>
          <div className="border-l-2 border-zinc-200 pl-6">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Institutional Visit</h4>
            <div className="aspect-video w-full rounded overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border border-zinc-100">
               <img src={IMAGES.visit} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <p className="text-base font-sans leading-relaxed text-zinc-600">
              Working in lockstep with the MEMD and the Bank of Uganda to formalize the sector and build national reserves.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { label: 'Bank of Uganda', desc: 'Designated official refining partner for the National Domestic Gold Purchase Programme.' },
          { label: 'Ministry of Energy', desc: 'Working in lockstep with the MEMD for the formalization of artisanal and small-scale mining.' },
          { label: 'Global Compliance', desc: 'Strict adherence to AML/CFT international standards and mineral origin verification.' },
          { label: '24K Hub 2030', desc: 'Spearheading advocacy for a centralized "One-Stop Gold Buying Centre" in Kampala.' },
        ].map((stat, i) => (
          <div key={i} className="space-y-4 pt-8 border-t border-brand-border/10">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-amber">{stat.label}</h4>
            <p className="text-sm text-zinc-600 font-sans leading-relaxed">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechnicalServices = () => (
  <section className="bg-brand-base text-white py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <SectionHeader 
          title="World-Class Midstream Technical Services"
          subtitle="Leveraging advanced industrial systems to provide a wide spectrum of technical services to artisanal miners, institutional investors, and international buyers."
          light
        />
        <Button variant="amber">BOOK A CONSULT <ArrowUpRight size={16} /></Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 group relative rounded overflow-hidden h-[600px]">
          <img src={IMAGES.refining} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-12">
            <div className="text-zinc-400 font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Core Competency</div>
            <h3 className="text-5xl font-bold tracking-tighter mb-8">High-Purity Gold Refining</h3>
            
            <div className="grid grid-cols-3 gap-12 border-t border-white/20 pt-8">
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">Standard</span>
                <span className="text-3xl font-bold">24 Karat</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">Purity</span>
                <span className="text-3xl font-bold">99.99%</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase mb-2">System</span>
                <span className="text-3xl font-bold">Closed-Loop</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
           <div className="relative group flex-1 rounded overflow-hidden border border-white/10">
            <img src={IMAGES.protection} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
               <h4 className="font-bold text-lg mb-1 tracking-tight">Advanced Safety</h4>
               <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Closed-loop systems to eliminate harmful runoff.</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { cat: 'Fire Assaying', sub: 'Traditional Metallurgical Testing', count: 'XRF' },
              { cat: 'Spectrometry', sub: 'Ray Fluorescence Composition', active: true },
              { cat: 'Gold Smelting', sub: 'Custom Casting & Conversion', count: '1kg+' },
              { cat: 'Gemstone Certification', sub: 'Diamond Testing & Evaluation', count: 'PRO' },
              { cat: 'Trade Logistics', sub: 'Secure Vaulting & Transport', count: 'SEC' },
              { cat: 'Mineral Consultancy', sub: 'Strategic Joint Venture Structuring', count: 'HQ' },
            ].map((item, i) => (
              <div key={i} className={`p-4 border-b border-white/10 flex justify-between items-center cursor-pointer transition-all hover:bg-white/5 ${item.active ? 'bg-brand-amber text-brand-base rounded' : ''}`}>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-tight">{item.cat}</h4>
                  <p className={`text-[9px] uppercase tracking-widest ${item.active ? 'text-brand-base' : 'text-zinc-500'}`}>{item.sub}</p>
                </div>
                <div className={`w-10 h-6 px-2 rounded-full border text-[9px] flex items-center justify-center font-bold ${item.active ? 'border-brand-base' : 'border-zinc-700'}`}>
                  {item.count || 'ACT'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OperationsMap = () => (
  <section className="bg-brand-base py-32 border-t border-white/5 relative overflow-hidden">
    {/* Map Background Image */}
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <img 
        src={IMAGES.licensing_bg} 
        className="w-full h-full object-cover grayscale" 
        referrerPolicy="no-referrer"
        alt="Operations licensing background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-brand-base"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
      <SectionHeader 
        title="Upstream Assets & Licensing" 
        subtitle="Holding official exploration and mining licenses issued by the Government of Uganda across resource-rich geological zones." 
        light 
      />
      
      <div className="w-full aspect-[21/9] bg-zinc-900/50 rounded-xl border border-white/10 relative mt-12 group overflow-hidden">
        {/* Simplified Map Visualization */}
        <div className="absolute inset-0 p-12">
           {/* Static Dots */}
           {[
             { x: '52%', y: '58%', label: 'Yumbe Gold Project', status: 'Active Commercial License' },
             { x: '54%', y: '65%', label: 'Kaabong Mining Project', status: 'Large-scale Exploration' },
             { x: '50%', y: '60%', label: 'Abim Exploration Fields', status: 'Appraisal Stage' },
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
                 <span className="text-brand-amber uppercase block mb-1">{point.status}</span>
                 {point.label}
               </div>
             </motion.div>
           ))}
        </div>
        
        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border border-white/10 font-mono rounded">
           <div className="flex gap-12">
             <div>
               <span className="block text-zinc-500 text-[8px] uppercase tracking-widest leading-none mb-2">Refining Partner</span>
               <span className="text-white text-base">Bank of Uganda</span>
             </div>
             <div>
               <span className="block text-zinc-500 text-[8px] uppercase tracking-widest leading-none mb-2">License Body</span>
               <span className="text-white text-base">MEMD Uganda</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const SustainabilityLedger = () => (
  <section className="py-32 bg-brand-offwhite">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-4 rounded overflow-hidden shadow-xl">
        <img src={IMAGES.pure_gold} alt="99.99% Purity" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="lg:col-span-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">Gold Provenance & Journey</h2>
          <p className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Immutable Gold Ledger v4.1</p>
        </div>

        <div className="space-y-4">
        {[
          { date: '2024-05-18', hash: '0x882...F2', item: 'Gold Ingot', qty: '12.2 kg', site: 'Busia A' },
          { date: '2024-05-17', hash: '0x12A...E4', item: 'Raw Gold Ore', qty: '9.4 Tons', site: 'Kilo-Moto' },
          { date: '2024-05-15', hash: '0xDD4...A1', item: 'Refined 24K', qty: '4.4 kg', site: 'Mubende East' },
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
  </div>
</section>
);

const Footer = () => (
  <footer className="bg-brand-base text-white pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12">
              <img src={IMAGES.footer_logo} alt="Great Lakes Miners" className="h-full w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
            </div>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm">
            Bridging the gap between tectonic potential and precious metal supply. Based in Uganda and the Congo, GLM is the heart of African gold innovation.
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
              <a href="#" className="hover:text-brand-amber transition-colors">Executive Management</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Refinery Services</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Diamond Certification</a>
              <a href="#" className="hover:text-brand-amber transition-colors">Trade Logistics</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h5 className="font-mono text-[11px] font-bold tracking-widest text-zinc-400 uppercase">Contact</h5>
            <div className="text-sm font-sans space-y-3">
              <p>Plot 1, Katego Road, Kamwokya<br />Kampala, Uganda</p>
              <p>West Burry Tower, Business Bay<br />Dubai, UAE</p>
              <p className="text-brand-amber font-bold">info@greatlakesminers.com</p>
              <p>+256 756 100112</p>
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

      {/* Floating WhatsApp Action - Black Interactive */}
      <motion.a
        href="https://wa.me/256756100112"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      >
        <div className="absolute -inset-2 bg-brand-amber rounded-full opacity-5 animate-ping group-hover:opacity-20 pointer-events-none"></div>
        <div className="relative bg-black text-white px-4 py-2.5 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <span className="font-mono text-[9px] font-bold tracking-[0.1em] uppercase">WhatsApp</span>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-brand-amber group-hover:text-black transition-colors">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.654 2.378 2.456-.644c.991.542 1.948.932 2.941.932 3.181 0 5.765-2.586 5.766-5.766 0-3.18-2.585-5.766-5.766-5.766zm3.326 8.041c-.135.385-.689.702-1.012.748-.28.041-.635.068-1.028-.063-.245-.083-.559-.191-.937-.354-1.605-.694-2.651-2.336-2.73-2.443-.081-.107-.655-.873-.655-1.666 0-.793.407-1.182.569-1.353.161-.17.352-.213.469-.213.118 0 .235.002.338.006.111.004.261-.042.408.312.152.366.521 1.272.567 1.363.045.09.076.196.015.318-.06.121-.09.196-.182.302-.091.106-.192.231-.274.312-.091.09-.186.189-.08.371.106.182.472.782.997 1.25.68.607 1.246.793 1.428.883.181.091.288.076.394-.045.106-.121.455-.53.576-.713.121-.182.242-.152.408-.091.167.061 1.061.5 1.242.591.181.091.303.136.347.213.046.075.046.438-.088.823z" />
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.522 0 10 4.477 10 10s-4.478 10-10 10-10-4.478-10-10 4.478-10 10-10z" />
            </svg>
          </div>
        </div>
      </motion.a>
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
        <TechnicalServices />
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
