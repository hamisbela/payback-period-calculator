import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg">Welcome to Payback Period Calculator, your trusted companion for investment analysis and decision-making.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>We strive to provide accurate, easy-to-use tools that help businesses and investors make informed decisions about their investments by understanding payback periods and return timelines.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accurate Calculations: Our tool uses standard financial formulas</li>
              <li>User-Friendly Interface: Simple and intuitive design</li>
              <li>Free to Use: No hidden costs or subscriptions</li>
              <li>Mobile Responsive: Access from any device</li>
              <li>Privacy First: We don't store your calculation data</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
            <p>Founded by a team of financial analysts and developers, we recognized the need for a simple yet powerful tool to help people evaluate investment opportunities and make better financial decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}