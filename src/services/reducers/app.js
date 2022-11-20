import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from '../actions/app'

const initialState = {
	ingredients: [],
	isLoading: false,
	hasError: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_REQUEST: {
			return {
				...state,
				isLoading: true,
			}
		}
		case GET_INGREDIENTS_SUCCESS: {
			return {
				...state,
				hasError: false,
				isLoading: false,
				ingredients: action.ingredients,
			}
		}
		case GET_INGREDIENTS_FAILED: {
			return {
				...state,
				hasError: true,
				isLoading: false,
			}
		}
		default: {
			return state
		}
	}
}
