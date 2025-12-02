import { CheckCircle2, Eye, Home } from 'lucide-react'

export default function PropertyTimeline() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Property timeline</h2>
      <p className="text-gray-600 mb-6">
        View historical data on past sold prices, rent and leased history of this house 
        and if withdrawn from market
      </p>

      <div className="space-y-6">
        {/* Sold entry */}
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="w-0.5 h-full bg-gray-200 mt-2" />
          </div>
          
          <div className="pb-8 flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-500">2025</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                  SOLD
                </span>
              </div>
              <span className="text-xl font-bold text-gray-900">$2,920,000</span>
            </div>
            <p className="text-sm text-gray-600">
              11 Oct 2025 by McGrath - Northcote
            </p>
          </div>
        </div>

        {/* Listed for sale entry */}
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <div className="w-0.5 h-full bg-gray-200 mt-2" />
          </div>
          
          <div className="pb-8 flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                LISTED FOR SALE
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <div className="flex items-start space-x-3">
                <div className="w-20 h-20 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=80&h=80&fit=crop&q=80" 
                    alt="Property thumbnail"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <Home className="w-4 h-4" />
                    <span>17</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              Listed on 8 May 2025
            </p>
          </div>
        </div>

        {/* Leased entry */}
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <Home className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium text-gray-500">2023</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                LEASED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

