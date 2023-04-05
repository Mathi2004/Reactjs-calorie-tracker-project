import React, { useState } from 'react';

// Sample data for menu items
const menuItems = {
  Dinner: [
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

function Dinner() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div style={{height:"1000px",width:"1400px", backgroundSize: 'cover',backgroundRepeat: 'no-repeat',color:"black",backgroundImage:"url('https://img.freepik.com/premium-photo/assorted-indian-food-group_466689-36084.jpg?w=2000')"}}>
      
      <main>
        <MenuSection category="Dinner" items={menuItems.Dinner} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Dinner