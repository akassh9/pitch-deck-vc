'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function InputForm() {
  const router = useRouter()
  const [inputs, setInputs] = useState({
    revenue: '',
    ebitda: '',
    netIncome: '',
    currentDebt: '',
    currentCash: '',
    purchasePriceMultiple: 8,
    equityContribution: 30,
    transactionFees: '',
    debtEquitySplit: 70,
    interestRate: 5,
    amortizationSchedule: '5',
    growthRate: 5,
    marginImprovement: 2,
    capex: 5,
    exitYear: 5,
    exitMultiple: 10
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (name: keyof typeof inputs, value: number) => {
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputs)
    router.push('/output')
  }

  const resetInputs = () => {
    setInputs({
      revenue: '',
      ebitda: '',
      netIncome: '',
      currentDebt: '',
      currentCash: '',
      purchasePriceMultiple: 8,
      equityContribution: 30,
      transactionFees: '',
      debtEquitySplit: 70,
      interestRate: 5,
      amortizationSchedule: '5',
      growthRate: 5,
      marginImprovement: 2,
      capex: 5,
      exitYear: 5,
      exitMultiple: 10
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Target Company Financials */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Target Company Financials</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="revenue">Revenue</Label>
            <Input id="revenue" name="revenue" value={inputs.revenue} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="ebitda">EBITDA</Label>
            <Input id="ebitda" name="ebitda" value={inputs.ebitda} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="netIncome">Net Income</Label>
            <Input id="netIncome" name="netIncome" value={inputs.netIncome} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="currentDebt">Current Debt</Label>
            <Input id="currentDebt" name="currentDebt" value={inputs.currentDebt} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="currentCash">Current Cash</Label>
            <Input id="currentCash" name="currentCash" value={inputs.currentCash} onChange={handleInputChange} />
          </div>
        </div>
        <Button variant="outline">Upload Financial Data</Button>
      </div>

      {/* Transaction Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Transaction Details</h3>
        <div>
          <Label htmlFor="purchasePriceMultiple">Purchase Price Multiple (x EBITDA)</Label>
          <Slider
            id="purchasePriceMultiple"
            min={1}
            max={20}
            step={0.1}
            value={[inputs.purchasePriceMultiple]}
            onValueChange={(value) => handleSliderChange('purchasePriceMultiple', value[0])}
          />
          <span>{inputs.purchasePriceMultiple}x</span>
        </div>
        <div>
          <Label htmlFor="equityContribution">Equity Contribution (%)</Label>
          <Slider
            id="equityContribution"
            min={0}
            max={100}
            step={1}
            value={[inputs.equityContribution]}
            onValueChange={(value) => handleSliderChange('equityContribution', value[0])}
          />
          <span>{inputs.equityContribution}%</span>
        </div>
        <div>
          <Label htmlFor="transactionFees">Transaction Fees</Label>
          <Input id="transactionFees" name="transactionFees" value={inputs.transactionFees} onChange={handleInputChange} />
        </div>
      </div>

      {/* Add other sections (Financing Structure, Operating Assumptions, Exit Assumptions) here */}

      <div className="flex justify-between">
        <Button type="submit">Generate Model</Button>
        <Button type="button" variant="outline" onClick={resetInputs}>Reset Inputs</Button>
        <Button type="button" variant="secondary">Save Inputs</Button>
      </div>
    </form>
  )
}
