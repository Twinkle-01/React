import { useState } from 'react';
import './App.css'
import ProductList from './Components/ProductList';
import BreedPage from './Pages/breeds';

function Home() {
  const [name, setName] = useState("Priscilla");
  const price = 11.10
  const Items = 5
  // const result = price * Items
  const handleClick = () => {
    console.log("Button Clicked")
  }
  const change = () => {
    setName("Twinkle")
  }

  const arr = [
    "Orange",
    "Banana",
    "Grape",
    "Kiwi",
    "Mango"
  ]
  const productList = [
    {id:1,name:"iphonename:X,64GB - Space Grey", price:295000,img:"/download (1).jpeg"},
    {id:2,name:"Apple iphone XR", price:760000,img:"/images.jpeg"},
    {id:3,name:"Infinix Hot 40i 6.78", price:139000,img:"/download (12).jpeg"},
    {id:4,name:"Oraimo SpacePods X Burna Boy ANC True Wireless", price:55000,img:"/download (13).jpeg"},
    {id:5,name:"Urban Classics Leather Sleeve Versity Jacket", price:10000,img:"/download (14).jpeg"}
  ]

  //wears products list
  const wearsList = [
    {id:1, name:"Leather Jacket", price:10000 ,img:"/download (7).jpeg"},
    {id:2, name:"Nike Air Max 90", price:90000,img:"/download (8).jpeg"},
    {id:3, name:"Sony Playstation 5", price:600000,img:"/download (9).jpeg"},
    {id:4, name:"Adidas Ultraboost 20", price:45000,img:"/download (10).jpeg"},
    {id:5, name:"Gucci Chanel No. 13", price:250000,img:"/download (11).jpeg"}
  ]

  const hairsList = [
   {id:1, name:"Bob 2 by 2", price:38000,img:"/download.jpeg"},
   {id:2, name:"Bone straight Lookalike", price:45000,img:"/download (3).jpeg"},
   {id:3, name:"Pixie Curls", price:138000,img:"/download (4).jpeg"},
   {id:4, name:"Vietnamese 360 frontal", price:390000,img:"/download (5).jpeg"},
   {id:5, name:"Messy bun and Ponytail blend", price:33000,img:"/download (6).jpeg"},
  ]


  return (
    <div>
      
      <h1>Hello {name}</h1>
      <p>Price:${price.toFixed(2)}</p>
      <p>Cost of {Items} items = ${price * Items}</p>
      <button className='btn' onClick={handleClick}>Click me</button>
      <p>name is still{name}</p>
      <button className="btn" onClick={change}>Change Name</button>
      <div>
        <ul>
          {/* {arr.map(item =>{
            return <li>{item}</li>
          })
          } */}
        </ul>
      </div>
            <ProductList productList={productList} title="Appliances"/>
            <ProductList productList={wearsList} title="Wears"/>
            <ProductList productList={hairsList} title="Hairs"/>
            <BreedPage/>
    </div>
  )
}
export default Home
