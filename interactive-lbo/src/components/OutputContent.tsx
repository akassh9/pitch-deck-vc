'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Mock data for demonstration
const summaryMetrics = {
  irr: 25.5,
  moic: 2.8,
  paybackPeriod: 3.5
}

const debtSchedule = [
  { year: 1, principal: 100, interest: 10 },
  { year: 2, principal: 90, interest: 9 },
  { year: 3, principal: 80, interest: 8 },
  { year: 4, principal: 70, interest: 7 },
  { year: 5, principal: 60, interest: 6 },
]

const cashFlows = [
  { year: 1, fcf: 20 },
  { year: 2, fcf: 25 },
  { year: 3, fcf: 30 },
  { year: 4, fcf: 35 },
  { year: 5, fcf: 40 },
]

const exitValue = {
  enterpriseValue: 1000,
  debtRepayment: 400,
  equityValue: 600
}

const irrSensitivity = [
  { exitMultiple: 8, irr: 15 },
  { exitMultiple: 9, irr: 20 },
  { exitMultiple: 10, irr: 25 },
  { exitMultiple: 11, irr: 30 },
  { exitMultiple: 12, irr: 35 },
]

const debtPaydown = [
  { year: 0, debt: 500 },
  { year: 1, debt: 450 },
  { year: 2, debt: 400 },
  { year: 3, debt: 350 },
  { year: 4, debt: 300 },
  { year: 5, debt: 250 },
]

const capitalStructure = [
  { name: 'Equity', value: 30 },
  { name: 'Senior Debt', value: 50 },
  { name: 'Mezzanine Debt', value: 20 },
]

export default function OutputContent() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Summary Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium">IRR</p>
              <p className="text-2xl font-bold">{summaryMetrics.irr}%</p>
            </div>
            <div>
              <p className="text-sm font-medium">MOIC</p>
              <p className="text-2xl font-bold">{summaryMetrics.moic}x</p>
            </div>
            <div>
              <p className="text-sm font-medium">Payback Period</p>
              <p className="text-2xl font-bold">{summaryMetrics.paybackPeriod} years</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Debt Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Principal</TableHead>
                <TableHead>Interest</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {debtSchedule.map((row) => (
                <TableRow key={row.year}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.principal}</TableCell>
                  <TableCell>{row.interest}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cash Flow Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Free Cash Flow</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cashFlows.map((row) => (
                <TableRow key={row.year}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.fcf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exit Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium">Enterprise Value</p>
              <p className="text-2xl font-bold">${exitValue.enterpriseValue}M</p>
            </div>
            <div>
              <p className="text-sm font-medium">Debt Repayment</p>
              <p className="text-2xl font-bold">${exitValue.debtRepayment}M</p>
            </div>
            <div>
              <p className="text-sm font-medium">Equity Value</p>
              <p className="text-2xl font-bold">${exitValue.equityValue}M</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>IRR vs. Exit Multiple Sensitivity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={irrSensitivity}>
                <XAxis dataKey="exitMultiple" />
                <YAxis />
                <Bar dataKey="irr" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Debt Paydown over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={debtPaydown}>
                <XAxis dataKey="year" />
                <YAxis />
                <Line type="monotone" dataKey="debt" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Capital Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={capitalStructure} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button>Export to Excel</Button>
        <Button variant="outline">Export to PDF</Button>
        <Button variant="secondary">Share via Email</Button>
      </div>
    </>
  )
}

