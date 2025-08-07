import React from 'react';
import { Helmet } from 'react-helmet-async';

const PerformanceOptimizer: React.FC = () => {
  return (
    <Helmet>
      {/* Preload critical resources */}
      <link rel="preload" href="/src/index.css" as="style" />
      <link rel="preload" href="/src/main.tsx" as="script" />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Resource hints for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Performance monitoring script */}
      <script>
        {`
          // Monitor Core Web Vitals
          if ('PerformanceObserver' in window) {
            // Largest Contentful Paint (LCP)
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                  console.log('LCP:', entry.startTime);
                  // Send to analytics
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      'event_category': 'Web Vitals',
                      'event_label': 'LCP',
                      'value': Math.round(entry.startTime)
                    });
                  }
                }
              }
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID)
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (entry.entryType === 'first-input') {
                  console.log('FID:', entry.processingStart - entry.startTime);
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      'event_category': 'Web Vitals',
                      'event_label': 'FID',
                      'value': Math.round(entry.processingStart - entry.startTime)
                    });
                  }
                }
              }
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift (CLS)
            let clsValue = 0;
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                  clsValue += entry.value;
                  console.log('CLS:', clsValue);
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'web_vitals', {
                      'event_category': 'Web Vitals',
                      'event_label': 'CLS',
                      'value': Math.round(clsValue * 1000) / 1000
                    });
                  }
                }
              }
            }).observe({ entryTypes: ['layout-shift'] });
          }

          // Monitor page load performance
          window.addEventListener('load', function() {
            setTimeout(function() {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData && typeof gtag !== 'undefined') {
                gtag('event', 'page_load_performance', {
                  'event_category': 'Performance',
                  'event_label': 'Page Load',
                  'value': Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                });
              }
            }, 0);
          });
        `}
      </script>
    </Helmet>
  );
};

export default PerformanceOptimizer;