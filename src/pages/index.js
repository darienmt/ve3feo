import * as React from "react"
import ve3feoMorse from '../images/ve3feo-morse-500.png'
import ContactsTab from './ContactsTab'
import ClubsTab from './ClubsTab'
import LocationTab from './LocationTab'
import "@fontsource/orbitron/latin.css"
import buildDateData from '../build-date.json';

const IndexPage = () => (
  <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 p-8 font-sans max-w-2xl mx-auto shadow-lg rounded-lg mt-8">
    <header className="w-full flex flex-col items-center mb-8">
      <div className="flex flex-row items-center w-64 h-44 mb-2 gap-8">
        <span className="text-blue-700 text-[4rem] lg:text-[5rem] font-black tracking-widest drop-shadow-lg bg-white/80 px-4 py-1 rounded uppercase shadow-md" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          VE3FEO
        </span>
      </div>
    </header>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b border-blue-100 pb-1">
        About VE3FEO
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/80 rounded-xl shadow p-6">
        <div>
          <p className="text-gray-700 text-base mb-2">Hi! I’m <span className="font-semibold text-blue-700">Darien</span>, an amateur radio operator based in Ontario, Canada. I enjoy nets, SSB(sometimes), digital modes, and Morse code (CW). I’m a member of several radio clubs and love making contacts around the world.</p>
          <p className="text-gray-600 text-sm">This site is a work in progress—check back for updates, logs, and more ham radio content!</p>
        </div>
        <img src={ve3feoMorse} alt="VE3FEO Morse Code" className="w-28 h-28 object-contain rounded-full shadow" />
      </div>
    </section>
    {/* Pure HTML/CSS Tabs - All tab controls and panels must be siblings */}
    <div className="mb-8">
      <div className="relative flex border-b border-blue-200 mb-4" role="tablist">
        <input type="radio" name="tabset" id="tab-contacts" defaultChecked className="hidden" />
        <label htmlFor="tab-contacts" className="cursor-pointer transition focus:outline-none border-b-2 bg-blue-50 text-gray-500 hover:text-blue-700 hover:bg-white border-transparent focus-visible:ring-2 focus-visible:ring-blue-400 px-6 py-3 rounded-t-2xl font-bold text-lg tab-label">Last 15 contacts</label>
        <input type="radio" name="tabset" id="tab-clubs" className="hidden" />
        <label htmlFor="tab-clubs" className="cursor-pointer transition focus:outline-none border-b-2 bg-blue-50 text-gray-500 hover:text-blue-700 hover:bg-white border-transparent focus-visible:ring-2 focus-visible:ring-blue-400 px-6 py-3 rounded-t-2xl font-bold text-lg tab-label">Radio clubs</label>
        <input type="radio" name="tabset" id="tab-location" className="hidden" />
        <label htmlFor="tab-location" className="cursor-pointer transition focus:outline-none border-b-2 bg-blue-50 text-gray-500 hover:text-blue-700 hover:bg-white border-transparent focus-visible:ring-2 focus-visible:ring-blue-400 px-6 py-3 rounded-t-2xl font-bold text-lg tab-label">Location</label>
        {/* Tab panels as siblings, in the same parent as the radios/labels */}
        <div className="tab-panel" id="panel-contacts">
          <ContactsTab />
        </div>
        <div className="tab-panel" id="panel-clubs">
          <ClubsTab />
        </div>
        <div className="tab-panel" id="panel-location">
          <LocationTab />
        </div>
      </div>
    </div>
    <footer className="mt-10 text-center text-gray-400 text-sm border-t border-gray-100 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <span>&copy; {new Date().getFullYear()} VE3FEO &middot; Last updated: {buildDateData.buildDate ? new Date(buildDateData.buildDate).toLocaleString() : new Date().toLocaleString()}</span>
    </footer>
    <style>{`
      /* Show only the selected tab panel using adjacent sibling selectors */
      #tab-contacts:checked ~ #panel-contacts {
        display: block;
      }
      #tab-clubs:checked ~ #panel-clubs {
        display: block;
      }
      #tab-location:checked ~ #panel-location {
        display: block;
      }
      .tab-panel {
        display: none;
      }
      /* Style the active tab label */
      #tab-contacts:checked + label,
      #tab-clubs:checked + label,
      #tab-location:checked + label {
        background: #fff;
        color: #2563eb;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border-bottom: 2px solid #2563eb;
        z-index: 10;
      }
    `}</style>
  </main>
)

export default IndexPage

export const Head = () => (
  <>
    <title>VE3FEO - Amateur Radio Operator</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
)
