import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
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

    const bun = [];
    const sauce = [];
    const main = [];

    props.data.forEach(element => {
        switch(element.type) {
            case 'bun':
                bun.push(element);
                break;
            case 'sauce':
                sauce.push(element);
                break;
            default:
                main.push(element);
        }
    });

    return(
        <section>
            <h1 className="burger-ingredients-header text_type_main-large ml-8 mt-10 mb-5">
                Соберите бургер
            </h1>
        <section className="burger-ingredients">
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
            <ul className="burger-ingredients-list">
                <IngredientsList type="Булки" ingredients={bun}/>
                <IngredientsList type="Соусы" ingredients={sauce}/>
                <IngredientsList type="Начинки" ingredients={main}/>
            </ul>
        </section>
        </section>
       
    );
}

export default BurgerIngredients;