
import React from 'react';
import Header from '@/components/Header';
import PersonalRecommendations from '@/components/PersonalRecommendations';
import ResourcesSection from '@/components/ResourcesSection';
import DIYTutorials from '@/components/DIYTutorials';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50" style={{ backgroundColor: '#fef3c7' }}>
      <Header />
      <PersonalRecommendations />
      <ResourcesSection />
      <DIYTutorials />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
