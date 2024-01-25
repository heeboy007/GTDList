import client from "./client";

export const createTask = ({ id, category }) => {
    return client.post('/task/create', { id, category });
};

export const updateTask = ({ taskID, updatedTask }) => {
    return client.post('/task/update', { taskID, updatedTask });
};

export const deleteTask = ({ taskID }) => {
    return client.post('/task/delete', { taskID });
};