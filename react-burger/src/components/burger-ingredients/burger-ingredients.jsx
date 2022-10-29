import { CurrencyIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import './burger-ingredients.css'

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

    const Tabs = () => {
        return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              One
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Two
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Three
            </Tab>
        </div> )
    }

    return(
        <section className="burger-ingredients">
            <h1 className="burger-ingredients-header">
                Соберите бургер
            </h1>
            <section className="burger-ingredients-tabs">
              {Tabs}
            </section>
            <ul className="burger-ingredients-lists">
                <section className="burger-ingredients-dictionary__list">
                    <h2 className="burger-ingredients-dictionary__list-header">
                        Булки
                    </h2>
                    <ul className="burger-ingredients-dictionary__list-items-container">
                        {dict.bun.map((bun) => (
                            <section className="burger-ingredients-lists-item">
                                <img className="burger-ingredients-lists-item__image" src={bun.image_mobile} alt=""/>
                                <span className="burger-ingredients-lists-item__price">
                                    <p className="burger-ingredients-lists-item__count"> {bun.price}</p>
                                    <CurrencyIcon className="burger-ingredients-lists-item__currency" type="primary"/>
                                </span>
                                <p className="burger-ingredients-lists-item__price">
                                    {bun.name}
                                </p>
                            </section>
                        ))}
                    </ul>
                </section>
                <section className="burger-ingredients-dictionary__list">
                    <h2 className="burger-ingredients-dictionary__list-header">
                        Соусы
                    </h2>
                    <ul className="burger-ingredients-dictionary__list-items-container">
                        {dict.sauce.map((sauce) => (
                            <section className="burger-ingredients-lists-item">
                                <img className="burger-ingredients-lists-item__image" src={sauce.image_mobile} alt=""/>
                                <span className="burger-ingredients-lists-item__price">
                                    <p className="burger-ingredients-lists-item__count"> {sauce.price}</p>
                                    <CurrencyIcon className="burger-ingredients-lists-item__currency" type="primary"/>
                                </span>
                                <p className="burger-ingredients-lists-item__price">
                                    {sauce.name}
                                </p>
                            </section>
                        ))}
                    </ul>
                </section>
                <section className="burger-ingredients-dictionary__list">
                    <h2 className="burger-ingredients-dictionary__list-header">
                        Начинки
                    </h2>
                    <ul className="burger-ingredients-dictionary__list-items-container">
                        {dict.main.map((main) => (
                            <section className="burger-ingredients-lists-item">
                                <img className="burger-ingredients-lists-item__image" src={main.image_mobile} alt=""/>
                                <span className="burger-ingredients-lists-item__price">
                                    <p className="burger-ingredients-lists-item__count"> {main.price}</p>
                                    <CurrencyIcon className="burger-ingredients-lists-item__currency" type="primary"/>
                                </span>
                                <p className="burger-ingredients-lists-item__price">
                                    {main.name}
                                </p>
                            </section>
                        ))}
                    </ul>
                </section>
            </ul>
        </section>
    );
}

export default BurgerIngredients;