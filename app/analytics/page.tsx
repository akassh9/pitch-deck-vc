import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PortfolioValueChart from "./components/portfolio-value-chart"
import SectorBreakdown from "./components/sector-breakdown"
import TopCompanies from "./components/top-companies"
import ExitMultiplesChart from "./components/exit-multiples-chart"

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Portfolio Analytics</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$250M</div>
            <p className="text-xs text-muted-foreground">+20% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+5 new this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Multiple</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.7x</div>
            <p className="text-xs text-muted-foreground">+0.5x from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IRR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22.5%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last year</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="exits">Exits</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Value Over Time</CardTitle>
              <CardDescription>Total value of investments including unrealized gains</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PortfolioValueChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sectors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment by Sector</CardTitle>
              <CardDescription>Breakdown of investments across different industries</CardDescription>
            </CardHeader>
            <CardContent>
              <SectorBreakdown />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="companies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Companies</CardTitle>
              <CardDescription>Companies with the highest growth in valuation</CardDescription>
            </CardHeader>
            <CardContent>
              <TopCompanies />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exit Multiples</CardTitle>
              <CardDescription>Return multiples for exited investments</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ExitMultiplesChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

