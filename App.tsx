import React, { useState, useEffect } from 'react';
import {
  Check,
  ShieldCheck,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Info,
  Leaf,
  Activity,
  Zap,
  Quote,
  ExternalLink,
  BookOpen
} from 'lucide-react';
// import heroImage from './assets/product.jpg'; // Removed for Public Folder strategy

// --- TYPES ---
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// --- CONFIGURATION ---
const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

// --- TRACKING HELPER ---
const trackEvent = (eventName: string, params: any = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  } else {
    console.log("GTM Event:", eventName, params);
  }
};

// --- COMPONENTS ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    trackEvent('anchor_click', { anchor_id: id });
  };

  return (
    <>
      {/* Advertorial Label */}
      <div className="bg-gray-100 text-[10px] text-gray-500 text-center py-1 uppercase tracking-widest font-semibold">
        Advertorial / Independent Review
      </div>

      <header className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16 md:h-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="font-heading font-black text-xl md:text-2xl text-blue-900 tracking-tight flex items-center">
            <Activity className="w-6 h-6 mr-2 text-brand-green" />
            Health Journal <span className="text-gray-400 font-light mx-1">|</span> <span className="text-brand-green">Review</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" onClick={() => handleLinkClick('benefits')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">Benefits</a>
            <a href="#story" onClick={() => handleLinkClick('story')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">My Story</a>
            <a href="#faq" onClick={() => handleLinkClick('faq')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={OFFER_URL}
              id="btn-nav-check"
              onClick={() => trackEvent('cta_click', { cta_id: 'btn-nav-check' })}
              className="bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-md uppercase flex items-center"
            >
              Check Official Availability <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 top-16 shadow-xl py-4 flex flex-col items-center space-y-4 animate-in slide-in-from-top-2">
            <a href="#benefits" onClick={() => handleLinkClick('benefits')} className="font-medium text-gray-800 py-2">Benefits</a>
            <a href="#story" onClick={() => handleLinkClick('story')} className="font-medium text-gray-800 py-2">My Story</a>
            <a href="#faq" onClick={() => handleLinkClick('faq')} className="font-medium text-gray-800 py-2">FAQ</a>
            <a
              href={OFFER_URL}
              id="cta_header_mobile"
              onClick={() => trackEvent('cta_click', { cta_id: 'cta_header_mobile' })}
              className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg w-[90%] text-center shadow-lg uppercase"
            >
              Check Official Availability
            </a>
          </div>
        )}
      </header>
    </>
  );
};

