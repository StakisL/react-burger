import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './burger-constructor.module.css'
import burgerPropTypes from '../../utils/prop-types.jsx'

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function BurgerConstructor(props) {
	const bun = props.data.find((element) => element.type === 'bun')
	const ingredients = props.data.filter((element) => element.type !== 'bun')

	const findTotalPrice = React.useMemo(
		() => props.data.reduce((total, currentValue) => total + currentValue.price, 0),
		[props.data],
	)

	return (
		<section className={`${styles.constructor} mt-25 mb-10`}>
			<span className={`${styles.constructor_list_item} ml-5`}>
				<ConstructorElement
					className={styles.constructor_list_item__description}
					text={bun.name + ' (верх)'}
					type={bun.type}
					price={bun.price}
					thumbnail={bun.image}
					isLocked={true}
				/>
			</span>
			<ul className={styles.constructor_list}>
				{ingredients.map((ingredient) => (
					<section className={`${styles.constructor_list_item} mt-4 mb-4 mr-1 ml-1`} key={ingredient._id}>
						<span className={`${styles.constructor_list_item__icon_container} mr-1`}>
							<DragIcon className={styles.constructor_list_item__icon} type="primary" />
						</span>
						<ConstructorElement
							className={styles.constructor_list_item__description}
							text={ingredient.name}
							type={ingredient.type}
							price={ingredient.price}
							thumbnail={ingredient.image}
						/>
					</section>
				))}
			</ul>
			<span className={`${styles.constructor_list_item} mb-10 ml-5`}>
				<ConstructorElement
					className={styles.constructor_list_item__description}
					text={bun.name + ' (низ)'}
					type={bun.type}
					price={bun.price}
					thumbnail={bun.image}
					isLocked={true}
				/>
			</span>
			<section className={styles.order_info}>
				<section className={`${styles.order_info_price} mr-10 ml-10`}>
					<p className={`${styles.order_info_price__total} text_type_digits-medium mr-1`}>{findTotalPrice}</p>
					<CurrencyIcon className={styles.order_info_price__icon} type="primary" />
				</section>
				<Button htmlType="button" type="primary" size="medium">
					Оформить заказ
				</Button>
			</section>
		</section>
	)
}

export default BurgerConstructor
