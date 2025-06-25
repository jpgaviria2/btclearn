
import React, { useState } from 'react';
import { Search, BookOpen, Mic, Wallet, Users, Globe, Shield, Zap, Server } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { resourcesData } from '@/data/resources';

const ResourcesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { resources, diyTutorials, categories } = resourcesData;

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
  );
};

export default ResourcesSection;
