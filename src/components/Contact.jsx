import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In this template we just simulate sending.
    setTimeout(() => setStatus('Message sent. Our team will contact you shortly.'), 800)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">Contact & Quote Request</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium text-lg">Send a Request</h3>
            <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required name="name" placeholder="Your Name" className="bg-black/40 text-white placeholder-slate-400 border border-white/10 rounded-md px-3 py-2" />
                <input required name="company" placeholder="Company" className="bg-black/40 text-white placeholder-slate-400 border border-white/10 rounded-md px-3 py-2" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="email" name="email" placeholder="Email" className="bg-black/40 text-white placeholder-slate-400 border border-white/10 rounded-md px-3 py-2" />
                <input required name="phone" placeholder="Phone" className="bg-black/40 text-white placeholder-slate-400 border border-white/10 rounded-md px-3 py-2" />
              </div>
              <select name="interest" className="bg-black/40 text-white border border-white/10 rounded-md px-3 py-2">
                <option className="text-black" value="Supplies">Industrial Supplies</option>
                <option className="text-black" value="Services">Industrial Services</option>
                <option className="text-black" value="Rental">Equipment Rental</option>
                <option className="text-black" value="Construction">Construction Support</option>
              </select>
              <textarea name="message" rows="4" placeholder="Project details or item list" className="bg-black/40 text-white placeholder-slate-400 border border-white/10 rounded-md px-3 py-2" />
              <button className="inline-flex justify-center items-center px-5 py-2.5 bg-white text-black rounded-md font-medium hover:bg-slate-100 transition">Submit</button>
              {status && <p className="text-emerald-300 text-sm">{status}</p>}
            </form>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium text-lg">Contact Details</h3>
            <div className="mt-4 space-y-2 text-slate-300 text-sm">
              <p><span className="text-slate-400">Address:</span> Your address here, Saudi Arabia</p>
              <p><span className="text-slate-400">Phone:</span> +966 5X XXX XXXX</p>
              <p><span className="text-slate-400">Email:</span> info@gatereliance.com</p>
              <p><span className="text-slate-400">Hours:</span> Sun–Thu, 8:00–17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
