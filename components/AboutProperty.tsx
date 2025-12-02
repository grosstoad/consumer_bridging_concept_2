export default function AboutProperty() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About the property</h2>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed">
          85 Christmas Street is a <strong>4 bedroom, 3 bathroom</strong> house in{' '}
          <strong>Northcote</strong>. It offers 2 car spaces and sits on a{' '}
          <strong>455m² lot</strong>. The property was sold on the 11th of October, 2025 for{' '}
          <strong className="text-primary">$2,920,000</strong>. It is located within{' '}
          <strong>Darebin council</strong>, with no bushfire or heritage overlays detected. 
          We have detected a flood overlay on this property. It is zoned for Wales Street 
          Primary School and Thornbury High School. It has reliable NBN Hybrid Fibre Coaxial 
          and 5G mobile coverage.
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="font-medium">PropTrack</span>
        </div>
      </div>
    </div>
  )
}

