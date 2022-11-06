import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import burgerConstructorStyles from './burger-constructor.module.css'
import burgerPropTypes from '../../utils/prop-types.jsx'
import Modal from '../modal/modal'

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function BurgerConstructor(props) {
	const [isOpen, setOpen] = useState(false)
	const bun = React.useMemo(() => props.data.find((element) => element.type === 'bun'), [props.data])
	const ingredients = React.useMemo(() => props.data.filter((element) => element.type !== 'bun'), [props.data])

	const findTotalPrice = React.useMemo(
		() => props.data.reduce((total, currentValue) => total + currentValue.price, 0),
		[props.data],
	)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<section className={`${burgerConstructorStyles.constructor} mt-25 mb-10`}>
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
						<span className={`${burgerConstructorStyles.constructor_list_item__icon_container} mr-1`}>
							<DragIcon className={burgerConstructorStyles.constructor_list_item__icon} type="primary" />
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
			<section className={burgerConstructorStyles.order_info}>
				<section className={`${burgerConstructorStyles.order_info_price} mr-10 ml-10`}>
					<p className={`${burgerConstructorStyles.order_info_price__total} text_type_digits-medium mr-1`}>
						{findTotalPrice}
					</p>
					<CurrencyIcon className={burgerConstructorStyles.order_info_price__icon} type="primary" />
				</section>
				<Button htmlType="button" type="primary" size="medium" onClick={() => setOpen(true)}>
					Оформить заказ
				</Button>
				<Modal type="order-details" isOpen={isOpen} handleClose={handleClose} />
			</section>
		</section>
	)
}

export default BurgerConstructor
