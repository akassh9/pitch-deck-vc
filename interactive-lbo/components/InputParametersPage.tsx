'use client'

import { useRouter } from 'next/navigation'
import { useLBO } from '@/context/LBOContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputParametersPage() {
  const router = useRouter()
  const { state, updateInputs, calculateResults } = useLBO()
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateInputs({ [name]: Number(value) })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    calculateResults()
    router.push('/output')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Input Parameters</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Target Company Financials</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="revenue">Revenue</Label>
            <Input 
              id="revenue" 
              name="revenue" 
              type="number"
              value={state.inputs.revenue} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <Label htmlFor="ebitda">EBITDA</Label>
            <Input 
              id="ebitda" 
              name="ebitda" 
              type="number"
              value={state.inputs.ebitda} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
      </div>

      <Button type="submit">Calculate Results</Button>
    </form>
  )
}
