import { Home, MapPin, Edit, Info } from 'lucide-react'

export default function PropertyHero() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container-custom py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-700">🏠 Home</a>
          <span>›</span>
          <a href="#" className="hover:text-gray-700">VIC</a>
          <span>›</span>
          <a href="#" className="hover:text-gray-700">Northcote</a>
          <span>›</span>
          <a href="#" className="hover:text-gray-700">Christmas St</a>
          <span>›</span>
          <span className="text-gray-900">85 Christmas St</span>
        </div>

        {/* Status badge and Follow toggle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded">
              OFF MARKET
            </span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Info className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Follow</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors hover:bg-gray-400">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </button>
          </div>
        </div>

        {/* Address and details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">85 Christmas Street</h1>
          <p className="text-xl text-gray-600 mb-4">Northcote, VIC 3070</p>
          
          {/* Property stats */}
          <div className="flex flex-wrap items-center gap-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span className="font-medium">House</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>1980</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>4</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span>3</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>2</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>465m²</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <span>242m²</span>
            </div>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

