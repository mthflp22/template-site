import React from 'react';

function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Sobre Nós</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Transformando o futuro através da inovação tecnológica
          </p>
        </div>
      </header>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                Fundada em 2020, nossa empresa nasceu da paixão por tecnologia e da vontade de transformar 
                o mercado de automação industrial no Brasil.
              </p>
              <p className="text-gray-300 mb-4">
                Com uma equipe altamente qualificada e anos de experiência no setor, nos especializamos 
                em desenvolver soluções personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-300">
                Nossa missão é simplificar processos complexos através da tecnologia, tornando empresas 
                mais eficientes e preparadas para o futuro.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Nossa História"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-300">
                Buscamos constantemente novas tecnologias e soluções para manter nossos clientes à frente no mercado.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Colaboração</h3>
              <p className="text-gray-300">
                Trabalhamos em estreita parceria com nossos clientes para garantir resultados excepcionais.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Qualidade</h3>
              <p className="text-gray-300">
                Comprometimento com a excelência em cada projeto que desenvolvemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">João Silva</h3>
              <p className="text-green-400 mb-2">CEO & Fundador</p>
              <p className="text-gray-300 text-sm">
                15 anos de experiência em automação industrial
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Maria Santos</h3>
              <p className="text-green-400 mb-2">CTO</p>
              <p className="text-gray-300 text-sm">
                Especialista em IoT e sistemas embarcados
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Lead Developer"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Pedro Oliveira</h3>
              <p className="text-green-400 mb-2">Lead Developer</p>
              <p className="text-gray-300 text-sm">
                10 anos desenvolvendo soluções robustas
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="UX Designer"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Ana Costa</h3>
              <p className="text-green-400 mb-2">UX Designer</p>
              <p className="text-gray-300 text-sm">
                Criando interfaces intuitivas e eficientes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre; 