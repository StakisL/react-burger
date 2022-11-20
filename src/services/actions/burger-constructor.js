import { createOrder } from '../../utils/burger-api'
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'

export function order(ingredients) {
	return function (dispatch) {
		dispatch({
			type: CREATE_ORDER_REQUEST,
		})
		createOrder(ingredients).then((res) => {
			console.log(res.order)
			if (res && res.success) {
				dispatch({
					type: CREATE_ORDER_SUCCESS,
					order: res.order,
					success: res.success,
				})
			} else {
				dispatch({
					type: CREATE_ORDER_FAILED,
				})
			}
		})
	}
}
