import React from 'react'
import './app.css'
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgersData from '../../utils/data'

function App() {
	return (
		<React.Fragment>
			<AppHeader className="app-header" />
			<div className="app-body">
				<BurgerIngredients data={BurgersData} />
				<BurgerConstructor data={BurgersData} />
			</div>
		</React.Fragment>
	)
}

export default App