const Hero = () => {
  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-yellow-200 uppercase tracking-wide">
            2026 Comprehensive Review
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Nerve Fresh: <span className="text-brand-green">Does It Really Work?</span> An Honest Review.
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Discover how this plant-based formula is designed to gently support nerve comfort over time by combining B-vitamins, magnesium, and botanical extracts.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Helps maintain healthy nerve signaling",
              "Provides antioxidant protection",
              "Supports nervous system balance and daily resilience",
              "Non-prescription formula"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={OFFER_URL}
              id="btn-hero-check"
              onClick={() => trackEvent('cta_click', { cta_id: 'btn-hero-check' })}
              className="w-full sm:w-auto bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-4 px-8 rounded-lg text-lg shadow-xl shadow-green-200 transition-all transform hover:-translate-y-0.5 text-center uppercase flex justify-center items-center"
            >
              View Official Details <ExternalLink className="w-5 h-5 ml-2 opacity-80" />
            </a>
            <span className="text-xs text-gray-500 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-gray-400" /> Redirects to Manufacturer
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-4 italic">
            * Nerve Fresh is a nutritional supplement. Individual results may vary.
          </p>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-full max-w-sm">
            <img
              src="/product.jpg"
              alt="Nerve Fresh Bottle"
              className="w-full rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="bg-white/90 backdrop-blur-sm inline-flex items-center px-4 py-2 rounded-full shadow-lg border border-gray-100">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold text-gray-800">4.8/5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Nerve Signaling",
      desc: "Vitamins and nutrients support the essential communication pathways between your nerves and brain.",
      color: "bg-blue-500"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Antioxidant Protection",
      desc: "Natural antioxidants help protect delicate cells against oxidative stress.",
      color: "bg-green-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Cellular Nutrition",
      desc: "Minerals like Magnesium and B-Complex vitamins assist in cellular metabolism efficiency.",
      color: "bg-purple-500"
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Natural Balance",
      desc: "Traditional botanical extracts contribute to nervous system balance over time.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understand how Nerve Fresh's active components work within the body to promote well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mechanism = () => {
  return (
    <section className="py-16 bg-medical-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">How It Works in Your Body</h2>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-medical-100">
          <p className="text-gray-700 mb-6 text-lg">
            Nerve Fresh combines essential nutrients and plant compounds to act on four synergistic fronts. The secret isn't "forcing" the body, but providing the right raw materials:
          </p>
          <ol className="space-y-4">
            <li className="flex items-start bg-blue-50 p-4 rounded-lg">
              <span className="bg-blue-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">1</span>
              <div>
                <strong className="block text-gray-900 mb-1">Base Nutritional Support</strong>
                <span className="text-gray-600 text-sm">B Vitamins and Magnesium replenish common deficiencies affecting nerves.</span>
              </div>
            </li>
            <li className="flex items-start bg-blue-50 p-4 rounded-lg">
              <span className="bg-blue-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">2</span>
              <div>
                <strong className="block text-gray-900 mb-1">Combat Free Radicals</strong>
                <span className="text-gray-600 text-sm">Potent antioxidants help neutralize oxidative stress that damages tissues.</span>
              </div>
            </li>
            <li className="flex items-start bg-blue-50 p-4 rounded-lg">
              <span className="bg-blue-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">3</span>
              <div>
                <strong className="block text-gray-900 mb-1">Botanical Calming Action</strong>
                <span className="text-gray-600 text-sm">Extracts like Passionflower promote natural relaxation without heavy sedation.</span>
              </div>
            </li>
          </ol>

          <div className="mt-8 text-center">
            <a
              href={OFFER_URL}
              id="btn-mid-check"
              onClick={() => trackEvent('cta_click', { cta_id: 'btn-mid-check' })}
              className="inline-block bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors uppercase text-sm"
            >
              Check Official Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Transparent Composition</h2>
          <p className="text-gray-600">What are you ingesting? Just 5 key ingredients of natural origin.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { title: "Vitamin B Complex", desc: "Essential for maintaining myelin sheath and signaling." },
              { title: "Magnesium", desc: "Fundamental for over 300 enzymatic reactions and muscle relaxation." },
              { title: "Alpha-Lipoic Acid", desc: "The 'universal antioxidant' that penetrates nerve tissues." },
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-brand-green">
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { title: "Prickly Pear", desc: "Rich in rare antioxidants that protect against cellular inflammation." },
              { title: "Passionflower", desc: "Traditionally used to calm nervous hyperactivity and anxiety." },
              { title: "Corydalis", desc: "Traditional Chinese herb known for its natural analgesic properties." },
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-blue-500">
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start text-sm text-yellow-800">
          <Info className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>All ingredients are primarily plant-based. Remember: if you have allergies, always consult your doctor before use.</p>
        </div>
      </div>
    </section>
  );
};

