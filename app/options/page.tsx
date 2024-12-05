import Link from 'next/link'
import { Video, MessageCircle } from 'lucide-react'

export default function CommunicationOptions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-12">Choose Your Communication Method</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <Link href="../call" className="group">
          <div className="flex flex-col items-center justify-center w-64 h-64 bg-white border-2 border-blue-400 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-500 hover:scale-105">
            <Video size={64} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-semibold text-blue-600">Video Call</span>
          </div>
        </Link>
        <Link href="../chat" className="group">
          <div className="flex flex-col items-center justify-center w-64 h-64 bg-white border-2 border-blue-400 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-500 hover:scale-105">
            <MessageCircle size={64} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-semibold text-blue-600">Chat</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

