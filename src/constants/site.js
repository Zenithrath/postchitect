/**
 * Central site configuration.
 * Replace contact details and links here — every section reads from this file.
 */
export const SITE = {
  name: "POSTCHITECT",
  tagline: "Drafter & Modelling",
  whatsapp: {
    number: "+62 877-6619-5531",
    display: "+62 877-6619-5531",
    defaultMessage:
      "Hello Postchitect, I would like to consult about a design project.",
  },
  email: "hello@postchitect.com",
  instagram: {
    handle: "@postchitect",
    url: "https://www.instagram.com/postchitect/",
  },
  credit: "Designed & Developed by Dignify",
  copyrightYear: 2026,
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp.number.replace(
  /\D/g,
  ""
)}?text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`;
