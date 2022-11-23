import { createOrder } from '../../utils/burger-api'
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'
export const RESET_ORDER_DETAILS = 'RESET_ORDER_DETAILS'

export function order(ingredients) {
	return function (dispatch) {
		dispatch({
			type: CREATE_ORDER_REQUEST,
		})
		createOrder(ingredients).then((res) => {
			if (res && res.success) {
				dispatch({
					type: CREATE_ORDER_SUCCESS,
					orderNumber: res.order.number,
					success: res.success,
					name: res.name,
				})
			} else {
				dispatch({
					type: CREATE_ORDER_FAILED,
				})
			}
		})
	}
}
