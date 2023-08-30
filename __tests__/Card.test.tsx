import { render, fireEvent, screen } from "@testing-library/react";
import { Card } from "@/components";

jest.mock("axios");

describe("<Card />", () => {
  const data = {
    id: 1,
    brand: "Brand",
    model: "Model",
    price: "20000",
    year: 2022,
  };

  it("should render correctly", () => {
    render(
      <Card
        data={data}
        setSelectCard={() => {}}
        setOpenForm={() => {}}
        openForm={false}
      />
    );

    expect(screen.getByText("Ano")).toBeInTheDocument();
    expect(screen.getByText("Marca")).toBeInTheDocument();
    expect(screen.getByText("Modelo")).toBeInTheDocument();
    expect(screen.getByText("R$ 20.000,00")).toBeInTheDocument();
    expect(screen.getByText("Comprar")).toBeInTheDocument();
  });

  it('should setOpenForm to TRUE on "Comprar" button click', async () => {
    const setOpenForm = jest.fn();

    render(
      <Card
        data={data}
        setSelectCard={() => {}}
        setOpenForm={setOpenForm}
        openForm={false}
      />
    );

    const comprarButton = screen.getByText("Comprar");
    fireEvent.click(comprarButton);

    expect(setOpenForm).toHaveBeenCalledWith(true);
  });
});
