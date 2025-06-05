import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-3xl text-blue-100 font-bold">DrainMind</h1>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/solucao" className="hover:bg-blue-800 px-3 py-2 rounded-md">Solução</Link>
              <Link to="/sobre" className="hover:bg-blue-800 px-3 py-2 rounded-md">Sobre</Link>
              <Link to="/login" className="hover:bg-blue-800 px-3 py-2 rounded-md">Login</Link>
              <Link to="/cadastrar" className="bg-white text-blue-900 font-semibold hover:bg-blue-300 px-3 py-2 rounded-md">Cadastro</Link>
            </div>
          </div>

          {/* Menu mobile botão */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/solucao" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Solução</Link>
            <Link to="/sobre" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Sobre</Link>
            <Link to="/login" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Login</Link>
            <Link to="/cadastrar" className="block bg-white text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md">Cadastrar</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
