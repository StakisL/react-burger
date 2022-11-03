import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients-list.module.css'
import PropTypes from 'prop-types'
import burgerPropTypes from '../../utils/prop-types.jsx'

IngredientsList.propTypes = {
	type: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function IngredientsList(props) {
	return (
		<section className={styles.ingredients_list} ref={props.ref}>
			<h2 className={`${styles.ingredients_list_header} ml-8`}>{props.type}</h2>
			<ul className={styles.ingredients_list_items_container}>
				{props.ingredients.map((ingredient) => (
					<section className={styles.ingredients_list_item} key={ingredient._id}>
						<img className={styles.ingredients_list_item__icon} src={ingredient.image} alt="" />
						<span className={styles.ingredients_list_item__price}>
							<p className={`${styles.ingredients_list_item__count}  text_type_digits-default`}>
								{' '}
								{ingredient.price}
							</p>
							<CurrencyIcon className={styles.ingredients_list_item__currency} type="primary" />
						</span>
						<p className={`${styles.ingredients_list_item__name}  text_type_main-default`}>
							{ingredient.name}
						</p>
					</section>
				))}
			</ul>
		</section>
	)
}

export default IngredientsList
