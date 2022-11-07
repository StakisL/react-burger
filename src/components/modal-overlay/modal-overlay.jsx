import overlayStyles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

ModalOverlay.propTypes = {
	handleClose: PropTypes.func.isRequired,
}

function ModalOverlay(props) {
	return (
		<div className={overlayStyles.overlay} onClick={props.handleClose}>
			{props.children}
		</div>
	)
}

export default ModalOverlay
