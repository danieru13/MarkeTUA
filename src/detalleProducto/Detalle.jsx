import React, { useState, useEffect } from 'react';
import '../App.css';

function Detalle({ match }) {

    const URL = `https://api.mercadolibre.com/items/${match.params.id}`;

    const [item, setItem] = useState({images: ''});

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(URL);
            
            const item = await data.json();    

            console.log(item);
            console.log(item.pictures[0].secure_url)
            setItem(item);
        }

        fetchItems();
    },[URL]);

  return (
    <div>
      <h1>{item.title}</h1>
      <img alt={item.title} src={item.thumbnail} />
    </div>
  );
}

export default Detalle;