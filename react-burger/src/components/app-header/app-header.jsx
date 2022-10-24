import { render } from "@testing-library/react";
import { BurgerIcon, ListIcon, Logo, ProfileIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import './app-header.css'

class AppHeader extends React.Component {
    render(){
    return (
        <header className="header"> 
            <nav className="header-container">
              <ul className="no-dots">
                  <li>
                      <a className="nav-button" href="1">
                          <BurgerIcon className="nav-button__logo"/>
                          <p className="nav-button__text">
                              Конструктор
                          </p>
                      </a>
                  </li>
                  <li>
                      <a className="nav-button" href="2">
                          <ListIcon className="nav-button__logo"/>
                          <p className="nav-button__text"> 
                              Лента заказов
                          </p>
                      </a>
                  </li>
                  <li>
                      <Logo className="logo"/>
                  </li>
                  <li>
                      <a className="nav-button" href="3">
                          <ProfileIcon className="nav-button__logo"/>
                          <p className="nav-button__text">
                              Личный кабинет
                          </p>
                      </a>
                  </li>
              </ul>
            </nav>
        </header>
    );
  }
}

export default AppHeader;