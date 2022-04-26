import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import cart from './../../assets/cart.svg';
import iconHeart from './../../assets/heart.svg';
import iconUser from './../../assets/user.svg';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.header__logo}>
          <img width={40} height={40} src={logo} alt="Logotype" />
          <div className="header__logo-text">
            <h3>NOVICAM</h3>
            <p>Магазин видеонаблюдения</p>
          </div>
        </div>
      </Link>
      <ul className={styles.header__nav}>
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src={cart} alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src={iconHeart} alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src={iconUser} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
