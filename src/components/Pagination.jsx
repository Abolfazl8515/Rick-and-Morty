import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageByAmount } from "../features/currentPageSlice/currentPageSlice";

const Pagination = () => {
  const totalItems = useSelector(
    (state) => state.characters.charactersData?.info?.count
  );
  const itemsPerPage = 20;
  const currentPage = useSelector((state) => state.currentPage);
  const filters = useSelector((state) => state.filterCharacters);
  const search = useSelector((state) => state.searchCharacter);
  const dispath = useDispatch();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visibleRange = 5;

  const handlePageChange = (pageNumber) => {
    dispath(setPageByAmount(pageNumber));
  };

  useEffect(() => handlePageChange(1), [filters, search]);

  const generatePageNumbers = () => {
    let pages = [];
    const halfRange = Math.floor(visibleRange / 2);

    let startPage = Math.max(currentPage - halfRange, 1);
    let endPage = Math.min(currentPage + halfRange, totalPages);

    // Ensure there are always visibleRange pages shown if possible
    if (endPage - startPage + 1 < visibleRange) {
      startPage = Math.max(endPage - visibleRange + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="mobile:w-11/12 flex justify-center space-x-3 my-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-16 h-8 bg-gray-200 hover:bg-orange-300 rounded ${
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        }`}
      >
        Previous
      </button>

      {/* First Page */}
      {currentPage > Math.floor(visibleRange / 2) + 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="w-8 h-8 flex items-center justify-center mx-4 bg-gray-200 hover:bg-orange-300 rounded"
          >
            1
          </button>
          <span className="px-3 py-1">...</span>
        </>
      )}

      {/* Visible Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-8 h-8 flex items-center justify-center mx-4 bg-gray-200 hover:bg-orange-300 rounded ${
            currentPage === page && "bg-orange-500 text-white cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages - Math.floor(visibleRange / 2) && (
        <>
          <span className="px-3 py-1">...</span>
          <button
            onClick={() => handlePageChange(totalPages)}
            className="w-8 h-8 flex items-center justify-center mx-4 bg-gray-200 hover:bg-orange-300 rounded hover:text-white"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-14 h-8 bg-gray-200 hover:bg-orange-300 rounded ${
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
