import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Key, 
  CheckCircle,
  Mail,
  Menu,
  ExternalLink,
  CreditCard,
  Settings,
  Copy,
  Shield,
  Smartphone,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Link, useLocation } from "wouter";
import fallOwlLogo from "@assets/FallOwl_logo_1759280190715.png";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { useToast } from "@/hooks/use-toast";

export default function TwilioSetup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const setupSteps = [
    {
      number: "1",
      title: "Create Your Twilio Account",
      icon: Phone,
      color: "from-purple-500 to-purple-600",
      description: "Sign up for a free Twilio trial account to get started with cloud communications.",
      details: [
        "Visit twilio.com/try-twilio",
        "Fill in your email, name, and create a password",
        "Verify your email address",
        "Complete phone number verification"
      ],
      link: "https://www.twilio.com/try-twilio"
    },
    {
      number: "2",
      title: "Get Your Account Credentials",
      icon: Key,
      color: "from-teal-500 to-cyan-500",
      description: "Locate your Account SID and Auth Token from the Twilio Console dashboard.",
      details: [
        "Log in to your Twilio Console",
        "Navigate to the Dashboard (default page)",
        "Find 'Account Info' section on the right",
        "Copy your Account SID and Auth Token"
      ],
      link: "https://console.twilio.com"
    },
    {
      number: "3",
      title: "Get a Phone Number",
      icon: Smartphone,
      color: "from-orange-400 to-pink-500",
      description: "Purchase or obtain a trial phone number for making and receiving calls.",
      details: [
        "Go to Phone Numbers → Manage → Buy a number",
        "Select your country and capabilities (Voice/SMS)",
        "Choose a phone number from available options",
        "Complete the purchase (free with trial credits)"
      ],
      link: "https://console.twilio.com/us1/develop/phone-numbers/manage/search"
    },
    {
      number: "4",
      title: "Configure Replit Integration",
      icon: Settings,
      color: "from-purple-500 to-purple-600",
      description: "Connect your Twilio credentials to Replit for seamless integration.",
      details: [
        "Use Replit's Twilio connector for easy setup",
        "Enter your Account SID as TWILIO_ACCOUNT_SID",
        "Enter your Auth Token as TWILIO_AUTH_TOKEN",
        "Add your phone number as TWILIO_PHONE_NUMBER"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-slate-900">
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
                <a href="/about" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/about"); }} data-testid="link-nav-about">About</a>
                <a href="/api-docs" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/api-docs"); }} data-testid="link-nav-api">API Doc</a>
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
                  <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 rounded-lg hover:bg-slate-50 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/about"); }} data-testid="link-mobile-about">About</a>
                  <a href="/api-docs" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 rounded-lg hover:bg-slate-50 transition-colors" onClick={(e) => { e.preventDefault(); setLocation("/api-docs"); }} data-testid="link-mobile-api">API Doc</a>
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl mb-8 shadow-lg">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Twilio Setup Guide
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            Complete guide to creating your Twilio account and obtaining API credentials for your dialer setup.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-700">
            <Shield className="w-4 h-4" />
            <span>Secure setup with Replit's Twilio integration</span>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1" data-testid="card-info-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">Free Trial</div>
                <p className="text-sm text-slate-600">Start with $15 trial credit, no credit card required initially</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1" data-testid="card-info-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">3 API Keys</div>
                <p className="text-sm text-slate-600">Account SID, Auth Token, and Phone Number needed</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1" data-testid="card-info-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">5 Minutes</div>
                <p className="text-sm text-slate-600">Quick setup process from start to finish</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Step-by-Step Setup Process
            </h2>
            <p className="text-slate-600">
              Follow these simple steps to get your Twilio credentials and connect them to Replit
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white border-gray-200 hover:border-purple-300 transition-all overflow-hidden"
                  data-testid={`card-step-${index}`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Left Side - Step Number and Icon */}
                      <div className={`bg-gradient-to-br ${step.color} p-8 text-white md:w-48 flex flex-col items-center justify-center`}>
                        <div className="text-5xl font-bold mb-3 opacity-90">
                          {step.number}
                        </div>
                        <Icon className="w-12 h-12" />
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 p-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {step.link && (
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                            data-testid={`link-step-${index}`}
                          >
                            Open Twilio Console
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Twilio Credentials
            </h2>
            <p className="text-slate-600">
              Here's what each credential is used for in your dialer setup
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Key className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Account SID</h3>
                      <code className="px-3 py-1 bg-slate-100 rounded text-sm text-slate-700 font-mono">
                        TWILIO_ACCOUNT_SID
                      </code>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Your unique account identifier. Starts with "AC" followed by 32 characters.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 font-mono">
                      Example: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Auth Token</h3>
                      <code className="px-3 py-1 bg-slate-100 rounded text-sm text-slate-700 font-mono">
                        TWILIO_AUTH_TOKEN
                      </code>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Your secret authentication token. Keep this secure and never share it publicly.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 font-mono">
                      Example: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Phone Number</h3>
                      <code className="px-3 py-1 bg-slate-100 rounded text-sm text-slate-700 font-mono">
                        TWILIO_PHONE_NUMBER
                      </code>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      Your Twilio phone number in E.164 format (includes country code with +).
                    </p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 font-mono">
                      Example: +1234567890
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Replit Integration Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Using Replit's Twilio Integration
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Replit offers a native Twilio connector that makes integration simple and secure. The connector automatically manages your credentials and handles authentication.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>Automatic credential management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>Secure environment variable storage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>Easy setup through Replit's interface</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-slate-600 mb-2">
                      Look for the Twilio connector in your Replit project's integrations panel to set up these credentials securely.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 px-6 lg:px-8 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Important Security Notes</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Never commit your Auth Token to version control or share it publicly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Always use environment variables or Replit's secrets to store credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Trial accounts have usage limits - upgrade for production use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Monitor your Twilio usage to avoid unexpected charges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If you encounter any issues during the Twilio setup process or need assistance with integration, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://www.twilio.com/docs', '_blank')}
                data-testid="button-twilio-docs"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Twilio Documentation
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = 'mailto:support@fallowl.com'}
                data-testid="button-contact-support"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EnterpriseFooter />
    </div>
  );
}
