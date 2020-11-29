import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './context/GlobalState';
import AppReducer, { initialState } from './context/AppReducer';

ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider initialState={initialState} AppReducer={AppReducer}>
			<App />
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
