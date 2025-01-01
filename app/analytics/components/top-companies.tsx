import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const topCompanies = [
  { name: "TechCorp", sector: "SaaS", valuation: "$500M", growth: "150%" },
  { name: "FinanceAI", sector: "Fintech", valuation: "$400M", growth: "120%" },
  { name: "HealthTech", sector: "Healthcare", valuation: "$350M", growth: "100%" },
  { name: "AIAssist", sector: "AI/ML", valuation: "$300M", growth: "90%" },
  { name: "EcommerceGiant", sector: "E-commerce", valuation: "$250M", growth: "80%" },
]

export default function TopCompanies() {
  return (
    <Table>
      <TableCaption>Top 5 performing companies in the portfolio</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Sector</TableHead>
          <TableHead>Valuation</TableHead>
          <TableHead>YoY Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topCompanies.map((company) => (
          <TableRow key={company.name}>
            <TableCell className="font-medium">{company.name}</TableCell>
            <TableCell>{company.sector}</TableCell>
            <TableCell>{company.valuation}</TableCell>
            <TableCell>{company.growth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

