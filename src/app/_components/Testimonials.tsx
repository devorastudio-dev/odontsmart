"use client";

import { Star, Quote, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Juliana Costa",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150",
    treatment: "Clareamento + Lentes de Contato",
    rating: 5,
    text: "Sempre tive vergonha do meu sorriso. Depois do clareamento e das lentes, minha confiança mudou completamente. A Dra. Fernanda é uma profissional incrível! Recomendo para quem busca resultados naturais em BH.",
    beforeAfter: true,
    location: "Belo Horizonte"
  },
  {
    name: "Thiago Ribeiro",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150",
    treatment: "Implante Dentário",
    rating: 5,
    text: "Perdi um dente em um acidente e estava preocupado. O processo foi super tranquilo e hoje mal percebo que tenho um implante. Resultado impecável! Clínica excelente no centro de BH.",
    beforeAfter: false,
    location: "Contagem"
  },
  {
    name: "Patricia Santos",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150",
    treatment: "Aparelho Invisível",
    rating: 5,
    text: "Aos 35 anos, decidi corrigir meus dentes. O aparelho invisível foi a melhor decisão. Ninguém percebe e meus dentes estão ficando perfeitos! Atendimento diferenciado.",
    beforeAfter: false,
    location: "Belo Horizonte"
  },
  {
    name: "Marcelo Henrique",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150",
    treatment: "Reabilitação Oral Completa",
    rating: 5,
    text: "Depois de anos com medo do dentista, finalmente encontrei a clínica ideal. Tratamento sem dor do início ao fim. Meu sorriso foi completamente reconstruído. Gratidão!",
    beforeAfter: true,
    location: "Nova Lima"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            O que nossos pacientes<br />
            <span className="text-gradient">dizem sobre nós em BH</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 5.000 sorrisos transformados em Belo Horizonte e região. 
            Veja o que nossos pacientes têm a dizer sobre sua experiência conosco.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-surface rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Location Badge */}
              <div className="mb-3 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {testimonial.location}
              </div>
              
              {/* Before/After Badge */}
              {testimonial.beforeAfter && (
                <div className="mb-4 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Antes e Depois
                </div>
              )}
              
              {/* Patient Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Before/After Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Resultados Reais
              </h3>
              <p className="text-white/90 mb-6">
                Veja alguns dos nossos casos de sucesso em Belo Horizonte. Todos os pacientes 
                autorizaram a divulgação das imagens após a conclusão do tratamento.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-dark overflow-hidden bg-white/20">
                      <Image 
                        src={i === 1 ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100' : i === 2 ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100' : i === 3 ? 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100' : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100'}
                        alt="Patient"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white/90 text-sm">
                  <strong>5.000+</strong> sorrisos transformados em BH
                </p>
              </div>
              <a 
                href="https://wa.me/5531999999999"
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Ver mais casos
                <Play className="w-4 h-4" />
              </a>
            </div>
            
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600"
                alt="Antes e depois - Odonto Excellence BH"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-semibold text-gray-800">Casos Clínicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

