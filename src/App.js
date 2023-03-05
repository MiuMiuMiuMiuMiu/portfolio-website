import './App.css';
import Header from './components/Header'
import Home  from './components/Home';
import Skills from './components/Skills';
import PersonalProjects from './components/PersonalProjects';
import GroupProjects from './components/GroupProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Home />
        <Skills />
        <PersonalProjects />
        <GroupProjects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
