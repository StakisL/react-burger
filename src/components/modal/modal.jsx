import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	header: PropTypes.string,
}

function Modal(props) {
	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				props.handleClose()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [props])

	return props.isOpen
		? ReactDOM.createPortal(
				<ModalOverlay handleClose={props.handleClose}>
					<div
						className={modalStyles.modal}
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<section className={`${modalStyles.modal_header} ml-10 mr-10 mt-10`}>
							<CloseIcon
								className={modalStyles.modal_header__close_icon}
								type="primary"
								onClick={props.handleClose}
							/>
							<p className={`${modalStyles.modal_header__name} text_type_main-large`}>{props.header}</p>
						</section>
						<section className={modalStyles.content_section}>{props.children}</section>
					</div>
				</ModalOverlay>,
				document.body,
		  )
		: null
}

export default Modal
