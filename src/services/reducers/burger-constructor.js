import { ADD_ITEM, DELETE_ITEM, SORT_ITEMS, SET_DEFAULT_CONSTRUCTOR } from '../actions/burger-constructor'

const initialState = {
	items: [],
	bun: undefined,
}

export const burgerConstructorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return addItem(state, action)
		}
		case DELETE_ITEM: {
			return removeItem(state, action)
		}
		case SET_DEFAULT_CONSTRUCTOR: {
			return initialState
		}
		case SORT_ITEMS: {
			return sortItems(state, action)
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
	}
}

const removeItem = (state, action) => {
	if (state.length === 0) {
		return
	}

	return {
		...state,
		isEmpty: state.items.length === 0,
		items: state.items.filter((_, index) => index !== action.id),
	}
}

const sortItems = (state, action) => {
	const items = [...state.items]
	items.splice(action.targetIndex, 0, items.splice(action.currentIndex, 1)[0])

	return {
		...state,
		items,
	}
}
