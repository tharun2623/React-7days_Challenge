import React, { useState, useMemo, useCallback } from "react";
import List from "./list.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const [filtertext, setFilterText] = useState('');

  const fruits = [
    { id: 1, Product: 'Apple' },
    { id: 2, Product: 'Banana' },
    { id: 3, Product: 'Orange' },
    { id: 4, Product: 'Mango' }
  ];

  const handleInput = useCallback((e) => {
    setFilterText(e.target.value);
  }, []);

  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) =>
      fruit.Product.toLowerCase().includes(filtertext.toLowerCase())
    );
  }, [filtertext]);

  return (
    <section className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3 text-center text-success">Fruit Explorer</h2>
        <input
          type="text"
          onChange={handleInput}
          className="form-control mb-4"
          value={filtertext}
          placeholder="Search for a fruit..."
        />
        
        <div className="d-flex flex-wrap gap-3 justify-content-center mb-3">
          {filteredFruits.map((item, index) => (
            <List key={index} fruit={item.Product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Main;
