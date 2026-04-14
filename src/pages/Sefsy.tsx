import { motion } from 'motion/react';
import { Zap, Heart, Smartphone, Clock, ShieldCheck, ChefHat, Sparkles, ArrowRight, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLeadModal } from '../LeadContext';

export default function Sefsy() {
  const { openModal } = useLeadModal();
  const features = [
    { icon: <Zap />, title: "One-Shot Loading", desc: "Add all ingredients at once. SEFSY handles the rest automatically." },
    { icon: <Heart />, title: "Low-Oil Cooking", desc: "Significantly less oil than traditional cooking. Built for health." },
    { icon: <Smartphone />, title: "App Controlled", desc: "Start, pause, monitor, and schedule from your phone." },
    { icon: <ChefHat />, title: "50+ Indian Recipes", desc: "Optimized for Indian curries, sabzi, dal, khichdi, and more." },
    { icon: <Clock />, title: "Hands-Free", desc: "Zero standing time. Load, lock, and leave." },
    { icon: <ShieldCheck />, title: "IoT Connected", desc: "Real-time notifications and smart home integration." },
    { icon: <Sparkles />, title: "Auto Temp Control", desc: "Precision heat management for consistent results." },
    { icon: <Check />, title: "Easy Clean", desc: "Detachable parts for quick and easy cleaning." }
  ];

  const competitors = [
    { name: "SEFSY", price: "₹30,000", automation: "Fully autonomous, one-shot", indian: "Yes, purpose-built", highlighted: true },
    { name: "Nosh AI Robot", price: "₹89,999", automation: "High, cartridge-based", indian: "Yes", highlighted: false },
    { name: "Upliance DelishUp", price: "₹27,500", automation: "Guided (step-by-step)", indian: "Yes", highlighted: false },
    { name: "Wonderchef Nutri-Pot", price: "₹9,000", automation: "Preset-based", indian: "Partially", highlighted: false },
    { name: "Thermomix TM6", price: "₹2,95,000", automation: "High, western-focused", indian: "Limited", highlighted: false },
  ];

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/modern-kitchen-dark/1920/1080" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-bold text-accent mb-6"
            >
              PREMIUM SMART COOKER
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8"
            >
              SEFSY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-accent mb-4"
            >
              Load. Relax. Eat.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-text-secondary mb-12 max-w-lg leading-relaxed"
            >
              India's smart automatic low-oil cooker. Built for busy, health-conscious families who refuse to compromise on taste.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button 
                onClick={() => openModal('SEFSY')}
                className="bg-accent text-background px-10 py-5 rounded-sm font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_30px_rgba(200,255,0,0.2)]"
              >
                Request Demo
              </button>
              <div className="text-2xl font-black">
                ₹29,999 <span className="text-sm font-medium text-text-muted line-through ml-2">₹34,999</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 p-8 md:p-12">
              <img 
                src="/sefsynew.jpg" 
                alt="SEFSY" 
                className="w-full h-auto drop-shadow-[0_0_80px_rgba(200,255,0,0.15)] rounded-2xl border border-border-light bg-surface/30 backdrop-blur-sm"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-surface border border-accent/30 p-4 rounded-xl shadow-2xl"
              >
                <div className="text-accent font-black text-xl">80%</div>
                <div className="text-[8px] font-bold uppercase tracking-tighter text-text-muted">Less Oil Used</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square rounded-lg overflow-hidden border border-border-dim bg-surface">
              <img 
                src="https://picsum.photos/seed/cooking-oil-pour/800/800" 
                alt="Low Oil Cooking" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border border-border-dim bg-surface">
              <img 
                src="https://picsum.photos/seed/kitchen-cooker-modern/800/800" 
                alt="Modern Kitchen" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-balance">
              YOU SHOULDN'T HAVE TO CHOOSE <br />
              BETWEEN HEALTH AND CONVENIENCE.
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Traditional cooking takes time. Ordering out takes your health. SEFSY gives you both back.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Zero Supervision", desc: "No more standing over the stove. Load ingredients and walk away." },
              { title: "Health First", desc: "Cook with up to 80% less oil without losing the authentic Indian flavor." },
              { title: "Remote Control", desc: "Start your dinner from the office. Fresh food ready when you arrive." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-lg border border-border-dim bg-background">
                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">ENGINEERED FOR PERFECTION.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border-dim bg-surface hover:border-accent/30 transition-all group"
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center">WHY SEFSY?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-dim">
                  <th className="py-6 px-4 text-left text-text-muted text-xs uppercase tracking-widest">Product</th>
                  <th className="py-6 px-4 text-left text-text-muted text-xs uppercase tracking-widest">Price</th>
                  <th className="py-6 px-4 text-left text-text-muted text-xs uppercase tracking-widest">Automation</th>
                  <th className="py-6 px-4 text-left text-text-muted text-xs uppercase tracking-widest">Indian Cooking</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr key={i} className={cn("border-b border-border-dim transition-colors", c.highlighted ? "bg-accent/5" : "hover:bg-background/50")}>
                    <td className={cn("py-8 px-4 font-bold", c.highlighted ? "text-accent" : "text-text-primary")}>{c.name}</td>
                    <td className="py-8 px-4 text-text-secondary">{c.price}</td>
                    <td className="py-8 px-4 text-text-secondary">{c.automation}</td>
                    <td className="py-8 px-4 text-text-secondary">{c.indian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-12">TECHNICAL SPECIFICATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { label: "Connectivity", value: "WiFi + IoT (2.4GHz)" },
              { label: "App Support", value: "iOS and Android" },
              { label: "Recipe Library", value: "50+ Indian recipes (expandable)" },
              { label: "Power", value: "Household 220V / 1500W" },
              { label: "Warranty", value: "1 Year Standard" },
              { label: "After Sales", value: "Doorstep service in major cities" },
              { label: "Material", value: "Food-grade Stainless Steel & BPA-free" },
              { label: "Capacity", value: "2.5 Liters" }
            ].map((spec, i) => (
              <div key={i} className="flex justify-between py-4 border-b border-border-dim">
                <span className="text-text-secondary text-sm">{spec.label}</span>
                <span className="font-bold text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 px-6 bg-accent text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">EXPERIENCE SEFSY AT HOME.</h2>
          <p className="text-xl mb-12 font-medium opacity-90">
            Book a live demo or get a custom quote. Our team will reach out within 24 hours.
          </p>
          <button 
            onClick={() => openModal('SEFSY')}
            className="bg-background text-text-primary px-12 py-6 rounded-sm font-bold text-xl hover:opacity-90 transition-all shadow-2xl"
          >
            Book My Demo
          </button>
        </div>
      </section>
    </main>
  );
}

