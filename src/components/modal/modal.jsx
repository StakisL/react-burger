import ReactDOM from 'react-dom'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import IngredientDetails from '../ingredient-details/ingredient-details'
import burgerPropTypes from '../../utils/prop-types'

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
	ingredient: burgerPropTypes.isRequired,
	handleClose: PropTypes.func.isRequired,
}

function Modal(props) {
	return props.isOpen
		? ReactDOM.createPortal(
				<ModalOverlay>
					<div className={modalStyles.modal}>
						<section className={`${modalStyles.modal_header} ml-10 mr-10 mt-10`}>
							{props.type === 'ingredient' && (
								<p className={`${modalStyles.modal_header__name} text_type_main-large`}>
									Детали ингредиента
								</p>
							)}
							<CloseIcon className={modalStyles.modal_header__close_icon} type="primary">
								<button
									className={modalStyles.modal_header__close_button}
									onClick={props.handleClose}
								/>
							</CloseIcon>
						</section>
						<section className={modalStyles.content_section}>
							{props.type === 'ingredient' && <IngredientDetails ingredient={props.ingredient} />}
						</section>
					</div>
				</ModalOverlay>,
				document.body,
		  )
		: null
}

export default Modal
