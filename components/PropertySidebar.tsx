import { MapPin, School, Wifi, Shield, Home } from 'lucide-react'

export default function PropertySidebar() {
  return (
    <div className="space-y-6">
      {/* Property Highlights */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Property highlights</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Location</p>
              <p className="text-sm text-gray-600">Darebin council area</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <School className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Schools</p>
              <p className="text-sm text-gray-600">Wales Street Primary<br />Thornbury High School</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Wifi className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Internet</p>
              <p className="text-sm text-gray-600">NBN Hybrid Fibre Coaxial<br />5G mobile coverage</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Overlays</p>
              <p className="text-sm text-gray-600">Flood overlay detected<br />No bushfire or heritage overlays</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Market insights</h3>
        <div className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Median house price</p>
            <p className="text-2xl font-bold text-gray-900">$1,350,000</p>
            <p className="text-sm text-green-600">↑ 4.2% this year</p>
          </div>
          
          <div className="pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Average days on market</p>
            <p className="text-2xl font-bold text-gray-900">28 days</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-1">Properties sold (last 12 months)</p>
            <p className="text-2xl font-bold text-gray-900">156</p>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Similar properties</h3>
        <div className="space-y-3">
          <a href="#" className="block group">
            <div className="flex space-x-3">
              <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=80&h=80&fit=crop&q=80" 
                  alt="Similar property"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors truncate">
                  91 Christmas Street
                </p>
                <p className="text-sm text-gray-600">Northcote</p>
                <p className="text-sm font-bold text-gray-900 mt-1">$2,850,000</p>
              </div>
            </div>
          </a>

          <a href="#" className="block group">
            <div className="flex space-x-3">
              <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=80&h=80&fit=crop&q=80" 
                  alt="Similar property"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors truncate">
                  42 Clarke Street
                </p>
                <p className="text-sm text-gray-600">Northcote</p>
                <p className="text-sm font-bold text-gray-900 mt-1">$2,750,000</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

