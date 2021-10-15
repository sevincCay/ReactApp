import React,{useState,useEffect} from 'react';
import Carousel from './component/content/Carousel';
import Cards from './component/content/Cards';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import data from './data.json'

function App() {
  const [userData,setData] = useState(data)
  
  return (
    <div className="App">
      <Header houseData={userData}/>
      <Carousel />
      <Cards houseData={userData}/>
      <Footer />
    </div>
  );
}

export default App;
