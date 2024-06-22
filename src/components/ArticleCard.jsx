import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentArticle } from "../store/appSlice";

const ArticleCard = ({ article }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setCurrentArticle(article));
	};
	return (
		<div
			onClick={handleClick}
			className=" flex p-4 max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
			<div className=" w-[14rem]">
				<Link to={`/article/${article.author}`} className="w-[14rem] h-[14rem]">
					<img
						className="h-48 w-full object-cover md:h-full md:w-48"
						src={
							article.urlToImage ? article.urlToImage : "/defaultNewsImg.jpg"
						}
						alt={article.title}
					/>
				</Link>
			</div>

			<div className=" w-[10rem] ">
				<h3 className="uppercase tracking-wide text-sm text-slate-900 font-semibold">
					{article.title}
				</h3>
				<p className="mt-2 text-gray-500">{article.description}</p>
			</div>
		</div>
	);
};

export default ArticleCard;
