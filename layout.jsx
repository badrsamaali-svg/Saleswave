import React, { useState } from 'react';
import { Menu, X, Phone, Mail, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

export default function SalesWaveWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: Phone,
      title: 'Cold Calling & Outbound',
      description: 'Gerichte, strategische cold calls voor B2B-bedrijven. Ik win deals en genereer kwalitatief leads voor jouw team.',
      features: ['Gepersonaliseerde scripts', 'Estrategia per segment', 'Real-time coaching']
    },
    {
      icon: Target,
      title: 'Go-To-Market (GTM) Engineering',
      description: 'Ik help je een slimme inbreng-strategie opbouwen met sales, marketing en product alignment.',
      features: ['GTM roadmap', 'Sales process design', 'Pipeline acceleration']
    },
    {
      icon: TrendingUp,
      title: 'Email Sequences & Campaigns',
      description: 'High-converting email campaigns die cold outreach ondersteunen en warm leads nurtures.',
      features: ['Campaign strategy', 'Copy optimization', 'A/B testing & analytics']
    }
  ];

  const benefits = [
    { text: 'Meer kwalitatieve inbound leads', icon: '📈' },
    { text: 'Kortere sales cycles', icon: '⚡' },
    { text: 'Professionele outbound aan schaal', icon: '🎯' },
    { text: 'Consistent pipeline fill', icon: '🔄' },
    { text: 'Betere conversion rates', icon: '💯' },
    { text: 'Team training & scaling', icon: '👥' }
  ];

  const caseHighlights = [
    { metric: '+180%', description: 'Stijging in koude leads in 3 maanden' },
    { metric: '45+ deals', description: 'Gesloten door outbound strategie' },
    { metric: '3x ROI', description: 'Op GTM engineering project' }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <div className="text-white font-black tracking-tight text-lg">Saleswave</div>
              <div className="text-orange-400 text-[9px] font-bold leading-none">CONSULTING</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Results', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-blue-100 hover:text-orange-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => window.open('https://calendly.com/badr-samaali-saleswaveconsulting/30min', '_blank')} className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-orange-500/30 p-6 space-y-4">
            {['Home', 'Services', 'Results', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-sm font-medium text-blue-100 hover:text-orange-400"
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600">
              Book a Call
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
            Saleswave,<br/>
            <span className="text-orange-400">does the hard work for you</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Gerichte cold calling, Go-To-Market strategie en email campaigns die echt werken. Wij helpen B2B-bedrijven meer deals sluiten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => window.open('https://calendly.com/badr-samaali-saleswaveconsulting/30min', '_blank')} className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl shadow-orange-500/30">
              <Phone size={20} />
              Book a Strategy Call
            </button>
            <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-400/10 transition-colors">
              Bekijk mijn strategie
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid md:grid-cols-3 gap-8 bg-blue-900/40 rounded-2xl p-10 shadow-sm border border-orange-500/30 backdrop-blur">
            {caseHighlights.map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-white mb-2">{item.metric}</div>
                <p className="text-blue-100 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white">Mijn Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-blue-900/50 border-2 border-orange-500/40 rounded-2xl p-8 hover:border-orange-400 transition-all hover:bg-blue-900/70 group"
                >
                  <div className="bg-orange-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                    <Icon size={28} className="text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-50 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-blue-950 border-y border-orange-500/30">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Waarom Saleswave?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 bg-blue-950/40 p-6 rounded-lg border border-orange-500/20 hover:border-orange-400/50 transition-colors">
                <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                <p className="text-lg font-medium text-blue-50">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-blue-900/50 border-y border-orange-500/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-white">Onze Partners</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            Wij werken samen met toonaangevende platforms en organisaties om jouw sales resultaten te maximaliseren.
          </p>
          
          <div className="grid md:grid-cols-1 gap-8">
            <a href="https://blueskai.nl/partners" target="_blank" rel="noopener noreferrer" className="bg-blue-950 border-2 border-orange-500/30 rounded-2xl p-8 hover:border-orange-400 transition-all hover:bg-blue-900/70 group">
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">BlueSkai</div>
                <p className="text-blue-100 mb-4">Geavanceerde sales automation en lead management platform</p>
                <div className="text-sm text-blue-100 space-y-3">
                  <p>Ontdek hoe Blueskai innovatie en efficiëntie samenbrengt in digitale transformatie en accountancy-oplossingen.</p>
                  <p>Blueskai levert deskundige digitale oplossingen die innovatie en efficiëntie bij elke stap stimuleren. Wij geloven in een persoonlijke aanpak waarbij we nauw samenwerken met onze klanten om de beste resultaten te behalen.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
                <span>Bekijk partnership</span>
                <ArrowRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-white">Over Ons</h2>
          
          <div className="bg-blue-900/50 rounded-2xl p-12 border border-orange-500/30 max-w-3xl mx-auto">
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Wij zijn gespecialiseerd in <strong className="text-orange-400">strategische cold calling</strong> en <strong className="text-orange-400">Go-To-Market engineering</strong> voor B2B-bedrijven in de Benelux. 
            </p>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Onze expertise ligt in het bouwen van effectieve outbound-strategieën die aantoonbare resultaten opleveren: meer gekwalificeerde leads, kortere sales cycles, en een consistent gevulde pipeline.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Wij combineren cold calling met GTM strategy en email campaigns om een volledige outbound-motor voor jouw bedrijf te creëren.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-500/5 to-transparent border-t border-orange-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">Klaar om jouw pipeline te vullen?</h2>
          <p className="text-xl mb-12 text-blue-100">Laten we de juiste strategie voor jouw bedrijf definiëren.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => window.open('https://calendly.com/badr-samaali-saleswaveconsulting/30min', '_blank')} className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30">
              <Phone size={20} />
              Book a 20-min Call
            </button>
            <a href="mailto:badr.samaali@saleswaveconsulting.com" className="border-2 border-orange-400 text-orange-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-400/10 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-900/40 rounded-lg p-6 border border-orange-500/30 inline-block">
            <p className="text-blue-100 mb-2">📱 <a href="tel:+32498691808" className="text-orange-400 hover:text-orange-300 font-semibold">+32 498 691 808</a></p>
            <p className="text-blue-100">📧 <a href="mailto:badr.samaali@saleswaveconsulting.com" className="text-orange-400 hover:text-orange-300 font-semibold">badr.samaali@saleswaveconsulting.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-6 border-t border-orange-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <div className="text-white font-black tracking-tight text-sm">Saleswave</div>
                  <div className="text-orange-400 text-[9px] font-bold leading-none">CONSULTING</div>
                </div>
              </div>
              <p className="text-blue-100">B2B Sales Strategy & Outbound</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-orange-400">Services</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Cold Calling</li>
                <li>GTM Strategy</li>
                <li>Email Campaigns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-orange-400">Get in Touch</h3>
              <p className="text-blue-100 mb-2">📱 <a href="tel:+32498691808" className="hover:text-orange-400 transition-colors">+32 498 691 808</a></p>
              <p className="text-blue-100">📧 <a href="mailto:badr.samaali@saleswaveconsulting.com" className="hover:text-orange-400 transition-colors">badr.samaali@saleswaveconsulting.com</a></p>
            </div>
          </div>
          
          <div className="border-t border-orange-500/30 pt-8 text-center text-blue-200">
            <p>© 2024 Saleswave Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}