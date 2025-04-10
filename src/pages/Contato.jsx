import React from 'react';
import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Botão Voltar */}
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-400 transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para a página inicial
        </Link>
      </div>

      {/* Header */}
      <header className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Entre em Contato</h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Projeto
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="software">Desenvolvimento de Software</option>
                  <option value="iot">IoT</option>
                  <option value="automacao">Automação Industrial</option>
                  <option value="consultoria">Consultoria</option>
                </select>
              </div>

              <div>
                <label htmlFor="orcamento" className="block text-sm font-medium text-gray-300 mb-2">
                  Orçamento Estimado
                </label>
                <select
                  id="orcamento"
                  name="orcamento"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="ate10k">Até R$ 10.000</option>
                  <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="mais100k">Mais de R$ 100.000</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                  placeholder="Descreva seu projeto ou dúvida"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-white">Endereço</h3>
                  <p className="text-gray-300">
                    Av. Inovação Tecnológica, 1234<br />
                    Torre Digital, Sala 567<br />
                    Centro Empresarial Tech Park<br />
                    Pato Branco - PR, 85500-000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-white">Telefone</h3>
                  <p className="text-gray-300">(46) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-white">E-mail</h3>
                  <p className="text-gray-300">matheus.salvador2206@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-white">Horário de Atendimento</h3>
                  <p className="text-gray-300">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato; 