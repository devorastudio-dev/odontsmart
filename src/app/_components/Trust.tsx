"use client";

import { Star, Award, Clock, Shield, MapPin } from "lucide-react";

const reviews = [
  {
    name: "Roberto Silva",
    rating: 5,
    text: "Atendimento excelente em BH! Nunca tive medo de ir ao dentista depois que conheci essa clínica.",
    date: "2 semanas atrás"
  },
  {
    name: "Carla Mendes",
    rating: 5,
    text: "Equipe super atenciosa e profissional. Meu clareamento ficou perfeito! Recomendo no centro de BH.",
    date: "1 mês atrás"
  },
  {
    name: "Marcos Paulo",
    rating: 5,
    text: "Ótima estrutura e profissionais qualificados. Recomendo para toda a família em Belo Horizonte.",
    date: "3 semanas atrás"
  }
];

export default function Trust() {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">18+</p>
              <p className="text-sm text-gray-500">Anos de experiência</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600 fill-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">4.9</p>
              <p className="text-sm text-gray-500">Nota Google</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">CRO-MG</p>
              <p className="text-sm text-gray-500">45678</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">5.000+</p>
              <p className="text-sm text-gray-500">Pacientes atendidos</p>
            </div>
          </div>
        </div>
        
        {/* Google Reviews */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="text-green-700 font-medium">4.9/5 baseado em 247 avaliações</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Odonto Excellence BH - Av. Afonso Pena</span>
          </div>
        </div>
        
        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <p className="font-semibold text-gray-800">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

