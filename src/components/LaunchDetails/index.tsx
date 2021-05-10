import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

const LaunchDetailsContainer = () => {
	const { data, error, loading } = useLaunchinfoQuery({
		variables: { id: '13' },
	});

	if (loading) {
		return <div>Data is loading</div>;
	}

	if (error) {
		return <div>There was an error </div>;
	}

	if (!data) {
		return <div>Please select a mission for it's details</div>;
	}

	return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;
