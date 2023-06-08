import ButtonSecondary from '../components/Button/ButtonSecondary';
import './style/cart.scss';
import { useSelector } from 'react-redux';

function Cart() {
    const items = useSelector(state => state.cart.itemsInCart);
    console.log("store", items);

    const totalPrice = items.reduce((acc, { id, title, image, price } = shop) => acc += price, 0)
    return (
        <main className={"cart"}>
            <section className={'cart__container'}>
                <article>
                    <ul className="summ cart-items">
                        {items.map((product) => {
                            return (
                                <li className="summ cart-item" key={product.name}>
                                    <img className="card__img" src={product.image} />
                                    <div className="product-info">
                                        <p className="product-name">{product.title}</p>
                                        <p className="product-price">{product.price}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="summ">
                        <li>
                            <p>Сумма товаров:</p>
                            <p>{totalPrice} </p>
                        </li>
                        <li>
                            <p>Доставка:</p>
                            <p>0</p>
                        </li>
                        <li>
                            <h1>Стоимость заказа:</h1>
                            <h1>{totalPrice}</h1>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Cart;