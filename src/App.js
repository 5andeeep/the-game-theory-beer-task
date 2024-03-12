import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CardComponent from './Components/CardComponent';

function App() {

  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBeers();
  }, [])

  // function to fetch Data from API
  const fetchBeers = async () => {
    try {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers");
      // console.log(data);
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  }

  // function to filter data searched by name
  const fitlerredBeers = beers.filter((beer) => {
    return beer.name.trim().toLowerCase().includes(search.trim().toLowerCase());
  })

  return (
    <div className="App">
      <h1>CRAFT BEER FOR THE PEOPLE</h1>
      <div className='search-input'>
        <input type="text" placeholder='Search..' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <hr />
      <div className='data-container'>
        {
          fitlerredBeers?.map((item, key) => (
            <div key={key} className='card-container'>
              <CardComponent beer={item} />
            </div>

          ))
        }
      </div>
    </div>
  );
}

export default App;
