'use client'

import { useState } from 'react'
import { FileText, Calendar, ArrowUpRight } from 'lucide-react'
import MemoModal from './MemoModal'

interface PitchDeck {
  id: string
  name: string
  date: string
}

const mockPitchDecks: PitchDeck[] = [
  { id: '1', name: 'TechStart AI', date: '2023-05-15' },
  { id: '2', name: 'GreenEnergy Solutions', date: '2023-05-14' },
  { id: '3', name: 'HealthTech Innovations', date: '2023-05-13' },
]

export default function PitchDeckList() {
  const [selectedDeck, setSelectedDeck] = useState<PitchDeck | null>(null)

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uploaded Pitch Decks</h2>
      <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {mockPitchDecks.map((deck) => (
          <li key={deck.id} className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">{deck.name}</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {deck.date}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Analyze Deck
              </button>
              <button
                className="text-green-500 hover:text-green-600 text-sm font-medium flex items-center"
                onClick={() => setSelectedDeck(deck)}
              >
                View Memo
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedDeck && (
        <MemoModal deck={selectedDeck} onClose={() => setSelectedDeck(null)} />
      )}
    </div>
  )
}

