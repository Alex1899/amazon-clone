import React, { useState, useEffect } from 'react';
import Product from './Product';
import '../styles/Home.css';
import uuid from 'uuid/v4';
import axios from 'axios';


function Home() {
    const [catalog, setCatalog ] = useState([]);
    
    const fetchData = ()=> {
        axios.get('http://localhost:9000/catalog/')
            .then((result) => {
                console.log(result);
                setCatalog(result.data);
            })
            .catch(err => console.log(err))
     };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='home'>
            {catalog != [] && (
                <>
                 <img className='home__image' 
                 alt='home image' 
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg" />
                 <div className="home__row">
                     {catalog.slice(0, 3).map(product =>(
                         <Product 
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            image={product.image}
                         />
                      ))} 
                 </div>
                 <div className="home__row">
                     {catalog.slice(3, 5).map(product =>(
                         <Product 
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            image={product.image}
                         />
                      ))} 
                 </div>
                 <div className="home__row">
                     {catalog.slice(5, 6).map(product =>(
                         <Product 
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            image={product.image}
                         />
                      ))} 
                 </div>
                </>
            )}
        </div>
     )
}

export default Home;
