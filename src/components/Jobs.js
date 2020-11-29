import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../api';
import { useGlobalValue } from '../context/GlobalState';
import JobCard from './JobCard';
import Loader from './Loader';

const Jobs = () => {
	const [{ jobs, searchJobs, loading }, dispatch] = useGlobalValue();

	const fetchJobs = async () => {
		try {
			dispatch({ type: 'FETCH_JOBS_REQUEST' });
			const jobsData = await axios
				.get(`${API_URL}description=react&full_time=false&location=`)
				.then((response) => response.data);
			dispatch({ type: 'FETCH_JOBS', payload: jobsData });
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, [dispatch]);

	return (
		<>
			{loading ? <Loader /> : null}
			<JobsGrid>
				{searchJobs.length > 0 && searchJobs.map((job) => <JobCard job={job} />)}
				{jobs.length > 0 && jobs.map((job) => <JobCard job={job} />)}
			</JobsGrid>
		</>
	);
};

const JobsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;
	padding-bottom: 80px;
`;

export default Jobs;
