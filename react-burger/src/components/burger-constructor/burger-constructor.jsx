import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgersData from '../../utils/data';
import './burger-constructor.css'

function BurgerConstructor() {
    return (
        <section className="constructor">
            <ul className="constructor-list mt-25 mb-10">
                {BurgersData.map((burger) => (
                    <div className="constructor-list-item mt-4 mb-4 mr-1 ml-1">
                        <div className="constructor-list-item__icon-container mr-1">
                        {burger.type !== "bun" && <DragIcon className="constructor-list-item__icon" type="primary"/>}
                        </div>
                        <ConstructorElement className="constructor-list-item__description"
                                            text={burger.name}
                                            type={burger.type}
                                            price={burger.price}
                                            thumbnail={burger.image}
                                            isLocked={burger.type === "bun" ? true : false}
                                            />
                    </div>
                ))} 
            </ul>
            <section className="order-info">
                <section className="order-info-price mr-10 ml-10">
                    <p className="order-info-price__total text_type_digits-default mr-1">
                        635
                    </p>
                    <CurrencyIcon className="order-info-price__icon" type="primary"/>
                </section>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </section>
        </section>
    );
}

export default BurgerConstructor;