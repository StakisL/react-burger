import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import detailStyles from './order-details.module.css'

function OrderDetails() {
	return (
		<section className={`${detailStyles.order_details} mt-15 mb-30`}>
			<p className={`${detailStyles.order_number} text_type_digits-large`}> 034536</p>
			<p className={`${detailStyles.order_identifier} text_type_main-default mt-8`}>идентификатор заказа</p>
			<span className={`${detailStyles.order_conteiner} mt-15 mb-15`}>
				<CheckMarkIcon className={`${detailStyles.order_conteiner__icon} `} type="primary" />
			</span>
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
