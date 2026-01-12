"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const quickMessages = [
  { label: "Agendar consulta", message: "Olá! Gostaria de agendar uma consulta na Odonto Excellence BH." },
  { label: "Orçamento implante", message: "Olá! Gostaria de informações sobre implantes dentários." },
  { label: "Clareamento", message: "Olá! Quero saber mais sobre clareamento dental." },
  { label: "Localização", message: "Olá! Como chegar na clínica no Centro de BH?" }
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531999999999?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 mb-2 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Odonto Excellence BH</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Online agora
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Olá! Como podemos ajudar você hoje?
            </p>
            
            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMessage(item.message)}
                  className="w-full text-left px-4 py-3 bg-surface rounded-xl text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                Resposta em até 1 hora
              </p>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 ${
            isOpen ? "bg-gray-600" : "animate-pulse-soft"
          }`}
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-bounce">
            1
          </div>
        )}
      </div>
      
      {/* Back to Top Button (Optional) */}
      <div 
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-200 text-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-300 hover:scale-110 transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      </div>
    </>
  );
}

