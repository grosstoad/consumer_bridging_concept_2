'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export default function BorrowingPowerCalculator() {
  const router = useRouter()
  const [loanBalance, setLoanBalance] = useState('')

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue) {
      return new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(parseInt(numericValue))
    }
    return ''
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value)
    setLoanBalance(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numericValue = loanBalance.replace(/\D/g, '')
    router.push(`/calculator?loanBalance=${numericValue || 0}`)
  }

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop&q=80" 
          alt="Modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/70 to-pink-600/65" />
      </div>

      {/* Content */}
      <div className="relative px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                Planning your next move?
              </h3>
              <p className="text-white text-opacity-90">
                Discover your buying power with our bridging loan calculator
              </p>
            </div>

            {/* Input and button */}
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="loan-balance" className="text-white text-sm font-medium">
                  Current loan balance
                </label>
                <input
                  type="text"
                  id="loan-balance"
                  value={loanBalance}
                  onChange={handleInputChange}
                  placeholder="e.g. $450,000"
                  className="w-full sm:w-64 px-4 py-3 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent font-medium shadow-lg"
                />
              </div>
              
              <button
                type="submit"
                className="whitespace-nowrap bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transform transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-2 self-end"
              >
                <span>Calculate now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

