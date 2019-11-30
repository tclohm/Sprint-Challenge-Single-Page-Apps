import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function CharacterCard(props) {

	const { person } = props

	return (
	  	<div>
	  		<Card className=".card-w-h">
	  			<CardImg top width="100%" src={person.image} alt={person.name} />
		  		<CardBody>
			  		<CardTitle>{person.name}</CardTitle>
			  		<CardSubtitle>{person.gender}</CardSubtitle>
			  		<CardSubtitle>{person.origin.name}</CardSubtitle>
			  		<CardSubtitle>{person.status}</CardSubtitle>
		  		</CardBody>
	  		</Card>
	  	</div>
  	);
};
