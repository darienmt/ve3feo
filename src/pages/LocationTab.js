import React from "react";

const LocationTab = () => (
  <div id="tab-panel-location" role="tabpanel">
    <div className="rounded-lg shadow bg-white p-8 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Location</h3>
      <p className="text-gray-700 mb-2">Darien operates from Burlington, Ontario, Canada.</p>
      <div className="flex justify-center my-6">
        <iframe
          title="Maidenhead Grid Locator Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-79.860%2C43.300%2C-79.700%2C43.400&amp;layer=mapnik"
          className="w-full max-w-md h-64 border-2 border-blue-200 rounded-lg shadow"
          allowFullScreen=""
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <p className="text-gray-600 text-sm">Grid: FN03 (approximate, for privacy)</p>
    </div>
  </div>
);

export default LocationTab;
