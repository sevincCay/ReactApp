import Carousel from './component/content/Carousel';
import Cards from './component/content/Cards';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
