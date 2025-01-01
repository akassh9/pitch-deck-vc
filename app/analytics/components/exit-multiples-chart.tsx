"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { Chart } from '@/app/analytics/components/ui/chart'

const data = [
  { name: 'Pre-Seed', multiple: 3.2 },
  { name: 'Seed', multiple: 4.5 },
  { name: 'Series A', multiple: 6.8 },
  { name: 'Series B', multiple: 8.2 },
]

export default function ExitMultiplesChart() {
  return (
    <Chart>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="multiple" fill="hsl(var(--chart-1))" name="Exit Multiple" />
      </BarChart>
    </Chart>
  )
}