import styles from './draggable-burger-constructor.module.css'
import DraggableIngredient from '../draggable-ingredient/draggable-ingredient'
import burgerPropTypes from '../../utils/prop-types.jsx'
import PropTypes from 'prop-types'

DraggableBurgerConstructor.propTypes = {
	ingredients: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
}

function DraggableBurgerConstructor(props) {
	return (
		<ul className={styles.constructor_list}>
			{props.ingredients.map((ingredient, index) => (
				<DraggableIngredient ingredient={ingredient} index={index} key={ingredient.key} />
			))}
		</ul>
	)
}

export default DraggableBurgerConstructor
