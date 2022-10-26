import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import './app-header.css'

class AppHeader extends React.Component {

    state = {type: "secondary"};

    onMouseEnter = () => {
        this.setState({type: this.state.type = "primary"})
    }

    onMouseLeave = () => {
        this.setState({type: this.state.type = "secondary"})
    }

    render(){
    return (
        <header className="header"> 
            <nav className="header-container">
              <section className="nav-section">
                <div className="nav-link-container mt-4 mb-4">
                    <a className="nav-link" href="1">
                        <BurgerIcon className="nav-link__logo ml-20" type="secondary" />
                        <p className="nav-link__text">
                            Конструктор
                        </p>
                    </a>
                    <a className="nav-link" href="2" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <ListIcon className="nav-link__logo" type={this.state.type}/>
                        <p className="nav-link__text"> 
                            Лента заказов
                        </p>
                    </a>
                </div>
                <Logo className="header__logo mt-6 mb-6"/>
                <div className="nav-link-container mt-4 mb-4">
                    <a className="nav-link" href="3">
                        <ProfileIcon className="nav-link__logo" type="secondary"/>
                        <p className="nav-link__text">
                            Личный кабинет
                        </p>
                    </a>
                </div>
                </section>
            </nav>
        </header>
    );
  }
}

export default AppHeader;