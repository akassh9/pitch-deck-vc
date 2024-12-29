import { Button } from "@/components/ui/button"
import { Info } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8">LBO Model Builder Pro</h1>
      <Link href="/input" className="mb-4">
        <Button>Start Building</Button>
      </Link>
      <Button variant="outline" className="flex items-center">
        <Info className="mr-2" />
        What is an LBO Model?
      </Button>
    </div>
  )
}

