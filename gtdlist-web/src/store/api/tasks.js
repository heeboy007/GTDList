import client from "./client";

export const listTasks = id =>
    client.get(`/tasks/${id}`);