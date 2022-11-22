import { SET_INGREDIENT_DETAILS } from '../actions/ingredient-details'

const initialState = {
	ingredient: undefined,
}

export const ingredientDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INGREDIENT_DETAILS: {
			return {
				...state,
				ingredient: action.ingredient,
			}
		}
		default:
			return state
	}
}
