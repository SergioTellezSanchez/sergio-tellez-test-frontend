import React, { useEffect, useState } from "react";
import { Car } from "./Car";
import * as CarService from "./CarService";
import CarsForm from "./CarsForm";
import { toast } from "react-toastify";
import { dateFormatter } from "../../Utils/Formatter";

const CarsList = () => {
  const [carList, setCarList] = useState<Car[]>([]);

  const loadCars = async () => {
    const res = await CarService.getCars();
    setCarList(res.data);
  };

  const setCarOnMaintenance = async (car: Car) => {
    car.onMaintenance = true;
    const date = new Date();
    car.estimatedDate = date.setDate(date.getDate() + 15);
    await CarService.updateCar(car);
    await loadCars();
    toast.success("Car set to Maintenance");
  };

  useEffect(() => {
    loadCars().then();
  }, []);

  return (
    <div className={"container"}>
      <table className={"table"}>
        <thead>
          <tr className={"p-3 mb-3 border-bottom cc_cursor"}>
            <th scope={"col"}>Id</th>
            <th scope={"col"}>Description</th>
            <th scope={"col"}>Maker</th>
            <th scope={"col"}>Car model</th>
            <th scope={"col"}>Estimated date</th>
            <th scope={"col"}>KM</th>
            <th scope={"col"}>On Maintenance</th>
          </tr>
        </thead>
        <tbody>
          {carList.map((car) => {
            return (
              <tr className={"border"} key={car.carId}>
                <th scope={"row"} className={"align-middle"} key={car.carId}>
                  {car.carId}
                </th>
                <td className={"align-middle"}>{car.description}</td>
                <td className={"align-middle"}>{car.maker}</td>
                <td className={"align-middle"}>{car.carModel}</td>
                <td className={"align-middle"}>
                  {dateFormatter(car.estimatedDate)}
                </td>
                <td className={"align-middle"}>{car.km}</td>
                <td
                  className={
                    car.onMaintenance
                      ? "table-success text-center rounded align-middle"
                      : "table-danger text-center rounded align-middle"
                  }
                >
                  {car.onMaintenance ? <span>True </span> : <span>False </span>}
                </td>
                <td>
                  {car.onMaintenance ? (
                    <div>{""}</div>
                  ) : (
                    <button
                      className={"btn btn-primary"}
                      onClick={() => {
                        setCarOnMaintenance(car).then();
                      }}
                    >
                      Set car to maintenance
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CarsForm loadCars={loadCars} />
    </div>
  );
};

export default CarsList;
