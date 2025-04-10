import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header com Logo e Menu */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 z-[9999] py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.svg"
                alt="NTO Logo"
                className="w-8 h-auto"
              />
            </div>
            
            {/* Menu de Navegação */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-green-400">Home</Link>
              <Link to="/sobre" className="text-white hover:text-green-400">Sobre</Link>
              <Link to="/portfolio" className="text-white hover:text-green-400">Portfólio</Link>
              <Link to="/blog" className="text-white hover:text-green-400">Blog</Link>
              <Link to="/contato" className="text-white hover:text-green-400">Contato</Link>
              <Link to="/calculadora" className="text-white hover:text-green-400">Calculadora</Link>
              <Link to="/agendamento" className="text-white hover:text-green-400">Agendar</Link>
              <Link to="/login" className="text-white hover:text-green-400">Login</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-12 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 hover:scale-110 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              filter: "brightness(0.3)"
            }}
          />
          <div className="relative z-10">
            <h2 className="text-5xl font-extrabold mb-4 text-white animate-fade-in">NTO - Tecnologia Industrial</h2>
            <p className="text-xl text-gray-300 animate-slide-up">Tecnologia que conecta. Inovação que impulsiona.</p>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="quem-somos" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Quem Somos</h2>
                <p className="text-gray-300 mb-4">
                  A NTO é uma empresa de tecnologia industrial high-tech. Criamos soluções com Raspberry Pi, 
                  automação, inteligência artificial e sistemas de controle robustos para um mundo conectado.
                </p>
                <p className="text-gray-300">
                  Nossa especialidade é transformar ideias em soluções práticas e eficientes, utilizando a 
                  versatilidade do Raspberry Pi como base para inovação.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Raspberry Pi em um ambiente industrial"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologias Section */}
        <section id="nossas-tecnologias" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossas Tecnologias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Desenvolvimento de Software</h3>
                <p className="text-gray-700 text-center">
                  Soluções personalizadas e robustas para suas necessidades específicas
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">IoT</h3>
                <p className="text-gray-700 text-center">
                  Conectando dispositivos e criando ambientes inteligentes
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Automação Industrial</h3>
                <p className="text-gray-700 text-center">
                  Otimizando processos e aumentando a eficiência
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="nossos-projetos" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Nossos Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Desenvolvimento de Software"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Sistema de Monitoramento</h3>
                  <p className="text-gray-300">
                    Plataforma completa para monitoramento em tempo real de processos industriais
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IoT"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Rede de Sensores IoT</h3>
                  <p className="text-gray-300">
                    Implementação de rede de sensores para coleta e análise de dados
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Automação"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Automação de Processos</h3>
                  <p className="text-gray-300">
                    Automatização de linhas de produção com controle inteligente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="fale-conosco" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pronto para Transformar seu Negócio?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com tecnologia
            </p>
            <a
              href="/contato"
              className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>

      {/* Footer com Bandeira */}
      <footer className="bg-gray-900 py-3 fixed bottom-0 w-full z-50">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/960px-Flag_of_Brazil.svg.png"
            alt="Bandeira do Brasil"
            className="w-8 h-auto mr-2"
          />
          <p className="text-gray-400 text-xs">© 2024 NTO</p>
        </div>
      </footer>
    </div>
  );
}

export default Home; 