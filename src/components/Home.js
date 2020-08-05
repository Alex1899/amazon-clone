import React from 'react';
import Product from './Product';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' 
            alt='home image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg" />
            <div className="home__row">
                <Product 
                    id='123456'
                    title='Very sick dumbell! Trust!!'
                    price={150}
                    rating={5}
                    image='https://sportecentral.com/wp-content/uploads/2020/06/5845062_sa.jpg' />
            
                <Product 
                    id='12345234'
                    title='Very sick dumbell! Trust!!'
                    price={50}
                    rating={5}
                    image='https://media.4rgos.it/i/Argos/6145206_R_Z001A?w=750&h=440&qlt=70 '/>
                
                 </div>
            <div className="home__row">
                <Product 
                    id='123144456'
                    title='Very sick dumbell! Trust!!'
                    price={300}
                    rating={5}
                    image='https://lh3.googleusercontent.com/proxy/tsPLS_JkyaS0XuVjrZn4c4uCEHZ0DuisuXJ0j21TVAdC-muxefJJfzxX_DC2SaR6wEmPqIR5O7mTHh6fkOoTsfKCWkgm8R5PNpaGfnSgtwOe0uWKY_asCJZOIn9R1i8YiCrz_g' />
                    
                <Product 
                    id='12345556'
                    title='Very sick dumbell! Trust!!'
                    price={250}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/419Lyv24deL.jpg' />
                <Product 
                    id='123485656'
                    title='Very sick dumbell! Trust!!'
                    price={30}
                    rating={5}
                    image='https://lh3.googleusercontent.com/proxy/9W05gyXwjJEyU0-C-EZqYlJE6w0ae7trZDwpM_-jRC0wCzw8ZTK2KYKdmQglHAxMDvGfQdteJhkjqCHyPPYF75WmpH7gM3qG_0jeDQJCCoIkLVv8qwTod2WiEP9wlCUA1dDgJ8Xu8QwMxA' />
          
            
            </div>
            <div className="home__row">
                <Product 
                    id='1285683456'
                    title='Very sick dumbell! Trust!!'
                    price={20}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/41AJ8FyHzyL._SR500,500_.jpg' />

            </div>
        </div>
    )
}

export default Home;
