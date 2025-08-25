import service from "@/config/api";
import { Task } from "@/interfaces";

const taskServices = {
  getTasks: async function (params: { date: string }) {
    return await service
      .get("/tasks", { params })
      .then((res) => res.data)
      .catch((error) => error);
  },
  postTask: async function (data: Task) {
    return await service
      .post("/tasks", data)
      .then((res) => res.data)
      .catch((error) => error);
  },
  deleteTask: async function (id: Task["id"]) {
    return await service
      .delete(`/tasks/${id}`)
      .then((res) => res.data)
      .catch((error) => error);
  },
  editTask: async function (id: Task["id"], data: Task) {
    return await service
      .put(`/tasks/${id}`, data)
      .then((res) => res.data)
      .catch((error) => error);
  },
};

export default taskServices;
