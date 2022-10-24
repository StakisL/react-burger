import { render } from "@testing-library/react";
import { BurgerIcon, ListIcon, Logo, ProfileIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import './app-header.css'

class AppHeader extends React.Component {

    render(){
    return (
        <header className="header"> 
            <nav className="header-container">
              <ul className="nav-list">
                  <li className="nav-item">
                      <a className="nav-link" href="1">
                          <BurgerIcon className="nav-link__logo ml-20" type="secondary" />
                          <p className="nav-link__text">
                              Конструктор
                          </p>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="2">
                          <ListIcon className="nav-link__logo" type="secondary" />
                          <p className="nav-link__text"> 
                              Лента заказов
                          </p>
                      </a>
                  </li>
                  <li className="nav-item">
                      <Logo className="header__logo"/>
                  </li>
                  <li >
                      <a className="nav-link" href="3">
                          <ProfileIcon className="nav-link__logo" type="secondary"/>
                          <p className="nav-link__text">
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