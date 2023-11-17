import React, {useState}  from "react";
import { walmart, dollarTree } from './ShoppingList';
import ItemList  from "./ItemsList";


export default function Cart(){
    const [cart, setCart] = useState([]);

    const addItem = (item) =>{
        if(cart.includes(item)) setCart(cart);
        else setCart((prev) => { return [ ...prev, item];});
    };

    const deleteItem = (itemIndex) => {
        setCart((prev) => {return prev.filter((item,index) => index != itemIndex);});
    }

    return (
        <div style={{ backgroundColor: '#fc8f8'}}>
            <div style={{ backgroundColor: '#e0e0e0'}} >
            <h1 >Hindu's Shopping List</h1>
            <ol >
                {
                    cart.map((item, index) => (
                        <li onClick={() => deleteItem(index)} key={index}>
                        {item}
                      </li>
                    ))
                }
            </ol>
            
            </div>
            <div style={{ backgroundColor: '#bad7f2'}} >
            <div >
                <h2>Walmart</h2>
                <ItemList items={walmart} onItemClick={addItem} />
            </div>
            <div >
                <h2>Dollar Tree</h2>
                <ItemList items={dollarTree} onItemClick={addItem} />
            </div>
            
            </div>
           
        </div>
    );
}