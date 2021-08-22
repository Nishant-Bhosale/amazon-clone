import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import ProductContainer from "../../components/ProductContainer/ProductContainer";

function MainPage() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setItems(res.data);
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
				<div>
					<img
						src={`${process.env.PUBLIC_URL}/images/background-photo.jpg`}
						alt=""
						className="main-background-img"
					/>
					<p className="image-info">Best E-Commerce Site</p>
				</div>
				{loading ? (
					<Spinner />
				) : (
					<ProductContainer products={items} toShow={true} />
				)}
			</div>
		</React.Fragment>
	);
}

export default MainPage;
