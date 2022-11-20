import detailStyles from './ingredient-details.module.css'
import { useSelector } from 'react-redux'

function IngredientDetails() {
	const ingredient = useSelector((store) => store.ingredientDetails.ingredient)

	return (
		<section className={detailStyles.ingredient_detail}>
			<img className={detailStyles.ingredient_image} src={ingredient.image_large} alt="" />
			<p className={`${detailStyles.ingredient_name} text_type_main-medium mt-4 mb-4`}>{ingredient.name}</p>
			<ul className={`${detailStyles.ingredient_info_list} mt-8 mb-15`}>
				<li className={`${detailStyles.ingredient_info_list__item} mr-5`}>
					<p
						className={` ${detailStyles.ingredient_info_list__item_text} text_type_main-default text_color_inactive`}
					>
						Калории, ккал
					</p>
					<p
						className={` ${detailStyles.ingredient_info_list__item_value} text_type_digits-default text_color_inactive`}
					>
						{ingredient.calories}
					</p>
				</li>
				<li className={`${detailStyles.ingredient_info_list__item} mr-5`}>
					<p
						className={` ${detailStyles.ingredient_info_list__item_text} text_type_main-default text_color_inactive`}
					>
						Белки, г
					</p>
					<p
						className={` ${detailStyles.ingredient_info_list__item_value} text_type_digits-default text_color_inactive`}
					>
						{ingredient.proteins}
					</p>
				</li>
				<li className={`${detailStyles.ingredient_info_list__item} mr-5`}>
					<p
						className={` ${detailStyles.ingredient_info_list__item_text} text_type_main-default text_color_inactive`}
					>
						Жиры, г
					</p>
					<p
						className={` ${detailStyles.ingredient_info_list__item_value} text_type_digits-default text_color_inactive`}
					>
						{ingredient.fat}
					</p>
				</li>
				<li className={`${detailStyles.ingredient_info_list__item} mr-5`}>
					<p
						className={` ${detailStyles.ingredient_info_list__item_text} text_type_main-default text_color_inactive`}
					>
						Углеводы, г
					</p>
					<p
						className={` ${detailStyles.ingredient_info_list__item_value} text_type_digits-default text_color_inactive`}
					>
						{ingredient.carbohydrates}
					</p>
				</li>
			</ul>
		</section>
	)
}

export default IngredientDetails