const StoryBlock = () => {
  return (
    <section id="story" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-brand-green opacity-10" />
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-brand-green" />
            Why I Reviewed Nerve Fresh
          </h3>
          <div className="prose text-gray-700 leading-relaxed text-lg">
            <p className="mb-4">
              Like many of you, I've spent hours researching nerve health supplements online, often feeling overwhelmed by the exaggerated claims and "miracle cures" that flood the market. I was initially skeptical when I came across Nerve Fresh.
            </p>
            <p className="mb-4">
              However, as I dug into the label, I noticed something different: it wasn't promising magic. Instead, it combines well-researched staples like B-vitamins and Magnesium with specific plant extracts known for their calming properties.
            </p>
            <p className="mb-4">
              It’s important to understand that nutritional support doesn't work overnight. But the logic behind feeding your nervous system the raw materials it needs to repair and function makes sense to me.
            </p>
            <p className="italic text-gray-500 text-base border-l-4 border-gray-200 pl-4">
              "While results will always vary from person to person, finding a formula that prioritizes natural ingredients without harsh fillers felt like a step in the right direction."
            </p>
            <p className="mt-6 font-bold text-gray-900">
              Here’s what else I found during my deep dive...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold mb-10 text-center">Real User Experiences</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <Quote className="w-8 h-8 text-blue-300 mb-4" />
            <p className="text-sm leading-relaxed mb-6">
              "I started using Nerve Fresh because it was recommended to me. After 2 months of using it I feel a lot better and I don't feel the pain and tingling as before. I take it 2 times a day and I love it!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm mr-3">GS</div>
              <div>
                <div className="font-bold text-sm">Gina Stein</div>
                <div className="text-xs text-blue-200">Fresno, CA</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <Quote className="w-8 h-8 text-blue-300 mb-4" />
            <p className="text-sm leading-relaxed mb-6">
              "I'm a musician... Since I started taking Nerve Fresh, I've noticed a significant improvement in my hand and finger dexterity, flexibility, and sensitivity. Now I can play my favorite musical instruments again without feeling limited."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm mr-3">JC</div>
              <div>
                <div className="font-bold text-sm">Jorge C.</div>
                <div className="text-xs text-blue-200">Tampa, FL</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <Quote className="w-8 h-8 text-blue-300 mb-4" />
            <p className="text-sm leading-relaxed mb-6">
              "After suffering from neuropathy for years... since I started taking Nerve Fresh, I've noticed a significant improvement in my leg strength and balance. Now I can enjoy long walks with my dog and stand for hours without feeling fatigued."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm mr-3">KT</div>
              <div>
                <div className="font-bold text-sm">Kathy T.</div>
                <div className="text-xs text-blue-200">Boston, MA</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-blue-200 mt-8 text-center italic opacity-70">
          * Results may vary from person to person. These are individual accounts and do not guarantee specific outcomes.
        </p>
      </div>
    </section>
  );
};

