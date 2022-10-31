import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from 'prop-types';
import './burger-ingredients.css'
import IngredientsList from '../ingredients-list/ingredients-list.jsx'
import burgerPropTypes from '../../prop-types.jsx'

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
}

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')

    const bun = props.data.filter(x => x.type === 'bun');
    const sauce = props.data.filter(x => x.type === 'sauce');
    const main = props.data.filter(x => x.type === 'main');

    const currentHandle = (val) => () => setCurrent(val);

    return(
        <section className="">
                <h1 className="burger-ingredients-header text_type_main-large ml-8 mt-10 mb-5">
                    Соберите бургер
                </h1>
            <section className="burger-ingredients">
                <section className="burger-ingredients-tabs">
                    <Tab value="bun" active={true} onClick={currentHandle("bun")}>
                      Булки
                    </Tab>
                    <Tab value="sauce" active={false} onClick={currentHandle('sauce')}>
                      Соусы
                    </Tab>
                    <Tab value="main" active={false} onClick={currentHandle('main')}>
                      Начинки
                    </Tab>
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