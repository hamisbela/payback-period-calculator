import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is a payback period calculator?",
    answer: "A payback period calculator is a financial tool that helps determine how long it will take to recover the cost of an investment through its cash flows. It's essential for businesses and investors to evaluate the time value of money and make informed investment decisions."
  },
  {
    question: "When should I use a payback period calculator?",
    answer: [
      "• Evaluating new business investments",
      "• Comparing different investment opportunities",
      "• Assessing capital expenditure projects",
      "• Planning equipment purchases",
      "• Analyzing property investments"
    ]
  },
  {
    question: "How is the payback period calculated?",
    answer: "The payback period is calculated by dividing the initial investment by the annual cash flow. For example, if you invest $10,000 and expect annual cash flows of $2,000, the payback period would be 5 years (10,000 ÷ 2,000 = 5)."
  },
  {
    question: "What are the limitations of payback period?",
    answer: "While useful, payback period has some limitations: it doesn't account for the time value of money, ignores cash flows after the payback period, and doesn't consider the project's profitability. It's best used alongside other investment metrics for comprehensive analysis."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}