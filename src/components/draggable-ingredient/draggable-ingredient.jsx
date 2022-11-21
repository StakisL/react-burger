import { useDispatch } from 'react-redux'
import styles from './draggable-ingredient.module.css'
import { DELETE_ITEM } from '../../services/actions/burger-constructor'
import { INGREDIENT_DECREASE } from '../../services/actions/burger-ingredients'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerPropTypes from '../../utils/prop-types.jsx'
import { useDrag, useDrop } from 'react-dnd'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { SORT_ITEMS } from '../../services/actions/burger-constructor'

// DraggableIngredient.propTypes = {
// 	ingredient: burgerPropTypes.isRequired,
// 	index: PropTypes.number.isRequired,
// }

function DraggableIngredient(props) {
	const dispatch = useDispatch()
	const ref = useRef(null)
	let { dragIndex, hoverIndex } = {}
	const [{ isDrag }, dragRef] = useDrag({
		type: 'ingredient',
		item: { index: props.index, content: props.ingredient },
		index: props.index,
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	})

	const [, drop] = useDrop({
		accept: 'ingredient',
		hover(item, monitor) {
			if (!ref.current) {
				return
			}
			dragIndex = item.index
			hoverIndex = props.index
			if (dragIndex === hoverIndex) {
				return
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const hoverClientY = clientOffset.y - hoverBoundingRect.top
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}
		},
		drop() {
			dispatch({ type: SORT_ITEMS, currentIndex: dragIndex, targetIndex: hoverIndex })
		},
	})

	const removeIngredient = (ingredient, id) => {
		dispatch({ type: DELETE_ITEM, id: id })
		dispatch({ type: INGREDIENT_DECREASE, id: ingredient._id })
	}

	dragRef(drop(ref))

	return (
		!isDrag && (
			<section className={`${styles.constructor_list_item} mt-4 mb-4 mr-1 ml-1`} ref={ref}>
				<span className={`${styles.constructor_list_item__icon_container} mr-1`}>
					<DragIcon className={styles.constructor_list_item__icon} type="primary" />
				</span>
				<ConstructorElement
					className={styles.constructor_list_item__description}
					text={props.ingredient.name}
					type={props.ingredient.type}
					price={props.ingredient.price}
					thumbnail={props.ingredient.image}
					handleClose={() => removeIngredient(props.ingredient, props.index)}
				/>
			</section>
		)
	)
}

export default DraggableIngredient
