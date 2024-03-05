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
const FavouriteDestination = ({ plan }) => {
	const { id, destination, image, days, totalCost } = plan;
	return (
		<div className="favourite-destination">
			<img
				className="favourite-destination-image"
				src={image}
				alt={destination}
			/>
			<h3>
				{destination} ({days} Days)
			</h3>
			<p>{totalCost} €</p>
		</div>
	);
};
export default FavouriteDestination;
