import React from 'react';
import { TrendingUp, Clock, DollarSign, Percent } from 'lucide-react';

interface ResultsDisplayProps {
  simplePayback: number;
  discountedPayback: number;
  npv: number;
  irr: number;
}

export default function ResultsDisplay({ 
  simplePayback, 
  discountedPayback, 
  npv, 
  irr 
}: ResultsDisplayProps) {
  const formatYears = (years: number) => {
    const wholeYears = Math.floor(years);
    const months = Math.round((years % 1) * 12);
    return `${wholeYears} years${months > 0 ? ` and ${months} months` : ''}`;
  };

  const metrics = [
    {
      icon: Clock,
      title: "Simple Payback Period",
      value: formatYears(simplePayback),
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Discounted Payback Period",
      value: formatYears(discountedPayback),
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Net Present Value (NPV)",
      value: `$${npv.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
      color: "text-purple-600"
    },
    {
      icon: Percent,
      title: "Internal Rate of Return (IRR)",
      value: `${irr.toFixed(2)}%`,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`h-5 w-5 ${metric.color}`} />
            <h3 className="text-sm font-medium text-gray-700">{metric.title}</h3>
          </div>
          <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}