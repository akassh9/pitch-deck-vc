"use client"

import { ReactElement, JSXElementConstructor } from 'react'
import { ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'

interface ChartProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}

export function Chart({ children }: ChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

interface ChartContainerProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  className?: string
  config?: Record<string, any>
}

export function ChartContainer({ children, className, config }: ChartContainerProps) {
  return <div className={cn("w-full", className)}>{children}</div>
}

export function ChartTooltip({ className, ...props }: any) {
  return <div className={cn("rounded-lg border bg-background p-2 shadow-sm", className)} {...props} />
}

export function ChartTooltipContent() {
  return <div className="text-sm" />
}