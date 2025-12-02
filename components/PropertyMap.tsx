'use client'

import { useEffect, useState } from 'react'
import { MapPin, X, Bed, Bath, Car, Maximize } from 'lucide-react'
import dynamic from 'next/dynamic'

interface Property {
  id: number
  address: string
  suburb: string
  price: number
  bedrooms: number
  bathrooms: number
  parking: number
  landSize: number
  image: string
  lat: number
  lng: number
}

// Dummy property data around Northcote, VIC
const properties: Property[] = [
  {
    id: 1,
    address: '42 High Street',
    suburb: 'Northcote',
    price: 1850000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    landSize: 380,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80',
    lat: -37.770,
    lng: 144.998,
  },
  {
    id: 2,
    address: '156 Station Street',
    suburb: 'Fairfield',
    price: 1650000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    landSize: 340,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop&q=80',
    lat: -37.775,
    lng: 145.015,
  },
  {
    id: 3,
    address: '89 Murray Road',
    suburb: 'Preston',
    price: 1450000,
    bedrooms: 4,
    bathrooms: 2,
    parking: 2,
    landSize: 420,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop&q=80',
    lat: -37.752,
    lng: 145.005,
  },
  {
    id: 4,
    address: '234 Separation Street',
    suburb: 'Northcote',
    price: 2100000,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    landSize: 520,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop&q=80',
    lat: -37.768,
    lng: 144.995,
  },
  {
    id: 5,
    address: '67 St Georges Road',
    suburb: 'Thornbury',
    price: 1750000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    landSize: 360,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&q=80',
    lat: -37.760,
    lng: 144.998,
  },
  {
    id: 6,
    address: '45 Clarke Street',
    suburb: 'Northcote',
    price: 1950000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    landSize: 410,
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=400&h=300&fit=crop&q=80',
    lat: -37.773,
    lng: 145.002,
  },
  {
    id: 7,
    address: '128 Miller Street',
    suburb: 'Fitzroy North',
    price: 2250000,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    landSize: 480,
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=300&fit=crop&q=80',
    lat: -37.778,
    lng: 144.985,
  },
  {
    id: 8,
    address: '91 Wood Street',
    suburb: 'Preston',
    price: 1350000,
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    landSize: 310,
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&h=300&fit=crop&q=80',
    lat: -37.755,
    lng: 145.010,
  },
]

interface PropertyMapProps {
  maxPrice: number
}

// Leaflet must be loaded on client only
const LeafletMap = dynamic(() => import('./PropertyTileMap'), {
  ssr: false,
})

export default function PropertyMap({ maxPrice }: PropertyMapProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  // Filter properties within budget
  const affordableProperties = properties.filter(p => p.price <= maxPrice)
  const unaffordableProperties = properties.filter(p => p.price > maxPrice)

  return (
    <div className="relative w-full h-full">
      {/* Real tile map (Leaflet) */}
      <LeafletMap />

      {/* Property Markers */}
      {affordableProperties.map((property) => (
        <div
          key={property.id}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
          style={{
            top: `${((property.lat + 37.765) / 0.03) * 100}%`,
            left: `${((property.lng - 144.98) / 0.04) * 100}%`,
            zIndex: hoveredProperty === property.id || selectedProperty?.id === property.id ? 50 : 10,
          }}
          onClick={() => setSelectedProperty(property)}
          onMouseEnter={() => setHoveredProperty(property.id)}
          onMouseLeave={() => setHoveredProperty(null)}
        >
          {/* Price tag marker */}
          <div className={`
            relative bg-white rounded-full shadow-lg px-3 py-1.5 border-2 
            ${selectedProperty?.id === property.id 
              ? 'border-primary bg-primary text-white scale-110' 
              : hoveredProperty === property.id
              ? 'border-primary scale-105'
              : 'border-green-500'
            }
            transition-all duration-200
          `}>
            <div className="text-xs font-bold whitespace-nowrap">
              {formatCurrency(property.price)}
            </div>
          </div>
          {/* Pin point */}
          <div className={`
            absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 
            border-l-[6px] border-l-transparent 
            border-r-[6px] border-r-transparent 
            border-t-[8px] 
            ${selectedProperty?.id === property.id 
              ? 'border-t-primary' 
              : 'border-t-green-500'
            }
            transition-all duration-200
          `} />
        </div>
      ))}

      {/* Unaffordable properties (greyed out) */}
      {unaffordableProperties.map((property) => (
        <div
          key={property.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-40 cursor-not-allowed"
          style={{
            top: `${((property.lat + 37.765) / 0.03) * 100}%`,
            left: `${((property.lng - 144.98) / 0.04) * 100}%`,
            zIndex: 5,
          }}
        >
          <div className="relative bg-gray-300 rounded-full shadow px-3 py-1.5 border-2 border-gray-400">
            <div className="text-xs font-bold whitespace-nowrap text-gray-600">
              {formatCurrency(property.price)}
            </div>
          </div>
          <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-400" />
        </div>
      ))}


      {/* Property Detail Card */}
      {selectedProperty && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md z-30 px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp">
            {/* Image */}
            <div className="relative h-48">
              <img 
                src={selectedProperty.image} 
                alt={selectedProperty.address}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              <div className="absolute bottom-3 left-3 bg-white rounded-full px-3 py-1.5 shadow-lg">
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(selectedProperty.price)}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selectedProperty.address}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedProperty.suburb}
                  </p>
                </div>
              </div>

              {/* Property features */}
              <div className="flex items-center space-x-4 text-sm text-gray-700 mb-4">
                <div className="flex items-center space-x-1">
                  <Bed className="w-4 h-4" />
                  <span>{selectedProperty.bedrooms}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="w-4 h-4" />
                  <span>{selectedProperty.bathrooms}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Car className="w-4 h-4" />
                  <span>{selectedProperty.parking}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Maximize className="w-4 h-4" />
                  <span>{selectedProperty.landSize}m²</span>
                </div>
              </div>

              {/* Affordability indicator */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">✓ Within budget</span>
                  {' — '}
                  {formatCurrency(maxPrice - selectedProperty.price)} under your maximum
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-4 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                View Property Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info overlay */}
      <div className="absolute top-6 left-6 z-20 max-w-xs">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Properties in Melbourne North</h3>
          <p className="text-xs text-gray-600">
            Click on any green marker to view property details. Properties are shown based on your maximum budget of{' '}
            <span className="font-semibold text-primary">{formatCurrency(maxPrice)}</span>
          </p>
        </div>
      </div>
        
      {/* Legend - Horizontal layout at bottom */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="bg-white rounded-lg shadow-lg px-4 py-3">
          <div className="flex items-center space-x-6">
            <span className="text-xs font-semibold text-gray-900">Legend:</span>
            <div className="flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-600" />
              <span className="text-xs text-gray-700">Within budget</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-400" />
              <span className="text-xs text-gray-700">Above budget</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary" />
              <span className="text-xs text-gray-700">Selected</span>
            </div>
            <span className="text-xs text-gray-600 pl-2 border-l border-gray-300">
              <span className="font-semibold text-green-600">{affordableProperties.length}</span> within budget
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
