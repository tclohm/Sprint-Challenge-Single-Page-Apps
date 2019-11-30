import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function ResidentCard(props) {

	const { image } = props

	return (
		<div>
		{
			(image.length === 0) 
			?
				<Card>

				<CardBody>

					<CardTitle>Nope</CardTitle>

				</CardBody>

				</Card>
			:

			<Card className="card-w-h">
				<CardImg top width="100%" src={image} alt="rick and morty" />
			</Card>

		}
		</div>
	)
}