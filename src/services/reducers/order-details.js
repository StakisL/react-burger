import { CREATE_ORDER_FAILED, CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from '../actions/order-details'

const initialState = {
	success: false,
	orderNumber: undefined,
}

export const orderDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ORDER_REQUEST: {
			return {
				...state,
				success: false,
			}
		}
		case CREATE_ORDER_SUCCESS: {
			return {
				...state,
				success: action.success,
				orderNumber: action.orderNumber,
			}
		}
		case CREATE_ORDER_FAILED: {
			return initialState
		}
		default: {
			return state
		}
	}
}
