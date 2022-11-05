import overlayStyles from './modal-overlay.module.css'

function ModalOverlay(props) {
	return <div className={overlayStyles.overlay}>{props.children}</div>
}

export default ModalOverlay
