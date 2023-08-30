import S from "./styles.module.scss";

interface IPagination {
  currentPage: number;
  isPreviousData: boolean;
  pageCount: number;
  handleNextPage: React.MouseEventHandler<HTMLButtonElement>;
  handlePreviousPage: React.MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ({
  currentPage,
  isPreviousData,
  pageCount,
  handleNextPage,
  handlePreviousPage,
}: IPagination) => {
  return (
    <div className={S.pagination}>
      <button
        disabled={currentPage === 1 || isPreviousData}
        onClick={handlePreviousPage}
      >
        Voltar
      </button>
      <p>
        <strong>{currentPage}</strong> / {pageCount}
      </p>
      <button
        disabled={currentPage === pageCount || isPreviousData}
        onClick={handleNextPage}
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;
