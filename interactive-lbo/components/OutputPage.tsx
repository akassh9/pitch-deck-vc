'use client'

import { useLBO } from '@/context/LBOContext'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OutputPage() {
  const { state } = useLBO()
  const { results } = state

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-4">LBO Model Results</h2>

      <Card>
        <CardHeader>
          <CardTitle>Summary Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium">IRR</p>
              <p className="text-2xl font-bold">{results?.irr || 0}%</p>
            </div>
            <div>
              <p className="text-sm font-medium">MOIC</p>
              <p className="text-2xl font-bold">{results?.moic || 0}x</p>
            </div>
            <div>
              <p className="text-sm font-medium">Payback Period</p>
              <p className="text-2xl font-bold">{results?.paybackPeriod || 0} years</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
