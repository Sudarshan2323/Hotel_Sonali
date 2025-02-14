import React from 'react';
import './menu.css';
import img from '../Img/Mutton_Rogan_josh.jpg'

const Menu = () => {
  const products = [
    {
      image: img,
      name: 'Basic Tee',
      color: 'Black Iso Dots sudarsha lomate is a a clever student',
      price: '$35',
    },
    {
      image: img,
      name: 'Basic Tee',
      color: 'Aspen White Iso Dots sudarsha lomate is a a clever student',
      price: '$35',
    },
    {
      image: img,
      name: 'Basic Tee',
      color: 'Charcoal Iso Dots sudarsha lomate is a a clever student',
      price: '$35',
    },
    {
      image: img,
      name: 'Artwork Tee',
      color: 'Iso Dots sudarsha lomate is a a clever student',
      price: '$35',
    }];

  return (
    <div className="product-carousel">
      <h2>Customers also purchased</h2>
      <div className="carousel-container">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-color">{product.color}</p>
              <p className="product-price">{product.price}<button className='btn'>Add To cart</button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;