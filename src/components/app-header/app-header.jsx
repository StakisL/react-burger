import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'

function AppHeader() {
	return (
		<header className={headerStyles.header}>
			<nav className={headerStyles.header_container}>
				<section className={headerStyles.nav_section}>
					<span className={headerStyles.nav_link_container}>
						<a className={headerStyles.nav_link} href="1">
							<BurgerIcon className={headerStyles['ml-20']} type="primary" />
							<p className={`${headerStyles.nav_link__text_active} text_type_main-default`}>Конструктор</p>
						</a>
						<a className={headerStyles.nav_link} href="2">
							<ListIcon className={headerStyles.nav_link__logo} type="secondary" />
							<p className={`${headerStyles.nav_link__text} text_type_main-default`}>Лента заказов</p>
						</a>
					</span>
					<Logo className={headerStyles.header_logo} />
					<span className={headerStyles['nav_link_container mt-4 mb-4']}>
						<a className={headerStyles.nav_link} href="3">
							<ProfileIcon className={headerStyles.nav_link__logo} type="secondary" />
							<p className={`${headerStyles.nav_link__text} text_type_main-default`}>Личный кабинет</p>
						</a>
					</span>
				</section>
			</nav>
		</header>
	)
}

export default AppHeader
