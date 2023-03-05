import './App.css';
import Header from './components/Header'
import Home  from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
