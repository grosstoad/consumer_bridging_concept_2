'use client'

import { useState } from 'react'
import { X, Phone, Mail, Building2, ShieldCheck } from 'lucide-react'

export default function BrokerConnectModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  // Mortgage Choice brand colours (approx.): teal and navy
  const MC_PRIMARY = '#00A6A8'
  const MC_PRIMARY_HOVER = '#008f91'
  const MC_NAVY = '#003B49'

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [preferred, setPreferred] = useState<'phone' | 'email'>('phone')
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setSubmitting(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Lead submitted', { fullName, email, phone, preferred, consent })
    setSubmitting(false)
    onClose()
  }

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 overflow-hidden">
        {/* Brand top border */}
        <div style={{ height: 4, background: MC_PRIMARY }} />
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Talk to a home loan expert</h3>
            <p className="text-sm text-gray-600">Get tailored advice for bridging and your next purchase</p>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Broker Card */}
          <div className="md:col-span-2 p-6 bg-gray-50 border-r border-gray-200">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&h=240&fit=crop&q=80"
                alt="Broker headshot"
                className="w-16 h-16 rounded-full object-cover border border-white shadow"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Alex Thompson</h4>
                <p className="text-sm text-gray-600">Senior Mortgage Broker</p>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <Building2 className="w-4 h-4 mr-1" />
                  <span style={{ color: MC_NAVY, fontWeight: 600 }}>Mortgage Choice</span> • ACL 382869
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2" style={{ color: MC_PRIMARY }} />
                <a href="tel:+611300555010" className="hover:text-primary">1300 555 010</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-4 h-4 mr-2" style={{ color: MC_PRIMARY }} />
                <a href="mailto:alex@mortgagechoice.com.au" className="hover:text-primary">alex@mortgagechoice.com.au</a>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200 text-sm text-gray-700">
              <p>
                With 12+ years experience, Alex specialises in bridging loans and complex scenarios so you can move with confidence.
              </p>
            </div>
          </div>

          {/* Lead Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="04xx xxx xxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred contact</label>
              <div className="flex items-center space-x-4 text-sm">
                <label className="inline-flex items-center space-x-2">
                  <input type="radio" name="preferred" value="phone" checked={preferred==='phone'} onChange={() => setPreferred('phone')} />
                  <span>Phone</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input type="radio" name="preferred" value="email" checked={preferred==='email'} onChange={() => setPreferred('email')} />
                  <span>Email</span>
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-xs text-gray-700">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="leading-relaxed">
                I consent to be contacted by <span className="font-semibold" style={{ color: MC_NAVY }}>Mortgage Choice</span> to discuss my home loan options. My details will be handled in accordance with Mortgage Choice’s Privacy Policy and I understand this is not a credit approval.
              </label>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center text-gray-600 text-xs">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Secure & confidential
              </div>
              <button
                type="submit"
                disabled={!consent || submitting}
                className="text-white font-semibold px-5 py-3 rounded-lg shadow disabled:opacity-50"
                style={{ background: MC_PRIMARY }}
                onMouseEnter={(e) => (e.currentTarget.style.background = MC_PRIMARY_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = MC_PRIMARY)}
              >
                {submitting ? 'Sending...' : 'Request a call back'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


