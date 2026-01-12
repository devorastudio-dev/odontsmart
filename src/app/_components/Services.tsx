"use client";

import { 
  Smile, 
  Braces, 
  Zap, 
  Sparkles, 
  Heart,
  ChevronRight,
  Stethoscope,
  Bone,
  Baby
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Check-ups completos, limpezas, restaurações e tratamentos preventivos para manter sua saúde bucal em dia.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Braces,
    title: "Ortodontia",
    description: "Aparelhos dentários modernos, Invisalign e alinhadores invisíveis para corrigir seus dentes com conforto e discrição.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Bone,
    title: "Implantes Dentários",
    description: "Recupere seus dentes perdidos com implantes de titânio de alta tecnologia,Protocolo All-on-4 e reabilitação oral completa.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Sorrisos mais brancos e brilhantes com técnicas de clareamento a laser ou moldeiras, seguro e sem dor.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Heart,
    title: "Estética Dental",
    description: "Restaurações estéticas, lentes de contato dental, facetas de porcelana e harmonização do sorriso.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description: "Atendimento especial para crianças desde o primeiro dentinho. Ambiente lúdico e acolhedor para os pequenos.",
    color: "bg-cyan-100 text-cyan-600"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-surface to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mt-4 mb-4">
            Tudo que você precisa para<br />
            <span className="text-gradient">um sorriso perfeito em BH</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos tratamentos odontológicos completos com tecnologia de ponta 
            e atendimento humanizado para toda a família em Belo Horizonte.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group/btn">
                Quero saber mais
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Não sabe qual tratamento precisa?
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Agende uma avaliação gratuita e descubra o melhor plano de tratamento 
            para o seu caso específico. Nossa equipe está pronta para ajudar!
          </p>
          <a 
            href="https://wa.me/5531999999999"
            target="_blank"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

