import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const Banner = () => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			interval={2500}
			showStatus={false}
			showThumbs={false}
			showArrows={false}
			useKeyboardArrows={true}
			showIndicators={false}
		>
			<div>
				<img
					src={`${process.env.PUBLIC_URL}/images/gamingRig.jpg`}
					alt=""
					style={{ width: "100vw", height: "100vh" }}
				/>
				<p className="image-info">Build the Ultimate Gaming Rig</p>
			</div>
			<div>
				<img
					src={`${process.env.PUBLIC_URL}/images/background-photo.jpg`}
					alt=""
					style={{ width: "100vw", height: "100vh" }}
				/>
				<p className="image-info">Best E-Commerce Site</p>
			</div>
			<div>
				<img
					src={`${process.env.PUBLIC_URL}/images/mensfashion.jpg`}
					alt=""
					style={{ width: "100vw", height: "100vh" }}
				/>
				<p className="image-info">Latest Fashion</p>
			</div>
		</Carousel>
	);
};

export default Banner;
