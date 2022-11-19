import React, { useEffect } from 'react'
import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import { getIngredients } from '../../services/actions/app'
import { useDispatch, useSelector } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	const isLoaded = useSelector((store) => store.api.ingredientsRequest)
	const error = useSelector((store) => store.api.ingredientsFailed)
	const ingredients = useSelector((store) => store.api.ingredients)

	console.log(ingredients)

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])

	if (error) {
		return (
			<section>
				<h1>Что-то пошло не так :(</h1>
				<p>В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.</p>
			</section>
		)
	}
	return (
		<React.Fragment>
			<AppHeader className={appStyles.app_header} />
			{isLoaded && (
				<div className={appStyles.app_body}>
					<BurgerIngredients data={ingredients} />
					<BurgerConstructor data={ingredients} />
				</div>
			)}
		</React.Fragment>
	)
}

export default App
