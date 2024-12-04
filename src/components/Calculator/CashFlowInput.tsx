import React from 'react';
import { Trash2 } from 'lucide-react';
import { CashFlow } from '../../utils/calculations';

interface CashFlowInputProps {
  cashFlows: CashFlow[];
  onChange: (cashFlows: CashFlow[]) => void;
}

export default function CashFlowInput({ cashFlows, onChange }: CashFlowInputProps) {
  const addCashFlow = () => {
    const newYear = cashFlows.length > 0 ? cashFlows[cashFlows.length - 1].year + 1 : 1;
    onChange([...cashFlows, { year: newYear, amount: 0 }]);
  };

  const removeCashFlow = (index: number) => {
    onChange(cashFlows.filter((_, i) => i !== index));
  };

  const updateCashFlow = (index: number, amount: number) => {
    const newCashFlows = [...cashFlows];
    newCashFlows[index] = { ...newCashFlows[index], amount };
    onChange(newCashFlows);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Cash Flows</label>
        <button
          type="button"
          onClick={addCashFlow}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          + Add Year
        </button>
      </div>

      {cashFlows.map((cf, index) => (
        <div key={cf.year} className="flex items-center gap-2">
          <div className="flex-grow">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={cf.amount}
                onChange={(e) => updateCashFlow(index, parseFloat(e.target.value) || 0)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder={`Year ${cf.year} cash flow`}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeCashFlow(index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}