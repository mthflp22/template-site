import { useState } from 'react';

const Calculadora = () => {
  const [formData, setFormData] = useState({
    tipoProjeto: '',
    complexidade: 'media',
    prazo: '3',
    funcionalidades: [],
  });

  const [resultado, setResultado] = useState(null);

  const funcionalidades = [
    { id: 'responsivo', nome: 'Design Responsivo', valor: 1000 },
    { id: 'seo', nome: 'Otimização SEO', valor: 800 },
    { id: 'cms', nome: 'Sistema de Gerenciamento', valor: 1500 },
    { id: 'blog', nome: 'Blog Integrado', valor: 1200 },
    { id: 'ecommerce', nome: 'E-commerce', valor: 2000 },
    { id: 'app', nome: 'Aplicativo Mobile', valor: 3000 },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const novasFuncionalidades = checked
        ? [...formData.funcionalidades, value]
        : formData.funcionalidades.filter((f) => f !== value);
      setFormData({ ...formData, funcionalidades: novasFuncionalidades });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calcularOrcamento = (e) => {
    e.preventDefault();
    
    let valorBase = 0;
    
    // Valor base por tipo de projeto
    switch (formData.tipoProjeto) {
      case 'landing':
        valorBase = 2000;
        break;
      case 'institucional':
        valorBase = 4000;
        break;
      case 'ecommerce':
        valorBase = 6000;
        break;
      default:
        valorBase = 3000;
    }

    // Multiplicador por complexidade
    const multiplicadorComplexidade = {
      baixa: 1,
      media: 1.5,
      alta: 2,
    };

    // Multiplicador por prazo
    const multiplicadorPrazo = {
      '1': 1.5,
      '3': 1,
      '6': 0.8,
    };

    // Soma das funcionalidades adicionais
    const valorFuncionalidades = formData.funcionalidades.reduce((total, funcId) => {
      const func = funcionalidades.find((f) => f.id === funcId);
      return total + (func ? func.valor : 0);
    }, 0);

    // Cálculo final
    const valorFinal =
      (valorBase * multiplicadorComplexidade[formData.complexidade] * multiplicadorPrazo[formData.prazo]) +
      valorFuncionalidades;

    setResultado({
      valorBase,
      valorFuncionalidades,
      valorFinal: Math.round(valorFinal),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Calculadora de Orçamento
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Preencha os campos abaixo para receber um orçamento estimado para seu projeto.</p>
            </div>
            <form onSubmit={calcularOrcamento} className="mt-5 space-y-6">
              <div>
                <label htmlFor="tipoProjeto" className="block text-sm font-medium text-gray-700">
                  Tipo de Projeto
                </label>
                <select
                  id="tipoProjeto"
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  required
                >
                  <option value="">Selecione um tipo</option>
                  <option value="landing">Landing Page</option>
                  <option value="institucional">Site Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>

              <div>
                <label htmlFor="complexidade" className="block text-sm font-medium text-gray-700">
                  Complexidade do Projeto
                </label>
                <select
                  id="complexidade"
                  name="complexidade"
                  value={formData.complexidade}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              <div>
                <label htmlFor="prazo" className="block text-sm font-medium text-gray-700">
                  Prazo de Entrega (meses)
                </label>
                <select
                  id="prazo"
                  name="prazo"
                  value={formData.prazo}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="1">1 mês</option>
                  <option value="3">3 meses</option>
                  <option value="6">6 meses</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Funcionalidades Adicionais
                </label>
                <div className="mt-2 space-y-2">
                  {funcionalidades.map((func) => (
                    <div key={func.id} className="flex items-center">
                      <input
                        id={func.id}
                        name="funcionalidades"
                        type="checkbox"
                        value={func.id}
                        checked={formData.funcionalidades.includes(func.id)}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={func.id} className="ml-2 block text-sm text-gray-900">
                        {func.nome}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Calcular Orçamento
                </button>
              </div>
            </form>

            {resultado && (
              <div className="mt-6 bg-gray-50 p-4 rounded-md">
                <h4 className="text-lg font-medium text-gray-900">Resultado do Orçamento</h4>
                <dl className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Valor Base:</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      R$ {resultado.valorBase.toLocaleString('pt-BR')}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Funcionalidades Adicionais:</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      R$ {resultado.valorFuncionalidades.toLocaleString('pt-BR')}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <dt className="text-base font-medium text-gray-900">Valor Total:</dt>
                    <dd className="text-base font-medium text-green-600">
                      R$ {resultado.valorFinal.toLocaleString('pt-BR')}
                    </dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    * Este é um orçamento estimado. O valor final pode variar de acordo com as especificações detalhadas do projeto.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora; 