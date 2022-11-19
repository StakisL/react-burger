import { ADD_ITEM, DELETE_ITEM } from '../actions/burger-constructor'

const initialState = {
	items: [],
	isEmpty: true,
}

export const BurgerConstructorReducer = (state = initialState, action) => {
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
	if (state.items.some((t) => t.type === 'bun') && action.item.type === 'bun') {
		console.error('bun already added')
		return
	}

	state.items.push(action.item)
	return {
		...state,
		isEmpty: false,
	}
}

const removeItem = (state, action) => {
	if (state.isEmpty) {
		return
	}

	state.items.filter((element) => element._id !== action.id)
	return {
		...state,
		isEmpty: state.items.length === 0,
	}
}
