import "./index.css";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 py-8 bg-gray-50'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App
