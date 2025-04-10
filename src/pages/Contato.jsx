import React from 'react';
import { Link } from 'react-router-dom';

function Contato() {
  // Número do WhatsApp com código do país (Brasil) e DDD
  const whatsappNumber = "5546991018160";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre seus serviços.";
  
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

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
                  <button
                    onClick={openWhatsApp}
                    className="mt-2 inline-flex items-center text-green-500 hover:text-green-400 transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Iniciar conversa no WhatsApp
                  </button>
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

      {/* Botão Flutuante do WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
}

export default Contato; 