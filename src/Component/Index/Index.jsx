import React, { useState } from 'react'
import img1 from '../Img/Chicken_curry.jpg'
import img2 from '../Img/Mutton_Rogan_josh.jpg'
import img3 from '../Img/veg_biryani.jpg'
import chef from '../Img/Chef.jpg'
import './index.css'

function Index() {
  const special=[{
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img1,
    type:"Chicken"
  },
  {
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img2,
    type:"Chicken"
  },{
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img3,
    type:"veg"
  },{
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img1,
    type:"veg"
  },
  {
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img2,
    type:"Chicken"
  },{
    name:"Chicken Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img3,
    type:"veg"
  },
  {
    name:"Chicken",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img2,
    type:"Chicken"
  },{
    name:" Dosa",
    desc:"lorem ipsum dolor sit am id, consectetur adipiscing elit esse null  tempor lorem ipsum dolor sit am id",
    price:"999",
    img:img3,
    type:"veg"
  }]

  
  const[ite,Setite]=useState("Chicken")

  const specials=()=>{

    const data=special.filter((item)=>item.type === ite);


    let card=document.querySelector(".card-group");
    card.innerHTML=" "
     

    data.forEach((item)=>{
      let Ncard=document.createElement("div");
      Ncard.classList.add("card-list");
      Ncard.innerHTML=`<img src=${item.img} alt="" />
          <div className="card-info">
            <h2 style={{margin:0}}>${item.name}</h2>
            <h3>${item.desc}</h3>
            <p>Rs.${item.price} <button>Add to cart</button></p>
        </div>`
        card.appendChild(Ncard);
    })
  }


  return (
    <main id="index">
      <div className="home-container">
        <div className="home-text">
          <h1 className="heading">
            We believe good food offer great smile
          </h1>
          <p className="home-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit voluptate harum incidunt ullam facere vitae porro rem. Repellendus repellat nostrum in ipsa placeat exercitationem blanditiis quod commodi magni incidunt.
          </p>
          <center><button>
            Order Food
          </button></center>
          <h1 className='anime'>|</h1>
        </div>
        <div className="home-img">
          <img src={img1} alt="" className="img1" />
          <img src={img2} alt="" className="img2" />
          <img src={img3} alt="" className="img3" />
        </div>
      </div>
      
      <div className="home2">
        <h2 className="home2-heading">
          We Provide good food for your family
        </h2>
        <div className="home2-container">
          <div className="box1">
            <img src={chef} alt="" />
          </div>
          <div className="box2">
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>

      </div>

      <div className="service">
        <h2>Our Services</h2>
        <div className="service-group">
          <div className="service-card">
            <h1>100% Pure</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis animi provident fugit voluptates dolorum similique!</p>
          </div>
          <div className="service-card">
            <h1>100% Pure</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis animi provident fugit voluptates dolorum similique!</p>
          </div>
          <div className="service-card">
            <h1>100% Pure</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis animi provident fugit voluptates dolorum similique!</p>
          </div>
        </div>
      </div>

      <div className="cusins">
        <h1 className="cusins-heading">
          Some Trendy and popular Dishes For you and your family
        </h1>
        <ul className="dish-list">
          <li onClick={specials}>Special</li>
          <li onCanPlay={specials}>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        <div className="card-group">
        <div className="card-list">
          <img src={img1} alt="" />
          <div className="card-info">
            <h2>Veg Pulav</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Esse ducimus nostrum omnis amet dignissimos vitae, 
            </h3>
            <p>Rs.999 <button>Add to cart</button></p>
        </div>
        </div>
        <div className="card-list">
          <img src={img1} alt="" />
          <div className="card-info">
            <h2>Veg Pulav</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Esse ducimus nostrum omnis amet dignissimos vitae, 
            </h3>
            <p>Rs.999 <button>Add to cart</button></p>
        </div>
        </div>
        <div className="card-list">
          <img src={img1} alt="" />
          <div className="card-info">
            <h2>Veg Pulav</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Esse ducimus nostrum omnis amet dignissimos vitae, 
            </h3>
            <p>Rs.999 <button>Add to cart</button></p>
        </div>
        </div>
        <div className="card-list">
          <img src={img1} alt="" />
          <div className="card-info">
            <h2>Veg Pulav</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Esse ducimus nostrum omnis amet dignissimos vitae, 
            </h3>
            <p>Rs.999 <button>Add to cart</button></p>
        </div>
        </div>
        </div>
 
      </div>

      <div className="subscribe">
        <h2 className="sub-header">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <input type="email" name="mail" id="mail" placeholder='@gmail.com'/><button>Subscribe</button>
      </div>
      
      


      
    </main>
  )
}

export default Index
