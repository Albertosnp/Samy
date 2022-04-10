import { useState } from 'react';

export const usePagination = ({ productsToShow = [] }) => {
  const [page, setPage] = useState(1);
  const [Prueba, setPrueba] = useState([]);
  const sizePage = 8;

  const totalPages = Math.ceil(productsToShow.length / sizePage);

  const setPageTo = (page) => {
    if (page < 1) return setPage(1);
    if (page > totalPages) return setPage(totalPages);
    
    return setPage(page);
  };

  let productsToShowPaginated = productsToShow.slice(
    (page - 1) * sizePage,
    page * sizePage,
  );
   
  return {
    page,
    setPageTo,
    totalPages,
    productsToShowPaginated,
  };
};
