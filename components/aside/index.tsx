import React from "react";
import S from "./styles.module.scss";
import { FaCarSide } from "react-icons/fa6";
import {
  SiAudi,
  SiBmw,
  SiChevrolet,
  SiFerrari,
  SiFiat,
  SiFord,
  SiHonda,
  SiHyundai,
  SiJeep,
  SiLamborghini,
  SiLandrover,
  SiMaserati,
  SiMercedes,
  SiNissan,
  SiRenault,
  SiToyota,
  SiVolkswagen,
  SiVolvo,
} from "react-icons/si";

interface IAside {
  handleBrandFilter: Function;
  clearFilters: Function;
  selectedBrand: string;
}

const Aside = ({ handleBrandFilter, clearFilters, selectedBrand }: IAside) => {
  const marcas = [
    { name: "Todos", icon: <FaCarSide /> },
    { name: "Mercedes", icon: <SiMercedes /> },
    { name: "BMW", icon: <SiBmw /> },
    { name: "Fiat", icon: <SiFiat /> },
    { name: "Audi", icon: <SiAudi /> },
    { name: "Volvo", icon: <SiVolvo /> },
    { name: "Volkswagen", icon: <SiVolkswagen /> },
    { name: "Chevrolet", icon: <SiChevrolet /> },
    { name: "Ferrari", icon: <SiFerrari /> },
    { name: "Ford", icon: <SiFord /> },
    { name: "Renault", icon: <SiRenault /> },
    { name: "Toyota", icon: <SiToyota /> },
    { name: "Nissan", icon: <SiNissan /> },
    { name: "Honda", icon: <SiHonda /> },
    { name: "Hyundai", icon: <SiHyundai /> },
    { name: "Jeep", icon: <SiJeep /> },
    { name: "Maserati", icon: <SiMaserati /> },
    { name: "Lamborghini", icon: <SiLamborghini /> },
    { name: "Landrover", icon: <SiLandrover /> },
  ];

  return (
    <aside>
      <ul className={S.filters}>
        {marcas?.map((item, index) => (
          <li key={item.name}>
            <button
              onClick={() => {
                if (item.name === "Todos") {
                  clearFilters();
                } else {
                  handleBrandFilter(item.name);
                }
              }}
              className={
                selectedBrand === item.name ||
                (index === 0 && selectedBrand === "")
                  ? S.active
                  : ""
              }
            >
              {item.icon} <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
