import React, { useState, useEffect, useRef } from 'react';
import ProductGrid from './products/ProductGrid';

import '../App.css';

function Listado() {  

  const initialProductState = [];

  const [ products, setProducts ] = useState(initialProductState);
  const [ search, setSearch ] = useState("");

  const textInput = useRef(null);

  useEffect(() => {

    const fetchItems = async () => {
      const data = await fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + search);
      
      const items = await data.json();    

      console.log(items.results);
      setProducts(items.results);
    }

    fetchItems();

  }, [search]);

const handleSubmit = e => {        
  if(e){ 
    e.preventDefault();
    const input = textInput.current.value;
    setSearch(input);
  }
}

  return (
    <div>
      <h1>Daniel Vanegas - MercadoLibre</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscar" ref={textInput} />  
      </form>
      <ProductGrid products={products} />
    </div>
  );
}

export default Listado;