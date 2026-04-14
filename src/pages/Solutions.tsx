import { motion } from 'motion/react';
import { Cpu, Layers, Smartphone, Factory, Warehouse, Hospital, Building2, School, Map, ArrowRight } from 'lucide-react';
import { useLeadModal } from '../LeadContext';

export default function Solutions() {
  const { openModal } = useLeadModal();
  const industries = [
    { icon: <Factory />, name: "Manufacturing", desc: "Real-time machine monitoring and predictive maintenance." },
    { icon: <Warehouse />, name: "Warehouses", desc: "Automated inventory counting and environment control." },
    { icon: <Hospital />, name: "Healthcare", desc: "Patient monitoring and wireless calling systems." },
    { icon: <Building2 />, name: "Real Estate", desc: "Smart metering and complete home automation." },
    { icon: <School />, name: "Schools", desc: "IoT attendance and smart infrastructure management." },
    { icon: <Map />, name: "Smart Cities", desc: "Air quality monitoring and infrastructure sensors." }
  ];

  const process = [
    { step: "01", title: "Requirement", desc: "We analyze your specific problem and define the IoT architecture." },
    { step: "02", title: "Design", desc: "Custom PCB design, firmware development, and enclosure engineering." },
    { step: "03", title: "Prototype", desc: "Rapid prototyping and testing in real-world conditions." },
    { step: "04", title: "Manufacture", desc: "Pilot batch production and scaling to mass manufacturing." },
    { step: "05", title: "Deploy", desc: "On-site installation and cloud dashboard integration." }
  ];

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            CUSTOM IOT. <br />
            <span className="text-accent">BUILT FOR YOUR PROBLEM.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Semidigit's engineering team has built 22+ IoT products across 5 industries. If your requirement is not in our catalogue, we build it from scratch.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Cpu />, title: "Hardware Design", desc: "Custom PCB manufacturing and embedded firmware development." },
            { icon: <Layers />, title: "IoT Connectivity", desc: "WiFi, LoRa, BLE, and cellular integration with cloud servers." },
            { icon: <Smartphone />, title: "App Integration", desc: "Custom mobile apps and dashboards for real-time monitoring." }
          ].map((s, i) => (
            <div key={i} className="p-10 rounded-lg border border-border-dim bg-surface">
              <div className="text-accent mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mb-32">
          <h2 className="text-4xl font-black tracking-tighter mb-12">INDUSTRIES WE SERVE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="p-8 rounded-lg border border-border-dim bg-surface-2 flex items-start gap-6 group hover:border-accent/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-background border border-border-dim flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  {ind.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{ind.name}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <h2 className="text-4xl font-black tracking-tighter mb-16 text-center">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative p-8 rounded-lg border border-border-dim bg-surface">
                <div className="text-accent font-black text-4xl mb-6 opacity-20">{p.step}</div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-border-light w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className="p-12 md:p-20 rounded-lg border border-accent/20 bg-accent/5 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">HAVE A UNIQUE REQUIREMENT?</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Let's discuss how we can build a custom IoT solution for your business.
          </p>
          <button 
            onClick={() => openModal('Custom IoT Solution')}
            className="bg-accent text-background px-12 py-6 rounded-sm font-bold text-xl hover:opacity-90 transition-all"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </main>
  );
}
