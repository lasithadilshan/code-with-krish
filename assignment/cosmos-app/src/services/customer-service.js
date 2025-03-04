import axios from 'axios';

const baseUrl = 'http://localhost:3002/customers';

export const createCustomer = async(customer) =>{
    const result = await axios.post(baseUrl, customer);
    return result;
}

export const GetCustomers = async (customer) => {
    return await axios.get(baseUrl, customer);
}