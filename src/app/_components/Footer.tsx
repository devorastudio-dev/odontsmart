"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Clock, Map } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Odonto<span className="text-primary">Excellence</span> BH
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Excelência em odontologia com tecnologia de ponta e atendimento humanizado. 
              Mais de 18 anos transformando sorrisos em Belo Horizonte.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/odontoexcellencebh"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/odontoexcellencebh"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/odontoexcellencebh"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@odontoexcellencebh"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tratamentos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Clínica Geral
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Ortodontia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Implantes Dentários
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Clareamento Dental
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Lentes de Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Afonso Pena, 2000 - Conj. 1501<br />
                  Centro, BH - MG 30130-008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:3133333333" className="text-gray-400 hover:text-white transition-colors">
                  (31) 3333-3333
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="https://wa.me/5531999999999" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  (31) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@odontoexcellencebh.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@odontoexcellencebh.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Seg-Sex: 8h-18h | Sáb: 8h-14h
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Legal Info */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© 2024 Odonto Excellence BH. Todos os direitos reservados.</p>
            <p className="mt-1">
              CNPJ: 12.345.678/0001-00 | CRO-MG: 45678
            </p>
          </div>
          
          {/* Ethical Notice */}
          <div className="text-gray-500 text-xs text-center md:text-right max-w-md">
            <p>
              Este site tem caráter meramente informativo e não substitui a consulta odontológica. 
              Imagens meramente ilustrativas. CRO-MG 45678.
            </p>
          </div>
        </div>
        
        {/* Developer Credit */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Feito com ❤️ para transformar sorrisos em Belo Horizonte
          </p>
        </div>
      </div>
    </footer>
  );
}

