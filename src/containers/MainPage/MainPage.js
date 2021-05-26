import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Carousel/Carousel";
import Product from "../../components/Product/Product";

function MainPage() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((res) => {
			console.log(res.data);
			setItems(res.data);
		});
	}, []);
	return (
		<div>
			<Banner />
			{items.map((item) => {
				return <Product key={item.id} item={item} />;
			})}
		</div>
	);
}

export default MainPage;
