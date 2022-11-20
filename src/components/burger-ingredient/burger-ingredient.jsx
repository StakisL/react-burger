import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerPropTypes from '../../utils/prop-types.jsx'
import ingredientStyles from './burger-ingredient.module.css'
import Modal from '../modal/modal.jsx'
import { useMemo, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ITEM } from '../../services/actions/burger-constructor.js'
import { INGREDIENT_INCREASE } from '../../services/actions/burger-ingredients.js'

BurgerIngredient.propTypes = {
	ingredient: burgerPropTypes.isRequired,
}

function BurgerIngredient(props) {
	const dispatch = useDispatch()
	const [isOpen, setOpen] = useState(false)
	const itemsCounter = useSelector((store) => store.ingredients.items)
	const bunCount = useSelector((store) => store.ingredients.bunCounter)
	const handleClose = () => {
		setOpen(false)
	}

	const itemCount = useMemo(() => {
		if (props.ingredient.type === 'bun' && props.ingredient._id === bunCount.id) {
			return bunCount === undefined ? 0 : bunCount.count
		}

		let item = itemsCounter.find((e) => e.id === props.ingredient._id)
		return item === undefined ? 0 : item.count
	}, [itemsCounter, props.ingredient, bunCount])

	const handleOpen = () => {
		setOpen(true)
		dispatch({ type: ADD_ITEM, item: props.ingredient })
		dispatch({ type: INGREDIENT_INCREASE, id: props.ingredient._id, ingredientType: props.ingredient.type })
	}

	return (
		<>
			<span className={ingredientStyles.ingredient} key={props.ingredient._id} onClick={handleOpen}>
				<div className={ingredientStyles.image_container}>
					<img className={ingredientStyles.ingredient_icon} src={props.ingredient.image} alt="" />
					{itemCount !== 0 && <Counter count={itemCount} size="small" />}
				</div>
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
				<Modal header="Детали ингредиента" handleClose={handleClose}>
					<IngredientDetails ingredient={props.ingredient} />
				</Modal>
			)}
		</>
	)
}

export default BurgerIngredient
