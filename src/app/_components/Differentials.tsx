"use client";

import { 
  Zap, 
  CreditCard, 
  MapPin, 
  Clock,
  ShieldCheck,
  Smile,
  Star,
  CalendarCheck
} from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos e técnicas avançadas como scanner 3D, radiografia digital e laserterapia para tratamentos mais precisos e confortáveis.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: CreditCard,
    title: "Parcelamento Facilitado",
    description: "Pagamento em até 12x no cartão ou condições especiais à vista. Seu sorriso cabe no seu bolso sem burocracias.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: ShieldCheck,
    title: "Atendimento Sem Dor",
    description: "Técnicas anestésicas modernas, sedação consciente e atendimento humanizado para você relaxar durante o tratamento.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Online",
    description: "Agende sua consulta 24h pelo site ou WhatsApp. Escolha o melhor horário para sua rotina em Belo Horizonte.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    description: "Fácil acesso no Centro de BH, próximo ao metrô Central. Estacionamento conveniado e varias opções de transporte.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Star,
    title: "Avaliação Completa",
    description: "Diagnóstico detalhado com fotos, radiografias e planejamento digital. Você vê o resultado antes de começar!",
    color: "bg-pink-100 text-pink-600"
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Diferenciais que fazem<br />
            <span className="text-gradient">a diferença no seu tratamento em BH</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reunimos tudo o que você precisa para ter uma experiência odontológica 
            tranquila, moderna e acessível no centro de Belo Horizonte.
          </p>
        </div>
        
        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Promise Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Nossa promessa para você
              </h3>
              <p className="text-white/90">
                Atendimento transparente, sem dor e com resultados que superam expectativas. Sua satisfação é nosso compromisso!
              </p>
            </div>
            <a 
              href="https://wa.me/5531999999999"
              target="_blank"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Experimente Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

