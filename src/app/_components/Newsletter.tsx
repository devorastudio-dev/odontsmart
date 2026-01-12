"use client";

import { useState } from "react";
import { Mail, Gift, ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 md:p-12 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
                <Gift className="w-4 h-4" />
                <span>E-book Grátis</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Receba dicas exclusivas<br />
                <span className="text-amber-400">para cuidar do seu sorriso</span>
              </h2>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Baixe nosso e-book <strong>"10 Perguntas Sobre Saúde Bucal"</strong> 
                e receba semanalmente conteúdos sobre odontologia, dicas de cuidados 
                e novidades da Odonto Excellence BH.
              </p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-amber-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                    >
                      Quero Receber
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-white/70 text-sm">
                    🔒 Não spam. Você pode cancelar quando quiser.
                  </p>
                </form>
              ) : (
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Obrigado por se cadastrar!
                  </h3>
                  <p className="text-white/90">
                    Em breve você receberá o e-book no seu e-mail: <strong>{email}</strong>
                  </p>
                </div>
              )}
            </div>
            
            {/* Image Side */}
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-xs mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    E-book Grátis
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    10 Perguntas Sobre Saúde Bucal
                  </p>
                  <div className="flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Baixado por 2.500+ pessoas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { number: "5.000+", label: "Pacientes cadastrados" },
            { number: "98%", label: "Aprovaram o conteúdo" },
            { number: "Gratuito", label: "Para sempre" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-primary">{item.number}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

