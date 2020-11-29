import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyled>
			<div className="container">
				<h1>DevJobs</h1>
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	width: 100%;
	height: 110px;
	background: #6c5ce7;
	padding-top: 20px;
	border-bottom-left-radius: 100px;
	h1 {
		font-size: 1.5rem;
		font-weight: 600;
		color: white;
	}
`;

export default Header;
