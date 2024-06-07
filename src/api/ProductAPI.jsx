import axios from 'axios';
import { BASE_URL } from '../constant/BASE_URL';

export const fetchProductAPI = async () => {
    const response = await axios.get(BASE_URL);
    return response
}

export const createProductAPI = async (product) => {
    const response = await axios.post(BASE_URL, product)
    return response
}

export const deleteProductAPI = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`)
}

export const editProductAPI = async(id, updatedData) => {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData)
    return response
}
