import axios from 'axios';
import { Homework } from '../types';

const API_URL = 'https://your-api-url.com/api/homework';

export const fetchHomework = async (): Promise<Homework[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addHomework = async (homework: Homework): Promise<Homework> => {
    const response = await axios.post(API_URL, homework);
    return response.data;
};

export const deleteHomework = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};