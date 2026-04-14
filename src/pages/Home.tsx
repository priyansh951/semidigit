import Hero from '../components/Hero';
import SefsySpotlight from '../components/SefsySpotlight';
import AIAdvisor from '../components/AIAdvisor';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cpu, ShieldCheck, BarChart3 } from 'lucide-react';
import { useLeadModal } from '../LeadContext';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 8);
  const { openModal } = useLeadModal();

  return (
    <main>
      <Hero />
      <SefsySpotlight />
      
      {/* Products Preview */}
      <section className="py-24 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">WHAT WE MAKE</h2>
              <p className="text-text-secondary text-lg max-w-xl">
                22+ connected devices across 5 categories. From home automation to industrial monitoring.
              </p>
            </div>
            <Link to="/products" className="text-accent font-bold flex items-center gap-2 group">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-0 rounded-lg border border-border-dim bg-surface hover:border-accent/30 transition-all overflow-hidden"
              >
                <div className="aspect-video bg-surface-2 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <button 
                    onClick={() => openModal(product.name)}
                    className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Get Quote <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Solutions */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                DON'T SEE <br />
                WHAT YOU NEED?
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We build custom IoT solutions. From concept to deployed device. Our engineering team has built 22+ products across 5 industries.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border-light flex items-center justify-center shrink-0">
                    <Cpu className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Custom Hardware</h4>
                    <p className="text-text-secondary text-sm">PCB design, firmware development, and prototyping.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border-light flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Industrial Grade</h4>
                    <p className="text-text-secondary text-sm">Built for harsh environments and 24/7 reliability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border-light flex items-center justify-center shrink-0">
                    <BarChart3 className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Cloud & App Integration</h4>
                    <p className="text-text-secondary text-sm">Full stack connectivity with real-time dashboards.</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => openModal('Custom IoT Solution')}
                className="inline-flex items-center gap-2 bg-accent-2 text-background px-8 py-4 rounded-sm font-bold hover:opacity-90 transition-all group"
              >
                Discuss Your Requirement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg bg-surface border border-border-dim p-8 flex flex-col justify-end">
                   <div className="text-accent font-black text-4xl mb-2">22+</div>
                   <div className="text-text-secondary text-xs font-bold uppercase tracking-widest">Products Built</div>
                </div>
                <div className="aspect-[3/4] rounded-lg bg-surface-2 border border-border-light overflow-hidden">
                   <img src="https://picsum.photos/seed/pcb-design/400/600" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-lg bg-surface-2 border border-border-light overflow-hidden">
                   <img src="https://picsum.photos/seed/industrial-iot/400/600" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-lg bg-surface border border-border-dim p-8 flex flex-col justify-end">
                   <div className="text-accent font-black text-4xl mb-2">5</div>
                   <div className="text-text-secondary text-xs font-bold uppercase tracking-widest">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-t border-border-dim bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">BUILT FOR THE REAL WORLD.</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Trusted by industry leaders across logistics, healthcare, and infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {['LOGISTICS', 'HEALTHCARE', 'SMART CITY', 'AGRITECH', 'RETAIL', 'ENERGY'].map((sector, i) => (
              <div key={i} className="h-20 flex flex-col items-center justify-center border border-border-dim rounded-lg bg-surface-2/50 grayscale hover:grayscale-0 transition-all group">
                <div className="text-[10px] font-black tracking-[0.2em] text-text-muted group-hover:text-accent transition-colors">{sector}</div>
                <div className="text-[8px] font-bold text-text-muted/50 mt-1">PARTNER</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Semidigit's custom IoT solution transformed our warehouse inventory tracking. Highly reliable hardware.", author: "Operations Head", company: "Logistics Corp" },
              { text: "The HOAUTO system is the most stable home automation we've deployed in our luxury projects.", author: "Lead Architect", company: "Urban Spaces" },
              { text: "Exceptional engineering team. They took our concept to a working prototype in record time.", author: "CTO", company: "AgriTech Solutions" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border-dim bg-surface relative group"
              >
                <div className="absolute -top-4 -left-4 text-accent/20 text-6xl font-serif">"</div>
                <p className="text-text-secondary italic mb-8 leading-relaxed relative z-10">{t.text}</p>
                <div>
                  <div className="text-sm font-bold text-text-primary">{t.author}</div>
                  <div className="text-xs text-text-muted font-medium">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AIAdvisor />
      
      {/* Final CTA */}
      <section className="py-24 px-6 bg-accent text-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">READY TO DEPLOY INTELLIGENCE?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => openModal()}
              className="bg-background text-text-primary px-10 py-5 rounded-sm font-bold hover:opacity-90 transition-all"
            >
              Request Demo
            </button>
            <button 
              onClick={() => openModal('Custom IoT Solution')}
              className="border-2 border-background text-background px-10 py-5 rounded-sm font-bold hover:bg-background hover:text-text-primary transition-all"
            >
              Discuss Custom Solution
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

