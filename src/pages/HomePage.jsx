import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, setCategory, setCurrentPage } from "../store/appSlice";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

const HomePage = () => {
	const dispatch = useDispatch();
	const { articles, loading, error, category, currentPage } = useSelector(
		(state) => state.articles
	);

	useEffect(() => {
		dispatch(fetchArticles({ category, currentPage }));
	}, [dispatch, category, currentPage]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching articles: {error}</p>;

	return (
		<div className="container mx-auto p-4">
			<CategoryFilter setCategory={(cat) => dispatch(setCategory(cat))} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{articles?.map((article, index) => (
					<ArticleCard key={index} article={article} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={(page) => dispatch(setCurrentPage(page))}
			/>
		</div>
	);
};

export default HomePage;
