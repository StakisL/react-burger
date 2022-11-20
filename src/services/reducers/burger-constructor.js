import {
	ADD_ITEM,
	DELETE_ITEM,
	CREATE_ORDER_FAILED,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS,
} from '../actions/burger-constructor'

const initialState = {
	items: [],
	isEmpty: true,
	bun: undefined,
	isLoading: false,
	hasError: false,
	success: false,
	order: undefined,
}

export const BurgerConstructorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return addItem(state, action)
		}
		case DELETE_ITEM: {
			return removeItem(state, action)
		}
		case CREATE_ORDER_REQUEST: {
			return {
				...state,
				isLoading: true,
				success: false,
			}
		}
		case CREATE_ORDER_SUCCESS: {
			return {
				...state,
				hasError: false,
				isLoading: false,
				success: action.order.success,
				order: action.order,
			}
		}
		case CREATE_ORDER_FAILED: {
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

const addItem = (state, action) => {
	if (action.item.type === 'bun') {
		if (state.bun !== undefined) {
			console.error('Bun was already added')
			return state
		}
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

	console.log(state.items)
	console.log(action.id)

	return {
		...state,
		isEmpty: state.items.length === 0,
		items: state.items.filter((_, index) => index !== action.id),
	}
}
