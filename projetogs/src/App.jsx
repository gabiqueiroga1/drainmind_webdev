import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './routes/Home'
import Solucao from './routes/Solucao'
import Sobre from './routes/Sobre'
import Login from './routes/Login'
import Cadastrar from './routes/Cadastrar'
import Error from './routes/Error'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App