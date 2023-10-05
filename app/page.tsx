"use client";

import { VehicleData } from "@/interfaces/vehicle";
import { useEffect, useState } from "react";
import { formattedPrice } from "@/helpers/formatPrice";
import { SlClose } from "react-icons/sl";
import { useMediaQuery, useData } from "@/hooks";

import {
  Header,
  Pagination,
  Aside,
  Card,
  Carousel,
  Skeleton,
  Confirmation,
  SearchBar,
  Form,
} from "@/components";
import Image from "next/image";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<VehicleData[]>([]);

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [selectCard, setSelectCard] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const { data, isLoading, isPreviousData, isError } = useData();

  const large = useMediaQuery("(min-width: 1200px)");
  const medium = useMediaQuery("(min-width: 881px)");
  const small = useMediaQuery("(max-width: 880px)");

  // PAGINATION

  let pageSize = 9;
  if (large) {
    pageSize = 9;
  } else if (medium) {
    pageSize = 6;
  } else if (small) {
    pageSize = 3;
  } else {
    pageSize;
  }

  const pageCount = Math.ceil(filteredData?.length / pageSize);
  const offset = (currentPage - 1) * pageSize;
  const paginatedVehicles = filteredData?.slice(offset, offset + pageSize);

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // FILTERS

  useEffect(() => {
    const filtered = data?.data.filter((vehicle) => {
      const brandMatch =
        vehicle.brand.toLowerCase().includes(query.trim().toLowerCase()) &&
        (selectedBrand === "" || vehicle.brand === selectedBrand);
      const modelMatch = vehicle.model
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const queryMatch = brandMatch || modelMatch;

      if (!queryMatch && query.trim().split(" ").length > 1) {
        const [brand, model] = query.trim().split(" ");
        const brandModelMatch =
          vehicle.brand.toLowerCase().includes(brand.toLowerCase()) &&
          vehicle.model.toLowerCase().includes(model.toLowerCase());
        return brandModelMatch;
      }

      return queryMatch;
    }) as VehicleData[];
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [data, query, selectedBrand]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setSelectedBrand("");
  };

  const handleBrandFilter = (brandName: string) => {
    setSelectedBrand(brandName);
    setQuery(brandName);
  };

  const clearFilters = () => {
    setSelectedBrand("");
    setQuery("");
  };

  return (
    <>
      <Header>
        <SearchBar query={query} onSearch={handleSearch} setQuery={setQuery} />
      </Header>
      <div className="grid-main-aside">
        <Aside
          clearFilters={clearFilters}
          handleBrandFilter={handleBrandFilter}
          selectedBrand={selectedBrand}
        />

        <main className="main">
          <div className="card-wrapper">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carpemundi.com.br%2Fwp-content%2Fuploads%2F2018%2F08%2Fdream-beach-bali-nusa.jpg&f=1&nofb=1&ipt=4ac35782619c2e2b0e8215209029999e4dd81e12df951d8c515add3f0a923dc7&ipo=images" />
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carpemundi.com.br%2Fwp-content%2Fuploads%2F2018%2F08%2Fdream-beach-bali-nusa.jpg&f=1&nofb=1&ipt=4ac35782619c2e2b0e8215209029999e4dd81e12df951d8c515add3f0a923dc7&ipo=images" />
            {isLoading
              ? [...Array(pageSize).keys()].map((i) => <Skeleton key={i} />)
              : paginatedVehicles?.map((vehicle: VehicleData) => (
                  <Card
                    openForm={openForm}
                    key={vehicle.id}
                    data={vehicle}
                    setOpenForm={setOpenForm}
                    setSelectCard={setSelectCard}
                  />
                ))}
          </div>
          {isError && (
            <p style={{ textAlign: "center" }} className="errorMessage">
              Error! Tente outra vez.
            </p>
          )}
          {paginatedVehicles?.length > 0 ? (
            <Pagination
              currentPage={currentPage}
              isPreviousData={isPreviousData}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              pageCount={pageCount}
            />
          ) : (
            !isLoading && (
              <p className="emptyMessage">
                Não há nenhum carro registrado dessa marca.
              </p>
            )
          )}
        </main>
      </div>
      {openForm && (
        <div className="overlay">
          <aside
            data-testid="form"
            className="form"
            data-visible={openForm}
            id="comprar-navigation"
          >
            {confirmation ? (
              <Confirmation />
            ) : (
              <>
                <button
                  onClick={() => setOpenForm(!openForm)}
                  className="form__closebutton"
                >
                  <SlClose />
                </button>
                <p className="form__year">{selectCard[4]}</p>
                <h2 className="form__brand">{selectCard[1]}</h2>
                <p className="form__model">{selectCard[2]}</p>
                <Carousel brand={selectCard[1]} />
                <p className="form__price">{formattedPrice(selectCard[3])}</p>
                <span className="contact">Entre em contato</span>
                <Form
                  selectCard={selectCard}
                  setOpenForm={setOpenForm}
                  setConfirmation={setConfirmation}
                  openForm={openForm}
                  handleConfirmation={handleConfirmation}
                />
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
