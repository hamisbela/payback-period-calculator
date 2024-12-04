import React from 'react';
import { Calculator, TrendingUp, Clock, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Calculator,
      title: "Precise Calculations",
      description: "Our payback period calculator provides accurate results using standard financial formulas to determine investment recovery time."
    },
    {
      icon: TrendingUp,
      title: "Investment Analysis",
      description: "Make informed investment decisions by understanding how long it takes to recover your initial investment."
    },
    {
      icon: Clock,
      title: "Time-Based Insights",
      description: "Get detailed breakdowns of years and months for precise payback period planning."
    },
    {
      icon: BarChart,
      title: "Business Ready",
      description: "Perfect for businesses evaluating multiple investment opportunities and capital expenditure decisions."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Payback Period</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our payback period calculator helps you determine how long it will take to recover your initial investment through the expected cash flows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Why Calculate Payback Period?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">For Businesses</h4>
            <ul className="space-y-2">
              <li>• Investment decision making</li>
              <li>• Project evaluation</li>
              <li>• Risk assessment</li>
              <li>• Capital budgeting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Investors</h4>
            <ul className="space-y-2">
              <li>• Portfolio planning</li>
              <li>• Investment comparison</li>
              <li>• Risk management</li>
              <li>• Return analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}