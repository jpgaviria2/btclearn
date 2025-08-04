
import { BookOpen, Mic, Wallet, Users, Globe, Shield, Zap, Server } from 'lucide-react';

export const resourcesData = {
  resources: [
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
    { id: 17, title: "Bitcoin Rapid-Fire", description: "John Vallis hosts long-form Bitcoin talks.", category: "Podcasts", url: "https://www.youtube.com/c/JohnVallisBitcoinRapidFire", icon: Mic },
    { id: 18, title: "The Bitcoin Matrix", description: "Exploring Bitcoin's cultural significance.", category: "Podcasts", url: "https://thebitcoinmatrix.com/", icon: Mic },
    { id: 19, title: "The Bitcoin Show", description: "THE Bitcoin Podcast with Walker - news, education, interviews, and commentary.", category: "Podcasts", url: "https://bitcoinpodcast.net/", icon: Mic },
    { id: 20, title: "The Bitcoin Layer", description: "Bitcoin's role in global finance.", category: "Podcasts", url: "https://thebitcoinlayer.com/", icon: Mic },
    { id: 61, title: "TFTC", description: "Marty Bent's podcast covering Bitcoin and freedom technology.", category: "Podcasts", url: "https://tftc.io/", icon: Mic },
    { id: 62, title: "What Bitcoin Did", description: "Peter McCormack's podcast exploring Bitcoin and its implications.", category: "Podcasts", url: "https://www.whatbitcoindid.com/", icon: Mic },


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
    { id: 41, title: "Mi Primer Bitcoin Diploma", description: "Open source Bitcoin education platform with the world's first Bitcoin Diploma program.", category: "Community", url: "https://myfirstbitcoin.io/", icon: Users },

    { id: 42, title: "Coinkite Blog", description: "News and tips from Coinkite.", category: "Community", url: "https://blog.coinkite.com/", icon: Users },
    { id: 43, title: "Nakamoto Institute Research", description: "Bitcoin and cryptography papers.", category: "Community", url: "https://nakamotoinstitute.org/", icon: Users },
    { id: 44, title: "Odell's Newsletter", description: "Bitcoin privacy insights from Odell.", category: "Community", url: "https://odell.medium.com/", icon: Users },
    { id: 45, title: "Preston Pysh's We Study Billionaires", description: "Bitcoin investment discussions.", category: "Community", url: "https://www.theinvestorspodcast.com/bitcoin-fundamentals/", icon: Users },
    { id: 46, title: "Marty Bent's TFTC", description: "Bitcoin content from Marty Bent.", category: "Community", url: "https://tftc.io/", icon: Users },
    { id: 47, title: "Jack Mallers' Strike", description: "Bitcoin payment platform by Jack Mallers.", category: "Community", url: "https://strike.me/", icon: Users },
    { id: 48, title: "Bitcoin Policy Institute", description: "Policy research co-founded by Odell.", category: "Community", url: "https://www.bitcoinpolicy.org/", icon: Users },
    { id: 49, title: "Ten31", description: "Bitcoin VC firm co-founded by Marty Bent.", category: "Community", url: "https://ten31.vc/", icon: Users },

    // Additional Tools & Resources
    { id: 50, title: "Bitcoin Core", description: "Official site for Bitcoin Core software.", category: "Tools", url: "https://bitcoincore.org/", icon: Globe },
    { id: 51, title: "Bitcoin Stack Exchange", description: "Bitcoin Q&A community.", category: "Community", url: "https://bitcoin.stackexchange.com/", icon: Users },
    { id: 52, title: "BitcoinTalk", description: "Satoshi's original Bitcoin forum.", category: "Community", url: "https://bitcointalk.org/", icon: Users },
    { id: 53, title: "Bitcoin Reddit", description: "Active Bitcoin discussion subreddit.", category: "Community", url: "https://www.reddit.com/r/Bitcoin/", icon: Users },



    { id: 54, title: "Bitcoin Videos", description: "Educational Bitcoin video collection.", category: "Education", url: "https://www.lopp.net/", icon: BookOpen },
    { id: 55, title: "Bitcoin Privacy Guide", description: "Privacy best practices.", category: "Security", url: "https://bitcoiner.guide/privacy/", icon: Shield },

  ],

  diyTutorials: [
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
  ],

  get categories() {
    return [
      { name: "Education", icon: BookOpen, color: "bg-orange-100 text-orange-700", count: this.resources.filter(r => r.category === "Education").length },
      { name: "Podcasts", icon: Mic, color: "bg-blue-100 text-blue-700", count: this.resources.filter(r => r.category === "Podcasts").length },
      { name: "Wallets", icon: Wallet, color: "bg-green-100 text-green-700", count: this.resources.filter(r => r.category === "Wallets").length },
      { name: "Merchants", icon: Zap, color: "bg-yellow-100 text-yellow-700", count: this.resources.filter(r => r.category === "Merchants").length },
      { name: "Nodes", icon: Server, color: "bg-purple-100 text-purple-700", count: this.resources.filter(r => r.category === "Nodes").length },
      { name: "Community", icon: Users, color: "bg-pink-100 text-pink-700", count: this.resources.filter(r => r.category === "Community").length },
      { name: "Tools", icon: Globe, color: "bg-indigo-100 text-indigo-700", count: this.resources.filter(r => r.category === "Tools").length },
      { name: "Security", icon: Shield, color: "bg-red-100 text-red-700", count: this.resources.filter(r => r.category === "Security").length },
      { name: "Tutorials", icon: BookOpen, color: "bg-teal-100 text-teal-700", count: this.diyTutorials.length }
    ];
  }
};
