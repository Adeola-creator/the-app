import axios from 'axios'
import React, { useState, useEffect} from 'react'
import AddButton from '../components/AddButton'
import Input from '../components/Input';
import Card from '../components/Card';
import Link from 'next/link';


 function stockPage() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async () => {
        axios
          .get("http://localhost:3000/api/stock")
          .then((res) => {
            const data = res.data.stock;
            console.log(data);
            setItems(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchItems();
    }, []);
    return (
    <div className='flex flex-col p-5'>
      <div>
      <AddButton 
         route="#"
         title="Add Item"
      />
      <form>
        <Input 
        placeholder="Enter item name"
        />
      </form>
      </div>
      <Card 
      itemName= "Tablets"
      itemNumber= "20"
      >
        <div className='flex'>
        <Link className='w-[10ch] ' href="#">Edit <i className="fa-solid fa-pen-to-square"></i></Link>
        <Link href="#">Delete</Link>
        </div>
       
      </Card>
    </div>

    )
}

export default stockPage