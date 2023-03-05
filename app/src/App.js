import './App.css';
import Header from './components/Header'
import Home  from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Home />
        <Skills />
      </main>
    </div>
  );
}

export default App;
