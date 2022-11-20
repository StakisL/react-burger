import { BURGER_API_URL } from './constants'

const headers = { 'Content-Type': 'application/json;charset=utf-8' }

export function getIngredientsRequest() {
	return fetch(`${BURGER_API_URL}/ingredients`, { headers }).then(checkResponse)
}

export function createOrder(ingredients) {
	return fetch(`${BURGER_API_URL}/orders`, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({ ingredients }),
	}).then(checkResponse)
}

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
