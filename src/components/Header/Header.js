import './Header.scss';
import logo from '../../assets/img/Logo.png';
import { Link, NavLink } from 'react-router-dom';
  
function Header() {
    return (
        <header className={"header"}>
            <div className={'container'}>
                <div className={'header__left'}>
                    <Link to={'/'}><img src={logo} alt={'logo'} className={'header__logo logo'}></img></Link>
                </div>
                <div className={'header__center'}>
                    <ul className={'header__list list'}>
                        {
                            window.location.pathname !== '/sign-up' ? <div>
                                <li className={'list__links'}>
                                    <NavLink to={'/'} className={'header__navlink'} >Home</NavLink>
                                </li>
                                <li className={'list__links'}>
                                    <NavLink to={'/cart'} className={'header__navlink'}>Cart</NavLink>
                                </li>
                                <li className={'list__links'}>
                                    <NavLink to={'/sign-up'} className={'header__navlink'}>Sign up</NavLink>
                                </li>
                            </div> : null
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;