const ProsCons = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Pros & Cons: Our Verdict</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pros */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3"><Check className="w-5 h-5 text-green-600" /></div>
              Pros
            </h3>
            <ul className="space-y-4">
              {[
                "Plant-based formula without harsh artificial additives",
                "No prescription required",
                "Backed by a 180-day money-back guarantee",
                "Manufactured in the USA in a GMP-certified facility",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500">
            <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3"><X className="w-5 h-5 text-red-600" /></div>
              Cons
            </h3>
            <ul className="space-y-4">
              {[
                "Requires consistent use for best results (no magic pill)",
                "Results vary from person to person",
                "Limited stock due to high recent demand",
                "Sold exclusively through the official website",
                "Not recommended for pregnant women without medical advice"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={OFFER_URL}
            id="btn-verdict-check"
            onClick={() => trackEvent('cta_click', { cta_id: 'btn-verdict-check' })}
            className="inline-block bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all uppercase"
          >
            Check Official Availability
          </a>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Nerve Fresh vs. Alternatives</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-extrabold text-gray-900 w-1/4">Method</th>
                <th className="p-4 font-bold text-gray-700 w-1/4">Avg. Cost</th>
                <th className="p-4 font-bold text-gray-700 w-1/4">Convenience</th>
                <th className="p-4 font-bold text-gray-700 w-1/4">Risks / Effects</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50/50 border-b border-green-100">
                <td className="p-4 font-bold text-green-800 flex items-center">
                  <Leaf className="w-4 h-4 mr-2" /> Nerve Fresh
                </td>
                <td className="p-4 text-gray-700">Moderate</td>
                <td className="p-4 text-gray-700">High<br /><span className="text-xs text-gray-500">(Home use, simple capsule)</span></td>
                <td className="p-4 text-gray-700">
                  <span className="font-bold text-green-700">Low</span><br />
                  <span className="text-xs text-gray-500">Plant-based ingredients</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-900">OTC Painkillers</td>
                <td className="p-4 text-gray-700">Variable</td>
                <td className="p-4 text-gray-700">High</td>
                <td className="p-4 text-gray-700">
                  <span className="font-bold text-orange-600">Medium/High</span><br />
                  <span className="text-xs text-gray-500">Gastric risk & dependency</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-900">Clinical Therapies</td>
                <td className="p-4 text-gray-700">High</td>
                <td className="p-4 text-gray-700">Low<br /><span className="text-xs text-gray-500">(Requires travel)</span></td>
                <td className="p-4 text-gray-700">
                  <span className="font-bold text-blue-600">Low</span><br />
                  <span className="text-xs text-gray-500">Depends on professional</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center italic">
          * The supplement may be a complement for those seeking daily comfort, but does not replace medical advice or prescribed treatments.
        </p>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, id }: { question: string, answer: string, id: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) trackEvent('faq_toggle', { question_id: id, action: 'open' });
        }}
        className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-bold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-5 bg-white text-gray-600 leading-relaxed text-sm border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const questions = [
    { q: "What is Nerve Fresh exactly?", a: "It is an advanced nutritional supplement formulated to support peripheral nerve health specifically through a precise combination of vitamins, minerals, and botanical extracts." },
    { q: "How should I take it?", a: "The official recommendation is 2 capsules daily with water, preferably 20-30 minutes before a meal." },
    { q: "How long to see results?", a: "As it is a natural product, the action is gradual. Many users report initial benefits in 2-3 weeks, with more consistent results after 60-90 days of use." },
    { q: "Is there a guarantee?", a: "Yes. The manufacturer offers an unconditional 180-day guarantee. If you don't like it, they refund your money, no questions asked." },
    { q: "Do I need a prescription?", a: "No. Nerve Fresh is classified as a dietary supplement, not a medication. However, if you have pre-existing health conditions, consult your doctor." }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} id={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AvailabilityBox = () => {
  return (
    <section id="availability" className="py-20 bg-brand-green bg-opacity-5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Check Official Availability & Offers</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            To see today’s available packages, current bonuses, shipping options, and the full 180-day refund policy, please visit the official website directly.
          </p>

          <a
            href={OFFER_URL}
            id="btn-footer-check"
            onClick={() => trackEvent('cta_click', { cta_id: 'btn-footer-check' })}
            className="inline-flex items-center justify-center w-full md:w-auto bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-5 px-10 rounded-xl text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 uppercase tracking-wider"
          >
            CHECK OFFICIAL AVAILABILITY <ExternalLink className="w-5 h-5 ml-2" />
          </a>

          <div className="mt-6 flex flex-col items-center justify-center space-y-2">
            <p className="text-sm text-gray-500 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-green-600" />
              You’ll be redirected to the manufacturer’s secure website.
            </p>
            <p className="text-xs text-gray-400">
              *Availability is subject to change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-1 md:col-span-2">
          <div className="font-heading text-white font-bold text-xl mb-4">Health Journal Daily</div>
          <p className="mb-4">
            Our mission is to provide honest, evidence-based reviews to help you make better health decisions.
          </p>
          <p className="text-xs text-gray-600">
            &copy; 2026 Health Journal Daily. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Important Disclaimer</h4>
          <p className="text-xs leading-relaxed mb-4">
            <strong>Medical Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions you may have regarding a medical condition.
          </p>
          <p className="text-xs leading-relaxed">
            <strong>Affiliate Disclosure:</strong> We may earn a commission if you purchase through our link, at no extra cost to you. This helps support our research and editorial team.
          </p>
        </div>
      </div>
    </footer>
  );
};

const StickerCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden animation-slide-up">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Official Review</span>
          <span className="text-gray-900 font-bold text-sm">Check Stock Status</span>
        </div>
        <a
          href={OFFER_URL}
          id="cta_sticky_mobile"
          onClick={() => trackEvent('cta_click', { cta_id: 'cta_sticky_mobile' })}
          className="flex-1 bg-brand-green text-white font-bold py-3 rounded-lg text-center uppercase text-sm shadow-md"
        >
          View Official Details
        </a>
      </div>
    </div>
  );
}

// --- MAIN APP ---

const App = () => {
  useEffect(() => {
    trackEvent('page_view_lp', { page_name: 'nerve_fresh_review', lang: 'en-US', type: 'editorial' });
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-green-100 selection:text-green-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Mechanism />
        <Ingredients />
        <StoryBlock />
        <Testimonials />
        <ProsCons />
        <Comparison />
        <FAQ />
        <AvailabilityBox />
      </main>
      <Footer />
      <StickerCTA />
    </div>
  );
};

export default App;
