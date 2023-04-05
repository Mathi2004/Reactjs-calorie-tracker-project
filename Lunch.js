import React, { useState } from 'react';

// Sample data for menu items
const menuItems = {
  Lunch: [
    { name: 'Bisibela Bhat',quantity:"300gm", price:535 },
    { name: 'Rice',quantity:"150gm", price:306},
    { name: 'Rasam', quantity:"150gm",price:36 },
    {name: 'Omlette',quantity:"1",price:130},
    { name: 'Fish fry', quantity:"100gm",price:240 },
    { name: 'Mutton briyani', quantity:"200gm",price:450},
    { name: 'Chicken briyani',quantity:"200g", price:470 },
  ],
  
};

function MenuItem({ name,quantity,price, onAddToCart }) {
  return (
    <li>
      {name} -{quantity}- {price.toFixed(2)} <button onClick={onAddToCart}>Add</button>
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
    if(total>=400)
    {  
        alert("Sorry!")
    }
    else
    {
      alert("Congrats!")
    }
  }
  return (
    <section>
      <h2>Item</h2>
      <ul>
        {items.map((item, index) => (
          <CartItem key={index} name={item.name} quantity={item.quantity}  price={item.price} />
        ))}
      </ul>
      <p>Total: {total.toFixed(2)}</p>
      <button onClick={Hi}>
      <div>Click</div>
      </button>
    </section>
  );
}

function Lunch() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div style={{height:"750px",width:"1500px", backgroundSize: 'cover',position:'relative',backgroundRepeat: 'no-repeat',color:"white",backgroundImage:"url('https://veerji.ca/wp-content/uploads/2022/01/rajat-sarki-nnNCCQfSNsc-unsplash.jpg')"}}>
      
      <main>
        <MenuSection category="Lunch" items={menuItems.Lunch} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Lunch