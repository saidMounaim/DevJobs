export const initialState = {
	jobs: [],
	searchJobs: [],
};

function AppReducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_JOBS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_JOBS':
			return {
				...state,
				jobs: action.payload,
				loading: false,
			};
		case 'SEARCH_JOBS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'SEARCH_JOBS':
			return {
				...state,
				searchJobs: action.payload,
				jobs: [],
				loading: false,
			};
		default:
			return state;
	}
}

export default AppReducer;
