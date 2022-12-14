import { INGREDIENT_DECREASE, INGREDIENT_INCREASE, SET_DEFAULT_COUNTER } from '../actions/burger-ingredients'

const initialState = {
	items: [],
	bunCounter: undefined,
}

export const burgerIngredientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case INGREDIENT_INCREASE: {
			return ingredientIncrease(state, action)
		}
		case INGREDIENT_DECREASE: {
			return {
				...state,
				items: ingredientDecrease(state, action),
			}
		}
		case SET_DEFAULT_COUNTER: {
			return initialState
		}
		default: {
			return state
		}
	}
}

function ingredientIncrease(state, action) {
	if (action.ingredientType === 'bun') {
		return {
			...state,
			bunCounter: { id: action.id, count: 2 },
		}
	}

	if (!state.items.find((e) => e.id === action.id)) {
		return {
			...state,
			items: [...state.items, { id: action.id, count: 1 }],
		}
	}

	return {
		...state,
		items: state.items.map((element) => {
			if (element.id === action.id) {
				return { id: action.id, count: element.count + 1 }
			}

			return element
		}),
	}
}

function ingredientDecrease(state, action) {
	if (state.items === null) {
		return state
	}

	if (!state.items.find((e) => e.id === action.id)) {
		return state
	}

	return state.items.map((element) => {
		if (element.id === action.id) {
			return { id: action.id, count: element.count - 1 }
		}

		return element
	})
}
