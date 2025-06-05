import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'cidadao', // 'cidadao' ou 'profissional'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registro lógica
    console.log('Registration attempt:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-10 bg-white p-12 rounded-2xl shadow-2xl border-2 border-blue-200">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-blue-900 drop-shadow-lg">
            Crie sua conta
          </h2>
          <p className="mt-4 text-center text-lg text-gray-700">
            Ou{' '}
            <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800">
              faça login se já tiver uma conta
            </Link>
          </p>
        </div>
        <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-blue-900 mb-2">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none block w-full px-4 py-3 border border-blue-300 placeholder-blue-400 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-lg"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-blue-900 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-4 py-3 border border-blue-300 placeholder-blue-400 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-lg"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-blue-900 mb-2">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-4 py-3 border border-blue-300 placeholder-blue-400 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-lg"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-medium text-blue-900 mb-2">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none block w-full px-4 py-3 border border-blue-300 placeholder-blue-400 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-lg"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-4">
              Tipo de usuário
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="radio"
                  id="cidadao"
                  name="userType"
                  value="cidadao"
                  checked={formData.userType === 'cidadao'}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="cidadao"
                  className="block w-full p-4 text-center border-2 border-blue-300 rounded-xl cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-100 font-semibold text-blue-700 text-lg"
                >
                  Cidadão
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="profissional"
                  name="userType"
                  value="profissional"
                  checked={formData.userType === 'profissional'}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="profissional"
                  className="block w-full p-4 text-center border-2 border-blue-300 rounded-xl cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-100 font-semibold text-blue-700 text-lg"
                >
                  Profissional
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastrar; 