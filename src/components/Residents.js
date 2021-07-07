import React, { useState, useEffect } from "react";
import axios from "axios";
import ResidentCard from "./ResidentCard";

export default function Residents(props) {

	const place = props.locations.find( planet => planet.id === Number(props.match.params.id));

	const [residents, setResidents] = useState(place.residents);
	const [images, setImages] = useState([]);
	const [names, setNames] = useState([]);

	useEffect(() => {

		let promiseArray = residents.map( (url) => axios.get(url));
		axios.all(promiseArray)
			 .then( (results) => {
			 	let d = results.map(data => data.data.image);
			 	setImages(d);
			 })
		
	}, [])

	console.log("resident", residents);
	console.log("======");
	console.log("images", images);

	return (
		<section>
			{(place === undefined) ?
			<h1>No data here</h1>
			:
			<div>
				<h5>{place.name}</h5>
				<h5>{place.residents.length} people</h5>
				<div className="character-list">
					{images.map( (image, index) => (
						<ResidentCard key={index} image={image} />	
					))
					}
				</div>
			</div>
			}
		</section>
	);
};