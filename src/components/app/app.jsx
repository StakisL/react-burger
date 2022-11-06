import React, { useState, useEffect } from 'react'
import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import { BURGER_API_URL } from '../../utils/constants'

function App() {
	const [burgersData, setBugersData] = useState()
	const [isLoaded, setLoaded] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const headers = { 'Content-Type': 'application/json' }
		fetch(`${BURGER_API_URL}/ingredients`, { headers })
			.then((response) => response.json())
			.then((ingredients) => {
				setBugersData(ingredients.data)
			})
			.catch((error) => {
				setError(error.toString())
				console.error('Api request was failed', error)
			})
			.finally(() => setLoaded(true))
	}, [])

	if (error) {
		return (
			<section>
				<h1>Что-то пошло не так :(</h1>
				<p>В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.</p>
			</section>
		)
	} else {
		return (
			<React.Fragment>
				<AppHeader className={appStyles.app_header} />
				{isLoaded && (
					<div className={appStyles.app_body}>
						<BurgerIngredients data={burgersData} />
						<BurgerConstructor data={burgersData} />
					</div>
				)}
			</React.Fragment>
		)
	}
}

export default App
