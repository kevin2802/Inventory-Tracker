'use client'
import Image from "next/image";
import {useState,useEffect} from 'react'
import { firestore } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";


export default function Home() {
  const [inventory,setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [open,setOpen]= useState(false)

  const updateInventory = async () =>{
    const snapshot = query(collection(firestore,'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList=[]
    docs.forEach((doc)=>{
      inventoryList.push({
        name:doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList);
  }

  useEffect(()=>{
    updateInventory()
  }
  )
  return (
    <div> 
      <p className="text-4xl text-center font-semibold my-7">Inventory Management</p>
      {inventory.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
    

  
}
