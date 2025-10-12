import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import { 
  Menu, 
  Search, 
  Calendar, 
  Clock,
  ArrowRight,
  TrendingUp,
  Phone,
  Zap,
  BarChart3
} from "lucide-react";
import fallOwlLogo from "@assets/FallOwl_logo_1759280190715.png";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";

const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-parallel-dialers",
    title: "Benefits of Parallel Dialers for Sales Teams",
    excerpt: "Discover how parallel dialers can increase your team's productivity by 4x and transform your outbound sales strategy.",
    category: "Sales Technology",
    author: "Sarah Mitchell",
    date: "October 10, 2025",
    readTime: "8 min read",
    image: TrendingUp,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: 2,
    slug: "power-dialer-vs-parallel-dialer",
    title: "Power Dialer vs Parallel Dialer: Which is Right for You?",
    excerpt: "A comprehensive comparison of power dialers and parallel dialers to help you choose the best solution for your sales team.",
    category: "Comparison",
    author: "Michael Chen",
    date: "October 8, 2025",
    readTime: "10 min read",
    image: BarChart3,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 3,
    slug: "choosing-right-auto-dialer",
    title: "How to Choose the Right Auto Dialer for Your Business",
    excerpt: "Learn about different types of auto dialers and how to select the perfect one based on your business needs and goals.",
    category: "Guide",
    author: "Emily Rodriguez",
    date: "October 5, 2025",
    readTime: "12 min read",
    image: Zap,
    gradient: "from-orange-400 to-pink-500"
  },
];

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-slate-900">
      <SEO 
        title="Auto Dialer & Sales Technology Blog | FallOwl"
        description="Expert insights on auto dialers, power dialers, and sales technology. Learn best practices for maximizing sales team productivity with modern dialing solutions."
        keywords="auto dialer blog, power dialer guide, parallel dialer tips, sales technology, dialer comparison, outbound sales best practices"
        ogTitle="Auto Dialer & Sales Technology Blog | FallOwl"
        ogDescription="Expert insights on auto dialers, power dialers, and sales technology. Learn best practices for maximizing sales team productivity."
        ogImage="/attached_assets/FallOwl_logo_1759280190715.png"
        canonical="https://fallowl.com/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "FallOwl Blog",
          "description": "Expert insights on auto dialers, power dialers, and sales technology",
          "url": "https://fallowl.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "FallOwl",
            "logo": {
              "@type": "ImageObject",
              "url": "https://fallowl.com/attached_assets/FallOwl_logo_1759280190715.png"
            }
          }
        }}
      />
      {/* Navigation */}
      <nav className="relative top-4 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg shadow-slate-900/5">
          <div className="px-4 md:px-6">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center cursor-pointer" onClick={() => setLocation("/")}>
                <img 
                  src={fallOwlLogo} 
                  alt="FallOwl" 
                  className="h-10 w-auto object-contain"
                  data-testid="img-logo"
                />
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/features" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/features"); }} data-testid="link-nav-features">Features</a>
                <a href="/#integrations" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors" data-testid="link-nav-integrations">Integrations</a>
                <a href="/blog" className="text-sm font-medium text-purple-600" onClick={(e) => { e.preventDefault(); setLocation("/blog"); }} data-testid="link-nav-blog">Blog</a>
                <a href="/about" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/about"); }} data-testid="link-nav-about">About</a>
                <Button 
                  size="sm" 
                  className="bg-slate-900 hover:bg-slate-800 text-white text-sm rounded-xl"
                  onClick={() => window.location.href = 'https://app.fallowl.com'}
                  data-testid="button-signin"
                >
                  Sign in
                </Button>
              </div>

              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                data-testid="button-menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <a href="/features" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 rounded-lg hover:bg-slate-50 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/features"); }} data-testid="link-mobile-features">Features</a>
                  <a href="/#integrations" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 rounded-lg hover:bg-slate-50 transition-colors" data-testid="link-mobile-integrations">Integrations</a>
                  <a href="/blog" className="px-4 py-2 text-sm font-medium text-purple-600 rounded-lg bg-purple-50" onClick={(e) => { e.preventDefault(); setLocation("/blog"); }} data-testid="link-mobile-blog">Blog</a>
                  <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 rounded-lg hover:bg-slate-50 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/about"); }} data-testid="link-mobile-about">About</a>
                  <div className="px-4 pt-2">
                    <Button 
                      size="sm" 
                      className="bg-slate-900 hover:bg-slate-800 text-white w-full rounded-xl"
                      onClick={() => window.location.href = 'https://app.fallowl.com'}
                      data-testid="button-mobile-signin"
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            FallOwl Blog
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Insights, guides, and best practices for modern sales teams using auto dialers and communication technology
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white border-gray-300 rounded-2xl text-base focus:border-purple-500"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = post.image;
                return (
                  <Card 
                    key={post.id} 
                    className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                    onClick={() => setLocation(`/blog/${post.slug}`)}
                    data-testid={`card-blog-${post.id}`}
                  >
                    <CardContent className="p-0">
                      {/* Image/Icon Header */}
                      <div className={`bg-gradient-to-br ${post.gradient} p-8 flex items-center justify-center h-48`}>
                        <IconComponent className="w-20 h-20 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-sm text-slate-700 font-medium">{post.author}</span>
                          <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Start using FallOwl's powerful dialing technology to increase your team's productivity and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 text-base rounded-xl"
                onClick={() => setLocation("/demo")}
                data-testid="button-book-demo"
              >
                Book a Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base rounded-xl"
                onClick={() => window.location.href = 'https://app.fallowl.com'}
                data-testid="button-start-free"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EnterpriseFooter />
    </div>
  );
}
