import React, { useState } from 'react';

// Sample data for menu items
const menuItems = {
  Beverage: [
    { name: 'Coffee',quantity:"1 cup", price:58 },
    { name: 'Lemonade',quantity:"1 cup", price:110 },
    { name: 'Orange juice', quantity:"1 cup",price:110 },
    {name:'Falooda',quantity:"1 glass",price:108},
    { name: 'Lassi', quantity:"245ml",price:130 },
    { name: 'ButterMilk', quantity:"245ml",price:98 },
    { name: 'Tea',quantity:"1cup", price:200},
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
      <h2>Items</h2>
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

function Beverage() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div style={{height:"700px",width:"1500px", backgroundSize: 'cover',backgroundRepeat: 'no-repeat',color:"black",backgroundImage:"url('https://media.istockphoto.com/id/1285273547/photo/coffee-and-tea.jpg?b=1&s=170667a&w=0&k=20&c=dzUp-EYRagpIFEu173xo_ySQOCSGWfba0J6RzTs5oiM=')"}}>
      
      <main>
        <MenuSection category="Beverage" items={menuItems.Beverage} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Beverage