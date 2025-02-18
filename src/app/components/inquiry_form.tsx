"use client";

import { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "",
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID ?? "",
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-lg md:max-w-3xl lg:max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div id="hubspot-form"></div>
    </div>
  );
};

export default HubSpotForm;
