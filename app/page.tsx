import Header from '@/components/Header'
import UploadArea from '@/components/UploadArea'
import PitchDeckList from '@/components/PitchDeckList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pitch Deck Analyzer</h1>
        <UploadArea />
        <PitchDeckList />
      </main>
    </div>
  )
}

