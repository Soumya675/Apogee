import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  LogIn,
  ShoppingCart,
  Smartphone,
  LogOut,
  UserCheck,
  BookOpen,
  Trophy,
  FileText,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { ActsLogo } from './ActsLogo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenLogin: () => void;
  onOpenTestSeries: () => void;
  onOpenResources: () => void;
  onOpenAndroidApp: () => void;
  onOpenCart: () => void;
  cartCount: number;
  loggedInUser: string | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenLogin,
  onOpenTestSeries,
  onOpenResources,
  onOpenAndroidApp,
  onOpenCart,
  cartCount,
  loggedInUser,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone: Official ACTS Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <ActsLogo variant="light" size="sm" />
        </a>

        {/* Center Zone: Exact items matching uploaded Image 1 with academic clarity */}
        {/* Home | Test Series | Courses v | Resources v | Partners | More v */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-700">
          <a
            href="#"
            className="hover:text-blue-700 transition-colors py-1 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full" />
          </a>

          {/* Test Series */}
          <button
            onClick={onOpenTestSeries}
            className="hover:text-blue-700 transition-colors py-1 relative group flex items-center gap-1.5 cursor-pointer"
          >
            <span>Test Series</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          </button>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesDropdown(true)}
            onMouseLeave={() => setCoursesDropdown(false)}
          >
            <button
              onClick={() => {
                const el = document.getElementById('programs');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-700 transition-colors py-1 flex items-center gap-1 cursor-pointer"
            >
              <span>Courses</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {coursesDropdown && (
              <div className="absolute top-full left-0 w-72 pt-2 animate-in fade-in duration-150">
                <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-xl space-y-1">
                  <a
                    href="#programs"
                    onClick={() => setCoursesDropdown(false)}
                    className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs">Elite Campus CRT Bootcamp</div>
                    <div className="text-[11px] text-slate-500">Quantitative, Verbal &amp; DSA Coding</div>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setCoursesDropdown(false)}
                    className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs">Full-Stack Cloud Architecture</div>
                    <div className="text-[11px] text-slate-500">React, Node, Spring Boot &amp; AWS</div>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setCoursesDropdown(false)}
                    className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs">AI, ML &amp; Data Intelligence</div>
                    <div className="text-[11px] text-slate-500">Applied Python, ML &amp; Generative AI</div>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setCoursesDropdown(false)}
                    className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs">Cloud DevOps &amp; Cyber Defense</div>
                    <div className="text-[11px] text-slate-500">CI/CD, Kubernetes &amp; Pen-Testing</div>
                  </a>
                  <a
                    href="#programs"
                    onClick={() => setCoursesDropdown(false)}
                    className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs">Spardha Banking &amp; Govt Wing</div>
                    <div className="text-[11px] text-slate-500">IBPS PO, RRB Officer &amp; SSC CGL</div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesDropdown(true)}
            onMouseLeave={() => setResourcesDropdown(false)}
          >
            <button
              onClick={onOpenResources}
              className="hover:text-blue-700 transition-colors py-1 flex items-center gap-1 cursor-pointer"
            >
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {resourcesDropdown && (
              <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in duration-150">
                <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-xl space-y-1">
                  <button
                    onClick={() => {
                      setResourcesDropdown(false);
                      onOpenResources();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      Company Question Banks
                    </div>
                    <div className="text-[11px] text-slate-500">TCS, Infosys, Cognizant, Wipro</div>
                  </button>
                  <button
                    onClick={() => {
                      setResourcesDropdown(false);
                      onOpenResources();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      Speed Math Cheat Sheet
                    </div>
                    <div className="text-[11px] text-slate-500">Authored by World Record Holder</div>
                  </button>
                  <button
                    onClick={() => {
                      setResourcesDropdown(false);
                      onOpenResources();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors"
                  >
                    <div className="text-slate-900 font-bold text-xs flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                      Top 200 Technical Questions
                    </div>
                    <div className="text-[11px] text-slate-500">OOPs, DBMS, OS &amp; Networks</div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Partners */}
          <button
            onClick={onOpenBooking}
            className="hover:text-blue-700 transition-colors py-1 cursor-pointer"
          >
            Partners
          </button>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreDropdown(true)}
            onMouseLeave={() => setMoreDropdown(false)}
          >
            <button className="hover:text-blue-700 transition-colors py-1 flex items-center gap-1 cursor-pointer">
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {moreDropdown && (
              <div className="absolute top-full left-0 w-52 pt-2 animate-in fade-in duration-150">
                <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-xl space-y-1">
                  <a
                    href="#capabilities"
                    onClick={() => setMoreDropdown(false)}
                    className="block p-2 rounded-lg hover:bg-blue-50 text-xs text-slate-800 font-medium"
                  >
                    Why Choose ACTS
                  </a>
                  <a
                    href="#calculator"
                    onClick={() => setMoreDropdown(false)}
                    className="block p-2 rounded-lg hover:bg-blue-50 text-xs text-slate-800 font-medium"
                  >
                    Placement Diagnostic Tool
                  </a>
                  <a
                    href="#mentors"
                    onClick={() => setMoreDropdown(false)}
                    className="block p-2 rounded-lg hover:bg-blue-50 text-xs text-slate-800 font-medium"
                  >
                    Faculty &amp; Leadership
                  </a>
                  <a
                    href="#placements"
                    onClick={() => setMoreDropdown(false)}
                    className="block p-2 rounded-lg hover:bg-blue-50 text-xs text-slate-800 font-medium"
                  >
                    Graduate Placements
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Zone (From Image 1): [->] Login | Cart [0] | Android App Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Login button matching Image 1: [->] Login with clean blue border */}
          {!loggedInUser ? (
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-600 rounded-lg transition-all cursor-pointer shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5 text-blue-700" />
              <span>Login</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-50 border border-blue-200 rounded-lg text-blue-800 font-medium">
              <UserCheck className="w-3.5 h-3.5 text-blue-700" />
              <span className="truncate max-w-[120px] font-bold">{loggedInUser}</span>
              <button
                onClick={onLogout}
                className="text-slate-400 hover:text-rose-600 transition-colors ml-1"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Cart with count badge (matching Image 1) */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-white bg-[#006fff] hover:bg-blue-700 rounded-lg transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
            title="Learning Cart"
          >
            <ShoppingCart className="w-4 h-4 text-white" />
            <span className="text-xs font-mono font-bold">{cartCount}</span>
          </button>

          {/* Android App icon (matching Image 1) */}
          <button
            onClick={onOpenAndroidApp}
            className="p-2 text-white bg-[#006fff] hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-sm"
            title="Download Android App"
          >
            <Smartphone className="w-4 h-4" />
          </button>

          {/* Institutional Partner Action */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all rounded-lg shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Partner With ACTS</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700 transition-colors"
            >
              Home
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestSeries();
              }}
              className="py-1 text-left hover:text-blue-700 transition-colors flex items-center justify-between"
            >
              <span>Test Series &amp; Live Drills</span>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-bold">
                Active
              </span>
            </button>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700 transition-colors"
            >
              Courses &amp; Placement Tracks
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResources();
              }}
              className="py-1 text-left hover:text-blue-700 transition-colors"
            >
              Resources &amp; Placement Papers
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-1 text-left hover:text-blue-700 transition-colors"
            >
              Partners (Colleges &amp; Corporate)
            </button>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700 transition-colors"
            >
              Placement Diagnostic Tool
            </a>
            <a
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700 transition-colors"
            >
              Faculty &amp; Leadership
            </a>
            <a
              href="#placements"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-700 transition-colors"
            >
              Graduate Outcomes
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            {!loggedInUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-2.5 px-4 text-center font-semibold text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-4 h-4 text-blue-700" />
                <span>Student / TPO Portal Login</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-4 text-xs text-rose-600 bg-rose-50 rounded-lg font-medium"
              >
                Sign Out ({loggedInUser})
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAndroidApp();
              }}
              className="w-full py-2.5 px-4 text-center font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Android Mobile App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
