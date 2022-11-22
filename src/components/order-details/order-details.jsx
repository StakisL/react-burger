import detailStyles from './order-details.module.css'
import logo from '../../images/done.png'
import { useSelector } from 'react-redux'

function OrderDetails() {
	const orderNumber = useSelector((store) => store.order.orderNumber)

	return (
		<section className={`${detailStyles.order_details} mt-12 mb-15`}>
			<p className={`${detailStyles.order_number} text_type_digits-large`}> {orderNumber}</p>
			<p className={`${detailStyles.order_identifier} text_type_main-default mt-8`}>идентификатор заказа</p>
			<img className={`${detailStyles.order_conteiner} mt-15 mb-15`} src={logo} alt="logo" />
			<p className={`${detailStyles.order_accepted_text} text_type_main-default mb-2`}>
				Ваш заказ начали готовить
			</p>
			<p className={`${detailStyles.order_sub_information} text_type_main-default text_color_inactive`}>
				Дождитесь готовности на орбитальной станции
			</p>
		</section>
	)
}

export default OrderDetails
