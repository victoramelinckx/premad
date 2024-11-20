import Script from "next/script";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    name: "Jdenx Solutions",
    image: "https://www.jdenxsolutions.com/imagenes/Logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2900 NW 79 Av",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33166",
      addressCountry: "US",
    },
    url: "https://www.jdenxsolutions.com",
    telephone: "+17866431006",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/jd_solutions/profilecard/?igsh=aHZnM2pzcjQ0ZHpy",
    ],
  };

  return (
    <Script id="schema-markup" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
};

export default SchemaMarkup;
