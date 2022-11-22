import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import Bun from '../bun/bun'
import { useSelector, useDispatch } from 'react-redux'
import { SET_DEFAULT_CONSTRUCTOR, ADD_ITEM } from '../../services/actions/burger-constructor'
import { order } from '../../services/actions/order-details'
import { INGREDIENT_INCREASE, SET_DEFAULT_COUNTER } from '../../services/actions/burger-ingredients'
import { RESET_ORDER_DETAILS } from '../../services/actions/order-details'
import { useDrop } from 'react-dnd'
import DraggableBurgerConstructor from '../draggable-burger-constructor/draggable-burger-constructor'
import { v4 as uuidv4 } from 'uuid'

function BurgerConstructor() {
	const dispatch = useDispatch()
	const [isOpen, setOpen] = useState(false)
	const ingredients = useSelector((store) => store.burgerConstructor.items)
	const isEmpty = useSelector((store) => store.burgerConstructor.isEmpty)
	const bun = useSelector((store) => store.burgerConstructor.bun)
	const [, dropTarget] = useDrop(() => ({
		accept: 'ingredient_new',
		drop(item) {
			onDropHandler(item)
		},
	}))

	const findTotalPrice = React.useMemo(() => {
		if (isEmpty && bun === undefined) {
			return 0
		}

		const bunPrice = bun === undefined ? 0 : bun.price * 2
		return ingredients.reduce((total, currentValue) => total + currentValue.price, 0) + bunPrice
	}, [ingredients, isEmpty, bun])

	const onDropHandler = (item) => {
		dispatch({ type: ADD_ITEM, item: { ...item, key: uuidv4() } })
		dispatch({ type: INGREDIENT_INCREASE, id: item._id, ingredientType: item.type })
	}

	const handleOpen = () => {
		if (bun !== undefined) {
			const ingredientIds = [bun._id, ...ingredients.map((ingredient) => ingredient._id), bun._id]
			dispatch(order(ingredientIds))
			setOpen(true)
			return
		}
		console.error('you should add bun or ingredients')
	}

	const handleClose = () => {
		setOpen(false)
		dispatch({ type: SET_DEFAULT_CONSTRUCTOR })
		dispatch({ type: SET_DEFAULT_COUNTER })
		dispatch({ type: RESET_ORDER_DETAILS })
	}

	return (
		<section className={`${burgerConstructorStyles.constructor} mt-25`} ref={dropTarget}>
			<span className={burgerConstructorStyles.constructor_list}>
				{bun !== undefined && <Bun bun={bun} type="top" />}
				{!isEmpty ? (
					<DraggableBurgerConstructor ingredients={ingredients} />
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
