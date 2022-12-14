import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerPropTypes from '../../utils/prop-types.jsx'
import ingredientStyles from './burger-ingredient.module.css'
import Modal from '../modal/modal.jsx'
import { useMemo, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { SET_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details.js'
import { useDrag } from 'react-dnd'

BurgerIngredient.propTypes = {
	ingredient: burgerPropTypes.isRequired,
}

function BurgerIngredient(props) {
	const dispatch = useDispatch()
	const [isOpen, setOpen] = useState(false)
	const itemsCounter = useSelector((store) => store.ingredients.items)
	const bunCount = useSelector((store) => store.ingredients.bunCounter)
	const [{ isDrag }, dragRef] = useDrag({
		type: 'ingredient_new',
		item: props.ingredient,
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	})

	const handleClose = () => {
		setOpen(false)
	}

	const itemCount = useMemo(() => {
		if (props.ingredient.type === 'bun' && props.ingredient._id === bunCount?.id) {
			return bunCount === undefined ? 0 : bunCount.count
		}

		let item = itemsCounter.find((e) => e.id === props.ingredient._id)
		return item === undefined ? 0 : item.count
	}, [itemsCounter, props.ingredient, bunCount])

	const handleOpen = () => {
		setOpen(true)
		dispatch({ type: SET_INGREDIENT_DETAILS, ingredient: props.ingredient })
	}

	return (
		!isDrag && (
			<div ref={dragRef}>
				<span className={ingredientStyles.ingredient} key={props.ingredient._id} onClick={handleOpen}>
					<div className={ingredientStyles.image_container}>
						<img
							className={ingredientStyles.ingredient_icon}
							src={props.ingredient.image}
							alt="ingredient"
						/>
						{itemCount !== 0 && (
							<Counter className={ingredientStyles.ingredient_counter} count={itemCount} size="small" />
						)}
					</div>
					<span className={ingredientStyles.ingredient_price}>
						<p className={`${ingredientStyles.ingredient_count}  text_type_digits-default`}>
							{' '}
							{props.ingredient.price}
						</p>
						<CurrencyIcon className={ingredientStyles.ingredient_currency} type="primary" />
					</span>
					<p className={`${ingredientStyles.ingredient_name}  text_type_main-default`}>
						{props.ingredient.name}
					</p>
				</span>
				{isOpen && (
					<Modal header="???????????? ??????????????????????" handleClose={handleClose}>
						<IngredientDetails />
					</Modal>
				)}
			</div>
		)
	)
}

export default BurgerIngredient
