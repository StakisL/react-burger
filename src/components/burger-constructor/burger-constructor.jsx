import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import Bun from '../bun/bun'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_ITEM } from '../../services/actions/burger-constructor'
import { order } from '../../services/actions/order-details'
import { INGREDIENT_DECREASE } from '../../services/actions/burger-ingredients'

function BurgerConstructor() {
	const [isOpen, setOpen] = useState(false)
	const ingredients = useSelector((store) => store.constructor.items)
	const isEmpty = useSelector((store) => store.constructor.isEmpty)
	const bun = useSelector((store) => store.constructor.bun)
	const dispatch = useDispatch()

	const findTotalPrice = React.useMemo(() => {
		if (isEmpty && bun === undefined) {
			return 0
		}

		let bunPrice = bun === undefined ? 0 : bun.price * 2
		return ingredients.reduce((total, currentValue) => total + currentValue.price, 0) + bunPrice
	}, [ingredients, isEmpty, bun])

	const handleClose = () => {
		setOpen(false)
	}

	function ingredientsForOrder() {
		let ingredientIds = []
		ingredientIds.push(bun._id)
		ingredients.forEach((element) => {
			ingredientIds.push(element._id)
		})

		ingredientIds.push(bun._id)

		return ingredientIds
	}

	const handleOpen = () => {
		if (bun !== undefined && ingredients.length !== 0) {
			let ingredientIds = ingredientsForOrder()
			dispatch(order(ingredientIds))
			setOpen(true)
			return
		}
		console.error('you should add bun or ingredients')
	}

	const removeIngredient = (ingredient, id) => {
		dispatch({ type: DELETE_ITEM, id: id })
		dispatch({ type: INGREDIENT_DECREASE, id: ingredient._id })
	}

	return (
		<section className={`${burgerConstructorStyles.constructor} mt-25`}>
			<span>
				{bun !== undefined && <Bun bun={bun} type="top" />}
				{!isEmpty ? (
					<ul className={burgerConstructorStyles.constructor_list}>
						{ingredients.map((ingredient, index) => (
							<section
								className={`${burgerConstructorStyles.constructor_list_item} mt-4 mb-4 mr-1 ml-1`}
								key={index}
							>
								<span
									className={`${burgerConstructorStyles.constructor_list_item__icon_container} mr-1`}
								>
									<DragIcon
										className={burgerConstructorStyles.constructor_list_item__icon}
										type="primary"
									/>
								</span>
								<ConstructorElement
									className={burgerConstructorStyles.constructor_list_item__description}
									text={ingredient.name}
									type={ingredient.type}
									price={ingredient.price}
									thumbnail={ingredient.image}
									handleClose={() => removeIngredient(ingredient, index)}
								/>
							</section>
						))}
					</ul>
				) : (
					<div
						className={`${
							bun === undefined
								? burgerConstructorStyles.empty_container
								: burgerConstructorStyles.empty_container_with_buns
						} mt-4 mb-4`}
					/>
				)}

				{bun !== undefined && <Bun bun={bun} type="bottom" />}
			</span>
			<section className={`${burgerConstructorStyles.order_info} mt-10`}>
				<section className={`${burgerConstructorStyles.order_info_price} mr-10 ml-10`}>
					<p className={`${burgerConstructorStyles.order_info_price__total} text_type_digits-medium mr-1`}>
						{findTotalPrice}
					</p>
					<CurrencyIcon className={burgerConstructorStyles.order_info_price__icon} type="primary" />
				</section>
				<Button htmlType="button" type="primary" size="medium" onClick={handleOpen}>
					Оформить заказ
				</Button>
				{isOpen && (
					<Modal handleClose={handleClose}>
						<OrderDetails />
					</Modal>
				)}
			</section>
		</section>
	)
}

export default BurgerConstructor
