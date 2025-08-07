
import React from 'react';
import Header from '@/components/Header';
import PersonalRecommendations from '@/components/PersonalRecommendations';
import ResourcesSection from '@/components/ResourcesSection';
import DIYTutorials from '@/components/DIYTutorials';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50" style={{ backgroundColor: '#fef3c7' }}>
        <Header />
        <main role="main">
          <section id="recommendations" aria-labelledby="recommendations-heading">
            <PersonalRecommendations />
          </section>
          <section id="resources" aria-labelledby="resources-heading">
            <ResourcesSection />
          </section>
          <section id="tutorials" aria-labelledby="tutorials-heading">
            <DIYTutorials />
          </section>
          <section id="support" aria-labelledby="support-heading">
            <SupportSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
