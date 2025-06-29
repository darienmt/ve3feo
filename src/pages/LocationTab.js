import React from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyAv80U70-3sZ1aaJMHE672gp_cLfdqMRNE";

const LocationTab = () => (
  <div id="tab-panel-location" role="tabpanel">
    <div className="rounded-lg shadow bg-white p-8 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Location</h3>
      <p className="text-gray-700 mb-2">Darien operates from Burlington, Ontario, Canada.</p>
      <div className="flex justify-center my-6">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Burlington,ON,Canada&zoom=12&size=400x256&markers=color:red%7Clabel:B%7C43.3256,-79.7990&key=${GOOGLE_MAPS_API_KEY}`}
          alt="Map of Burlington, Ontario, Canada"
          className="w-full max-w-md h-64 border-2 border-blue-200 rounded-lg shadow object-cover"
        />
      </div>
      <p className="text-gray-600 text-sm">Grid: FN03 (approximate, for privacy)</p>
    </div>
  </div>
);

export default LocationTab;
