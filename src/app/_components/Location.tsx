"use client";

import { MapPin, Phone, Clock, Mail, ChevronRight, Car, Bus } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Onde estamos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Venha nos visitar em<br />
            <span className="text-gradient">Belo Horizonte</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Nossa clínica está em uma localização privilegiada no centro de BH, 
            de fácil acesso e com várias opções de transporte e estacionamento.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Map */}
          <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg min-h-100 lg:min-h-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.976792547674!2d-43.93706782488056!3d-19.9208309814125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e54c048f9b%3A0x3b8a3a8c0c8c0c8c!2sAv.%20Afonso%20Pena%2C%202000%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-87.5 lg:h-125"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Odonto Excellence BH"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-5">
            {/* Address */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Endereço</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Av. Afonso Pena, 2000 - Conj. 1501<br />
                    Centro, Belo Horizonte - MG<br />
                    CEP 30130-008
                  </p>
                  <a 
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-primary font-medium text-xs md:text-sm mt-2 hover:underline"
                  >
                    Ver no Google Maps
                    <ChevronRight className="w-3 md:w-4 h-3 md:h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Telefone</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Estamos disponíveis para atender você</p>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="tel:3133333333"
                      className="bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm text-gray-800 transition-colors text-center"
                    >
                      (31) 3333-3333
                    </a>
                    <a 
                      href="https://wa.me/5531999999999"
                      target="_blank"
                      className="bg-green-500 hover:bg-green-600 px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-amber-100 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 md:w-6 h-5 md:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Horário de Atendimento</h3>
                  <div className="space-y-2 text-xs md:text-sm text-gray-600">
                    <div className="flex justify-between gap-4">
                      <span>Segunda a Sexta</span>
                      <span className="font-medium">8h às 18h</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sábado</span>
                      <span className="font-medium">8h às 14h</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Domingo</span>
                      <span className="font-medium text-gray-400">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* How to Get There */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Como Chegar</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-blue-100 rounded flex items-center justify-center shrink-0">
                    <Car className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-xs md:text-sm">Estacionamento</p>
                    <p className="text-gray-600 text-xs">Conveniado na lateral</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-9 md:w-10 h-9 md:h-10 bg-green-100 rounded flex items-center justify-center shrink-0">
                    <Bus className="w-4 md:w-5 h-4 md:h-5 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-xs md:text-sm">Metrô</p>
                    <p className="text-gray-600 text-xs">5min da Central</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">E-mail</h3>
                  <p className="text-xs md:text-sm text-gray-600 break-all">contato@odontoexcellencebh.com.br</p>
                  <a 
                    href="mailto:contato@odontoexcellencebh.com.br"
                    className="inline-flex items-center gap-1 text-primary font-medium text-xs md:text-sm mt-2 hover:underline"
                  >
                    Enviar e-mail
                    <ChevronRight className="w-3 md:w-4 h-3 md:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
