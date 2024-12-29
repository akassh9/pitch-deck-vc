'use client'

import { useLBO } from '@/context/LBOContext'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function InputParametersPage() {
  const router = useRouter()
  const { state, updateInputs, calculateResults } = useLBO()
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateInputs({ [name]: Number(value) })
  }

  const handleSliderChange = (name: keyof typeof state.inputs, value: number) => {
    updateInputs({ [name]: value })
  }

  const handleSelectChange = (value: string) => {
    updateInputs({ amortizationSchedule: Number(value) })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    calculateResults()
    router.push('/output')
  }

  const resetInputs = () => {
    updateInputs({
      revenue: 0,
      ebitda: 0,
      netIncome: 0,
      currentDebt: 0,
      currentCash: 0,
      purchasePriceMultiple: 8,
      equityContribution: 30,
      transactionFees: 0,
      debtEquitySplit: 70,
      interestRate: 5,
      amortizationSchedule: 5,
      growthRate: 5,
      marginImprovement: 2,
      capex: 5,
      exitYear: 5,
      exitMultiple: 10
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Input Parameters</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Target Company Financials</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="revenue">Revenue</Label>
            <Input id="revenue" name="revenue" value={state.inputs.revenue} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="ebitda">EBITDA</Label>
            <Input id="ebitda" name="ebitda" value={state.inputs.ebitda} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="netIncome">Net Income</Label>
            <Input id="netIncome" name="netIncome" value={state.inputs.netIncome} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="currentDebt">Current Debt</Label>
            <Input id="currentDebt" name="currentDebt" value={state.inputs.currentDebt} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="currentCash">Current Cash</Label>
            <Input id="currentCash" name="currentCash" value={state.inputs.currentCash} onChange={handleInputChange} />
          </div>
        </div>
        <Button variant="outline">Upload Financial Data</Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Transaction Details</h3>
        <div>
          <Label htmlFor="purchasePriceMultiple">Purchase Price Multiple (x EBITDA)</Label>
          <Slider
            id="purchasePriceMultiple"
            min={1}
            max={20}
            step={0.1}
            value={[state.inputs.purchasePriceMultiple]}
            onValueChange={(value) => handleSliderChange('purchasePriceMultiple', value[0])}
          />
          <span>{state.inputs.purchasePriceMultiple}x</span>
        </div>
        <div>
          <Label htmlFor="equityContribution">Equity Contribution (%)</Label>
          <Slider
            id="equityContribution"
            min={0}
            max={100}
            step={1}
            value={[state.inputs.equityContribution]}
            onValueChange={(value) => handleSliderChange('equityContribution', value[0])}
          />
          <span>{state.inputs.equityContribution}%</span>
        </div>
        <div>
          <Label htmlFor="transactionFees">Transaction Fees</Label>
          <Input id="transactionFees" name="transactionFees" value={state.inputs.transactionFees} onChange={handleInputChange} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Financing Structure</h3>
        <div>
          <Label htmlFor="debtEquitySplit">Debt/Equity Split</Label>
          <Slider
            id="debtEquitySplit"
            min={0}
            max={100}
            step={1}
            value={[state.inputs.debtEquitySplit]}
            onValueChange={(value) => handleSliderChange('debtEquitySplit', value[0])}
          />
          <span>Debt: {state.inputs.debtEquitySplit}% / Equity: {100 - state.inputs.debtEquitySplit}%</span>
        </div>
        <div>
          <Label htmlFor="interestRate">Interest Rate (%)</Label>
          <Slider
            id="interestRate"
            min={0}
            max={20}
            step={0.1}
            value={[state.inputs.interestRate]}
            onValueChange={(value) => handleSliderChange('interestRate', value[0])}
          />
          <span>{state.inputs.interestRate}%</span>
        </div>
        <div>
          <Label htmlFor="amortizationSchedule">Amortization Schedule</Label>
          <Select onValueChange={handleSelectChange} value={String(state.inputs.amortizationSchedule)}>
            <SelectTrigger>
              <SelectValue placeholder="Select schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 years</SelectItem>
              <SelectItem value="7">7 years</SelectItem>
              <SelectItem value="10">10 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Operating Assumptions</h3>
        <div>
          <Label htmlFor="growthRate">Growth Rate (%)</Label>
          <Slider
            id="growthRate"
            min={-10}
            max={30}
            step={0.1}
            value={[state.inputs.growthRate]}
            onValueChange={(value) => handleSliderChange('growthRate', value[0])}
          />
          <span>{state.inputs.growthRate}%</span>
        </div>
        <div>
          <Label htmlFor="marginImprovement">Margin Improvement (%)</Label>
          <Slider
            id="marginImprovement"
            min={-10}
            max={20}
            step={0.1}
            value={[state.inputs.marginImprovement]}
            onValueChange={(value) => handleSliderChange('marginImprovement', value[0])}
          />
          <span>{state.inputs.marginImprovement}%</span>
        </div>
        <div>
          <Label htmlFor="capex">Capital Expenditures (% of revenue)</Label>
          <Slider
            id="capex"
            min={0}
            max={20}
            step={0.1}
            value={[state.inputs.capex]}
            onValueChange={(value) => handleSliderChange('capex', value[0])}
          />
          <span>{state.inputs.capex}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Exit Assumptions</h3>
        <div>
          <Label htmlFor="exitYear">Exit Year</Label>
          <Select 
            onValueChange={(value) => updateInputs({ exitYear: Number(value) })} 
            value={String(state.inputs.exitYear)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select exit year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 years</SelectItem>
              <SelectItem value="7">7 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="exitMultiple">Exit Multiple (x EBITDA)</Label>
          <Slider
            id="exitMultiple"
            min={1}
            max={20}
            step={0.1}
            value={[state.inputs.exitMultiple]}
            onValueChange={(value) => handleSliderChange('exitMultiple', value[0])}
          />
          <span>{state.inputs.exitMultiple}x</span>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="submit">Generate Model</Button>
        <Button type="button" variant="outline" onClick={resetInputs}>Reset Inputs</Button>
        <Button type="button" variant="secondary">Save Inputs</Button>
      </div>
    </form>
  )
}
