import { useState } from 'react';

const Portfolio = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'web', nome: 'Web' },
    { id: 'mobile', nome: 'Mobile' },
    { id: 'ecommerce', nome: 'E-commerce' },
    { id: 'ui', nome: 'UI/UX' },
  ];

  const projetos = [
    {
      id: 1,
      titulo: 'E-commerce de Moda',
      categoria: 'ecommerce',
      imagem: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      descricao: 'Plataforma completa de e-commerce com sistema de pagamento integrado e gestão de estoque.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      titulo: 'App de Delivery',
      categoria: 'mobile',
      imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      descricao: 'Aplicativo mobile para delivery de comida com rastreamento em tempo real.',
      tecnologias: ['React Native', 'Firebase', 'Google Maps API'],
      link: '#',
    },
    {
      id: 3,
      titulo: 'Site Institucional',
      categoria: 'web',
      imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      descricao: 'Site institucional moderno com blog integrado e área de clientes.',
      tecnologias: ['Next.js', 'Tailwind CSS', 'WordPress API'],
      link: '#',
    },
    {
      id: 4,
      titulo: 'Dashboard Analytics',
      categoria: 'ui',
      imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      descricao: 'Dashboard interativo para análise de dados com gráficos em tempo real.',
      tecnologias: ['Vue.js', 'D3.js', 'Python', 'AWS'],
      link: '#',
    },
    {
      id: 5,
      titulo: 'Marketplace',
      categoria: 'ecommerce',
      imagem: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      descricao: 'Plataforma marketplace com sistema de avaliações e chat integrado.',
      tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      link: '#',
    },
    {
      id: 6,
      titulo: 'App de Fitness',
      categoria: 'mobile',
      imagem: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      descricao: 'Aplicativo de fitness com treinos personalizados e acompanhamento nutricional.',
      tecnologias: ['Flutter', 'Firebase', 'ML Kit'],
      link: '#',
    },
  ];

  const projetosFiltrados = filtroAtivo === 'todos'
    ? projetos
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  const Modal = ({ projeto, onClose }) => {
    if (!projeto) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{projeto.titulo}</h3>
              <p className="text-gray-600 mb-4">{projeto.descricao}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosso Portfólio
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Conheça alguns dos nossos projetos mais recentes
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setFiltroAtivo(categoria.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filtroAtivo === categoria.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projetosFiltrados.map((projeto) => (
              <div
                key={projeto.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setProjetoSelecionado(projeto)}
                      className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium hover:bg-gray-100"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{projeto.titulo}</h3>
                  <p className="text-gray-500 text-sm mb-4">{projeto.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </div>
  );
};

export default Portfolio; 