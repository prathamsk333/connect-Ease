import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

