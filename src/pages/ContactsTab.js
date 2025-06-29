import React from "react";

const ContactsTab = () => (
  <div id="tab-panel-contacts" role="tabpanel">
    <div className="rounded-lg shadow bg-white">
      <iframe
        title="QRZ Log"
        className="w-full min-w-[420px] h-[500px] border-0 rounded-lg"
        src="https://logbook.qrz.com/lbstat/VE3FEO/"
        scrolling="no"
        style={{ overflow: 'hidden' }}
      ></iframe>
    </div>
  </div>
);

export default ContactsTab;
