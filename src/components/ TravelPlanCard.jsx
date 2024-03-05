// {
//     "id": 1,
//     "destination": "Paris, France",
//     "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg",
//     "days": 7,
//     "allInclusive": true,
//     "totalCost": 2200,
//     "description": "Explore the romantic streets of Paris.",
//     "parts": [
//       {
//         "name": "All-Inclusive Package",
//         "description": "Includes flights, hotel, meals, entertainment, tours and tickets to tourist attractions.",
//         "cost": 2200
//       }
//     ]
//   }

import { useState } from "react";
const TravelDestination = ({ plan, handleDelete, handleFavourite }) => {
	const { image, destination, description, totalCost, days, allInclusive, id } =
		plan;

	const buttonBackgroundColours = [
		"purple",
		"blue",
		"green",
		"yellow",
		"orange",
		"red",
	];

	const [clicks, setClicks] = useState(0);
	const colours = [
		"#f9f9f9",
		"purple",
		"blue",
		"green",
		"yellow",
		"orange",
		"red",
	];

	const increment = () => {
		setClicks(clicks + 1);
	};

	const modulo = clicks > 0 ? (clicks + 1) % 6 : 0;

	return (
		<article className="travel-destination">
			<span className="travel-destination-image-container">
				<img
					className="travel-destination-image"
					src={image}
					alt={`${destination} ${description}`}
				/>
			</span>

			<span className="travel-destination-details">
				<h3>
					{destination} ({days} Days)
				</h3>
				<p>{description}</p>
				<p>
					<strong>Price:</strong> {totalCost} €
				</p>
				<div className="travel-destination-labels-container">
					{totalCost >= 1500 && <span className="label blue">Premium</span>}
					{allInclusive && <span className="label blue">All-Inclusive</span>}
					{totalCost <= 350 && <span className="label green">Great Deal</span>}
				</div>
				<div className="ops-buttons-container">
					<button className="ops-button" onClick={() => handleDelete(id)}>
						Delete
					</button>
					<button
						className="ops-button"
						style={{ backgroundColor: colours[modulo] }}
						onClick={() => {
							handleFavourite(id);
							increment();
						}}
					>
						♡
					</button>
				</div>
			</span>
		</article>
	);
};
export default TravelDestination;
