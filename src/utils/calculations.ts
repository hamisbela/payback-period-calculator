export interface CashFlow {
  year: number;
  amount: number;
}

export function calculateSimplePaybackPeriod(investment: number, annualCashFlow: number): number {
  return investment / annualCashFlow;
}

export function calculateDiscountedPaybackPeriod(
  investment: number,
  cashFlows: CashFlow[],
  discountRate: number
): number {
  let remainingInvestment = investment;
  let years = 0;

  const discountedCashFlows = cashFlows.map(cf => ({
    ...cf,
    discounted: cf.amount / Math.pow(1 + discountRate / 100, cf.year)
  }));

  for (const cf of discountedCashFlows) {
    remainingInvestment -= cf.discounted;
    if (remainingInvestment <= 0) {
      const fraction = Math.abs(remainingInvestment) / cf.discounted;
      years = cf.year - fraction;
      break;
    }
    years = cf.year;
  }

  return years;
}

export function calculateNPV(
  investment: number,
  cashFlows: CashFlow[],
  discountRate: number
): number {
  const discountedSum = cashFlows.reduce(
    (sum, cf) => sum + cf.amount / Math.pow(1 + discountRate / 100, cf.year),
    0
  );
  return -investment + discountedSum;
}

export function calculateIRR(investment: number, cashFlows: CashFlow[]): number {
  let low = -100;
  let high = 1000;
  const tolerance = 0.0001;

  while (high - low > tolerance) {
    const mid = (low + high) / 2;
    const npv = calculateNPV(investment, cashFlows, mid);

    if (npv > 0) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}