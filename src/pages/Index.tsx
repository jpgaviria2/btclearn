import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Mic, Wallet, Users, Globe, Shield, Zap, Server, Star, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // BTCPay form functionality
  useEffect(() => {
    const handleSliderChange = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      const root = target.closest('.btcpay-form') as HTMLFormElement;
      const el = root.querySelector('.btcpay-input-price') as HTMLInputElement;
      const price = parseInt(el.value);
      const min = parseInt(target.getAttribute('min') || '1');
      const max = parseInt(target.getAttribute('max') || '20');
      if (price < min) { 
        el.value = min.toString();
      } else if (price > max) {
        el.value = max.toString();
      } 
      const rangeInput = root.querySelector('.btcpay-input-range') as HTMLInputElement;
      rangeInput.value = el.value;
    };

    const handleSliderInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const root = target.closest('.btcpay-form') as HTMLFormElement;
      const priceInput = root.querySelector('.btcpay-input-price') as HTMLInputElement;
      priceInput.value = target.value;
    };

    const handlePriceInput = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      const root = target.closest('.btcpay-form') as HTMLFormElement;
      const price = parseInt(target.dataset.price || '1');
      if (isNaN(parseInt(target.value))) {
        target.value = price.toString();
      }
      const min = parseInt(target.getAttribute('min') || '1');
      const max = parseInt(target.getAttribute('max') || '20');
      if (parseInt(target.value) < min) {
        target.value = min.toString();
      } else if (parseInt(target.value) > max) { 
        target.value = max.toString();
      }
    };

    // Add event listeners
    document.querySelectorAll(".btcpay-form .btcpay-input-range").forEach((el) => {
      const element = el as HTMLInputElement;
      if (!element.dataset.initialized) {
        element.addEventListener('input', handleSliderInput);
        element.dataset.initialized = 'true';
      }
    });

    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach((el) => {
      const element = el as HTMLInputElement;
      if (!element.dataset.initialized) {
        element.addEventListener('change', handleSliderChange);
        element.addEventListener('input', handlePriceInput);
        element.dataset.initialized = 'true';
      }
    });

    // Cleanup function
    return () => {
      document.querySelectorAll(".btcpay-form .btcpay-input-range").forEach((el) => {
        const element = el as HTMLInputElement;
        element.removeEventListener('input', handleSliderInput);
        element.dataset.initialized = '';
      });

      document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach((el) => {
        const element = el as HTMLInputElement;
        element.removeEventListener('change', handleSliderChange);
        element.removeEventListener('input', handlePriceInput);
        element.dataset.initialized = '';
      });
    };
  }, []);

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
    }
  ];

  const diyTutorials = [
    {
      id: 'btcsessions',
      title: "BTC Sessions",
      description: "A YouTube channel offering practical Bitcoin tutorials and guides.",
      url: "https://www.youtube.com/c/BTCSessions",
      category: "Tutorials"
    },
    {
      id: 'andreas',
      title: "Andreas Antonopoulos",
      description: "Educational videos on Bitcoin and blockchain technology by a renowned expert.",
      url: "https://www.youtube.com/user/aantonop",
      category: "Tutorials"
    },
    {
      id: 'bitcoinorg',
      title: "Bitcoin.org Learning Resources",
      description: "Official Bitcoin resources for beginners to learn the basics.",
      url: "https://bitcoin.org/en/getting-started",
      category: "Tutorials"
    }
  ];

  const resources = [
    // Educational Resources
    { id: 1, title: "Bitcoin Wiki", description: "A detailed, community-maintained encyclopedia on Bitcoin's technical and practical aspects.", category: "Education", url: "https://en.bitcoin.it/wiki/Main_Page", icon: BookOpen },
    { id: 2, title: "Bitcoin Developer Documentation", description: "Official guides for developers working with Bitcoin's protocol.", category: "Education", url: "https://developer.bitcoin.org/", icon: BookOpen },
    { id: 3, title: "Bitcoin Optech", description: "Technical education for Bitcoin developers, including newsletters and workshops.", category: "Education", url: "https://bitcoinops.org/", icon: BookOpen },
    { id: 4, title: "Chaincode Labs", description: "Bitcoin-focused seminars and resources for coders and enthusiasts.", category: "Education", url: "https://chaincode.com/", icon: BookOpen },
    { id: 5, title: "Bitcoin Magazine", description: "Articles and guides on Bitcoin's history, technology, and adoption.", category: "Education", url: "https://bitcoinmagazine.com/", icon: BookOpen },
    { id: 6, title: "The Bitcoin Standard", description: "Saifedean Ammous' book exploring Bitcoin's economic significance.", category: "Education", url: "https://saifedean.com/thebitcoinstandard/", icon: BookOpen },
    { id: 7, title: "Programming Bitcoin", description: "Jimmy Song's resource for learning Bitcoin programming.", category: "Education", url: "https://programmingbitcoin.com/", icon: BookOpen },
    { id: 8, title: "Andreas M. Antonopoulos", description: "Videos and books by a prominent Bitcoin educator.", category: "Education", url: "https://aantonop.com/", icon: BookOpen },
    { id: 9, title: "Bitcoin Whitepaper", description: "Satoshi Nakamoto's foundational document.", category: "Education", url: "https://bitcoin.org/bitcoin.pdf", icon: BookOpen },
    { id: 10, title: "Bitcoin Core Documentation", description: "Official docs for Bitcoin Core, the primary Bitcoin software.", category: "Education", url: "https://bitcoincore.org/en/doc/", icon: BookOpen },

    // Podcasts
    { id: 11, title: "Citadel Dispatch", description: "Odell's podcast on Bitcoin privacy and sovereignty.", category: "Podcasts", url: "https://citadeldispatch.com/", icon: Mic },
    { id: 12, title: "The Bitcoin Knowledge Podcast", description: "Interviews with Bitcoin thought leaders.", category: "Podcasts", url: "https://www.bitcoin.kn/", icon: Mic },
    { id: 13, title: "Stephan Livera Podcast", description: "Deep dives into Bitcoin and Austrian economics.", category: "Podcasts", url: "https://stephanlivera.com/", icon: Mic },
    { id: 14, title: "Bitcoin Audible", description: "Guy Swann narrates Bitcoin essays and articles.", category: "Podcasts", url: "https://bitcoinaudible.com/", icon: Mic },
    { id: 15, title: "The Bitcoin Standard Podcast", description: "Saifedean Ammous discusses Bitcoin's economic impact.", category: "Podcasts", url: "https://saifedean.com/podcast/", icon: Mic },
    { id: 16, title: "The Progressive Bitcoiner", description: "Bitcoin's social and political dimensions.", category: "Podcasts", url: "https://progressivebitcoiner.com/", icon: Mic },
    { id: 17, title: "Bitcoin Rapid-Fire", description: "John Vallis hosts long-form Bitcoin talks.", category: "Podcasts", url: "https://bitcoinrapidfire.com/", icon: Mic },
    { id: 18, title: "The Bitcoin Matrix", description: "Exploring Bitcoin's cultural significance.", category: "Podcasts", url: "https://thebitcoinmatrix.com/", icon: Mic },
    { id: 19, title: "The Bitcoin Show", description: "Bitcoin news and interviews on YouTube.", category: "Podcasts", url: "https://www.youtube.com/c/thebitcoinshow", icon: Mic },
    { id: 20, title: "The Bitcoin Layer", description: "Bitcoin's role in global finance.", category: "Podcasts", url: "https://thebitcoinlayer.com/", icon: Mic },
    { id: 61, title: "TFTC", description: "Marty Bent's podcast covering Bitcoin and freedom technology.", category: "Podcasts", url: "https://tftc.io/", icon: Mic },
    { id: 62, title: "What Bitcoin Did", description: "Peter McCormack's podcast exploring Bitcoin and its implications.", category: "Podcasts", url: "https://www.whatbitcoindid.com/", icon: Mic },
    { id: 63, title: "The Jack Mallers Show", description: "Jack Mallers discusses Bitcoin adoption and Lightning Network.", category: "Podcasts", url: "https://www.youtube.com/@JackMallers", icon: Mic },

    // Wallets and Payment Services
    { id: 21, title: "COLDCARD User Guide", description: "Coinkite's guide for its secure hardware wallet.", category: "Wallets", url: "https://coldcard.com/docs/", icon: Wallet },
    { id: 22, title: "OPENDIME User Guide", description: "Instructions for Coinkite's Bitcoin 'stick' product.", category: "Wallets", url: "https://opendime.com/", icon: Wallet },
    { id: 23, title: "Bitcoin Wallet Comparison", description: "Reviews of Bitcoin wallet options.", category: "Wallets", url: "https://bitcoin.org/en/choose-your-wallet", icon: Wallet },
    { id: 24, title: "Bitcoin.org Wallet Guide", description: "Tips for selecting a secure Bitcoin wallet.", category: "Wallets", url: "https://bitcoin.org/en/secure-your-wallet", icon: Wallet },
    { id: 25, title: "Casa", description: "Multisig wallet service for Bitcoin security.", category: "Wallets", url: "https://keys.casa/", icon: Wallet },
    { id: 26, title: "Specter Wallet", description: "Open-source multisig wallet for advanced users.", category: "Wallets", url: "https://specter.solutions/", icon: Wallet },
    { id: 27, title: "Blue Wallet", description: "Mobile wallet with Lightning Network support.", category: "Wallets", url: "https://bluewallet.io/", icon: Wallet },
    { id: 28, title: "Wasabi Wallet", description: "Privacy-focused wallet with CoinJoin.", category: "Wallets", url: "https://wasabiwallet.io/", icon: Wallet },
    { id: 29, title: "Samourai Wallet", description: "Android wallet emphasizing privacy.", category: "Wallets", url: "https://samouraiwallet.com/", icon: Wallet },
    { id: 30, title: "Electrum", description: "Lightweight wallet with robust features.", category: "Wallets", url: "https://electrum.org/", icon: Wallet },
    { id: 31, title: "Strike", description: "Lightning-enabled Bitcoin wallet and payment platform.", category: "Wallets", url: "https://strike.me/", icon: Zap },

    // Merchant & Payment Solutions
    { id: 32, title: "BTCPay Server", description: "Self-hosted Bitcoin payment processor for merchants.", category: "Merchants", url: "https://btcpayserver.org/", icon: Zap },
    { id: 33, title: "OpenNode", description: "Bitcoin payment infrastructure for businesses.", category: "Merchants", url: "https://www.opennode.com/", icon: Zap },
    { id: 34, title: "CoinGate", description: "Bitcoin payment gateway for online merchants.", category: "Merchants", url: "https://coingate.com/", icon: Zap },
    { id: 35, title: "BitPay", description: "Bitcoin payment service provider for businesses.", category: "Merchants", url: "https://bitpay.com/", icon: Zap },

    // Node Management & Infrastructure
    { id: 36, title: "Zeus", description: "Mobile app for managing Lightning Network nodes.", category: "Nodes", url: "https://zeusln.app/", icon: Server },
    { id: 37, title: "Start9", description: "Personal server platform for running Bitcoin and Lightning nodes.", category: "Nodes", url: "https://start9.com/", icon: Server },
    { id: 38, title: "Umbrel", description: "Self-hosted cloud platform for Bitcoin and Lightning nodes.", category: "Nodes", url: "https://umbrel.com/", icon: Server },
    { id: 39, title: "myNode", description: "Easy-to-use Bitcoin and Lightning node solution.", category: "Nodes", url: "https://mynodebtc.com/", icon: Server },
    { id: 40, title: "Raspiblitz", description: "DIY Lightning Network node based on Raspberry Pi.", category: "Nodes", url: "https://raspiblitz.org/", icon: Server },

    // Community Resources
    { id: 41, title: "Mi Primer Bitcoin Diploma", description: "Details on Mi Primer Bitcoin's education program.", category: "Community", url: "https://www.miprimer.bitcoin/", icon: Users },
    { id: 42, title: "Rabbit Hole Recap Archives", description: "Odell and Marty Bent's podcast archive.", category: "Community", url: "https://rabbitholerecp.com/", icon: Users },
    { id: 43, title: "Coinkite Blog", description: "News and tips from Coinkite.", category: "Community", url: "https://blog.coinkite.com/", icon: Users },
    { id: 44, title: "Nakamoto Institute Research", description: "Bitcoin and cryptography papers.", category: "Community", url: "https://nakamotoinstitute.org/", icon: Users },
    { id: 45, title: "Odell's Newsletter", description: "Bitcoin privacy insights from Odell.", category: "Community", url: "https://odell.medium.com/", icon: Users },
    { id: 46, title: "Preston Pysh's We Study Billionaires", description: "Bitcoin investment discussions.", category: "Community", url: "https://www.theinvestorspodcast.com/bitcoin-fundamentals/", icon: Users },
    { id: 47, title: "Marty Bent's TFTC", description: "Bitcoin content from Marty Bent.", category: "Community", url: "https://tftc.io/", icon: Users },
    { id: 48, title: "Jack Mallers' Strike", description: "Bitcoin payment platform by Jack Mallers.", category: "Community", url: "https://strike.me/", icon: Users },
    { id: 49, title: "Bitcoin Policy Institute", description: "Policy research co-founded by Odell.", category: "Community", url: "https://www.bitcoinpolicy.org/", icon: Users },
    { id: 50, title: "Ten31", description: "Bitcoin VC firm co-founded by Marty Bent.", category: "Community", url: "https://ten31.vc/", icon: Users },

    // Additional Tools & Resources
    { id: 51, title: "Bitcoin Core", description: "Official site for Bitcoin Core software.", category: "Tools", url: "https://bitcoincore.org/", icon: Globe },
    { id: 52, title: "Bitcoin Stack Exchange", description: "Bitcoin Q&A community.", category: "Community", url: "https://bitcoin.stackexchange.com/", icon: Users },
    { id: 53, title: "BitcoinTalk", description: "Satoshi's original Bitcoin forum.", category: "Community", url: "https://bitcointalk.org/", icon: Users },
    { id: 54, title: "Bitcoin Reddit", description: "Active Bitcoin discussion subreddit.", category: "Community", url: "https://www.reddit.com/r/Bitcoin/", icon: Users },
    { id: 55, title: "Bitcoin Meetups", description: "Find local Bitcoin groups.", category: "Community", url: "https://bitcoin.meetup.com/", icon: Users },
    { id: 56, title: "Bitcoin Conferences", description: "Upcoming Bitcoin events.", category: "Community", url: "https://bitcoinmagazine.com/events", icon: Users },
    { id: 57, title: "Bitcoin Books", description: "Jameson Lopp's curated book list.", category: "Education", url: "https://www.lopp.net/bitcoin-information/books.html", icon: BookOpen },
    { id: 58, title: "Bitcoin Videos", description: "Educational Bitcoin video collection.", category: "Education", url: "https://www.lopp.net/bitcoin-information/videos.html", icon: BookOpen },
    { id: 59, title: "Bitcoin Privacy Guide", description: "Privacy best practices.", category: "Security", url: "https://bitcoiner.guide/privacy/", icon: Shield },
    { id: 60, title: "Bitcoin Security Guide", description: "Security tips for Bitcoin users.", category: "Security", url: "https://bitcoiner.guide/security/", icon: Shield }
  ];

  const categories = [
    { name: "Education", icon: BookOpen, color: "bg-orange-100 text-orange-700", count: resources.filter(r => r.category === "Education").length },
    { name: "Podcasts", icon: Mic, color: "bg-blue-100 text-blue-700", count: resources.filter(r => r.category === "Podcasts").length },
    { name: "Wallets", icon: Wallet, color: "bg-green-100 text-green-700", count: resources.filter(r => r.category === "Wallets").length },
    { name: "Merchants", icon: Zap, color: "bg-yellow-100 text-yellow-700", count: resources.filter(r => r.category === "Merchants").length },
    { name: "Nodes", icon: Server, color: "bg-purple-100 text-purple-700", count: resources.filter(r => r.category === "Nodes").length },
    { name: "Community", icon: Users, color: "bg-pink-100 text-pink-700", count: resources.filter(r => r.category === "Community").length },
    { name: "Tools", icon: Globe, color: "bg-indigo-100 text-indigo-700", count: resources.filter(r => r.category === "Tools").length },
    { name: "Security", icon: Shield, color: "bg-red-100 text-red-700", count: resources.filter(r => r.category === "Security").length },
    { name: "Tutorials", icon: BookOpen, color: "bg-teal-100 text-teal-700", count: diyTutorials.length }
  ];

  const allResources = [...resources, ...diyTutorials];
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getIconForCategory = (category: string) => {
    const categoryData = categories.find(c => c.name === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getColorForCategory = (category: string) => {
    const categoryData = categories.find(c => c.name === category);
    return categoryData ? categoryData.color : "bg-gray-100 text-gray-700";
  };

  const handleCategoryFilter = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              BTC<span className="text-orange-500">Learn</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your comprehensive hub for Bitcoin-only resources, education, and tools
            </p>
          </div>
        </div>
      </header>

      {/* Personal Recommended Resources Section */}
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
                <a 
                  href={recommendation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  Visit Resource →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Bitcoin Resources
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Curated collection of 60+ Bitcoin-only resources covering education, podcasts, wallets, 
            merchant solutions, node management, and community insights from leading Bitcoin educators and developers.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-orange-200 focus:border-orange-400 focus:ring-orange-400"
            />
          </div>

          {/* Clear filters button */}
          {(selectedCategory || searchTerm) && (
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory(null);
                setSearchTerm('');
              }}
              className="mb-6"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <Card 
                key={category.name} 
                className={`text-center hover:shadow-lg transition-all cursor-pointer ${
                  isSelected ? 'ring-2 ring-orange-500 bg-orange-50' : ''
                }`}
                onClick={() => handleCategoryFilter(category.name)}
              >
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <Badge variant="secondary" className={category.color}>
                    {category.count} resources
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const IconComponent = getIconForCategory(resource.category);
            return (
              <Card key={resource.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-orange-500" />
                      <Badge variant="secondary" className={getColorForCategory(resource.category)}>
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-orange-600 transition-colors"
                    >
                      {resource.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {resource.description}
                  </CardDescription>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                  >
                    Visit Resource →
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No resources found matching your search or filter.</p>
          </div>
        )}
      </section>

      {/* DIY Tutorials Section */}
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

      {/* Support BTC Learn Section */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-100 border-t border-b border-orange-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-orange-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Support BTC Learn</h2>
              <Heart className="h-6 w-6 text-orange-500 ml-2" />
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Help us maintain and expand this free Bitcoin education resource. Your support enables us to keep adding valuable content and improving the platform for the entire Bitcoin community.
            </p>
          </div>
          
          {/* BTCPay Server Embedded Form */}
          <div className="flex justify-center">
            <div>
              <style dangerouslySetInnerHTML={{
                __html: `
                  .btcpay-form { display: inline-flex; align-items: center; justify-content: center; }
                  .btcpay-form--inline { flex-direction: row; }
                  .btcpay-form--block { flex-direction: column; }
                  .btcpay-form--inline .submit { margin-left: 15px; }
                  .btcpay-form--block select { margin-bottom: 10px; }
                  .btcpay-form .btcpay-custom-container{ text-align: center; }
                  .btcpay-custom { display: flex; align-items: center; justify-content: center; }
                  .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; }
                  .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; }
                  .btcpay-form select:hover { border-color: #ccc; }
                  .btcpay-form option { color: #000; background: rgba(0,0,0,.1); }
                  .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }
                  .btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
                  input[type=range].btcpay-input-range { -webkit-appearance:none; width:100%; background: transparent; }
                  input[type=range].btcpay-input-range:focus { outline:0; }
                  input[type=range].btcpay-input-range::-webkit-slider-runnable-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; }
                  input[type=range].btcpay-input-range::-webkit-slider-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; -webkit-appearance:none; margin-top:-9.45px }
                  input[type=range].btcpay-input-range:focus::-webkit-slider-runnable-track { background:#fff; }
                  input[type=range].btcpay-input-range::-moz-range-track { width:100%; height:3.1px; cursor:pointer; box-shadow:0 0 1.7px #020,0 0 0 #003c00; background:#f3f3f3; border-radius:1px; border:0; }
                  input[type=range].btcpay-input-range::-moz-range-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; }
                  input[type=range].btcpay-input-range::-ms-track { width:100%; height:3.1px; cursor:pointer; background:0 0; border-color:transparent; color:transparent; }
                  input[type=range].btcpay-input-range::-ms-fill-lower { background:#e6e6e6; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; }
                  input[type=range].btcpay-input-range::-ms-fill-upper { background:#f3f3f3; border:0; border-radius:2px; box-shadow:0 0 1.7px #020,0 0 0 #003c00; }
                  input[type=range].btcpay-input-range::-ms-thumb { box-shadow:none; border:2.5px solid #cedc21; height:22px; width:22px; border-radius:50%; background:#0f3723; cursor:pointer; height:3.1px; }
                  input[type=range].btcpay-input-range:focus::-ms-fill-lower { background:#f3f3f3; }
                  input[type=range].btcpay-input-range:focus::-ms-fill-upper { background:#fff; }
                `
              }} />
              
              <form method="POST" action="https://merchant.btclearn.org/api/v1/invoices" className="btcpay-form btcpay-form--block">
                <input type="hidden" name="storeId" value="3Vh6xiQCc6yvKJc1wYriC14uPQH3d92xKzE6arHD1UJM" />
                <div className="btcpay-custom-container">
                  <input 
                    className="btcpay-input-price" 
                    type="number" 
                    name="price" 
                    min="1" 
                    max="20" 
                    step="1" 
                    defaultValue="1" 
                    data-price="1" 
                    style={{width: '209px'}} 
                  />
                  <select name="currency">
                    <option value="SATS" selected>SATS</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="BTC">BTC</option>
                  </select>
                  <input 
                    type="range" 
                    className="btcpay-input-range" 
                    min="1" 
                    max="20" 
                    step="1" 
                    defaultValue="1" 
                    style={{width: '209px', marginBottom: '15px'}} 
                  />
                </div>
                <input 
                  type="image" 
                  className="submit" 
                  name="submit" 
                  src="https://merchant.btclearn.org/img/paybutton/pay.svg" 
                  style={{width: '209px'}} 
                  alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
                />
              </form>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Powered by BTCPay Server - Self-hosted Bitcoin payments
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Built with ❤️ for the Bitcoin community
            </p>
            <p className="text-sm text-gray-500 mb-2">
              All resources are Bitcoin-only and focused on education, privacy, and sovereignty
            </p>
            <p className="text-sm text-gray-500">
              Open source project under MIT License - 
              <a 
                href="https://github.com/jpgaviria2/btclearn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 ml-1"
              >
                Contribute on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
