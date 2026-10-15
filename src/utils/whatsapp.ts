export const DEALERSHIP_WHATSAPP_NUMBER = "917045169141";

/**
 * Generates a wa.me URL for the specified message and phone number.
 */
export function getWhatsAppUrl(message: string, phone: string = DEALERSHIP_WHATSAPP_NUMBER): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp with the specified message in a new window/tab,
 * falling back to navigating current window if popups are blocked.
 */
export function openWhatsApp(message: string, phone: string = DEALERSHIP_WHATSAPP_NUMBER): string {
  const url = getWhatsAppUrl(message, phone);
  if (typeof window !== "undefined") {
    try {
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  }
  return url;
}
