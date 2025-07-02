import "./index.css";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecommendedBuild from './pages/RecommendedBuild';

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 py-8 bg-gray-50'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommended" element={<RecommendedBuild />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
