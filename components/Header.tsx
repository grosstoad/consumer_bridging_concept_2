import { Search, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">property</span>
            </a>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Following</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">News</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Travel time</a>
            </nav>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-4 py-2 min-w-[240px]">
              <input 
                type="text" 
                placeholder="Address, suburb or state" 
                className="bg-transparent outline-none text-sm flex-1"
              />
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

