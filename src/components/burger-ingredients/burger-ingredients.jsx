import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PropTypes from 'prop-types'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsList from '../ingredients-list/ingredients-list.jsx'
import burgerPropTypes from '../../utils/prop-types.jsx'

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function BurgerIngredients(props) {
	const [current, setCurrent] = React.useState('bun')
	const bunRef = React.useRef(null)
	const sauceRef = React.useRef(null)
	const mainRef = React.useRef(null)

	const bun = React.useMemo(() => props.data.filter((element) => element.type === 'bun'), [props.data])
	const sauce = React.useMemo(() => props.data.filter((element) => element.type === 'sauce'), [props.data])
	const main = React.useMemo(() => props.data.filter((element) => element.type === 'main'), [props.data])

	const currentHandle = (val) => {
		moveToView(val)
		setCurrent(val)
	}

	const moveToView = (val) => {
		switch (val) {
			case 'bun':
				bunRef.current?.scrollIntoView({ behavior: 'smooth' })
				break
			case 'sauce':
				sauceRef.current?.scrollIntoView({ behavior: 'smooth' })
				break
			case 'main':
				mainRef.current?.scrollIntoView({ behavior: 'smooth' })
				break
			default:
				break
		}
	}

	return (
		<section className={burgerIngredientsStyles.burger_ingredients_container}>
			<h1
				className={` ${burgerIngredientsStyles.burger_ingredients_header} text_type_main-large ml-8 mt-10 mb-5`}
			>
				Соберите бургер
			</h1>
			<section className={burgerIngredientsStyles.burger_ingredients}>
				<section className={burgerIngredientsStyles.burger_ingredients_tabs}>
					<Tab value="bun" active={current === 'bun'} onClick={currentHandle}>
						Булки
					</Tab>
					<Tab value="sauce" active={current === 'sauce'} onClick={currentHandle}>
						Соусы
					</Tab>
					<Tab value="main" active={current === 'main'} onClick={currentHandle}>
						Начинки
					</Tab>
				</section>
				<ul className={burgerIngredientsStyles.burger_ingredients_list}>
					<div className={burgerIngredientsStyles.ref_container} ref={bunRef}>
						<IngredientsList type="Булки" ingredients={bun} />
					</div>
					<div className={burgerIngredientsStyles.ref_container} ref={sauceRef}>
						<IngredientsList type="Соусы" ingredients={sauce} />
					</div>
					<div className={burgerIngredientsStyles.ref_container} ref={mainRef}>
						<IngredientsList type="Начинки" ingredients={main} />
					</div>
				</ul>
			</section>
		</section>
	)
}

export default BurgerIngredients
