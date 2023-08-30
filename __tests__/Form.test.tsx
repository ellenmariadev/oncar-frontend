import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
const mockPostData = jest.fn();
axios.post = mockPostData;

jest.mock("../hooks", () => ({
  ...jest.requireActual("../hooks"),
  useMediaQuery: jest.fn(),
}));

describe("<Form />", () => {
  it("should render correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockVehicleData });

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    await screen.findAllByTestId("card-component");
    const comprarButton = screen.getAllByText("Comprar")[0];
    fireEvent.click(comprarButton);

    const form = screen.getByTestId("form");
    await waitFor(() => {
      expect(form).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/Nome */i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail */i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone */i)).toBeInTheDocument();
  });

  it("should submit form with valid data", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockVehicleData });

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    await screen.findAllByTestId("card-component");
    const comprarButton = screen.getAllByText("Comprar")[0];
    fireEvent.click(comprarButton);

    const form = screen.getByTestId("form");
    await waitFor(() => {
      expect(form).toBeInTheDocument();
    });

    const nameInput = screen.getByLabelText(/Nome */i);
    const emailInput = screen.getByLabelText(/E-mail */i);
    const phoneInput = screen.getByLabelText(/Telefone */i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "(75) 99263-7890" } });

    const mockResponse = { code: 200 };
    mockPostData.mockResolvedValue({ data: mockResponse });

    const submitButton = screen.getByText("Enviar");
    fireEvent.click(submitButton);

    const url = "http://localhost:5000/api/lead";

    await waitFor(() => {
      expect(mockPostData).toHaveBeenCalledWith(url, {
        name: "John Doe",
        email: "john@example.com",
        phone: "75992637890",
        vehicleid: 1,
      });
    });

    await waitFor(() => {
      const confirmationMessage = screen.getByText(/Verifique seu e-mail/i);
      expect(confirmationMessage).toBeInTheDocument();
    });
  });
});
