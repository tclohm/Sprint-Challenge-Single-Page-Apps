import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
// import SearchForm from "./SearchForm";
import LocationCard from "./LocationCard";

export default function LocationsList(props) {

	const { locations } = props

	return (

		<section className="location-list">
        {
        	locations.map( (location) => (
        		<LocationCard {...props} location={location} />
        	))
        }
      	</section>

	);
};
