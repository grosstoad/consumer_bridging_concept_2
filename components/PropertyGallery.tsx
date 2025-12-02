import { Camera, Video, Image as ImageIcon } from 'lucide-react'

export default function PropertyGallery() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="grid grid-cols-2 gap-2 p-2">
        {/* Main large image */}
        <div className="col-span-2 relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop&q=80" 
            alt="Property exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
        </div>

        {/* Map thumbnail */}
        <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=400&fit=crop&q=80" 
              alt="Map view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
            <Camera className="w-3 h-3" />
            <span>89</span>
            <Video className="w-3 h-3 ml-1" />
            <span>2</span>
            <ImageIcon className="w-3 h-3 ml-1" />
            <span>5</span>
          </div>
          <div className="absolute bottom-2 right-2">
            <span className="text-white text-xs font-medium bg-black bg-opacity-60 px-2 py-1 rounded">
              metromap
            </span>
          </div>
        </div>

        {/* Floor plan thumbnail */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop&q=80" 
              alt="Floor plan"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60">
              <span className="text-gray-700 text-sm font-medium">Floor Plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

