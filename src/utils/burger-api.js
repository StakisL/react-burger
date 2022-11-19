import { BURGER_API_URL } from './constants'

const headers = { 'Content-Type': 'application/json' }

export function getIngredientsRequest() {
	return fetch(`${BURGER_API_URL}/ingredients`, { headers }).then(checkResponse)
}

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
