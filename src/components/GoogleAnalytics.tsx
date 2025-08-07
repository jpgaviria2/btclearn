import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX' // Replace with actual GA4 measurement ID
}) => {
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'bitcoin_education',
              'custom_parameter_2': 'cryptocurrency_resources'
            }
          });
        `}
      </script>
      
      {/* Google Search Console verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      
      {/* Additional SEO tracking */}
      <script>
        {`
          // Track outbound links
          document.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
              gtag('event', 'click_external_link', {
                'event_category': 'engagement',
                'event_label': e.target.href,
                'link_url': e.target.href
              });
            }
          });
          
          // Track scroll depth
          let maxScroll = 0;
          window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
              maxScroll = scrollPercent;
              if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                gtag('event', 'scroll_depth', {
                  'event_category': 'engagement',
                  'event_label': maxScroll + '%',
                  'value': maxScroll
                });
              }
            }
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;