import './App.css';
import { Navbar, Brands, CTA } from './components';
import { Header, Footer, Blog, Features, Possibility, About } from './containers'

function App() {
  return (
    <div className="App">
      <div className='grdient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <About />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
