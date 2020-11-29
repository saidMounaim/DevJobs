import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const JobCard = ({ job }) => {
	const formatDate = (date) => {
		return moment(date).fromNow();
	};

	return (
		<JobItem key={job.id} href={job.url} target="_blank">
			<small>
				{formatDate(job.created_at)} . {job.type}
			</small>
			<h3>{job.title}</h3>
			<div className="info">
				<span>{job.company}</span>
				<p>{job.location}</p>
			</div>
		</JobItem>
	);
};

const JobItem = styled.a`
	display: block;
	padding: 1.8rem;
	background: white;
	position: relative;
	border-radius: 10px;
	height: 270px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: #6c5ce7;
		small,
		h3,
		span,
		p {
			color: white;
		}
	}
	.info {
		position: absolute;
		bottom: 1.8rem;
		left: 1.8rem;
	}
	small {
		font-size: 14px;
		color: grey;
		font-weight: 200;
	}
	h3 {
		font-size: 19px;
		color: black;
		font-weight: 600;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	span {
		font-size: 15px;
		color: grey;
		font-weight: 200;
	}
	p {
		font-size: 14px;
		color: #6c5ce7;
		font-weight: 200;
	}
`;

export default JobCard;
