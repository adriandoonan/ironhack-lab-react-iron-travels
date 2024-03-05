import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./ TravelPlanCard";
import FavouriteDestination from "./FavouriteDestination";

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

const TravelList = () => {
	const [destinations, setDestinations] = useState(travelPlansData);
	const [favourites, setFavourites] = useState([]);

	const handleDelete = (id) => {
		setDestinations(
			destinations.filter((destination) => destination.id !== id),
		);
	};

	const handleFavourite = (id) => {
		if (favourites.some((destination) => destination.id === id)) {
			setFavourites([
				...favourites.filter((destination) => destination.id !== id),
			]);
			return;
		}
		setFavourites([
			...favourites,
			...destinations.filter((destination) => destination.id === id),
		]);
	};
	return (
		<div className="wrapper-div">
			<div id="travel-list">
				{destinations.map((plan) => (
					<TravelPlanCard
						key={plan.id}
						plan={plan}
						handleDelete={handleDelete}
						handleFavourite={handleFavourite}
					/>
				))}
			</div>
			<div id="favourite-destinations">
				<h2>Favourites</h2>
				<div id="favourite-destinations-list">
					{favourites.map((destination) => (
						<FavouriteDestination key={destination.id} plan={destination} />
					))}
				</div>
			</div>
		</div>
	);
};
export default TravelList;
