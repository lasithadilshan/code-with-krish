import React from 'react';

export default function OrderManagement(){

	const[customerId, setCustomerId] = React.useState("");
	const[productId, setProductId] = React.useState("");
	const[price, setPrice] = React.useState("");
	const[qty, setQty] = React.useState("");

	const handleOrderSubmit = (e) => {
		e.preventDefault();
		console.log("Order Submitted", "Customer ID: ", customerId, "Product ID: ", productId, "Price: ", price, "QTY: ", qty);
			
	}

	return (
		<>
			<p>Create Order</p>
			<form onSubmit={handleOrderSubmit}>
				<label htmlFor="cus_id">Customer ID</label>
				<input type="text" id="cus_id" name="cus_id" value={customerId} onChange={(e)=> setCustomerId(e.target.value)} required/>

				<label htmlFor="prod_id">Product ID</label>
				<input type="text" id="prod_id" name="prod_id" value={productId} onChange={(e)=> setProductId(e.target.value)} required/>

				<label htmlFor="price">Price</label>
				<input type="text" id="price" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} required/>

				<label htmlFor="qty">QTY</label>
				<input type="text" id="qty" name="qty" value={qty} onChange={(e)=> setQty(e.target.value)} required/>

				<input type="submit" value="Submit"/>
			</form>
		</>
	)
};