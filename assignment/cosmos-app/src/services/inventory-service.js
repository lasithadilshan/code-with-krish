import axios from 'axios';

const baseUrl = 'http://localhost:3001/product';

export const createProduct = async(product) =>{
    const result = await axios.post(baseUrl, product);
    return result;
}

export const GetProducts = async (product) => {
    return await axios.get(baseUrl, product);
}