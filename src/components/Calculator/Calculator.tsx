import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import CashFlowInput from './CashFlowInput';
import ResultsDisplay from './ResultsDisplay';
import { 
  CashFlow,
  calculateSimplePaybackPeriod,
  calculateDiscountedPaybackPeriod,
  calculateNPV,
  calculateIRR
} from '../../utils/calculations';

export default function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>('');
  const [discountRate, setDiscountRate] = useState<string>('10');
  const [cashFlows, setCashFlows] = useState<CashFlow[]>([
    { year: 1, amount: 0 }
  ]);
  const [results, setResults] = useState<{
    simplePayback: number;
    discountedPayback: number;
    npv: number;
    irr: number;
  } | null>(null);

  const calculateResults = () => {
    const investment = parseFloat(initialInvestment);
    const rate = parseFloat(discountRate);
    const avgCashFlow = cashFlows.reduce((sum, cf) => sum + cf.amount, 0) / cashFlows.length;

    if (investment && !isNaN(rate) && cashFlows.length > 0) {
      const simplePayback = calculateSimplePaybackPeriod(investment, avgCashFlow);
      const discountedPayback = calculateDiscountedPaybackPeriod(investment, cashFlows, rate);
      const npv = calculateNPV(investment, cashFlows, rate);
      const irr = calculateIRR(investment, cashFlows);

      setResults({
        simplePayback,
        discountedPayback,
        npv,
        irr
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Advanced Payback Period Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="investment" className="block text-sm font-medium text-gray-700">
            Initial Investment
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="investment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="discountRate" className="block text-sm font-medium text-gray-700">
            Discount Rate (%)
          </label>
          <input
            type="number"
            id="discountRate"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="10"
          />
        </div>

        <CashFlowInput
          cashFlows={cashFlows}
          onChange={setCashFlows}
        />

        <button
          onClick={calculateResults}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Calculate Metrics
        </button>

        {results && <ResultsDisplay {...results} />}
      </div>
    </div>
  );
}