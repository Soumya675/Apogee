/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterMarquee } from './components/RecruiterMarquee';
import { WhyActsBento } from './components/WhyActsBento';
import { ProgramExplorer } from './components/ProgramExplorer';
import { PlacementCalculator } from './components/PlacementCalculator';
import { MentorsSection } from './components/MentorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CampusBookingModal } from './components/CampusBookingModal';
import { LoginModal } from './components/LoginModal';
import { TestSeriesModal } from './components/TestSeriesModal';
import { ResourcesModal } from './components/ResourcesModal';
import { AndroidAppModal } from './components/AndroidAppModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isTestSeriesOpen, setIsTestSeriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAndroidAppOpen, setIsAndroidAppOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Prefilled program for booking
  const [prefilledProgram, setPrefilledProgram] = useState<string>('');

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'ts-tcs-nqt',
      name: 'TCS NQT & Digital National Mock Series 2026',
      price: 499,
      type: 'Test Series',
    },
  ]);

  // Auth state
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleOpenBooking = (programName?: string) => {
    if (programName) {
      setPrefilledProgram(programName);
    }
    setIsBookingOpen(true);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleLoginSuccess = (name: string) => {
    setLoggedInUser(name);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header Navigation matching exact elements from Image 1 */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenTestSeries={() => setIsTestSeriesOpen(true)}
        onOpenResources={() => setIsResourcesOpen(true)}
        onOpenAndroidApp={() => setIsAndroidAppOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.length}
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {/* Dynamic Motion Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePrograms={scrollToPrograms}
        />

        {/* Corporate Recruiter Marquee */}
        <RecruiterMarquee />

        {/* Why Choose ACTS - Asymmetric Interactive Bento Grid */}
        <WhyActsBento />

        {/* Programs Explorer with Day-Wise Curriculum Drawer */}
        <ProgramExplorer
          onSelectProgramForBooking={(progName) => handleOpenBooking(progName)}
        />

        {/* Interactive Placement Readiness & CTC Calculator */}
        <PlacementCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Faculty & Leadership Spotlight */}
        <MentorsSection />

        {/* Student Testimonials & Success Stories */}
        <TestimonialsSection />
      </main>

      {/* Corporate Blue Footer matching exact elements from Image 2 */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAndroidApp={() => setIsAndroidAppOpen(true)}
        onOpenResources={() => setIsResourcesOpen(true)}
      />

      {/* Modals & Drawers */}
      <CampusBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={prefilledProgram}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <TestSeriesModal
        isOpen={isTestSeriesOpen}
        onClose={() => setIsTestSeriesOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <ResourcesModal
        isOpen={isResourcesOpen}
        onClose={() => setIsResourcesOpen(false)}
      />

      <AndroidAppModal
        isOpen={isAndroidAppOpen}
        onClose={() => setIsAndroidAppOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
