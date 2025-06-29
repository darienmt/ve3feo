import React from "react";
import barcLogo from '../images/BARC-100.png';
import racLogo from '../images/rac-100.png';
import skccLogo from '../images/SKCCLogo-100.png';

const ClubsTab = () => (
  <div id="tab-panel-clubs" role="tabpanel">
    <br/>
    <div className="flex justify-center items-center mb-8 py-12">
      <div className="flex flex-row flex-wrap justify-center w-full gap-x-24 gap-y-24 p-16 bg-white/90 rounded-3xl shadow-inner max-w-2xl min-h-[150px]">
        <a href="https://www.barc.ca/" rel="noopener noreferrer" target="_blank" title="Burlington Amateur Radio Club" className="px-20 py-12">
          <img src={barcLogo} alt="Burlington Amateur Radio Club Logo" className="w-24 h-24 object-contain rounded-full shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">BARC</span>
        </a>
        <a href="https://www.rac.ca/" rel="noopener noreferrer" target="_blank" title="Radio Amateurs of Canada" className="px-20 py-12">
          <img src={racLogo} alt="Radio Amateurs of Canada Logo" className="w-24 h-24 object-contain rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">RAC</span>
        </a>
        <a href="https://www.skccgroup.com/" rel="noopener noreferrer" target="_blank" title="Straight Key Century Club" className="px-20 py-12">
          <img src={skccLogo} alt="Straight Key Century Club Logo" className="w-24 h-24 object-contain rounded-full shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <span className="block text-center text-xs text-gray-500 mt-2">SKCC</span>
        </a>
      </div>
    </div>
  </div>
);

export default ClubsTab;
