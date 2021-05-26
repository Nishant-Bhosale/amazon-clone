import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Carousel/Carousel";

import ProductContainer from "../../components/ProductContainer/ProductContainer";

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
			{/* {items.map((item) => {
				return <Product key={item.id} item={item} />;
			})} */}
			<ProductContainer products={items} />
		</div>
	);
}

export default MainPage;
