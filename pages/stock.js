import axios from 'axios'
import React, { useState } from 'react'
import Card from '../components/Card'


 function stockPage() {
    const [items, setItems] = useState([])
    axios.get("http://localhost:3000/stock")
    .then((res) => {
        const data = res.data.stock;
        setItems(data)
     })
     .catch(err => {
        console.log(err);
     })
    return (
    <div>
       {items.map((item, index) => <Card 
        key={index}
        itemName= {item.name}
        itemNumber= {item.number}
       />)}
    </div>

    )
}

export default stockPage