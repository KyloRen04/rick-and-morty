import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .pagination {
            font-size: 12px;
          }
          .pagination .prev,
          .pagination .next {
            display: inline-block;
          }
        }
        @media (min-width: 768px) {
          .pagination {
            font-size: 14px;
          }
        }
        .prev, .next {
          display: inline-block;
          margin: 0;
          padding: 0.5rem 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
          color: white;
          background-color: #007bff;
        }
        .prev {
          margin-right: 0.5rem;
        }
        .next {
          margin-left: 0.5rem;
        }
        .pagination .prev span,
        .pagination .next span {
          color: white; 
        }
      `}</style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel={<span>Next</span>}
        previousLabel={<span>Prev</span>}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
