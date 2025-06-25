
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DIYTutorials = () => {
  const diyTutorials = [
    {
      id: 'btcsessions',
      title: "BTC Sessions",
      description: "A YouTube channel offering practical Bitcoin tutorials and guides.",
      url: "https://www.youtube.com/c/BTCSessions",
    },
    {
      id: 'andreas',
      title: "Andreas Antonopoulos",
      description: "Educational videos on Bitcoin and blockchain technology by a renowned expert.",
      url: "https://www.youtube.com/user/aantonop",
    },
    {
      id: 'bitcoinorg',
      title: "Bitcoin.org Learning Resources",
      description: "Official Bitcoin resources for beginners to learn the basics.",
      url: "https://bitcoin.org/en/getting-started",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white/50 rounded-lg mx-4 my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">DIY Tutorials</h2>
        <p className="text-gray-600">Learn Bitcoin through practical tutorials and educational content</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diyTutorials.map((tutorial) => (
          <Card key={tutorial.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-orange-500" />
                <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                  Tutorial
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">
                <a 
                  href={tutorial.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  {tutorial.title}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-600 mb-4">
                {tutorial.description}
              </CardDescription>
              <a 
                href={tutorial.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
              >
                Watch Tutorials →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DIYTutorials;
