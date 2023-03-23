// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Country from './components/Country/Country.js';
// import Header from './components/Header/Header';
// import Countries from './components/Country/Country.js';

function App() {
  return (
    <div className="App">
      
     <Country></Country>
      
    </div>
  );
}

export default App;
















// function Loadcountries(){
//   const [countries, setCountries] = useState([])
//   useEffect( ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   } ,([]))
  // useEffect(()=>{}, [])
//   return(
//     <div>
//       <h1>Visiting Every country of the world!!</h1>
//       <h3>Available Countries {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h2>Population: {props.population}</h2>
//     </div>
//   )
// }