import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import bunStyles from './bun.module.css'
import burgerPropTypes from '../../utils/prop-types.jsx'

Bun.propTypes = {
	bun: burgerPropTypes.isRequired,
	type: PropTypes.string.isRequired,
}

function Bun(props) {
	const bunType = props.type === 'top' ? ' (верх)' : ' (низ)'
	return (
		<span className={`${bunStyles.bun_item} ml-5`}>
			<ConstructorElement
				className={bunStyles.bun_item_description}
				text={props.bun.name + bunType}
				type={props.bun.type}
				price={props.bun.price}
				thumbnail={props.bun.image}
				isLocked={true}
			/>
		</span>
	)
}

export default Bun
