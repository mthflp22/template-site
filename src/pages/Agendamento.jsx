import { useState } from 'react';

const Agendamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    horario: '',
    tipoReuniao: '',
    descricao: '',
  });

  const [step, setStep] = useState(1);
  const [confirmacao, setConfirmacao] = useState(false);

  const horarios = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const tiposReuniao = [
    { id: 'apresentacao', nome: 'Apresentação de Serviços' },
    { id: 'projeto', nome: 'Discussão de Projeto' },
    { id: 'suporte', nome: 'Suporte Técnico' },
    { id: 'outro', nome: 'Outro' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Aqui implementaremos o envio do agendamento
      console.log('Agendamento:', formData);
      setConfirmacao(true);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="data" className="block text-sm font-medium text-gray-700">
                Data da Reunião
              </label>
              <input
                type="date"
                name="data"
                id="data"
                value={formData.data}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
                Horário
              </label>
              <select
                name="horario"
                id="horario"
                value={formData.horario}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              >
                <option value="">Selecione um horário</option>
                {horarios.map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="tipoReuniao" className="block text-sm font-medium text-gray-700">
                Tipo de Reunião
              </label>
              <select
                name="tipoReuniao"
                id="tipoReuniao"
                value={formData.tipoReuniao}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              >
                <option value="">Selecione o tipo</option>
                {tiposReuniao.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                Descrição do Projeto/Necessidade
              </label>
              <textarea
                name="descricao"
                id="descricao"
                rows={4}
                value={formData.descricao}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Descreva brevemente o que você gostaria de discutir na reunião..."
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-900">Resumo do Agendamento</h4>
              <dl className="mt-2 space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <dt>Data:</dt>
                  <dd>{formData.data}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Horário:</dt>
                  <dd>{formData.horario}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tipo:</dt>
                  <dd>{tiposReuniao.find(t => t.id === formData.tipoReuniao)?.nome}</dd>
                </div>
              </dl>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (confirmacao) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  Agendamento Confirmado!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Enviamos um email de confirmação para {formData.email} com os detalhes da sua reunião.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        nome: '',
                        email: '',
                        telefone: '',
                        data: '',
                        horario: '',
                        tipoReuniao: '',
                        descricao: '',
                      });
                      setStep(1);
                      setConfirmacao(false);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Novo Agendamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Agende uma Reunião
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Preencha os campos abaixo para agendar uma reunião conosco.</p>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex items-center ${
                      s < step ? 'text-green-600' : s === step ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                        s < step
                          ? 'border-green-600 bg-green-600 text-white'
                          : s === step
                          ? 'border-green-600 text-green-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {s < step ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        s
                      )}
                    </div>
                    {s < 3 && (
                      <div
                        className={`h-1 w-16 mx-2 ${
                          s < step ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStep()}

                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Voltar
                    </button>
                  )}
                  <button
                    type="submit"
                    className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {step === 3 ? 'Confirmar Agendamento' : 'Próximo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamento; 