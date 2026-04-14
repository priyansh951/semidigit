import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-dim pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-text-primary mb-6 block">
              SEMIDIGIT
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Intelligence. Embedded. <br />
              Semidigit — IoT devices and custom solutions, built in India.
            </p>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/sefsy" className="text-text-secondary text-sm hover:text-accent transition-colors">SEFSY</Link></li>
              <li><Link to="/products" className="text-text-secondary text-sm hover:text-accent transition-colors">Home Automation</Link></li>
              <li><Link to="/products" className="text-text-secondary text-sm hover:text-accent transition-colors">Industrial IoT</Link></li>
              <li><Link to="/products" className="text-text-secondary text-sm hover:text-accent transition-colors">Medical Devices</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/solutions" className="text-text-secondary text-sm hover:text-accent transition-colors">Solutions</Link></li>
              <li><Link to="/contact" className="text-text-secondary text-sm hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-text-secondary text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-text-secondary text-sm hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="mailto:contact@semidigit.com" className="text-text-secondary text-sm hover:text-accent transition-colors">contact@semidigit.com</a></li>
              <li><a href="tel:+910000000000" className="text-text-secondary text-sm hover:text-accent transition-colors">+91 000 000 0000</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-accent transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-dim pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Semidigit. All rights reserved.
          </p>
          <div className="flex gap-6">
             <span className="text-text-muted text-xs">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
