"use client";

import Image from "next/image";
import { Award, GraduationCap, Heart, Users, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750" 
                alt="Dra. Fernanda Cristina - Dentista Odonto Excellence BH" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">18+</p>
                <p className="text-white/90 text-sm">Anos de experiência</p>
              </div>
            </div>
            {/* CRO Badge */}
            <div className="absolute -top-4 -left-4 bg-primary rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-white font-semibold text-sm">CRO-MG 45678</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre a Profissional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
              Cuidando do seu sorriso<br />
              <span className="text-gradient">com excelência e humanização</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Olá! Sou a <strong>Dra. Fernanda Cristina</strong>, cirurgiã-dentista CRO-MG 45678, 
              especialista em Ortodontia, Implantodontia e Estética Dental. Minha missão é 
              transformar sorrisos e vidas através de um atendimento de excelência e técnicas odontológicas modernas.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Formada pela UFMG com especialização na área de ortodontia avançada, atendo há mais 
              de 18 anos com foco em oferecer tratamentos sem dor e resultados naturais. 
              Em 2010 fundei a Odonto Excellence BH com o compromisso de tratar cada paciente 
              como família, não como número.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">5.000+</p>
                <p className="text-sm text-gray-500">Pacientes</p>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-4 text-center">
                <Trophy className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">12+</p>
                <p className="text-sm text-gray-500">Prêmios</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-4 text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">98%</p>
                <p className="text-sm text-gray-500">Satisfação</p>
              </div>
            </div>
            
            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Formação</p>
                  <p className="text-gray-600 text-sm">CRO-MG 45678 - UFMG (Mestrado em Ortodontia)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Especializações</p>
                  <p className="text-gray-600 text-sm">Ortodontia (Mestrado), Implantodontia, Estética Dental</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Filosofia</p>
                  <p className="text-gray-600 text-sm">Atendimento sem dor e centrado no paciente</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5531999999999"
                target="_blank"
                className="btn-primary text-center"
              >
                Agendar Consulta
              </a>
              <a 
                href="tel:3133333333"
                className="btn-secondary text-center"
              >
                Ligar para Clínica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

