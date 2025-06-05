import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">DrainMind</h3>
            <p className="text-gray-300">
            Prevenindo desastres naturais urbanos, conectando tecnologia e comunidades para 
            reduzir riscos e proteger vidas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/solucao" className="text-gray-300 hover:text-white">Solução</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white">Sobre</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-white">Login</a></li>
            </ul>
          </div>

          {/* Contato Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Telefone: (11) 9999-9999</li>
              <li className="text-gray-300">Email: contato@drainmind.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t blue-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DrainMind. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
