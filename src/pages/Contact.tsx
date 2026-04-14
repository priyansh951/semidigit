import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S <br />
              <span className="text-accent">TALK.</span>
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-md leading-relaxed">
              Have a question about our products or need a custom IoT solution? Our team is ready to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface border border-border-dim flex items-center justify-center shrink-0 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-text-secondary">contact@semidigit.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface border border-border-dim flex items-center justify-center shrink-0 text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-text-secondary">+91 000 000 0000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface border border-border-dim flex items-center justify-center shrink-0 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-text-secondary">Semidigit HQ, Tech Park, <br />Bangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-surface border border-border-dim p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Company</label>
                  <input 
                    type="text" 
                    placeholder="Optional"
                    className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Product Interest</label>
                <select className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Select a product</option>
                  <option>SEFSY</option>
                  <option>Home Automation</option>
                  <option>Industrial IoT</option>
                  <option>Medical Devices</option>
                  <option>Custom IoT Solution</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full bg-background border border-border-dim rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-accent text-background py-5 rounded-sm font-bold text-lg hover:opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
