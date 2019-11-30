import React from "react";
// import Residents from "./Residents.js"
// import { Link, Route } from "react-router-dom";
import { Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function LocationCard(props) {
	const { location } = props;

	return (
		<div>
			<Card className="card-w-h">
			  	<CardBody key={location.id}>
			  		<CardTitle>{location.name}</CardTitle>
			  		<CardSubtitle>{location.type}</CardSubtitle>
			  		<CardSubtitle>{location.dimension}</CardSubtitle>
			  		<CardSubtitle>{location.residents.length} characters from the show are seen here</CardSubtitle>
			  		<Button color="link" onClick={() => props.history.push(`/locations/${location.id}`)}>More info</Button>
			  	</CardBody>
	  		</Card>
		</div>

	);
};
