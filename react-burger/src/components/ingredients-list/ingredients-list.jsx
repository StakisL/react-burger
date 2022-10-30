import { CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import './ingredients-list.css'
import PropTypes from 'prop-types';

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image_mobile:PropTypes.string.isRequired,
    image_large:PropTypes.string.isRequired,
});

IngredientsList.propTypes = {
    type: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

function IngredientsList(props) {
    return (
        <section className="ingredients-list">
            <h2 className="ingredients-list-header ml-8">
                {props.type}
            </h2>
            <ul className="ingredients-list-items-container">
                {props.ingredients.map((ingredient) => (
                    <section className="ingredients-list-item" key={ingredient._id}>
                        <img className="ingredients-list-item__image" src={ingredient.image} alt=""/>
                        <span className="ingredients-list-item__price">
                            <p className="ingredients-list-item__count text_type_digits-default"> {ingredient.price}</p>
                            <CurrencyIcon className="ingredients-list-item__currency" type="primary"/>
                        </span>
                        <p className="ingredients-list-item__name text_type_main-default">
                            {ingredient.name}
                        </p>
                    </section>
                ))}
            </ul>
        </section>
    );
}

export default IngredientsList