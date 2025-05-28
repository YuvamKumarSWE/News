import { useState, useEffect } from 'react';
import { Globe, Brain, TrendingUp, Shield,  Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

 

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-15 transition-all ">
        
      </div>

     
    </div>
  );
}

export default Dashboard;