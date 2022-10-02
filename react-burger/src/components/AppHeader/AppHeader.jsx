import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function AppHeader() {

    return (
        <header className="header"> 
            <div className="header-container">
                <section className="header-block">
                    <a className="nav-button" href="1">
                        <BurgerIcon className="nav-button__logo"/>
                        <p className="nav-button__text">
                            Конструктор
                        </p>
                    </a>
                    <a className="nav-button" href="2">
                        <ListIcon className="nav-button__logo"/>
                        <p>
                            Лента заказов
                        </p>
                    </a>
                </section>
                <section className="header-block ">
                    <Logo className="logo"/>
                </section>
                <section className="header-block">
                    <a className="nav-button" href="3">
                        <ProfileIcon className="nav-button__logo"/>
                        <p className="nav-button__text">
                            Личный кабинет
                        </p>
                    </a>
                </section>
           </div>
        </header>
    );
}

export default AppHeader;