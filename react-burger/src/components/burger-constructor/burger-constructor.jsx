import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './burger-constructor.css'

const burgerPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
});

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
}

function BurgerConstructor(props) {
    const [totalPrice, setSum] = useState(0)
    const topBun = props.data.find(x => x.type === 'bun');
    const bottomBun = props.data.findLast(x => x.type === 'bun')
    const ingredients = props.data.filter(x => x.type !== 'bun')

    useEffect(() => {
        let sum = 0;
        props.data.forEach(element => {
            sum += element.price;
        });

        setSum(sum);

    },[props.data])

    return (
        <section className="constructor mt-25 mb-10">
            <span className="constructor-list-item ml-5">
                <ConstructorElement className="constructor-list-item__description"
                                    text={topBun.name}
                                    type={topBun.type}
                                    price={topBun.price}
                                    thumbnail={topBun.image}
                                    isLocked={true}
                                    />
            </span>
            <ul className="constructor-list">
                {ingredients.map((ingredient) => (
                    <section className="constructor-list-item mt-4 mb-4 mr-1 ml-1" key={ingredient._id}>
                        <span className="constructor-list-item__icon-container mr-1">
                          <DragIcon className="constructor-list-item__icon" type="primary"/>
                        </span>
                        <ConstructorElement className="constructor-list-item__description"
                                            text={ingredient.name}
                                            type={ingredient.type}
                                            price={ingredient.price}
                                            thumbnail={ingredient.image}
                                            />
                    </section>
                ))} 
            </ul>
            <span className="constructor-list-item ml-5 mb-10">
                <ConstructorElement className="constructor-list-item__description"
                                    text={bottomBun.name}
                                    type={bottomBun.type}
                                    price={bottomBun.price}
                                    thumbnail={bottomBun.image}
                                    isLocked={true}
                                    />
            </span>
            <section className="order-info">
                <section className="order-info-price mr-10 ml-10">
                    <p className="order-info-price__total text_type_digits-medium mr-1">
                        {totalPrice}
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