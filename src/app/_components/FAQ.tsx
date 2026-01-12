"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa um implante dentário?",
    answer: "O valor do implante dentário varia conforme cada caso. Em média, os valores começam a partir de R$ 3.500 por implante, incluindo a peça de titânio e o pilar. Oferecemos parcelamento em até 12x sem juros e condições especiais para múltiplos implantes. Agende uma avaliação para receber um orçamento personalizado."
  },
  {
    question: "O clareamento dental dói?",
    answer: "Não! O clareamento dental moderno é um procedimento indolor. Pode haver uma leve sensibilidade temporária (24-48 horas) que é facilmente controlada com凝胶 dessensibilizante. Utilizamos técnicas avançadas que protegem a gengiva e minimizam qualquer desconforto. Muitos pacientes dormem normalmente após o procedimento."
  },
  {
    question: "Qual a idade mínima para colocar aparelho?",
    answer: "Não existe idade mínima absoluta. A avaliação ortodôntica pode ser feita a partir dos 6-7 anos para verificar o desenvolvimento. Temos pacientes de 7 a 70 anos! Para crianças, utilizamos aparelhos ortopédicos que guiam o crescimento. adultos podem optar por aparelhos convencionais ou alinhadores invisíveis (Invisalign)."
  },
  {
    question: "Vocês atendem convênios odontológicos?",
    answer: "Sim! Aceitamos os principais convênios de Belo Horizonte, incluindo SulAmérica, Bradesco Dental, Amil Dental, Unimed Odonto e outros. Para convênios não atendidos, fornecemos toda a documentação para reembolso. Consulte nossa equipe para verificar se seu convênio é atendido."
  },
  {
    question: "Tem estacionamento na clínica?",
    answer: "Sim! Oferecemos estacionamento conveniado gratuito para pacientes na lateral do prédio da Av. Afonso Pena, 2000. Além disso, há opções de estacionamento público na região e fácil acesso ao metrô Central (5 minutos a pé). Toda a estrutura foi pensanda para sua comodidade."
  },
  {
    question: "Atendem crianças pequenas?",
    answer: "Com certeza! Nossa Dra. Fernanda tem especialização em Odontopediatria e ama atender os pequenos. Criamos um ambiente lúdico e acolhedor para que as crianças se sintam à vontade. A primeira visita deve ser feita assim que nascer o primeiro dentinho ou até 1 ano de idade, conforme recomendação da AAPD."
  },
  {
    question: "Quanto tempo dura o tratamento de canal?",
    answer: "Geralmente, o tratamento de canal é concluído em uma única sessão de 60 a 90 minutos. Casos mais complexos ou com infecção podem nécessitar 2-3 sessões. Utilizamos local anesthesia para garantir que você não sinta dor durante o procedimento. Após o tratamento, o dente é restaurado com coroa ou restauração para proteção."
  },
  {
    question: "Fazem agendamento de urgência?",
    answer: "Sim! Entendemos que dores de dente e emergências não esperam. Oferecemos vagas diárias para urgências. Se você está com dor intensa, inchaço ou algum problema urgente, entre em contato pelo WhatsApp (31) 99999-9999 e we'll prioritize seu atendimento no mesmo dia."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Perguntas Frequentes<br />
            <span className="text-gradient">sobre tratamentos dentários</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos tratamentos 
            odontológicos em Belo Horizonte.
          </p>
        </div>
        
        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    {index === 0 && (
                      <a 
                        href="https://wa.me/5531999999999"
                        target="_blank"
                        className="inline-flex items-center gap-2 mt-3 text-primary font-semibold hover:underline"
                      >
                        Solicitar orçamento
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5531999999999"
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

