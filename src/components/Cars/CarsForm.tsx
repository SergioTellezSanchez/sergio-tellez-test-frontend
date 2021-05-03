import React, { ChangeEvent, FormEvent, useState } from "react";
import { Car } from "./Car";
import * as CarService from "./CarService";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement>;

interface Props {
  loadCars: () => void;
}

const CarsForm = ({ loadCars }: Props) => {
  const initialState = {
    description: "",
    maker: "",
    carModel: "",
    carId: "",
    km: "",
    onMaintenance: false,
  };
  const [car, setCar] = useState<Car>(initialState);

  const handleInputChange = (e: InputChange) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await CarService.addCar(car);
    loadCars();
    toast.success("New car added");
    setCar(initialState);
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit} className={"border"}>
        <table className={"table"}>
          <tbody>
            <tr>
              <td>
                <input
                  type={"text"}
                  name={"carId"}
                  placeholder={"Add an ID"}
                  className={"form-control"}
                  onChange={handleInputChange}
                  autoFocus
                  value={car.carId}
                />
              </td>
              <td>
                <input
                  type={"text"}
                  name={"description"}
                  placeholder={"Add a description"}
                  className={"form-control"}
                  onChange={handleInputChange}
                  autoFocus
                  value={car.description}
                />
              </td>
              <td>
                <input
                  type={"text"}
                  name={"maker"}
                  placeholder={"Add a maker"}
                  className={"form-control"}
                  onChange={handleInputChange}
                  autoFocus
                  value={car.maker}
                />
              </td>
              <td>
                <input
                  type={"text"}
                  name={"carModel"}
                  placeholder={"Add a car model"}
                  className={"form-control"}
                  onChange={handleInputChange}
                  autoFocus
                  value={car.carModel}
                />
              </td>
              <td>
                <input
                  type={"text"}
                  name={"km"}
                  placeholder={"Add usage km"}
                  className={"form-control"}
                  onChange={handleInputChange}
                  autoFocus
                  value={car.km}
                />
              </td>
              <td>
                <button className={"btn btn-primary"}>Add Car</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CarsForm;
