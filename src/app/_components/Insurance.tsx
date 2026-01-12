"use client";

import { CheckCircle, CreditCard, FileText } from "lucide-react";

const insurances = [
  { name: "SulAmérica Dental", logo: "SA", color: "bg-red-100 text-red-600" },
  { name: "Bradesco Dental", logo: "BD", color: "bg-orange-100 text-orange-600" },
  { name: "Amil Dental", logo: "AD", color: "bg-blue-100 text-blue-600" },
  { name: "Unimed Odonto", logo: "UO", color: "bg-green-100 text-green-600" },
  { name: "Dental Uni", logo: "DU", color: "bg-purple-100 text-purple-600" },
  { name: "Golden Cross", logo: "GC", color: "bg-yellow-100 text-yellow-600" },
  { name: "Porto Seguro", logo: "PS", color: "bg-cyan-100 text-cyan-600" },
  { name: "Interodonto", logo: "IO", color: "bg-pink-100 text-pink-600" }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Atendimento Imediato",
    description: "Sem carência para urgência e emergência"
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Parcelamento em até 12x sem juros no cartão"
  },
  {
    icon: FileText,
    title: "Documentação Completa",
    description: "Fornecemos autorização e comprovantes"
  }
];

export default function Insurance() {
  return (
    <section className="py-20 bg-gradient-to-b from-surface to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Convênios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mt-4 mb-4">
            Planes e Convênios<br />
            <span className="text-gradient">que aceitamos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Facilitamos o seu atendimento com os principais convênios odontológicos 
            de Belo Horizonte e região.
          </p>
        </div>
        
        {/* Insurance Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {insurances.map((insurance, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <div className={`w-16 h-16 ${insurance.color} rounded-2xl flex items-center justify-center mb-4`}>
                <span className="text-2xl font-bold">{insurance.logo}</span>
              </div>
              <p className="font-semibold text-gray-800">{insurance.name}</p>
            </div>
          ))}
        </div>
        
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Not Listed Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Seu convênio não está na lista?
              </h3>
              <p className="text-white/90 mb-6">
                Não se preocupe! Mesmo que seu plano odontológico não esteja listado, 
                fornecemos toda a documentação necessária para você solicitar reembolso 
                junto à sua operadora.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Emitimos nota fiscal completa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Relatório detalhado do tratamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Orientação para solicitação de reembolso</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4">Partial Payment Options</h4>
              <p className="text-white/90 mb-4 text-sm">
                Para pacientes sem convênio ou que preferem particular, 
                oferecemos condições especiais de pagamento.
              </p>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-2xl font-bold">12x</p>
                  <p className="text-white/80 text-sm">sem juros no cartão</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-2xl font-bold">5%</p>
                  <p className="text-white/80 text-sm">desconto à vista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5531999999999"
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Verificar Cobertura
          </a>
        </div>
      </div>
    </section>
  );
}

