import axios from "axios";

const baseUrl = 'http://localhost:3000/orders';

const createOrder = async (order) => {
    return axios.post(baseUrl, order);
}

export default createOrder;