import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerPropTypes from '../../utils/prop-types.jsx'
import ingredientStyles from './burger-ingredient.module.css'
import Modal from '../modal/modal.jsx'
import { useState } from 'react'

BurgerIngredient.propTypes = {
	ingredient: burgerPropTypes.isRequired,
}

function BurgerIngredient(props) {
	const [isOpen, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<span className={ingredientStyles.ingredient} key={props.ingredient._id} onClick={() => setOpen(true)}>
			<Modal type="ingredient" isOpen={isOpen} handleClose={handleClose} />
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
	)
}

export default BurgerIngredient
