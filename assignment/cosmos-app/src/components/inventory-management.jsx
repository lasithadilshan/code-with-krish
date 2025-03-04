import React, { useEffect } from "react";
import {createProduct, GetProducts} from "../services/inventory-service";

export function InventoryManagement(){
    const[name, setName] = React.useState("");
    const[price, setPrice] = React.useState("");
    const[quantity, setQuantity] = React.useState("");
    const[Inventory, setInventory] = React.useState([]);

    const handleInventorySubmit = async (e) =>{
        e.preventDefault();
        console.log("Inventory Submitted")
        //Set values from the backend to the frontend
        try{
        const inventory = {
                    name,
                    price,
                    quantity
        }
        const response = await createProduct(inventory);

        console.log(response.data);
        } catch(error){
            alert(error.name)
        }
    }

    useEffect(()=> {
        GetProducts().then(response => {
            setInventory(response.data)
        }).catch(error=>{
            alert(error.name)
        })
    }, [])

    return(
        <>
        <p>Create Product</p>
        <form onSubmit={handleInventorySubmit}>
            <label htmlFor="pro_name">Product Name</label>
            <input type="text" id="pro_name" name="pro_name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <br/>
            <label htmlFor="pro_price">Price</label>
            <input type="text" id="pro_price" name="pro_price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <br/>
            <label htmlFor="quantity">Quantity </label>
            <input type="text" id="quantity" name="quantity" value={quantity}onChange={(e) => setQuantity(e.target.value)}></input>
            <br/>
            <input type="submit" value="submit"></input>
        </form>

        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>

               <tbody>
               {Inventory.map(inventories =>(
                    <tr key={inventories.id}>
                        <td>{inventories.name}</td>
                        <td>{inventories.price}</td>
                        <td>{inventories.quantity}</td>
                    </tr>
                ))
                }
               </tbody>
            </table>
        </div>
        </>
    )
}