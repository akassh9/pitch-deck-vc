export function calculateIRR(cashFlows: number[]): number {
  const guess = 0.1
  const maxIterations = 100
  const tolerance = 0.00001

  let iteration = 0
  let irr = guess

  while (iteration < maxIterations) {
    const npv = cashFlows.reduce((acc, cf, i) => 
      acc + cf / Math.pow(1 + irr, i), 0
    )

    if (Math.abs(npv) < tolerance) {
      return Number((irr * 100).toFixed(2))
    }

    const derivativeNpv = cashFlows.reduce((acc, cf, i) => 
      acc - (i * cf) / Math.pow(1 + irr, i + 1), 0
    )

    irr = irr - npv / derivativeNpv
    iteration++
  }

  return Number((irr * 100).toFixed(2))
}

export function calculateMOIC(
  initialInvestment: number,
  exitValue: number
): number {
  return exitValue / initialInvestment
}

export function calculateDebtSchedule(
  principalAmount: number,
  interestRate: number,
  years: number
): Array<{year: number, principal: number, interest: number}> {
  const schedule = []
  let remainingPrincipal = principalAmount
  
  for (let year = 1; year <= years; year++) {
    const interest = remainingPrincipal * (interestRate / 100)
    const principal = principalAmount / years
    remainingPrincipal -= principal
    
    schedule.push({
      year,
      principal: Number(principal.toFixed(2)),
      interest: Number(interest.toFixed(2))
    })
  }
  
  return schedule
}

export function calculateProjections(inputs: {
  revenue: number
  ebitda: number
  growthRate: number
  marginImprovement: number
  exitYear: number
}) {
  const projections = []
  let currentRevenue = inputs.revenue
  let currentEbitdaMargin = (inputs.ebitda / inputs.revenue) * 100

  for (let year = 1; year <= inputs.exitYear; year++) {
    currentRevenue *= (1 + inputs.growthRate / 100)
    currentEbitdaMargin += inputs.marginImprovement
    const ebitda = currentRevenue * (currentEbitdaMargin / 100)

    projections.push({
      year,
      revenue: Number(currentRevenue.toFixed(2)),
      ebitda: Number(ebitda.toFixed(2))
    })
  }

  return projections
}

export function calculateCashFlows(
  projections: Array<{ revenue: number; ebitda: number }>,
  inputs: {
    capex: number
    interestRate: number
    currentDebt: number
  }
) {
  return projections.map((year, index) => {
    const capexAmount = (year.revenue * inputs.capex) / 100
    const interestExpense = (inputs.currentDebt * inputs.interestRate) / 100
    const fcf = year.ebitda - capexAmount - interestExpense

    return {
      year: index + 1,
      fcf: Number(fcf.toFixed(2))
    }
  })
}

export function calculateExitValue(
  finalYearEbitda: number,
  exitMultiple: number,
  remainingDebt: number
) {
  const enterpriseValue = finalYearEbitda * exitMultiple
  const equityValue = enterpriseValue - remainingDebt

  return {
    enterpriseValue: Number(enterpriseValue.toFixed(2)),
    debtRepayment: Number(remainingDebt.toFixed(2)),
    equityValue: Number(equityValue.toFixed(2))
  }
}

export function calculatePaybackPeriod(cashFlows: number[]): number {
  let cumulativeCashFlow = 0
  const initialInvestment = Math.abs(cashFlows[0])

  for (let i = 1; i < cashFlows.length; i++) {
    cumulativeCashFlow += cashFlows[i]
    if (cumulativeCashFlow >= initialInvestment) {
      // Add fractional year
      const fraction = (initialInvestment - (cumulativeCashFlow - cashFlows[i])) / cashFlows[i]
      return Number((i - 1 + fraction).toFixed(1))
    }
  }
  
  return cashFlows.length // If payback not achieved
} 