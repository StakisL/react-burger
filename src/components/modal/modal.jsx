import ReactDOM from 'react-dom'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'

Modal.propTypes = {
	name: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
	handleClose: PropTypes.func.isRequired,
}

function Modal(props) {
	return props.isOpen
		? ReactDOM.createPortal(
				<ModalOverlay>
					
					<div className={modalStyles.modal}>
						<section className={modalStyles.modal_header}>
							<p className={`${modalStyles.modal_header__name} text_type_main-default`}>{props.name}</p>
							<CloseIcon className={modalStyles.modal_header__close_icon} type="primary">
								<button
									className={modalStyles.modal_header__close_button}
									onClick={props.handleClose}
								/>
							</CloseIcon>
						</section>
						<section className={modalStyles.content_section}></section>
					</div>
				</ModalOverlay>,
				document.body,
		  )
		: null
}

export default Modal
