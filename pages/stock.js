import axios from 'axios'
import React, { useState } from 'react'
import Card from '../components/Card'
import AddButton from '../components/AddButton'


 function stockPage() {
    const [items, setItems] = useState([])
    axios.get("http://localhost:3000/items")
    .then((res) => {
        const data = res.data.stock;
        setItems(data)
     })
     .catch(err => {
        console.log(err);
     })
    return (
    <div className='flex flex-col p-5'>
      <AddButton 
         route="#"
         title="Add Item"
      />
       {/* {items.map((item, index) => <Card 
        key={index}
        itemName= {item.name}
        itemNumber= {item.number}
       >
       <Link />
       </ Card>)} */}
    </div>

    )
}

export default stockPage