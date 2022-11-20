import { INGREDIENT_DECREASE, INGREDIENT_INCREASE } from '../actions/burger-ingredients'

const initialState = {
	items: [],
	bunCounter: {},
}

export const burgerIngredientsReducer = (state = initialState, action) => {
	console.log(action)
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

	if (state.items.find((e) => e.id === action.id) === undefined) {
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
	if (state.items.find((e) => e.id === action.id) === undefined) {
		return [...state.items, { id: action.id, count: 1 }]
	}

	return state.items.map((element) => {
		if (element.id === action.id) {
			return { id: action.id, count: element.count - 1 }
		}

		return element
	})
}
