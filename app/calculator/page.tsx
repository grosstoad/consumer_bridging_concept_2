'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowLeft, TrendingUp, Home, DollarSign, PiggyBank, Percent } from 'lucide-react'
import PropertyMap from '@/components/PropertyMap'
import BrokerConnectModal from '@/components/BrokerConnectModal'

function CalculatorContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialLoanBalance = parseInt(searchParams.get('loanBalance') || '0')

  // Calculator inputs
  const [currentPropertyValue, setCurrentPropertyValue] = useState(2920000)
  const [loanBalance, setLoanBalance] = useState(initialLoanBalance)
  const [savings, setSavings] = useState(150000)
  const [annualIncome, setAnnualIncome] = useState(180000)
  const [borrowingMultiple, setBorrowingMultiple] = useState(5.5)

  // Calculated values
  const [maxBorrowingPower, setMaxBorrowingPower] = useState(0)
  const [equity, setEquity] = useState(0)
  const [maxPropertyPrice, setMaxPropertyPrice] = useState(0)

  useEffect(() => {
    // Calculate equity from current property
    const calculatedEquity = currentPropertyValue - loanBalance
    
    // Calculate borrowing power
    const calculatedBorrowingPower = annualIncome * borrowingMultiple
    
    // Calculate maximum property price (equity + savings + new borrowing power - existing loan)
    const calculatedMaxPrice = calculatedEquity + savings + calculatedBorrowingPower
    
    setEquity(calculatedEquity)
    setMaxBorrowingPower(calculatedBorrowingPower)
    setMaxPropertyPrice(calculatedMaxPrice)
  }, [currentPropertyValue, loanBalance, savings, annualIncome, borrowingMultiple])

  const [brokerOpen, setBrokerOpen] = useState(false)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleNumberInput = (value: string, setter: (val: number) => void) => {
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0
    setter(numericValue)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar - Calculator */}
      <div className="w-full md:w-96 lg:w-[420px] bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10 shadow-sm">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to home</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Buying Power</h1>
          <p className="text-sm text-gray-600">Adjust the inputs below to see what you can afford</p>
        </div>

        {/* Maximum Property Price Display */}
        <div className="p-6 bg-gradient-to-br from-primary to-pink-600 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">Maximum Property Price</span>
          </div>
          <div className="text-4xl font-bold mb-1">{formatCurrency(maxPropertyPrice)}</div>
          <p className="text-sm opacity-90">Based on your current financial position</p>
        </div>

        {/* Breakdown */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Property equity</span>
              <span className="font-semibold text-gray-900">{formatCurrency(equity)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Savings to contribute</span>
              <span className="font-semibold text-gray-900">{formatCurrency(savings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Additional borrowing power</span>
              <span className="font-semibold text-gray-900">{formatCurrency(maxBorrowingPower)}</span>
            </div>
            <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between">
              <span className="text-gray-900 font-semibold">Total budget</span>
              <span className="font-bold text-primary">{formatCurrency(maxPropertyPrice)}</span>
            </div>
          </div>
        </div>

        {/* Input Controls */}
        <div className="p-6 space-y-6 flex-1">
          <h3 className="text-sm font-semibold text-gray-900">Your Details</h3>

          {/* Current Property Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-primary" />
                <span>Current Property Value</span>
              </div>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="text"
                value={formatCurrency(currentPropertyValue).replace('$', '')}
                onChange={(e) => handleNumberInput(e.target.value, setCurrentPropertyValue)}
                className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Loan Balance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>Current Loan Balance</span>
              </div>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="text"
                value={formatCurrency(loanBalance).replace('$', '')}
                onChange={(e) => handleNumberInput(e.target.value, setLoanBalance)}
                className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Savings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <PiggyBank className="w-4 h-4 text-primary" />
                <span>Additional Savings</span>
              </div>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="text"
                value={formatCurrency(savings).replace('$', '')}
                onChange={(e) => handleNumberInput(e.target.value, setSavings)}
                className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Annual Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Annual Household Income</span>
              </div>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="text"
                value={formatCurrency(annualIncome).replace('$', '')}
                onChange={(e) => handleNumberInput(e.target.value, setAnnualIncome)}
                className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Borrowing Multiple */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Percent className="w-4 h-4 text-primary" />
                <span>Borrowing Multiple</span>
              </div>
            </label>
            <input
              type="range"
              min="4"
              max="7"
              step="0.1"
              value={borrowingMultiple}
              onChange={(e) => setBorrowingMultiple(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Conservative (4x)</span>
              <span className="font-semibold text-primary">{borrowingMultiple.toFixed(1)}x</span>
              <span>Aggressive (7x)</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-xs text-blue-900">
              <strong>Note:</strong> This is an estimate only. Your actual borrowing capacity 
              will depend on credit score, expenses, and lender criteria.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="flex-1 relative bg-gray-100">
        <PropertyMap maxPrice={maxPropertyPrice} />

        {/* CTA to connect with a broker */}
        <div className="absolute top-6 right-6 z-30">
          <button
            onClick={() => setBrokerOpen(true)}
            className="bg-primary text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-primary/90"
          >
            Talk to a broker
          </button>
        </div>
      </div>

      <BrokerConnectModal open={brokerOpen} onClose={() => setBrokerOpen(false)} />
    </div>
  )
}

export default function CalculatorPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading calculator...</p>
        </div>
      </div>
    }>
      <CalculatorContent />
    </Suspense>
  )
}

