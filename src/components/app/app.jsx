import React, { useEffect } from 'react'
import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import { getIngredients } from '../../services/actions/app'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
	const dispatch = useDispatch()
	const { ingredients, isLoading, hasError } = useSelector((store) => store.api)

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])

	if (hasError) {
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
			{!isLoading && ingredients.length !== 0 && (
				<DndProvider backend={HTML5Backend}>
					<div className={appStyles.app_body}>
						<BurgerIngredients />
						<BurgerConstructor />
					</div>
				</DndProvider>
			)}
		</React.Fragment>
	)
}

export default App
