"use client";

import { Star, ChevronRight, Award, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white animate-fade-in-up">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9/5 Avaliação Google - Belo Horizonte</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up stagger-1">
              Seu sorriso saudável<span className="block text-amber-400">começa aqui em BH</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-white/90 max-w-xl animate-fade-in-up stagger-2">
              Tratamentos odontológicos de excelência com tecnologia de ponta e atendimento humanizado. 
              Cuide do seu sorriso com quem mais entende da área em Belo Horizonte.
            </p>
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 animate-fade-in-up stagger-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Av. Afonso Pena, 2000 - Centro, BH</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
              <a 
                href="https://wa.me/5531999999999" 
                target="_blank"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
              >
                Agendar Avaliação
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:3133333333"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ligar Agora
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/80 text-sm justify-center lg:justify-start animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>18+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>CRO-MG 45678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Atendimento sem dor</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-up stagger-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600" 
                alt="Clínica odontológica moderna Odonto Excellence BH" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-500 fill-green-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">5.000+</p>
                  <p className="text-sm text-gray-500">Sorrisos transformados</p>
                </div>
              </div>
            </div>
            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">TOP 10</p>
                  <p className="text-sm text-gray-500">Clínicas de BH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

