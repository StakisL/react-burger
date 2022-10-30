import React from "react";
import { CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import './ingredients-list.css'

function IngredientsList(props) {

    return (
        <section className="burger-ingredients-dictionary__list">
            <h2 className="burger-ingredients-dictionary__list-header ml-8">
                {props.type}
            </h2>
            <ul className="burger-ingredients-dictionary__list-items-container">
                {props.ingredients.map((ingredient) => (
                    <section className="burger-ingredients-lists-item" key={ingredient._id}>
                        <img className="burger-ingredients-lists-item__image" src={ingredient.image} alt=""/>
                        <span className="burger-ingredients-lists-item__price">
                            <p className="burger-ingredients-lists-item__count text_type_digits-default"> {ingredient.price}</p>
                            <CurrencyIcon className="burger-ingredients-lists-item__currency" type="primary"/>
                        </span>
                        <p className="burger-ingredients-lists-item__name text_type_main-default">
                            {ingredient.name}
                        </p>
                    </section>
                ))}
            </ul>
        </section>
    );
}

export default IngredientsList