import React from "react";

interface PaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  setPagination: any;
  pagination: any;
}

function CountArray(digit: number) {
  var array = [];
  for (var i = 1; i <= digit; i++) {
    array.push(Number(i));
  }
  return array;
}

const Pagination = ({
  page,
  pageCount,
  pageSize,
  total,
  setPagination,
  pagination,
}: PaginationProps) => {
  return (
    <div className="flex items-center">
      <div
        className="border rounded-tl-md rounded-bl-md border-gray-300 flex items-center justify-center cursor-pointer"
        style={{ width: "44px", height: "33px" }}
        onClick={() => {
          if (pagination.page !== 1) {
            setPagination({
              ...pagination,
              page: 1,
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.707 5.79303C12.8945 5.98056 12.9998 6.23487 12.9998 6.50003C12.9998 6.76519 12.8945 7.0195 12.707 7.20703L9.414 10.5L12.707 13.793C12.8892 13.9816 12.99 14.2342 12.9877 14.4964C12.9854 14.7586 12.8802 15.0094 12.6948 15.1948C12.5094 15.3803 12.2586 15.4854 11.9964 15.4877C11.7342 15.49 11.4816 15.3892 11.293 15.207L7.293 11.207C7.10553 11.0195 7.00021 10.7652 7.00021 10.5C7.00021 10.2349 7.10553 9.98056 7.293 9.79303L11.293 5.79303C11.4805 5.60556 11.7348 5.50024 12 5.50024C12.2652 5.50024 12.5195 5.60556 12.707 5.79303Z"
            fill="#6B7280"
          />
        </svg>
      </div>
      {CountArray(pageCount).map((item, index) => (
        <div
          className={[
            "border border-l-0 border-gray-300 flex items-center justify-center cursor-pointer",
            page === item ? "bg-gray-100" : "",
            index + 1 === CountArray(pageCount).length ? "border-r-0" : "",
          ].join(" ")}
          key={item}
          style={{ width: "44px", height: "33px" }}
          onClick={() => {
            if (pagination.page !== item) {
              setPagination({
                ...pagination,
                page: item,
              });
            }
          }}
        >
          {item}
        </div>
      ))}
      <div
        className="border border-gray-300 rounded-tr-md rounded-br-md flex items-center justify-center cursor-pointer"
        style={{ width: "44px", height: "33px" }}
        onClick={() => {
          if (pagination.page !== pageCount) {
            setPagination({
              ...pagination,
              page: pageCount,
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.293 15.207C7.10553 15.0195 7.00021 14.7652 7.00021 14.5C7.00021 14.2349 7.10553 13.9806 7.293 13.793L10.586 10.5L7.293 7.20704C7.11084 7.01844 7.01005 6.76584 7.01233 6.50364C7.0146 6.24144 7.11977 5.99063 7.30518 5.80522C7.49059 5.61981 7.7414 5.51465 8.0036 5.51237C8.2658 5.51009 8.5184 5.61088 8.707 5.79304L12.707 9.79304C12.8945 9.98057 12.9998 10.2349 12.9998 10.5C12.9998 10.7652 12.8945 11.0195 12.707 11.207L8.707 15.207C8.51947 15.3945 8.26516 15.4998 8 15.4998C7.73484 15.4998 7.48053 15.3945 7.293 15.207Z"
            fill="#6B7280"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
