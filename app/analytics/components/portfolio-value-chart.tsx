"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { Chart } from '@/app/analytics/components/ui/chart'

const data = [
  { month: 'Jan', value: 1000000 },
  { month: 'Feb', value: 1200000 },
  { month: 'Mar', value: 1150000 },
  { month: 'Apr', value: 1400000 },
]

export default function PortfolioValueChart() {
  return (
    <Chart>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="hsl(var(--chart-2))" 
          name="Portfolio Value" 
        />
      </LineChart>
    </Chart>
  )
}

