import { ADD_ITEM, DELETE_ITEM } from '../actions/burger-constructor'

const initialState = {
	items: [],
	isEmpty: true,
	bun: undefined,
	isLoading: false,
	hasError: false,
}

export const burgerConstructorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return addItem(state, action)
		}
		case DELETE_ITEM: {
			return removeItem(state, action)
		}
		default: {
			return state
		}
	}
}

const addItem = (state, action) => {
	if (action.item.type === 'bun') {
		return {
			...state,
			bun: action.item,
		}
	}

	return {
		...state,
		items: [...state.items, action.item],
		isEmpty: false,
	}
}

const removeItem = (state, action) => {
	if (state.isEmpty) {
		return
	}

	return {
		...state,
		isEmpty: state.items.length === 0,
		items: state.items.filter((_, index) => index !== action.id),
	}
}
