'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function AdvancedOptionsPage() {
  const [stressTest, setStressTest] = useState({
    growthRate: 0,
    interestRate: 5,
  })

  const [customDebt, setCustomDebt] = useState({
    name: '',
    interestRate: 5,
    principal: '',
  })

  const [apiIntegration, setApiIntegration] = useState(false)

  const handleStressTestChange = (name: 'growthRate' | 'interestRate', value: number) => {
    setStressTest(prev => ({ ...prev, [name]: value }))
  }

  const handleCustomDebtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomDebt(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Advanced Options</h2>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Stress Testing</h3>
        <div>
          <Label htmlFor="growthRate">Growth Rate (%)</Label>
          <Slider
            id="growthRate"
            min={-20}
            max={20}
            step={0.1}
            value={[stressTest.growthRate]}
            onValueChange={(value) => handleStressTestChange('growthRate', value[0])}
          />
          <span>{stressTest.growthRate}%</span>
        </div>
        <div>
          <Label htmlFor="interestRate">Interest Rate (%)</Label>
          <Slider
            id="interestRate"
            min={0}
            max={20}
            step={0.1}
            value={[stressTest.interestRate]}
            onValueChange={(value) => handleStressTestChange('interestRate', value[0])}
          />
          <span>{stressTest.interestRate}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Custom Debt Structure</h3>
        <div>
          <Label htmlFor="debtName">Debt Name</Label>
          <Input id="debtName" name="name" value={customDebt.name} onChange={handleCustomDebtChange} />
        </div>
        <div>
          <Label htmlFor="debtInterestRate">Interest Rate (%)</Label>
          <Slider
            id="debtInterestRate"
            min={0}
            max={20}
            step={0.1}
            value={[customDebt.interestRate]}
            onValueChange={(value) => setCustomDebt(prev => ({ ...prev, interestRate: value[0] }))}
          />
          <span>{customDebt.interestRate}%</span>
        </div>
        <div>
          <Label htmlFor="debtPrincipal">Principal Amount</Label>
          <Input id="debtPrincipal" name="principal" value={customDebt.principal} onChange={handleCustomDebtChange} />
        </div>
        <Button>Add Custom Debt</Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">API Integration</h3>
        <div className="flex items-center space-x-2">
          <Switch
            id="apiIntegration"
            checked={apiIntegration}
            onCheckedChange={setApiIntegration}
          />
          <Label htmlFor="apiIntegration">Enable Real-time Market Data</Label>
        </div>
      </div>

      <Button>Apply Advanced Options</Button>
    </div>
  )
}
