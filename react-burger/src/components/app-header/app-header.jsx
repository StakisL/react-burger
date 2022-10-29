import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import './app-header.css'

function AppHeader() {
    return (
        <header className="header"> 
            <nav className="header-container">
              <section className="nav-section">
                <span className="nav-link-container mt-4 mb-4">
                    <a className="nav-link" href="1">
                        <BurgerIcon className="nav-link__logo ml-20" type="secondary" />
                        <p className="nav-link__text text_type_main-default">
                            Конструктор
                        </p>
                    </a>
                    <a className="nav-link" href="2">
                        <ListIcon className="nav-link__logo" type="secondary"/>
                        <p className="nav-link__text text_type_main-default"> 
                            Лента заказов
                        </p>
                    </a>
                </span>
                <Logo className="header__logo mt-6 mb-6"/>
                <span className="nav-link-container mt-4 mb-4">
                    <a className="nav-link" href="3">
                        <ProfileIcon className="nav-link__logo" type="secondary"/>
                        <p className="nav-link__text text_type_main-default">
                            Личный кабинет
                        </p>
                    </a>
                </span>
                </section>
            </nav>
        </header>
    );
  }

export default AppHeader;