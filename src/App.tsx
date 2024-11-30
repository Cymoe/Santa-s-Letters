import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PricingCard } from './components/PricingCard';
import { Testimonials } from './components/Testimonials';
import { TallyForm } from './components/TallyForm';
import { OrderTracking } from './components/OrderTracking';
import { AboutUs } from './components/AboutUs';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { NiceListPage } from './components/certificates/NiceListPage';
import { ScrollToTop } from './components/common/ScrollToTop';
import { CookieConsent } from './components/common/CookieConsent';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Snowfall } from './components/Snowfall';
import { ThankYou } from './components/ThankYou';

function HomePage() {
  return (
    <div className="relative">
      <Snowfall />
      <main>
        <div className="frost-border">
          <UrgencyBanner />
          <Hero />
        </div>
        <div className="ice-corners">
          <Features />
        </div>
        <div className="frost-border">
          <PricingCard />
        </div>
        <div className="ice-corners">
          <Testimonials />
        </div>
        <div className="frost-border">
          <TallyForm id="order" />
        </div>
        <div className="ice-corners">
          <OrderTracking />
        </div>
        <div className="frost-border">
          <AboutUs id="about" />
        </div>
        <div className="ice-corners">
          <FAQ id="faq" />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-12">
        <Snowfall />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={
            <div className="w-full max-w-4xl mx-auto px-4">
              <ThankYou />
            </div>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/nice-list-certificate" element={<NiceListPage />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}

export default App;