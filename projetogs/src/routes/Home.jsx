import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg">
              DrainMind
            </h1>
            <p className="text-2xl md:text-3xl mb-10 max-w-4xl mx-auto font-light">
            Diminuindo as enchentes de forma inteligente.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              <Link
                to="/cadastrar"
                className="bg-white text-blue-800 px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-200 transition-colors border-2 border-blue-300"
              >
                Começar Agora
              </Link>
              <Link
                to="/sobre"
                className="bg-blue-980 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-600 transition-colors border-2 border-white"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16 mt-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-200 border-4 border-blue-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
              <span className="text-4xl text-blue-700">💧</span>
            </div>
          </div>
          <div className="border-l-9 border-3 border-blue-300 bg-white bg-opacity-80 rounded-2xl p-8 shadow-xl">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">O desafio das enchentes no Brasil</h2>
            <p className="text-xl text-blue-900 mb-4 font-medium">
              As enchentes são um dos maiores problemas enfrentados por cidades brasileiras, causando prejuízos materiais, perdas de vidas e impactos sociais profundos. A cada ano, milhares de famílias perdem suas casas, bens e até entes queridos devido à força das águas.
            </p>
            <p className="text-xl text-blue-900 font-medium">
              Além dos danos imediatos, as enchentes trazem riscos à saúde, dificultam o acesso a serviços essenciais e agravam a vulnerabilidade de comunidades inteiras. Soluções inteligentes e colaborativas são fundamentais para prevenir, monitorar e responder rapidamente a essas situações de crise.
            </p>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="py-28 bg-white mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Características 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-4 border-blue-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow group-hover:bg-blue-200 transition-colors">🗺️</div>
              <h3 className="text-2xl font-semibold mb-3">Mapa Interativo</h3>
              <p className="text-gray-700 text-lg text-center">
                Registre pedidos de ajuda mesmo sem conexão com a internet, garantindo suporte em qualquer situação.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-4 border-blue-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow group-hover:bg-blue-200 transition-colors">📢</div>
              <h3 className="text-2xl font-semibold mb-3">Solicitação de Ajuda</h3>
              <p className="text-gray-700 text-lg text-center">
                Visualize alertas e pedidos de ajuda geolocalizados em tempo real, facilitando a resposta rápida.
              </p>
            </div>

            {/* Características 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-4 border-blue-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-blue-100 text-blue-600 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow group-hover:bg-blue-200 transition-colors">🔍</div>
              <h3 className="text-2xl font-semibold mb-3 text-center">Monitoramento de Equipes</h3>
              <p className="text-gray-700 text-lg text-center">
                Organize e coordene ações de voluntários de forma eficiente, promovendo impacto real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamado de Ação Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 py-20 rounded-t-3xl mt-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-80 border-4 border-blue-200 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
              <span className="text-4xl text-blue-600">🌊</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Estão prontos para fazer a diferença?</h2>
          <p className="text-xl text-white mb-8 font-light drop-shadow">
            Junte-se à nossa comunidade e ajude a construir cidades mais seguras e resilientes. Sua participação pode transformar vidas e prevenir tragédias!
          </p>
          <Link
            to="/cadastrar"
            className="inline-block bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-full shadow-lg border-2 border-blue-300 hover:bg-blue-50 hover:text-blue-900 transition-colors"
          >
            Cadastre-se Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 