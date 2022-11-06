import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerPropTypes from '../../utils/prop-types.jsx'
import ingredientStyles from './burger-ingredient.module.css'
import Modal from '../modal/modal.jsx'
import { useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'

BurgerIngredient.propTypes = {
	ingredient: burgerPropTypes.isRequired,
}

function BurgerIngredient(props) {
	const [isOpen, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<>
			<span className={ingredientStyles.ingredient} key={props.ingredient._id} onClick={handleOpen}>
				<img className={ingredientStyles.ingredient_icon} src={props.ingredient.image} alt="" />
				<span className={ingredientStyles.ingredient_price}>
					<p className={`${ingredientStyles.ingredient_count}  text_type_digits-default`}>
						{' '}
						{props.ingredient.price}
					</p>
					<CurrencyIcon className={ingredientStyles.ingredient_currency} type="primary" />
				</span>
				<p className={`${ingredientStyles.ingredient_name}  text_type_main-default`}>{props.ingredient.name}</p>
			</span>
			{isOpen && (
				<Modal isOpen={isOpen} header="Детали ингредиента" handleClose={handleClose}>
					<IngredientDetails ingredient={props.ingredient} />
				</Modal>
			)}
		</>
	)
}

export default BurgerIngredient
