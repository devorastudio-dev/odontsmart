"use client";

import { Check, Star, CreditCard } from "lucide-react";

const pricingTiers = [
  {
    name: "Avaliação",
    price: "R$ 150",
    description: "Consulta inicial com diagnóstico completo",
    features: [
      "Exame clínico completo",
      "Radiografia panorâmica",
      "Fotografias intraorais",
      "Planejamento personalizado",
      "Orçamento detalhado"
    ],
    highlight: false,
    cta: "Agendar Avaliação"
  },
  {
    name: "Clareamento",
    price: "R$ 1.200",
    period: "ou 4x de R$ 300",
    description: "Sorrisos mais brancos e brilhantes",
    features: [
      "Avaliação inicial",
      "Clareamento a laser (2 sessões)",
      "Moldeiras para manutenção",
      "Gel de retoque",
      "Orientação de cuidados"
    ],
    highlight: true,
    cta: "Agendar Clareamento"
  },
  {
    name: "Aparelho",
    price: "A partir de R$ 3.000",
    period: "ou 12x sem juros",
    description: "Correção Dental Completa",
    features: [
      "Documentação completa",
      "Aparelho fixo metal",
      "Manutenções mensais",
      "Contenção final",
      "Garantia do tratamento"
    ],
    highlight: false,
    cta: "Consultar Valores"
  },
  {
    name: "Implante",
    price: "R$ 3.500",
    period: "por elemento",
    description: "Reposição dental definitiva",
    features: [
      "Avaliação com tomografia",
      "Implante de titânio",
      "Pilar de cicatrização",
      "Coroa provisória",
      "Coroa definitiva em porcelana"
    ],
    highlight: false,
    cta: "Solicitar Orçamento"
  }
];

const commonPrices = [
  { procedure: "Limpeza Dental (Profilaxia)", price: "R$ 200 - R$ 300" },
  { procedure: "Restauração (Obturação)", price: "R$ 300 - R$ 600" },
  { procedure: "Tratamento de Canal", price: "R$ 800 - R$ 1.500" },
  { procedure: "Extração de Siso", price: "R$ 400 - R$ 1.000" },
  { procedure: "Facade de Porcelana", price: "R$ 2.000 - R$ 3.500" },
  { procedure: "Lente de Contato Dental", price: "R$ 2.500 - R$ 4.000" }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Transparência de Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Investimento no seu sorriso<br />
            <span className="text-gradient">em Belo Horizonte</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acreditamos em transparência total. Veja nossos principais tratamentos 
            e condições de pagamento. Sem surpresas!
          </p>
        </div>
        
        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                tier.highlight 
                  ? 'bg-gradient-to-br from-primary to-primary-dark text-white ring-4 ring-primary/20' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-800 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Mais Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-800'}`}>
                {tier.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-gray-800'}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <p className={`text-sm mt-1 ${tier.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                    {tier.period}
                  </p>
                )}
              </div>
              
              <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-amber-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${tier.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/5531999999999"
                target="_blank"
                className={`w-full py-3 rounded-full font-semibold text-center transition-colors block ${
                  tier.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        
        {/* Common Procedures Table */}
        <div className="bg-surface rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Procedimentos Frequentes
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Valores aproximados. O preço final pode variar conforme a complexidade do caso.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {commonPrices.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm"
              >
                <span className="text-gray-700">{item.procedure}</span>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Payment Info */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">
                Formas de Pagamento
              </h3>
              <p className="text-white/90 mb-6">
                Facilitamos seu pagamento para que você possa cuidar do seu sorriso 
                sem preocupações financeiras.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {['Cartão de Crédito', 'Cartão de Débito', 'PIX', 'Dinheiro', 'Boleto'].map((method) => (
                  <span 
                    key={method}
                    className="bg-white/20 px-4 py-2 rounded-full text-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4">
                <CreditCard className="w-10 h-10 text-amber-400" />
                <div>
                  <p className="font-bold">Parcelamento</p>
                  <p className="text-white/80 text-sm">Até 12x sem juros no cartão</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4">
                <Star className="w-10 h-10 text-green-400" />
                <div>
                  <p className="font-bold">Desconto à Vista</p>
                  <p className="text-white/80 text-sm">5% de desconto para pagamento antecipado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer um orçamento personalizado para o seu caso?
          </p>
          <a 
            href="https://wa.me/5531999999999"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

