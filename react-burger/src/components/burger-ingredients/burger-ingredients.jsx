import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function BurgerIngredients() {
    return(
        <div>
            <h1>
                Соберите бургер
            </h1>
            <section>
                <Tab value="bun" active={true}>
                    Булка
                </Tab>
                <Tab value="souse">
                    Соусы
                </Tab>
                <Tab value="stuffing">
                    Начинки
                </Tab>
            </section>
            <section>

            </section>
        </div>
    );
}

export default BurgerIngredients;