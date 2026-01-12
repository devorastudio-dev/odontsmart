"use client";

import { Phone, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-surface to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Seu sorriso saudável<br />
            <span className="text-amber-400">começa com uma consulta</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Não deixe para depois o que pode transformar sua vida hoje. 
            Agende sua avaliação gratuita e descubra como podemos ajudar você a sorrir novamente em Belo Horizonte.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5531999999999"
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-3 group"
            >
              <Phone className="w-5 h-5" />
              Agendar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:3133333333"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar para Clínica
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-10 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              Avaliação gratuita
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-white" />
              Resposta em até 1h
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              Primeira vez: R$ 150
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

