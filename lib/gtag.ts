// Google Ads (gtag.js)
export const GOOGLE_ADS_ID = "AW-18415657066";

// Konverzija: "Klikni i pozovi" (klik na broj telefona)
export const PHONE_CALL_CONVERSION_LABEL = "AW-18415657066/qslcCK-d6ewcEOrAos1E";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Sigurnosna brana protiv dvostrukog prijavljivanja konverzije za isti klik.
// Glavni uzrok (ugnježđeni `<button>` u `<a>`) je uklonjen — telefonski
// linkovi su sada jedan `<a>` element. Guard ostaje za slučaj da mobilni
// browser okine `onClick` dva puta (npr. bafovani klik posle native "Pozovi"
// dijaloga na iOS-u).
let lastPhoneCallConversionAt = 0;
const PHONE_CALL_DEDUPE_MS = 3000;

/**
 * Prijavljuje Google Ads konverziju za klik na telefon.
 *
 * Kod `tel:` linkova stranica se ne osvežava (otvara se aplikacija za pozivanje),
 * pa nije potrebno odlagati navigaciju preko `event_callback`. Ako se ipak
 * prosledi `url`, ponaša se kao Google-ov originalni `gtag_report_conversion`.
 */
export function reportPhoneCallConversion(url?: string): boolean {
  const navigate = () => {
    if (typeof url !== "undefined") window.location.href = url;
  };

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    navigate();
    return false;
  }

  const now = Date.now();
  if (now - lastPhoneCallConversionAt < PHONE_CALL_DEDUPE_MS) {
    navigate();
    return false;
  }
  lastPhoneCallConversionAt = now;

  window.gtag("event", "conversion", {
    send_to: PHONE_CALL_CONVERSION_LABEL,
    value: 1.0,
    currency: "RSD",
    event_callback: typeof url !== "undefined" ? navigate : undefined,
  });

  return false;
}
