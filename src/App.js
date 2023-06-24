// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/counter';
import ToDo from "./components/toDo/toDo";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import NavBar from './repead/header/Header';
import Footer from './repead/footer/Footer';
import Shop from './components/shop/shop';
import ModalWind from './components/modalWind/modalWind';
import { useState } from 'react';


function App() {
  const [isModalOpen , setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <NavBar/>
      <Counter/>
      <ToDo/>

      <Shop/>
      <Footer/>
      <button onClick={()=>setIsModalOpen(true)}>Open Modal</button>
      <ModalWind  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;
