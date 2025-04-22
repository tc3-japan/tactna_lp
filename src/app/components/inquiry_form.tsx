"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

const HubSpotForm = () => {
  const locale = useLocale();

  useEffect(() => {
    if (locale) {
      const script = document.createElement("script");
      const formId =
        locale === "ja"
          ? process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
          : process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_EN;
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "",
            formId: formId ?? "",
            target: "#hubspot-form",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [locale]);

  return (
    <div
      className="max-w-lg md:max-w-3xl lg:max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8"
      id="inquiry"
    >
      <div id="hubspot-form"></div>
    </div>
  );
};

export default HubSpotForm;
