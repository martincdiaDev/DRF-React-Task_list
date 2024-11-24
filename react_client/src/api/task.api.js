import axios from 'axios';

const apiTarea = axios.create({
    baseURL: 'http://localhost:8000/api/v1/tareas/'
});

export const getAllTasks = () => apiTarea.get('/');
export const getTask = (id) => apiTarea.get(`/${id}/`);
export const createTask = (tarea) => apiTarea.post('/', tarea);
export const deleteTask = (id) => apiTarea.delete(`/${id}/`);
export const updateTask = (id, tarea) => apiTarea.put(`/${id}/`, tarea);