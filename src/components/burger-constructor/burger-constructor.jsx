import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import Bun from '../bun/bun'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_ITEM } from '../../services/actions/burger-constructor'

function BurgerConstructor() {
	const [isOpen, setOpen] = useState(false)
	const ingredients = useSelector((store) => store.constructor.items)
	const isEmpty = useSelector((store) => store.constructor.isEmpty)
	const bun = useSelector((store) => store.constructor.bun)
	const dispatch = useDispatch()

	const findTotalPrice = React.useMemo(() => {
		if (isEmpty) {
			return 0
		}
		let bunPrice = bun === undefined ? 0 : bun.price * 2

		return ingredients.reduce((total, currentValue) => total + currentValue.price, 0) + bunPrice
	}, [ingredients, isEmpty, bun])

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	const removeIngredient = (id) => {
		dispatch({ type: DELETE_ITEM, id: id })
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
									handleClose={() => removeIngredient(index)}
								/>
							</section>
						))}
					</ul>
				) : (
					<div className="empty-container mt-4 mb-4" />
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
