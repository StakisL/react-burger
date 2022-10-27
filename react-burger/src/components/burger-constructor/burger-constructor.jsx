import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgersData from '../../utils/data';

function BurgerConstructor() {
    return (
        <section className="constructor">
            <ul className="ingredients-list">
                {BurgersData.map((burger) => (
                    <div className="ingredients-list-item">
                        <DragIcon className="ingredients-list-item__icon" type="primary" size=""/>
                        <ConstructorElement className="ingredients-list-item__description"
                                            text={burger.name}
                                            type={burger.type}
                                            price={burger.price}
                                            thumbnail={burger.image}
                                            />
                        
                    </div>
                ))} 
            </ul>
            <section className="order-info">
                <section className="order-info-price">
                    <p className="order-info-price__total">

                    </p>
                    <CurrencyIcon className="order-info-price__icon" type="primary"/>
                </section>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </section>
        </section>
    );
}

export default BurgerConstructor;