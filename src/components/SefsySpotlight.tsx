import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Smartphone } from 'lucide-react';

export default function SefsySpotlight() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg border border-border-dim bg-surface p-8 md:p-16"
        >
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[100px] -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-bold text-accent mb-6">
                FLAGSHIP PRODUCT
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                INTRODUCING <br />
                <span className="text-accent">SEFSY</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-md">
                The smart low-oil cooker that cooks for you. Load. Relax. Eat. India's first fully autonomous kitchen robot.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <Zap className="text-accent w-5 h-5" />
                  <span className="text-sm font-medium">One-shot loading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-accent w-5 h-5" />
                  <span className="text-sm font-medium">Very low oil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="text-accent w-5 h-5" />
                  <span className="text-sm font-medium">App controlled</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-bold">₹</span>
                  <span className="text-sm font-medium">Starting ₹29,999</span>
                </div>
              </div>
              
              <Link
                to="/sefsy"
                className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-sm font-bold hover:opacity-90 transition-all group"
              >
                Explore SEFSY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              {/* Placeholder for Product Image */}
              <div className="aspect-square rounded-lg bg-surface-2 border border-border-light flex items-center justify-center overflow-hidden group">
                <img 
                  src="/sefsynew.jpg" 
                  alt="SEFSY Smart Cooker" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-background/80 backdrop-blur-sm border border-border-dim px-6 py-3 rounded-full text-sm font-bold">
                     PREMIUM DESIGN
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
