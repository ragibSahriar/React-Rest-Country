import React from 'react';
import './singleCountries.css'

const SingleCountry = (props) => {
    const {area, region, name, population, flags} = props.country;
    // console.log(props.country);
    return (
        <div className='bg-success'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <p>Region:{region}</p>
            <h2>Area: {area}</h2>
            
            
            
        </div>
    );
};

export default SingleCountry;



// const SingleCountry = (props) => {
//     return (
//         <div className='country'>
//             <h2>Country Name: {props.country.name.common}</h2>
//             <h2>Population: {props.country.population}</h2>
//             <p>Region:{props.country.region}</p>
//             <h2>Area: {props.country.area}</h2>
            
            
            
//         </div>
//     );
// };