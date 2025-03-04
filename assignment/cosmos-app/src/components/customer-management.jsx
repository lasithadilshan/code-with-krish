import React, { useEffect } from "react";
import { createCustomer, GetCustomers } from "../services/customer-service";

export function CustomerManagement() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [Customers, setCustomers] = React.useState([]);

    const handleCustomerSubmit = async (e) => {
        e.preventDefault();
        try {
            const customer = {
                name,
                email,
                address
            }
            const response = await createCustomer(customer);

            console.log(response.data);
        } catch (error) {
            alert(error.name)
        }
    }

    useEffect(() => {
        GetCustomers().then(response => {
            setCustomers(response.data)
        }).catch(error => {
            alert(error.name)
        })
    }, [])

    return (
        <>
            <p>Create Customer</p>
            <form onSubmit={handleCustomerSubmit}>
                <label htmlFor="cus_name">Customer Name </label>
                <input type="text" id="cus_name" name="cus_name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br />
                <label htmlFor="cus_email">Customer Email</label>
                <input type="text" id="cus_email" name="cus_email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <label htmlFor="cus_adress">Customer Address </label>
                <input type="text" id="cus_adress" name="cus_adress" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <br />
                <input type="submit" value="submit"></input>
            </form>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    </thead>

                    <tbody>
                    {Customers.map(customers => (
                        <tr key={customers.id}>
                            <td>{customers.name}</td>
                            <td>{customers.email}</td>
                            <td>{customers.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}