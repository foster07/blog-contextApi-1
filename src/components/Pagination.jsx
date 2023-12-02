import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="w-full  p-3  border-t-2  fixed bottom-0 bg-white ">
      <div className="max-w-[980px] mx-auto flex justify-around items-center ">
        <div>{page !== 1 && (
            <button
            className="border-2 border-slate-700 mx-2 px-3 py-1 hover:bg-blue-300 rounded-lg"
              onClick={() => {
                page !== 1 && handlePageChange(page - 1);
              }}
            >
              Previous
            </button>
          )}
          {page !== totalPages && (
            <button
            className="border-2 border-slate-700 mx-2 px-3 py-1 hover:bg-blue-300 rounded-lg"
              onClick={() => {
                page !== totalPages && handlePageChange(page + 1);
              }}
            >
              Next
            </button>
          )}

          
        </div>

        <div className="font-bold text-md ">{`Page ${page} of ${totalPages}`}</div>
      </div>
    </div>
  );
}
