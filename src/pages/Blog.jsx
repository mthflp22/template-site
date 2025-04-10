import React from 'react';

function Blog() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header do Blog */}
      <header className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Blog & Tutoriais</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Aprenda sobre as últimas tendências em tecnologia, automação e desenvolvimento de software
          </p>
        </div>
      </header>

      {/* Categorias */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              Todos
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Tutoriais
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Automação
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              IoT
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Desenvolvimento
            </button>
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                alt="IoT Arduino"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Tutorial</span>
                  <span className="text-gray-400 text-sm ml-4">5 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Introdução ao IoT com Arduino</h2>
                <p className="text-gray-300 mb-4">
                  Aprenda os conceitos básicos de IoT e como começar seus projetos com Arduino neste guia completo para iniciantes.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Desenvolvimento Web"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Desenvolvimento</span>
                  <span className="text-gray-400 text-sm ml-4">8 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Clean Code: Melhores Práticas</h2>
                <p className="text-gray-300 mb-4">
                  Descubra como escrever código limpo e manutenível seguindo as melhores práticas da indústria.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Automação Industrial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Automação</span>
                  <span className="text-gray-400 text-sm ml-4">10 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Indústria 4.0: O Futuro da Automação</h2>
                <p className="text-gray-300 mb-4">
                  Uma análise profunda das tendências e tecnologias que estão moldando o futuro da automação industrial.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Machine Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">IA</span>
                  <span className="text-gray-400 text-sm ml-4">12 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Machine Learning na Automação</h2>
                <p className="text-gray-300 mb-4">
                  Como a inteligência artificial está revolucionando os processos de automação industrial.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                alt="Cybersecurity"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Segurança</span>
                  <span className="text-gray-400 text-sm ml-4">7 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Segurança em Sistemas IoT</h2>
                <p className="text-gray-300 mb-4">
                  Práticas essenciais para proteger seus dispositivos IoT contra ameaças cibernéticas.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Code Review"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Tutorial</span>
                  <span className="text-gray-400 text-sm ml-4">6 min de leitura</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Code Review Efetivo</h2>
                <p className="text-gray-300 mb-4">
                  Guia completo sobre como realizar e receber code reviews de forma efetiva em sua equipe.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          {/* Paginação */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                Anterior
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">1</button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">2</button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">3</button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                Próximo
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog; 