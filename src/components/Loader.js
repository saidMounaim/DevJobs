import React from 'react';
import styled from 'styled-components';

const Loader = () => {
	return (
		<LoaderStyled>
			<div class="ball-loader-ball ball1"></div>
			<div class="ball-loader-ball ball2"></div>
			<div class="ball-loader-ball ball3"></div>
		</LoaderStyled>
	);
};

const LoaderStyled = styled.div`
	width: 100px;
	height: 23.3333333333px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	.ball-loader-ball {
		will-change: transform;
		height: 23.3333333333px;
		width: 23.3333333333px;
		border-radius: 50%;
		background-color: lightBlue;
		position: absolute;
		animation: grow 1s ease-in-out infinite alternate;
	}
	.ball-loader-ball.ball1 {
		left: 0;
		transform-origin: 100% 50%;
	}
	.ball-loader-ball.ball2 {
		left: 50%;
		transform: translateX(-50%) scale(1);
		animation-delay: 0.33s;
	}
	.ball-loader-ball.ball3 {
		right: 0;
		animation-delay: 0.66s;
	}

	@keyframes grow {
		to {
			transform: translateX(-50%) scale(0);
		}
	}
`;

export default Loader;
