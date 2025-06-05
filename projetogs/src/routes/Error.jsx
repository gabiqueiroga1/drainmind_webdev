import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full text-center bg-white p-12 rounded-2xl shadow-2xl border-2 border-blue-200">
        <h1 className="text-9xl font-extrabold text-blue-700 drop-shadow-lg mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">Página não encontrada</h2>
        <p className="text-gray-700 text-lg mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.<br />
          Verifique o endereço digitado ou volte para a página inicial.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors border-2 border-blue-700"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default Error; 