import Header from '@/components/Header'
import PropertyHero from '@/components/PropertyHero'
import PropertyGallery from '@/components/PropertyGallery'
import AboutProperty from '@/components/AboutProperty'
import BorrowingPowerCalculator from '@/components/BorrowingPowerCalculator'
import PropertyTimeline from '@/components/PropertyTimeline'
import PropertySidebar from '@/components/PropertySidebar'

export default function PropertyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PropertyHero />
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery />
            <AboutProperty />
            <BorrowingPowerCalculator />
            <PropertyTimeline />
          </div>
          <div className="lg:col-span-1">
            <PropertySidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

