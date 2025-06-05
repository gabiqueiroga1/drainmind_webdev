const Solucao = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500 text-white py-28 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
              Nossa Solução
            </h1>
            <p className="text-2xl max-w-4xl mx-auto font-light">
            Uma solução inteligente e acessível para prevenção e resposta a desastres naturais urbanos, focada em eficiência operacional,
             monitoramento em tempo real e impacto social positivo.
            </p>
          </div>
        </div>
      </section>

      {/* Características Grid */}
      <section className="py-28 bg-gradient-to-r from-blue-50 via-white to-blue-100 mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-blue-800 text-center mb-14">A nossa solução conta com</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Características 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-2 border-l-8 border-blue-400 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">🦺</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Sensores IoT</h3>
              <p className="text-gray-700 text-lg mb-4 text-center">
              Nossos sensores são instalados diretamente nos bueiros e são capazes de detectar o nível da água, obstruções e o fluxo em tempo real. 
              Todas as informações coletadas são transmitidas automaticamente para o nosso software.
              </p>
            </div>
            {/* Características 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-2 border-l-8 border-blue-400 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">⚙️</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Gerenciamento de equipes</h3>
              <p className="text-gray-700 text-lg mb-4 text-center">
              Os cidadãos podem visualizar em tempo real quais equipes estão em operação, onde estão atuando e quais estão disponíveis para novos chamados.
               Já os administradores têm total controle para designar equipes conforme a necessidade de limpeza dos bueiros.
              </p>
            </div>
            {/* Características 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-2 border-l-8 border-blue-400 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">🗺️</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Visualização do mapa</h3>
              <p className="text-gray-700 text-lg mb-4 text-center">
              Nossa solução oferece uma visualização em tempo real de todos os bueiros da cidade, permitindo identificar pontos críticos e prevenir possíveis tragédias com antecedência.
              </p>
            </div>
            {/* Características 4 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-2 border-l-8 border-blue-400 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">⚠️</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Interface Intuitiva</h3>
              <p className="text-gray-700 text-lg mb-4 text-center">
              Avise nossas equipes que não foram notificadas de regiões que estão ficando alagadas ou que precisam de ajuda na região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficíos Section */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-24 mb-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-blue-800 text-center mb-14">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-md border-l-8 border-blue-300 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-700 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">💵</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Menos prejuízos</h3>
              <p className="text-gray-700 text-lg">
              Redução de até 40% nos prejuízos causados por alagamentos.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-md border-l-8 border-blue-300 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-700 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">⏳</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Otimização de tempo</h3>
              <p className="text-gray-700 text-lg">
              Otimização das rotas de limpeza urbana, com base em dados reais.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-md border-l-8 border-blue-300 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-700 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">🧬</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Melhora na saúde</h3>
              <p className="text-gray-700 text-lg">
              Diminuição do risco de doenças causadas por contato com água contaminada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucao; 