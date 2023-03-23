import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/singleCountry'
import './Country.css'


const Country = () => {
       const [countries, setCountries] = useState([])
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])
   
    return (
        <div>
            <h2>all the countries</h2>
           <div className='countries-container'>
           {
                countries.map(country =><SingleCountry 
                    country={country}
                     key = {country.cca3}
                    ></SingleCountry>)
            }

           </div>
            
        </div>
    );
};

export default Country;