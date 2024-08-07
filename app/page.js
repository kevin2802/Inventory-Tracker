'use client'
import Image from "next/image";
import {useState,useEffect} from 'react'
import { firestore } from "@/firebase";
import { collection, deleteDoc, getDoc, getDocs, query, setDoc, doc} from "firebase/firestore";


export default function Home() {
  const [inventory,setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCount, setItemCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  //returns an array w the updated inventory from db
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

  //removes a count of an item from the inventory. If item count is now 0 removes item entirely from db
  const removeItem = async(item)=>{
    const docref = doc(collection(firestore,'inventory'),item) //the doc we are getting from db
    const docsnapshot = await getDoc(docref)
    if(docsnapshot.exists()){
      const {count} = docsnapshot.data()
      if(count == 1){
        await deleteDoc(docref)//if count is 1 and we are deleting then delete the docref from db
      }
      else{
        await setDoc(docref,{count:count-1})//set count -1
      }
    }
    updateInventory();//update inv

  }

  //adds to an item count of an item in inventory (reuses code from above)
  const addItem = async(item)=>{
    const docref = doc(collection(firestore,'inventory'),item) //the doc we are getting from db
    const docsnapshot = await getDoc(docref)
    if(docsnapshot.exists()){
      const {count} = docsnapshot.data()
      
      await setDoc(docref,{count:count+1})//if it exists add one
      
    }
    else{
      await setDoc(docref,{count:1})//set quanity to 1 if doc doesnt exist
    }

    updateInventory();
  }

  //for the add item input form
  //Adds new item to inventory and sets itemCount to provided number
  const addNewItem = async()=>{
    const docref = doc(collection(firestore, 'inventory'), itemName);
    const docsnapshot = await getDoc(docref);
    if (docsnapshot.exists()) {//if this doc exists find it in the db and add to its value whatever val was inputted
      const { count } = docsnapshot.data();
      await setDoc(docref, { count: count + itemCount });//this lends itself to adding negative numbers(decreasing the count)
    } else {
      await setDoc(docref, { count: itemCount });//if the item does not exist create a new doc using setDoc
    }

    updateInventory();//update inventory
  }
  
  
  useEffect(()=>{
    updateInventory()
  },[]
  )
  //To filter inventory by search bar
  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div> 
      <p className="text-4xl text-center font-medium my-7">Inventory Management</p>
      <div className="flex justify-center mb-4">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='bg-slate-50 mb-2 p-2 rounded'
          type="text"
          placeholder="Search Inventory"
        />
      </div>
      <div className="mb-4 flex justify-center" >
        <input value={itemName} onChange={(e) => setItemName(e.target.value)} className='bg-slate-50' type="text" placeholder="Item Name"></input>
        <input value={itemCount} onChange={(e) => setItemCount(parseInt(e.target.value))} className='bg-slate-50'type="number" placeholder="Item Count"></input>
        <button onClick={addNewItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Inventory</button>
      </div>
      <div className="overflow-x-auto bg-slate-50 p-4 rounded-lg shadow-md">
      <table className="min-w-full mx-auto border-blue-950 block md:table center">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell">Name</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell">Count</th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {filteredInventory.map((item) => (
            <tr key={item.name} className="bg-gray-300 border border-gray-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.name}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.count}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded" onClick={() => addItem(item.name)}>Add 1</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-2" onClick={() => removeItem(item.name)}>Remove 1</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
    </div>
  );
    

  
}
