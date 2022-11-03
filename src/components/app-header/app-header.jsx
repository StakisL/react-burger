import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

function AppHeader() {
	return (
		<header className={styles.header}>
			<nav className={styles.header_container}>
				<section className={styles.nav_section}>
					<span className={styles.nav_link_container}>
						<a className={styles.nav_link} href="1">
							<BurgerIcon className={styles['ml-20']} type="secondary" />
							<p className={`${styles.nav_link__text} text_type_main-default`}>Конструктор</p>
						</a>
						<a className={styles.nav_link} href="2">
							<ListIcon className={styles.nav_link__logo} type="secondary" />
							<p className={`${styles.nav_link__text} text_type_main-default`}>Лента заказов</p>
						</a>
					</span>
					<Logo className={styles.header_logo} />
					<span className={styles['nav_link_container mt-4 mb-4']}>
						<a className={styles.nav_link} href="3">
							<ProfileIcon className={styles.nav_link__logo} type="secondary" />
							<p className={`${styles.nav_link__text} text_type_main-default`}>Личный кабинет</p>
						</a>
					</span>
				</section>
			</nav>
		</header>
	)
}

export default AppHeader
