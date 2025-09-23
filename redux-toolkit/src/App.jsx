import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFood } from './slice.js';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [orders, setOrders] = useState('');

  const food = useSelector((state) => state.customers.food);
  const dispatch = useDispatch();

  const addOrder = () => {
    if (!orders.trim()) return;
    dispatch(orderFood(orders));
    setOrders('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addOrder();
  };

  return (
    <div>
      
      <div>
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
        />
      </div>

      <h2>
        Orders for {customerName || 'Guest'}
      </h2>

      <div>
       
        {food.length > 0 ? (
          <ul>
            {food.map((foo, index) => (
              <li key={index}>
                {foo}
              </li>
            ))}
          </ul>
        ) : (
          <p>No food ordered yet...</p>
        )}

        
        <div>
          <input
            value={orders}
            onChange={(e) => setOrders(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter food name"
          />
          <button onClick={addOrder}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
