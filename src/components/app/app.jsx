import React from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgersData from '../../utils/data'

function App() {
	return (
		<React.Fragment>
			<AppHeader className={styles.app_header} />
			<div className={styles.app_body}>
				<BurgerIngredients data={BurgersData} />
				<BurgerConstructor data={BurgersData} />
			</div>
		</React.Fragment>
	)
}

export default App
