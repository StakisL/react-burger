import ingredientListStyles from './ingredients-list.module.css'
import PropTypes from 'prop-types'
import burgerPropTypes from '../../utils/prop-types.jsx'
import BurgerIngredient from '../burger-ingredient/burger-ingredient.jsx'

IngredientsList.propTypes = {
	type: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function IngredientsList(props) {
	return (
		<section className={ingredientListStyles.ingredients_list} ref={props.ref}>
			<h2 className={`${ingredientListStyles.ingredients_list_header} ml-8`}>{props.type}</h2>
			<ul className={ingredientListStyles.ingredients_list_items_container}>
				{props.ingredients.map((ingredient) => (
					<BurgerIngredient key={ingredient._id} ingredient={ingredient} />
				))}
			</ul>
		</section>
	)
}

export default IngredientsList
