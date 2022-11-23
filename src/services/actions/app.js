import { getIngredientsRequest } from '../../utils/burger-api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

export function getIngredients() {
	return function (dispatch) {
		dispatch({
			type: GET_INGREDIENTS_REQUEST,
		})
		getIngredientsRequest()
			.then((res) => {
				if (res && res.success) {
					dispatch({
						type: GET_INGREDIENTS_SUCCESS,
						ingredients: res.data,
					})
				} else {
					dispatch({
						type: GET_INGREDIENTS_FAILED,
					})
				}
			})
			.catch(() => {
				dispatch({ type: GET_INGREDIENTS_FAILED })
			})
	}
}
