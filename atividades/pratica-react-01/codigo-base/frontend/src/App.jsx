import { useEffect, useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [cars, setCars] = useState([]); // estado para armazenar os anúncios de carros, inicialmente vazio

  async function fecthCars() {
    const res = await fetch("http://localhost:3000/anuncios");
    const data = await res.json(); // converte o corpo da resposta para um objeto JSON
    setCars(data); // altera o valor do estado 'cars' com os dados obtidos, isso faz com que o componente seja re-renderizado exibindo os novos dados
  }

  useEffect(() => {
    fecthCars();
  }, []); // array vazio para rodar apenas uma vez

  const handleSearch = async (query) => {
    if (query) {
      const res = await fetch(`http://localhost:3000/anuncios?model_like=${query}`); // faz a requisição para o endpoint de busca pelo modelo
      const data = await res.json();
      setCars(data);
    } else {
      fecthCars(); // se a query estiver vazia, busca todos os carros novamente
    }
  }
  
  return (
    <>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className='cards'>
        {cars && cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default App;
