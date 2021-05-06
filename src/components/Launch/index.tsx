import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch';

const LaunchContainer = () => {
	const { data, error, loading } = useLaunchesQuery();

	if (loading) {
		return <div>Data is Loading</div>;
	}

	if (error || !data) {
		return <div>There was an erro</div>;
	}

	return <Launch data={data} />;
};

export default LaunchContainer;
