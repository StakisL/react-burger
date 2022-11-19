import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import { useSelector } from 'react-redux'

function BurgerConstructor() {
	const [isOpen, setOpen] = useState(false)
	const items = useSelector((store) => store.constructor.items)
	const isEmpty = useSelector((store) => store.constructor.isEmpty)

	console.log(isEmpty)
	console.log(items)

	const bun = React.useMemo(() => {
		if (isEmpty) {
			return []
		}

		return items.find((element) => element.type === 'bun')
	}, [items, isEmpty])
	const ingredients = React.useMemo(() => {
		if (isEmpty) {
			return []
		}

		return items.filter((element) => element.type !== 'bun')
	}, [items, isEmpty])

	const findTotalPrice = React.useMemo(() => {
		if (isEmpty) {
			return 0
		}

		return items.reduce((total, currentValue) => total + currentValue.price, 0)
	}, [items, isEmpty])

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<section className={`${burgerConstructorStyles.constructor} mt-25 mb-10`}>
			{!isEmpty && (
				<span>
					<span className={`${burgerConstructorStyles.constructor_list_item} ml-5`}>
						<ConstructorElement
							className={burgerConstructorStyles.constructor_list_item__description}
							text={bun.name + ' (верх)'}
							type={bun.type}
							price={bun.price}
							thumbnail={bun.image}
							isLocked={true}
						/>
					</span>
					<ul className={burgerConstructorStyles.constructor_list}>
						{ingredients.map((ingredient) => (
							<section
								className={`${burgerConstructorStyles.constructor_list_item} mt-4 mb-4 mr-1 ml-1`}
								key={ingredient._id}
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
								/>
							</section>
						))}
					</ul>
					<span className={`${burgerConstructorStyles.constructor_list_item} mb-10 ml-5`}>
						<ConstructorElement
							className={burgerConstructorStyles.constructor_list_item__description}
							text={bun.name + ' (низ)'}
							type={bun.type}
							price={bun.price}
							thumbnail={bun.image}
							isLocked={true}
						/>
					</span>
				</span>
			)}
			<section className={burgerConstructorStyles.order_info}>
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
