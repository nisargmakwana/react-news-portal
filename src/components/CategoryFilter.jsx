import React from "react";

const CategoryFilter = ({ setCategory }) => {
	const categories = [
		"Business",
		"Technology",
		"Entertainment",
		"General",
		"Health",
		"Science",
		"Sports",
	];

	return (
		<div className="mb-4">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => setCategory(category.toLowerCase())}
					className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryFilter;
