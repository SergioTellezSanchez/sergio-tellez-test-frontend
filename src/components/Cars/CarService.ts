import axios from "axios";
import { Car } from "./Car";

const API = "http://localhost:4000";

export const getCars = async () => {
  return await axios.get<Car[]>(`${API}/cars`);
};

export const addCar = async (car: Car) => {
  return await axios.post(`${API}/cars`, car);
};

export const updateCar = async (car: Car) => {
  return await axios.put(`${API}/cars/${car._id}`, car);
};
