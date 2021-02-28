import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App(){
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() =>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country) =>{
    const  newCart = [...cart, country];
    setCart(newCart)
  }
  return (
    <div className="App">
      <h1>Total countries details we have : {countries.length}</h1>
      <Cart cart={cart}></Cart>
      <h3>Cart added : {cart.length}</h3>
      <ul>
        {
          countries.map(country => <Country 
            key={country.alpha3Code}
            country={country}
            handleAddCountry={handleAddCountry}
            ></Country> )
        }
      </ul>
    </div>
  );
}

export default App;
