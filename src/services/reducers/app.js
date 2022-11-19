import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from '../actions/app'

const initialState = {
	ingredients: [],
	ingredientsRequest: false,
	ingredientsFailed: false,
}

export const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_REQUEST: {
			return {
				...state,
				ingredientsRequest: true,
			}
		}
		case GET_INGREDIENTS_SUCCESS: {
			return {
				...state,
				ingredientsFailed: false,
				ingredientsRequest: false,
				ingredients: action.ingredients,
			}
		}
		case GET_INGREDIENTS_FAILED: {
			return {
				...state,
				ingredientsFailed: true,
				ingredientsRequest: false,
			}
		}
		default: {
			return state
		}
	}
}
