import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
	return (
		<div className="flex justify-center mt-4">
			<button
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1}
				className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
				Previous
			</button>
			<span className="text-xl px-4 py-2 m-2">{currentPage}</span>
			<button
				onClick={() => setCurrentPage(currentPage + 1)}
				className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
				Next
			</button>
		</div>
	);
};

export default Pagination;
