import { X } from 'lucide-react'

interface MemoModalProps {
  deck: {
    id: string
    name: string
    date: string
  }
  onClose: () => void
}

export default function MemoModal({ deck, onClose }: MemoModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{deck.name} - Investment Memo</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            This is a placeholder for the generated investment memo. In a real application, this
            would contain an AI-generated analysis of the pitch deck, including key insights,
            potential risks, and recommendations.
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold mb-2">Key Points:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Innovative AI-driven solution for market analysis</li>
              <li>Strong founding team with relevant industry experience</li>
              <li>Potential for rapid scaling in the B2B SaaS market</li>
              <li>Current traction: 50+ beta customers with 80% retention rate</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end p-6 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

