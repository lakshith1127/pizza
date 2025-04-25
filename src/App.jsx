import React, { useState } from "react";
import "../App.css";
function App() {
  const [size, setSize] = useState("medium");
  const [topping, setToppings] = useState([]);

  const prices = {
    small: 5,
    medium: 8,
    large: 12,
    topping: {
      cheese: 2,
      mushroom: 1.5,
      paneer: 3,
    },
  };
  const handleToppingchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings([...topping, value]);
    } else {
      setToppings(topping.filter((t) => t !== value));
    }
  };
  const calculator = () => {
    let total = prices[size];
    topping.forEach((t) => {
      total += prices.topping[t];
    });
    return total.toFixed(2);
  };

  return (
    <div style={{ fontfamily: "Arial", padding: "20px" }}>
      <h1>Pizza Billing App</h1>

      <h2>Select Size:</h2>
      <label>
        <input
          type="radio"
          value="small"
          name="size"
          checked={size === "small"}
          onChange={(e) => setSize(e.target.value)}
        />
        Small(${prices.small})
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="medium"
          name="size"
          checked={size === "medium"}
          onChange={(e) => setSize(e.target.value)}
        />
        Medium(${prices.medium})
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="large"
          name="size"
          checked={size === "large"}
          onChange={(e) => setSize(e.target.value)}
        />
        Large(${prices.large})
      </label>
      <br />
      <h2>Select Toppings</h2>
      {Object.keys(prices.topping).map((t) => (
        <label key={t}>
          <input
            type="checkbox"
            value={t}
            checked={topping.includes(t)}
            onChange={handleToppingchange}
          />
          {t.charAt(0).toUpperCase() + t.slice(1)} (${prices.topping[t]})
          <br />
        </label>
      ))}
      <h2> Total price: ${calculator()}</h2>
    </div>
  );
}

export default App;
