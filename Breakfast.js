import React, { useState } from 'react';

// Sample data for menu items
const menuItems = {
  Breakfast: [
    { name: 'Idli',quantity:"1", price: 39 },
    { name: 'Dosa',quantity:"1", price: 168 },
    { name: 'Paratha', quantity:"1",price:80 },
    {name:'Chappathi',quantity:"1",price:40},
    { name: 'Poori', quantity:"1",price:700 },
    { name: 'Uttapam', quantity:"1",price:258 },
    { name: 'Upma',quantity:"100g", price:209 },
  ],
  
};

  
function MenuItem({ name,quantity,price, onAddToCart }) {
  
  return (
    <li>
      {name} -{quantity}- {price.toFixed(2)} <button style={{backgroundColor:"white",color:"black",border:"5px solid black",borderRadius:"30px"}} onClick={onAddToCart}>Add</button>
    </li>
  );
}

function MenuSection({ category, items, onAddToCart }) {
  return (
    <section>
      <h2>{category}</h2>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} name={item.name} quantity={item.quantity} price={item.price} onAddToCart={() => onAddToCart(item)} />
        ))}
      </ul>
    </section>
  );
}

function CartItem({ name,quantity, price }) {
  return (
    <li>
      {name}-{quantity} - {price.toFixed(2)}
    </li>
  );
}

function Cart({ items }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  
  const Hi=()=>{
    if(total<=400)
    {  
      alert("Congrats!")
      
    }
    else
    {
      alert("Sorry!")
    }
  }
 
  return (
    <section>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <CartItem key={index} name={item.name} quantity={item.quantity}  price={item.price} />
        ))}
      </ul>
      <p>Total calories: {total.toFixed(2)}</p>
     <button onClick={Hi}>
      <div>Click</div>
      </button>
      
    </section>
  );
 
}

function Breakfast() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div style={{height:"750px",width:"1500px",fontSize:"20px", backgroundSize: 'cover',backgroundRepeat: 'no-repeat',color:"white",backgroundImage:"url('https://vegplatter.in/files/public/inline-images/bg_12.jpg')"}} >
      
      <main>
        <MenuSection category="Breakfast" items={menuItems.Breakfast} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Breakfast