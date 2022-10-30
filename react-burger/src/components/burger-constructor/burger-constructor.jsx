import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import './burger-constructor.css'

const burgerPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
});

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
}

function BurgerConstructor(props) {
    return (
        <section className="constructor">
            <ul className="constructor-list mt-25 mb-10">
                {props.data.map((burger) => (
                    <section className="constructor-list-item mt-4 mb-4 mr-1 ml-1">
                        <span className="constructor-list-item__icon-container mr-1">
                            {burger.type !== "bun" && <DragIcon className="constructor-list-item__icon" type="primary"/>}
                        </span>
                        <ConstructorElement className="constructor-list-item__description"
                                            text={burger.name}
                                            type={burger.type}
                                            price={burger.price}
                                            thumbnail={burger.image}
                                            isLocked={burger.type === "bun" ? true : false}
                                            />
                    </section>
                ))} 
            </ul>
            <section className="order-info">
                <section className="order-info-price mr-10 ml-10">
                    <p className="order-info-price__total text_type_digits-medium mr-1">
                        635
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