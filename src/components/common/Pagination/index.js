import React from "react";
import "./Pagination.css";
import { useTranslation } from "react-i18next";

const Pagination = () => {
  const { t } = useTranslation();
  const pages = [1, 2, 3, 4, 5, 6];
  const previousPage = () => {};

  const isCurrentPage = (page) => {
    return true;
  };


  const isInLastPage = false;
  const goToPage =(page) => {

  }

  const nextPage = () => {

  }

  const show = true;
  const isInFirstPage = true;
  return show ? (
    <div className="pro-pagination-style text-center" data-test="pagination">
      <ul>
        {!isInFirstPage && (
          <li data-test="paginate-prev">
            <a
              className="next"
              href
              data-test="previous-page-link"
              onClick={() => previousPage()}
              aria-label="Go to previous page"
            >
              {t("previous")}
            </a>
          </li>
        )}

        {pages.map((page) => {
          return (
            <li key={page}>
              <a
                className={isCurrentPage(page) ? "active" : ""}
                onClick={() => goToPage(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

        {!isInLastPage && (
          <li>
            <a
              className="next"
              href
              data-test="next-page-link"
              onClick={() => nextPage()}
              aria-label="Go to next page"
            >
              {t("next")}
            </a>
          </li>
        )}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default Pagination;
