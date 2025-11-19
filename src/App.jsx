import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { Grid } from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      <Section id="supplies" title="Industrial Supplies" eyebrow="Products">
        <Grid
          items=[
            {
              title: 'Bearings',
              points: ['Ball, roller, spherical', 'Brands on request', 'Traceable supply'],
            },
            {
              title: 'Fasteners',
              points: ['Bolts, nuts, studs', 'Carbon & stainless', 'Metric & imperial'],
            },
            {
              title: 'Valves',
              points: ['Gate, globe, check, ball', 'API/ANSI compliant', 'Material & test certificates'],
            },
            {
              title: 'Safety Gear',
              points: ['PPE, helmets, gloves', 'Fall protection', 'Approved suppliers'],
            },
          ]
        />
      </Section>

      <Section id="services" title="Industrial Services" eyebrow="Execution">
        <Grid
          items=[
            {
              title: 'Mechanical Maintenance',
              points: ['Pumps, compressors, gearboxes', 'Shutdown support', 'Predictive & corrective'],
            },
            {
              title: 'Electrical Work',
              points: ['LV/MV installation', 'Panels & cabling', 'Testing & commissioning'],
            },
            {
              title: 'Motor Rewinding',
              points: ['AC/DC motors', 'Balancing & alignment', 'Warranty-backed'],
            },
          ]
        />
      </Section>

      <Section id="rental" title="Heavy Equipment Rental" eyebrow="Fleet">
        <Grid
          items=[
            {
              title: 'Lifting',
              points: ['Cranes, forklifts, manlifts', 'Certified operators', 'On-site mobilization'],
            },
            {
              title: 'Earthmoving',
              points: ['Excavators, loaders, skid steers', 'Fuel & maintenance plans', 'Short and long term'],
            },
            {
              title: 'Support',
              points: ['Generators, compressors, lighting', '24/7 callout', 'Safety-first operations'],
            },
          ]
        />
      </Section>

      <Section id="construction" title="Construction Support" eyebrow="Projects">
        <Grid
          items=[
            {
              title: 'Site Services',
              points: ['Scaffolding, rigging', 'Site logistics', 'Permit compliance'],
            },
            {
              title: 'Fabrication',
              points: ['Piping spools, skids', 'Welding & NDT', 'Shop & field'],
            },
            {
              title: 'Civil Works',
              points: ['Foundations, trenches', 'Fencing & roads', 'HSE supervision'],
            },
          ]
        />
      </Section>

      <Section id="industries" title="Industries Served" eyebrow="Expertise">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Oil & Gas',
            'Petrochemicals',
            'Power & Utilities',
            'Steel & Metals',
            'Marine',
            'Food & Beverage',
          ].map((i) => (
            <div key={i} className="bg-slate-900/60 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-white font-medium">{i}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="About Gate of Reliance Co" eyebrow="Company">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              We supply critical industrial products and deliver technical services with speed and precision. Our teams operate across Saudi Arabia and Bahrain, supporting maintenance, shutdowns, and projects. We work to international standards and local regulations. Safety drives every decision.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Experienced multi-discipline technicians</li>
              <li>• Documented QA/QC and full traceability</li>
              <li>• Vendor network for fast sourcing</li>
              <li>• Strong logistics and on-time delivery</li>
            </ul>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              We are built for reliability. From motors to valves, from electrical panels to scaffolding, we bring the right parts and the right people. Our operational reach covers the Kingdom’s industrial hubs and extends to Bahrain.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Compliance-first culture and HSE focus</li>
              <li>• Technical expertise across mechanical and electrical</li>
              <li>• Responsive support and clear communication</li>
              <li>• Partner mindset for long-term value</li>
            </ul>
          </div>
        </div>
      </Section>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
