import { useState, useEffect } from 'react';
import { Globe, Brain, TrendingUp, Shield,  Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [currentInsight, setCurrentInsight] = useState(0);

  const navigate = useNavigate();

  const insights = [
    { text: "70% of climate news shows negative sentiment this week", color: "text-red-400" },
    { text: "AI technology coverage increased 45% globally", color: "text-green-400" },
    { text: "Health news sentiment improved by 23%", color: "text-blue-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Summaries",
      description: "Advanced Hugging Face models instantly summarize complex news into digestible insights"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sentiment Analysis",
      description: "Real-time emotional tone detection reveals the true pulse of global news"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Comprehensive news from trusted sources worldwide, analyzed in real-time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bias Detection",
      description: "Sophisticated algorithms identify potential bias and provide balanced perspectives"
    }
  ];

  return (
    <div className="landing-container">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb-1"></div>
        <div className="floating-orb-2"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">
            TruthWatch
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <button onClick={()=>navigate('/login')} className="nav-button">
            Get Started
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-15 transition-all duration-1000">
        <div className="text-center mb-20">
          <h1 className="hero-title">
            <span className="gradient-text-rainbow">
              AI-Powered
            </span>
            <br />
            <span className="text-white">News Intelligence</span>
          </h1>
          
          <p className="hero-subtitle">
            Transform how you consume news with real-time AI analysis, sentiment insights, and global trend detection
          </p>

          <div className="insight-card">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-400">LIVE INSIGHT</span>
            </div>
            <p className={`text-lg font-semibold transition-all duration-500 ${insights[currentInsight].color}`}>
              {insights[currentInsight].text}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={()=>navigate('/login')} className="gradient-button flex items-center space-x-2">
              <span>Start Analyzing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div id="features" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="feature-icon-container">
                  <div className="text-cyan-400 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-[-40px] pb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your News Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands who trust TruthWatch for unbiased, AI-powered news analysis
          </p>
          <button onClick={()=>navigate('/login')} className="gradient-button inline-flex items-center space-x-2">
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;