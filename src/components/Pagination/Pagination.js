import PaginationStyled from './Pagination.styled';

export const Pagination = ({ page, setPageTo, totalPages }) => {
  return (
    <PaginationStyled className="pagination">
      <button type="button" onClick={() => setPageTo(page - 1)}>
        Previous
      </button>
      |{page}|
      <button type="button" onClick={() => setPageTo(page + 1)}>
        Next
      </button>
    </PaginationStyled>
  );
};
