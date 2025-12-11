import axios from "axios";

const API_BASE = "http://localhost:8082/api";

export const getAllWins = () => axios.get(`${API_BASE}/wins`);
export const createWin = (win) => axios.post(`${API_BASE}/wins`, win);
export const updateWin = (id, win) => axios.put(`${API_BASE}/wins/${id}`, win);
export const deleteWin = (id) => axios.delete(`${API_BASE}/wins/${id}`);
