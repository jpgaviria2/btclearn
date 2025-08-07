import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "BTCLearn - Bitcoin-Only Resources & Education Hub | Learn Bitcoin",
  description = "Comprehensive hub for Bitcoin-only resources, education, podcasts, wallets, and tools. Curated collection of 50+ Bitcoin resources from leading educators and developers. Start your Bitcoin journey today.",
  keywords = "Bitcoin, BTC, Bitcoin education, Bitcoin resources, Bitcoin wallets, Bitcoin podcasts, Bitcoin security, cryptocurrency, digital currency, Bitcoin learning, Bitcoin tutorials, Bitcoin guides, Bitcoin privacy, Bitcoin sovereignty, Bitcoin-only, cryptocurrency education",
  canonical = "https://btclearn.org/",
  ogImage = "https://btclearn.org/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "mainEntity": {
      "@type": "WebSite",
      "name": "BTCLearn",
      "url": "https://btclearn.org/"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BTCLearn" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@btclearn" />
      <meta name="twitter:creator" content="@btclearn" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;