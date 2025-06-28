import * as React from "react"
import ve3feoMorse from '../images/ve3feo-morse-500.png'
import barcLogo from '../images/BARC-100.png'
import racLogo from '../images/rac-100.png'
import skccLogo from '../images/SKCCLogo-100.png'
import "@fontsource/orbitron/latin.css"

const IndexPage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 p-8 font-sans max-w-2xl mx-auto shadow-lg rounded-lg mt-8">
      <header className="w-full flex flex-col items-center mb-8">
        <div className="flex flex-row items-center w-64 h-44 mb-2 gap-8">
          <span className="text-blue-700 text-[4rem] lg:text-[5rem] font-black tracking-widest drop-shadow-lg bg-white/80 px-4 py-1 rounded uppercase shadow-md" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            VE3FEO
          </span></div>
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
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b border-blue-100 pb-1">Radio clubs</h2>
      <div className="flex flex-nowrap flex-wrap justify-center items-center mb-8 gap-x-48 gap-y-16">
        <a href="https://www.barc.ca/" rel="noopener noreferrer" target="_blank" title="Burlington Amateur Radio Club" className="px-12 py-4">
          <img src={barcLogo} alt="Burlington Amateur Radio Club Logo" className="w-24 h-24 object-contain rounded-full shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">BARC</span>
        </a>
        <a href="https://www.rac.ca/" rel="noopener noreferrer" target="_blank" title="Radio Amateurs of Canada" className="px-12 py-4">
          <img src={racLogo} alt="Radio Amateurs of Canada Logo" className="w-24 h-24 object-contain rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">RAC</span>
        </a>
        <a href="https://www.skccgroup.com/" rel="noopener noreferrer" target="_blank" title="Straight Key Century Club" className="px-12 py-4">
          <img src={skccLogo} alt="Straight Key Century Club Logo" className="w-24 h-24 object-contain rounded-full shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">SKCC</span>
        </a>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b border-blue-100 pb-1">Last 15 contacts</h2>
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <iframe
          title="QRZ Log"
          className="w-full min-w-[320px] h-[500px] border-0 rounded-lg"
          scrolling="yes"
          src="https://logbook.qrz.com/lbstat/VE3FEO/"
        ></iframe>
      </div>
      <footer className="mt-10 text-center text-gray-400 text-sm border-t border-gray-100 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <span>&copy; {new Date().getFullYear()} VE3FEO &middot; Last updated: {typeof process !== 'undefined' && process.env.BUILD_DATE ? new Date(process.env.BUILD_DATE).toLocaleString() : new Date().toLocaleString()}</span>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
