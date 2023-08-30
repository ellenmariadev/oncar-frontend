import { render, screen } from "@testing-library/react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/app/page";
import { mockVehicleData } from "./mock/mockData";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("axios");
const mockGet = jest.fn();
axios.get = mockGet;

jest.mock("../hooks", () => ({
  ...jest.requireActual("../hooks"),
  useMediaQuery: jest.fn(),
}));

describe("<Home />", () => {
  it("should render correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockVehicleData });

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Mercedes")).toBeInTheDocument();
    expect(screen.getByText("BMW")).toBeInTheDocument();
    expect(screen.getByText("Fiat")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
  });

  it("displays the vehicles card when data is loaded", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockVehicleData });

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    await screen.findByText("AMG GLE 63 Coup");
    await screen.findByText("R$ 145.450,00");
    await screen.findByText("2023");
    await screen.findByText("Civic");
    await screen.findByText("R$ 200.000,00");

    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("R$ 145.450,00")).toBeInTheDocument();
    expect(screen.getByText("Civic")).toBeInTheDocument();
    expect(screen.getByText("AMG GLE 63 Coup")).toBeInTheDocument();
  });
});
