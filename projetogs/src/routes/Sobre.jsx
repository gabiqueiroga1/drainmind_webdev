import dudaImg from '../assets/duda.png';
import gabiImg from '../assets/gabi.png';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500 text-white py-28 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-700 border-4 border-blue-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-5xl">🌊</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg">
              Sobre a DrainMind
            </h1>
            <p className="text-2xl max-w-4xl mx-auto font-light">
              Uma iniciativa para transformar a forma como respondemos a desastres naturais através da tecnologia, inovação e colaboração comunitária.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Valores Section */}
      <section className="py-28 mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-700 mb-8 flex items-center gap-3">Missão</h2>
              <p className="text-gray-700 text-lg mb-6">
              Nossa missão é prevenir enchentes e proteger vidas por meio de tecnologia inteligente. Monitoramos bueiros em tempo real com sensores e inteligência artificial, detectando riscos antes que se tornem tragédias.
               Conectamos cidadãos, equipes e gestores em uma plataforma acessível e eficiente, promovendo cidades mais seguras, sustentáveis e preparadas para o futuro.
              </p>
              <p className="text-gray-700 text-lg">
              Acreditamos no poder da inovação como ferramenta de transformação social. 
              Atuamos com responsabilidade para garantir que cada ação gere impacto positivo nas comunidades urbanas.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-md border-2 border-l-8 border-blue-400">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2"><span>💡</span>Valores</h3>
              <ul className="space-y-4 text-lg text-blue-700">
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-2xl">•</span><span>Inovação Sustentável</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-2xl">•</span><span>Compromisso com a Vida</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-2xl">•</span><span>Acessibilidade e Inclusão</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-2xl">•</span><span>Transparência e Confiabilidade</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-2xl">•</span><span>Responsabilidade Social e Ambiental</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Section */}
      <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 py-28 mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-700 flex justify-center items-center gap-3">Visão</h2>
          <div className="flex justify-center">
            <div className="bg-white p-12 rounded-3xl shadow-md border-l-8 border-blue-400 max-w-2xl w-full flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-blue-100 text-blue-700 text-5xl mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow">🔭</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Inovação Sustentável</h3>
              <p className="text-gray-700 text-lg text-center">
                A nossa visão é ser referência em soluções inteligentes para infraestrutura urbana, liderando a transformação digital das cidades e promovendo uma gestão eficiente, preventiva e colaborativa de riscos ambientais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Section */}
      <section className="py-28 mt-20 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-700 flex justify-center items-center gap-3">Nosso Time</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-md border-2 border-l-8 border-pink-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img src={dudaImg} alt="Maria Eduarda Ferrés" className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-pink-600 shadow-lg" />
              <h3 className="text-2xl font-semibold text-pink-700">Maria Eduarda Ferrés</h3>
              <p className="text-pink-600 text-lg">Engenheira de Software</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-md border-2 border-l-8 border-purple-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img src={gabiImg} alt="Gabriela Queiroga" className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-purple-600 shadow-lg" />
              <h3 className="text-2xl font-semibold text-purple-700">Gabriela Queiroga</h3>
              <p className="text-purple-600 text-lg">Engenheira de Software</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre; 