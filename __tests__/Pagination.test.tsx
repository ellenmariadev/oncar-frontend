import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/components";

describe("<Pagination />", () => {
  const mockHandleNextPage = jest.fn();
  const mockHandlePreviousPage = jest.fn();

  const renderPagination = (
    currentPage: number,
    isPreviousData: boolean,
    pageCount: number
  ) => {
    render(
      <Pagination
        currentPage={currentPage}
        isPreviousData={isPreviousData}
        pageCount={pageCount}
        handleNextPage={mockHandleNextPage}
        handlePreviousPage={mockHandlePreviousPage}
      />
    );
  };

  it("renders correctly", () => {
    renderPagination(1, false, 5);

    expect(screen.getByText("Voltar")).toBeInTheDocument();
    expect(screen.getByText("/ 5")).toBeInTheDocument();
    expect(screen.getByText("Próximo")).toBeInTheDocument();
  });

  it("disables 'Voltar' button on first page", () => {
    renderPagination(1, false, 5);

    const backButton = screen.getByText("Voltar");
    expect(backButton).toBeDisabled();
    fireEvent.click(backButton);
    expect(mockHandlePreviousPage).not.toHaveBeenCalled();
  });

  it("enables 'Voltar' button when not on first page", () => {
    renderPagination(2, false, 5);

    const backButton = screen.getByText("Voltar");
    expect(backButton).toBeEnabled();
    fireEvent.click(backButton);
    expect(mockHandlePreviousPage).toHaveBeenCalled();
  });

  it("disables 'Próximo' button on last page", () => {
    renderPagination(5, false, 5);

    const nextButton = screen.getByText("Próximo");
    expect(nextButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(mockHandleNextPage).not.toHaveBeenCalled();
  });

  it("enables 'Próximo' button when not on last page", () => {
    renderPagination(4, false, 5);

    const nextButton = screen.getByText("Próximo");
    expect(nextButton).toBeEnabled();
    fireEvent.click(nextButton);
    expect(mockHandleNextPage).toHaveBeenCalled();
  });
});
