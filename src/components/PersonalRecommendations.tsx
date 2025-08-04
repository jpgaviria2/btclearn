
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PersonalRecommendations = () => {
  const topRecommendations = [
    { 
      id: 'mfb', 
      title: "My First Bitcoin", 
      description: "Global Bitcoin education initiative empowering communities worldwide with practical Bitcoin knowledge.",
      url: "https://myfirstbitcoin.io",
      featured: true
    },
    { 
      id: 'bb', 
      title: "Bull Bitcoin", 
      description: "Canadian Bitcoin exchange and education platform focused on Bitcoin-only services.",
      url: "https://bullbitcoin.com",
      featured: true
    },
    { 
      id: 'nodeacademy', 
      title: "Node Academy", 
      description: "Comprehensive Bitcoin education platform covering technical and practical aspects.",
      url: "https://nodeacademy.org",
      featured: true
    },
    { 
      id: 'btcpayserver', 
      title: "BTCPay Server", 
      description: "Self-hosted Bitcoin payment processor for merchants and individuals.",
      url: "https://btcpayserver.org",
      featured: true
    },
    { 
      id: 'zeus', 
      title: "Zeus", 
      description: "Mobile app for managing Lightning Network nodes with advanced features.",
      url: "https://zeusln.app",
      featured: true
    },
    { 
      id: 'rabbithole', 
      title: "Rabbit Hole Recap Archives", 
      description: "Odell and Marty Bent's podcast archive with deep Bitcoin discussions.",
      url: "https://rhr.tv/stream",
      featured: true
    },
    { 
      id: 'jackmallers', 
      title: "The Jack Mallers Show", 
      description: "Jack Mallers discusses Bitcoin adoption and Lightning Network developments.",
      url: "https://www.youtube.com/@thejackmallersshow",
      featured: true
    },
    { 
      id: 'prestonpysh', 
      title: "We Study Billionaires Bitcoin Show", 
      description: "Preston Pysh's Bitcoin investment discussions and analysis.",
      url: "https://www.theinvestorspodcast.com/bitcoin-fundamentals/",
      featured: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Star className="h-6 w-6 text-orange-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Personal Recommended Resources</h2>
          <Star className="h-6 w-6 text-orange-500 ml-2" />
        </div>
        <p className="text-gray-600 mb-6">Our personally recommended Bitcoin resources to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {topRecommendations.map((recommendation) => (
          <Card key={recommendation.id} className="border-2 border-orange-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-amber-50">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-orange-500" />
                <Badge className="bg-orange-500 text-white">Featured</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">
                <a 
                  href={recommendation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  {recommendation.title}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-700 mb-4">
                {recommendation.description}
              </CardDescription>
              <div className="space-y-3">
                <a 
                  href={recommendation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  Visit Resource →
                </a>
                {recommendation.id === 'btcpayserver' && (
                  <div>
                    <a 
                      href="https://lnbucks.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      Try BTCPay for free →
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PersonalRecommendations;
