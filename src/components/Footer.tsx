import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { ActsLogo } from './ActsLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAndroidApp: () => void;
  onOpenResources: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenAndroidApp,
  onOpenResources,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1d6fa5] text-white overflow-hidden text-sm">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-black/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Logo Card Section (Exactly like uploaded Image 2) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-lg inline-block border border-blue-200">
              <ActsLogo variant="card" size="md" />
            </div>

            <p className="text-blue-100 text-xs leading-relaxed max-w-sm">
              Apogee Consulting &amp; Training Services LLP (ACTS). Dedicated to educating, empowering, and transforming student capabilities into tier-1 corporate employment.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>ISO 9001:2015 Certified | Government of India Startup Recognized</span>
            </div>
          </div>

          {/* Column 1: Other Pages (Exact match to Image 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight border-b border-blue-400/40 pb-2">
              Other Pages
            </h4>
            <ul className="space-y-2 text-xs text-blue-100 font-medium">
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('ACTS Privacy Policy: Trainee records and assessment scores are protected under ISO 27001 data guidelines.');
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('ACTS Privacy Policy: Student information is strictly confidential and shared only with verified recruiting partners.');
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResources}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Help and Support
                </button>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Services (Exact match to Image 2) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight border-b border-blue-400/40 pb-2">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs text-blue-100 font-medium">
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Placement Partner (Campuses &amp; MNCs)
                </button>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors">
                  Our Courses &amp; Day-Wise Sprints
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAndroidApp}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Our Application (Jobskul Android App)</span>
                  <ExternalLink className="w-3 h-3 text-amber-300" />
                </button>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors">
                  Placement Readiness Diagnostic Tool
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-amber-300 transition-colors">
                  Speed Math by World Record Holder
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (Exact match to Image 2) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-tight border-b border-blue-400/40 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Office No. 619 (6th Floor),
                  <br />
                  Esplanade One ,
                  <br />
                  Bhubaneswar-751010
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href="mailto:connect@jobskul.com"
                  className="hover:text-amber-300 transition-colors underline"
                >
                  connect@jobskul.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <div className="font-mono text-white font-semibold">
                  7008190970 / 9668144556
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href="https://jobskul.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors underline font-medium"
                >
                  https://jobskul.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-blue-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
            &copy; {new Date().getFullYear()} Apogee Consulting &amp; Training Services LLP (ACTS). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Empowering Engineering Institutions</span>
            <span>·</span>
            <span>Spardha Career Institute</span>
            <span>·</span>
            <span>Jobskul Initiative</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button (purple with white arrow up like in Image 2) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-lg bg-purple-700 hover:bg-purple-600 text-white shadow-xl shadow-purple-900/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
