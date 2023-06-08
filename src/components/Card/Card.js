import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from '../../Store/Reducers/goods';
import ButtonSecondary from '../Button/ButtonSecondary';
import './Card.scss';


function Card({ id, title, image, price, description }) {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.stopPropagation();
        dispatch(setItemInCart({ id, title, image, price }));
      };

    return (
        <div className={'products__wrapper'}>
            <div className={'card products__card'}>
                <div className={'card__img-wrapper'}>
                    <img className={'card__img'} src={ image } alt='product'></img>
                </div>
                <div className='card__title-wrapper'>
                    <h3 className={'card__title'}><Link to={`/products/${id}`}>{ title }</Link></h3>
                </div>
                <div className='card__button-wrapper'>
                    <ButtonSecondary onClick={ handleClick } ></ButtonSecondary>
                    <div className='card__price'>{ price }</div>
                </div>
            </div>
        </div>
    )
}

export default Card;