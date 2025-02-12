import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/client_logos/cli_sb.png",
  "/client_logos/cli_fujitsu.png",
  "/client_logos/cli_moetai.png",
  "/client_logos/cli_hitachi.png",
  "/client_logos/cli_astellas.png",
  "/client_logos/cli_yec.png",
  "/client_logos/cli_tan.png",
  "/client_logos/cli_bms.png",
  "/client_logos/cli_liigo.png",
  "/client_logos/cli_msad.jpg",
  "/client_logos/cli_evident.jpg",
];

const LogoMarquee: React.FC = () => {
  return (
    <Marquee>
      {logos.map((logo, index) => (
        <div key={index} className="flex-none mx-2 md:mx-4">
          <Image
            src={logo}
            alt={`Logo ${index}`}
            width={400}
            height={400}
            className="w-24 md:w-48 h-auto"
          />
        </div>
      ))}
      {logos.map((logo, index) => (
        <div key={`duplicate_${index}`} className="flex-none mx-4">
          <Image
            src={logo}
            alt={`Logo ${index}`}
            width={400}
            height={400}
            className="w-24 md:w-48 h-auto"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
