import { BarChart, FileText, Home } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900">
              <Home className="w-5 h-5 mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/decks" className="flex items-center text-gray-700 hover:text-gray-900">
              <FileText className="w-5 h-5 mr-2" />
              <span>Uploaded Pitch Decks</span>
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="flex items-center text-gray-700 hover:text-gray-900">
              <BarChart className="w-5 h-5 mr-2" />
              <span>Analytics</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

