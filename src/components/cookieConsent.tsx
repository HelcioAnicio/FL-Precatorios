import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-between gap-5 bg-gray-950 p-4 text-white shadow-lg md:flex-row">
      <p className="mb-2 text-sm md:mb-0">
        Este site utiliza cookies para melhorar a sua experiência. Ao continuar
        navegando, você concorda com nossa Política de Privacidade.
      </p>
      <button
        onClick={handleAccept}
        className="cursor-pointer rounded-md bg-[#CF9A2A] px-5 py-2 font-semibold transition-all duration-300 hover:bg-white hover:text-[#CF9A2A] focus:ring-2 focus:ring-[#CF9A2A] focus:ring-offset-2 focus:outline active:bg-orange-200"
      >
        Aceitar
      </button>
      <button
        onClick={() => setShowPopup(false)}
        className="flex items-center gap-3 rounded-md bg-[#FFFFFF] px-5 py-2 text-[#B2821A] transition hover:bg-[#CF9A2A] hover:text-white focus-visible:ring"
      >
        Negar
      </button>
    </div>
  );
}
