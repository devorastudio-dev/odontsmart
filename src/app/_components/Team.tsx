"use client";

import Image from "next/image";
import { GraduationCap, Award, Heart, Star } from "lucide-react";

const team = [
  {
    name: "Dra. Fernanda Cristina",
    role: "Cirurgiã-Dentista - CRO-MG 45678",
    specialty: "Ortodontia e Estética Dental",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400",
    education: "Mestrado em Ortodontia - UFMG",
    experience: "18+ anos",
    rating: 5,
    bio: "Especialista em ortodontia e estética dental, fundadora da Odonto Excellence BH com foco em atendimento humanizado e sem dor.",
    instagram: "drafernandacristina"
  },
  {
    name: "Dr. Ricardo Mendes",
    role: "Cirurgião-Dentista - CRO-MG 45679",
    specialty: "Implantodontia e Cirurgia",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400",
    education: "Especialização em Implantodontia - USP",
    experience: "15+ anos",
    rating: 5,
    bio: "Especialista em implantes dentários e cirurgias orais, atua com as mais modernas técnicas de reabilitação oral.",
    instagram: "drricardomendes"
  },
  {
    name: "Dra. Camila Rocha",
    role: "Cirurgiã-Dentista - CRO-MG 45680",
    specialty: "Odontopediatria e Laserterapia",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400",
    education: "Especialização em Odontopediatria - UFRJ",
    experience: "12+ anos",
    rating: 5,
    bio: "Amada pelas crianças, é especialista em atendimento infantil e tratamentos a laser para maior conforto dos pequenos.",
    instagram: "dracamilarocha"
  },
  {
    name: "Dra. Larissa Ferreira",
    role: "Cirurgiã-Dentista - CRO-MG 45681",
    specialty: "Endodontia e Dentística",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400",
    education: "Mestrado em Endodontia - UNICAMP",
    experience: "10+ anos",
    rating: 5,
    bio: "Especialista em tratamentos de canal e restaurações estéticas, garantindo resultados naturais e duradouros.",
    instagram: "dralarissaferreira"
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Profissionais dedicados<br />
            <span className="text-gradient">ao seu sorriso em BH</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa equipe é composta por especialistas altamente qualificados 
            comprometidos com sua saúde e bem-estar.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={member.photo} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold">{member.name}</p>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Specialty */}
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-700 font-medium text-sm">{member.specialty}</span>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-gray-500 text-xs ml-1">5.0</span>
                  </div>
                  <span className="text-gray-500 text-xs">{member.experience}</span>
                </div>
                
                {/* Education */}
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>{member.education}</span>
                </div>
                
                {/* Social */}
                <a 
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer conhecer nossa clínica pessoalmente?
            </h3>
            <p className="text-white/90 mb-6">
              Agende uma visita e conheça nossa estrutura moderna e nossa equipe 
              de profissionais dedicados ao seu sorriso.
            </p>
            <a 
              href="https://wa.me/5531999999999"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Agendar Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

