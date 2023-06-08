import './Footer.scss';
import logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className={"footer"}>
            <div className={"footer__container"}>
                <div className={"footer__column"}>
                    <h5 className={"footer__product-category"}>Категории товаров</h5>
                    <ul className={"footer__list list"}>
                        <li className={"list__link"}>
                            <a className="footer__link" href="#">Электроника</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Одежда</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">Аксессуары</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h5 className="footer__product-category">Разделы сайта</h5>
                    <ul className="footer__list list">
                        <li className="list__link">
                            <a className="footer__link" href="#">Магазина</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="/sign-up">Регистрация</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="/cart">Корзина</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" href="#">О нас</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h5 className="footer__product-category">Полезные ссылки</h5>
                    <ul className="footer__list list">
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">Google.com</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">Yandex.ru</a>
                        </li>
                        <li className="list__link">
                            <a className="footer__link" target="_blank" rel="nofollow noopener noreferrer">developer.mozilla.org</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column column">
                    <Link to={'/'}><img src={logo} className={'footer__logo'}></img></Link>
                    <p className="copyright">(с) notstore 1990</p>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;