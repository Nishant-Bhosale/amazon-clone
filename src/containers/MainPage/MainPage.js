import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Carousel/Carousel";
import Spinner from "../../components/Spinner/Spinner";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Footer from "../../components/Footer/Footer";

function MainPage() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setItems(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return (
		<React.Fragment>
			<div>
				<Banner />
				{loading ? <Spinner /> : <ProductContainer products={items} />}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default MainPage;
