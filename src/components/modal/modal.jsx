import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import modalStyles from './modal.module.css'
import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { ESC_KEYCODE } from '../../utils/constants'

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	header: PropTypes.string,
}

const modalRoot = document.getElementById('modals')

function Modal({ isOpen, handleClose, header, children }) {
	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === ESC_KEYCODE) {
				handleClose()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [isOpen])

	return (
		<>
			{isOpen &&
				ReactDOM.createPortal(
					<ModalOverlay handleClose={handleClose}>
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
									onClick={handleClose}
								/>
								<p className={`${modalStyles.modal_header__name} text_type_main-large`}>{header}</p>
							</section>
							<section className={modalStyles.content_section}>{children}</section>
						</div>
					</ModalOverlay>,
					modalRoot,
				)}
		</>
	)
}

export default Modal
