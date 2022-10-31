import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PropTypes from 'prop-types'
import './burger-constructor.css'
import burgerPropTypes from '../../prop-types.jsx'

/*eslint no-dupe-keys: "off"*/
BurgerConstructor.propTypes = {
	data: PropTypes.array.isRequired,
	data: PropTypes.arrayOf(burgerPropTypes).isRequired,
}

function BurgerConstructor(props) {
	const bun = props.data.find((element) => element.type === 'bun')
	const ingredients = props.data.filter((element) => element.type !== 'bun')

	const findTotalPrice = React.useMemo(() => {
		let sum = 0
		props.data.forEach((element) => {
			sum += element.price
		})
		return sum
	}, [props.data])

	return (
		<section className="constructor mt-25 mb-10">
			<span className="constructor-list-item ml-5">
				<ConstructorElement
					className="constructor-list-item__description"
					text={bun.name}
					type={bun.type}
					price={bun.price}
					thumbnail={bun.image}
					isLocked={true}
				/>
			</span>
			<ul className="constructor-list">
				{ingredients.map((ingredient) => (
					<section className="constructor-list-item mt-4 mb-4 mr-1 ml-1" key={ingredient._id}>
						<span className="constructor-list-item__icon-container mr-1">
							<DragIcon className="constructor-list-item__icon" type="primary" />
						</span>
						<ConstructorElement
							className="constructor-list-item__description"
							text={ingredient.name}
							type={ingredient.type}
							price={ingredient.price}
							thumbnail={ingredient.image}
						/>
					</section>
				))}
			</ul>
			<span className="constructor-list-item ml-5 mb-10">
				<ConstructorElement
					className="constructor-list-item__description"
					text={bun.name}
					type={bun.type}
					price={bun.price}
					thumbnail={bun.image}
					isLocked={true}
				/>
			</span>
			<section className="order-info">
				<section className="order-info-price mr-10 ml-10">
					<p className="order-info-price__total text_type_digits-medium mr-1">{findTotalPrice}</p>
					<CurrencyIcon className="order-info-price__icon" type="primary" />
				</section>
				<Button type="primary" size="medium">
					Оформить заказ
				</Button>
			</section>
		</section>
	)
}

export default BurgerConstructor
