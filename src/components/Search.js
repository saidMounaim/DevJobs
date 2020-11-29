import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import searchImg from '../images/search.svg';
import locationImg from '../images/location.svg';
import { useGlobalValue } from '../context/GlobalState';
import { API_URL } from '../api';

const Search = () => {
	const [{}, dispatch] = useGlobalValue();

	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [checked, setChecked] = useState(false);

	const fetchJobs = async () => {
		try {
			dispatch({ type: 'SEARCH_JOBS_REQUEST' });
			const jobsData = await axios
				.get(`${API_URL}description=${title}&full_time=${checked}&location=${location}`)
				.then((response) => response.data);
			dispatch({ type: 'SEARCH_JOBS', payload: jobsData });
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSubmitSearch = (e) => {
		e.preventDefault();
		if (title == '' && location == '' && checked == false) return;
		fetchJobs();
	};

	return (
		<SearchStyled>
			<form onSubmit={handleSubmitSearch}>
				<Col4>
					<FieldForm>
						<img src={searchImg} alt="Search" />
						<input
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							placeholder="Filter by title, companies, expertises..."
						/>
					</FieldForm>
				</Col4>
				<Col2>
					<FieldForm>
						<img src={locationImg} alt="Location" />
						<input
							type="text"
							onChange={(e) => setLocation(e.target.value)}
							value={location}
							placeholder="Filter by location..."
						/>
					</FieldForm>
				</Col2>
				<Col2>
					<div className="checkbox-btn">
						<CheckboxStyled>
							Full time
							<input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
							<span className="checkmark"></span>
						</CheckboxStyled>
						<div className="button-submit">
							<button type="submit">Search</button>
						</div>
					</div>
				</Col2>
			</form>
		</SearchStyled>
	);
};

const SearchStyled = styled.div`
	width: 100%;
	padding: 1.2rem 2rem;
	background: white;
	display: flex;
	align-items: center;
	border-radius: 10px;
	position: relative;
	top: -32px;
	form {
		width: 100%;
		display: flex;
		align-items: center;
	}
	input {
		width: 100%;
		font-size: 15px;
		color: grey;
		font-weight: 200;
		font-family: 'Poppins';
		margin-left: 9px;
	}
	button {
		padding: 0.4rem 1rem;
		background: #6c5ce7;
		font-size: 14px;
		font-family: 'Poppins';
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		transition: all 0.4s;
		&:hover {
			background: #4636bd;
		}
	}
	.checkbox-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Col4 = styled.div`
	flex-basis: 40%;
`;

const Col2 = styled.div`
	flex-basis: 30%;
`;

const FieldForm = styled.div`
	display: flex;
	align-items: center;
`;

const CheckboxStyled = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	cursor: pointer;
	font-size: 14px;
	font-family: 'Poppins';
	font-weight: 400;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		background-color: #eee;
	}

	&:hover input ~ .checkmark {
		background-color: #ccc;
	}

	input:checked ~ .checkmark {
		background-color: #6c5ce7;
	}

	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	input:checked ~ .checkmark:after {
		display: block;
	}

	.checkmark:after {
		left: 6px;
		top: 2px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

export default Search;
