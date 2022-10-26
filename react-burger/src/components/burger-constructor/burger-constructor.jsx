import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgersData from '../../utils/data';

function BurgerConstructor() {
    return (
        <div>
            <section>
                <ul>
                    {BurgersData.map((burger) => (
                        <ConstructorElement text={burger.name}
                                            type={burger.type}
                                            price={burger.price}
                                            thumbnail={burger.image}
                                            />
                    ))} 
                </ul>
            </section>
            <section>

            </section>
        </div>
        
    );
}

export default BurgerConstructor;