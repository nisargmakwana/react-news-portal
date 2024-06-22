import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
	const curArticle = useSelector((state) => state.articles.curArticle);
	console.log(curArticle.content);

	return (
		<div className="container mx-auto p-4">
			<img
				src={curArticle.urlToImage ? curArticle.image : "/defaultNewsImg.jpg"}
				alt={curArticle.title}
				className="w-full h-[30rem] mb-4"></img>
			<h1 className="text-2xl font-bold mb-4">{curArticle.title}</h1>
			<p>
				{curArticle.content
					? curArticle.content
					: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut eum obcaecati fuga unde culpa consequuntur libero, aliquid similique, dicta in sunt, odio sapiente distinctio corrupti. Quisquam consequatur, rerum nulla, officia ullam iusto perferendis aliquid esse laboriosam amet eligendi nemo maiores eaque quasi itaque provident veritatis modi non? Voluptatibus sint incidunt dolores nam praesentium quasi magni rem quas vero vitae culpa ad neque natus adipisci corporis labore facere quae laborum, maxime, aliquid officiis. Incidunt qui, id magnam laborum repudiandae ducimus doloremque? Asperiores eaque dolor, sapiente pariatur incidunt recusandae nulla temporibus culpa eum molestiae modi illum totam quo, sit fuga laboriosam exercitationem nisi. Aut, ducimus. Nobis, voluptate perspiciatis asperiores ab enim obcaecati sapiente, suscipit quos velit eos molestiae consequuntur? Aut alias optio aliquam quasi unde excepturi doloribus, eius at in quibusdam porro autem expedita vitae qui cupiditate, natus, exercitationem perferendis ad beatae nihil ea facilis cumque ipsum repellendus. Doloribus repellat suscipit aliquam ad, officia cupiditate eveniet, commodi ex, eaque incidunt animi accusamus corrupti! Minus earum omnis ad illo dolorum molestias excepturi labore provident praesentium numquam? Debitis quo corrupti nisi fuga ad eius, corporis eveniet laboriosam voluptatum ullam, laudantium est quaerat magni libero reiciendis, asperiores non nemo consequatur modi atque. Tenetur ea harum aliquam assumenda ducimus placeat obcaecati temporibus non rem sequi nemo dolorum, nostrum architecto aperiam repellendus earum. Mollitia distinctio blanditiis quam sint tenetur ad sed optio, doloribus nemo velit qui, asperiores quis nostrum, accusamus officia quidem explicabo necessitatibus tempora! Voluptatum, atque accusantium, debitis impedit explicabo, dignissimos enim earum laudantium tempore minus quia eum! Dolores exercitationem blanditiis ducimus repellendus. Minima, suscipit."}
			</p>
		</div>
	);
};

export default DetailPage;
