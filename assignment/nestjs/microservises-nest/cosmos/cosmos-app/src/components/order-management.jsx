import React, { useEffect } from 'react';
import { CreateOrder, GetOrders } from '../services/order-service';

export default function OrderManagement() {

	const [customerId, setCustomerId] = React.useState("");
	const [productId, setProductId] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [qty, setQty] = React.useState("");
	const [orders, setOrders] = React.useState([]);

	const handleOrderSubmit = async (e) => {
		e.preventDefault();
		try {
			const order = {
				customerId,
				items: [
					{
						productId,
						price,
						quantity: qty
					}
				]
			}
			const response = await CreateOrder(order);
			console.log(response.data);

			// Send the order to the server
		} catch (error) {
			console.error(error);
			alert(error.name);
		}
	}

	useEffect(() => {
		fetchOrders();
	}, []);

	const fetchOrders = async () => {
		try {
			const response = await GetOrders();
			setOrders(response.data);
		} catch (error) {
			console.error(error);
			alert(error.name);
		}
	}

	return (
		<>
			<p>Create Order</p>
			<form onSubmit={handleOrderSubmit}>
				<label htmlFor="cus_id">Customer ID</label>
				<input type="text" id="cus_id" name="cus_id" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />

				<label htmlFor="prod_id">Product ID</label>
				<input type="text" id="prod_id" name="prod_id" value={productId} onChange={(e) => setProductId(e.target.value)} required />

				<label htmlFor="price">Price</label>
				<input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

				<label htmlFor="qty">QTY</label>
				<input type="text" id="qty" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} required />

				<input type="submit" value="Submit" />
			</form>
			<div>
				<table>
					<tr>
						<th>ID</th>
						<th>Customer ID</th>
						<th>Order Date</th>
						<th></th>
						<th></th>
					</tr>
					{
						orders && orders.map((order) => {
							return (
								<tr>
									<td>{order.id}</td>
									<td>{order.customerId}</td>
									<td>{order.createdAt.split("T")[0]}</td>
									<td><button>Edit</button></td>
									<td><button>View Items</button></td>
								</tr>
							)
						})
					}
				</table>
			</div>
		</>
	)
}