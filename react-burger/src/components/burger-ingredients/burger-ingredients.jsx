import { CurrencyIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from 'prop-types';
import './burger-ingredients.css'
import IngredientsList from '../ingredients-list/ingredients-list.jsx'

const burgerPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image_mobile:PropTypes.string.isRequired,
    image_large:PropTypes.string.isRequired,
});

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
}

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')

    let dict = {
        bun : new Array(),
        sauce: new Array(),
        main: new Array()
    };

    props.data.forEach(element => {
        switch(element.type) {
            case 'bun':
                dict.bun.push(element);
                break;
            case 'sauce':
                dict.sauce.push(element);
                break;
            default:
                dict.main.push(element);
        }
    });

    return(
        <section className="burger-ingredients">
            <h1 className="burger-ingredients-header text_type_main-large ml-8">
                Соберите бургер
            </h1>
            <section className="burger-ingredients-tabs">
                {/* <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                  One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                  Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                  Three
                </Tab> */}
            </section>
            <ul className="burger-ingredients-lists">
                <IngredientsList type="Булки" ingredients={dict.bun}/>
                <IngredientsList type="Соусы" ingredients={dict.sauce}/>
                <IngredientsList type="Начинки" ingredients={dict.main}/>
            </ul>
        </section>
    );
}

export default BurgerIngredients;