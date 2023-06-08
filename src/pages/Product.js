import './style/product.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonSecondary from '../components/Button/ButtonSecondary';

function Product() {
    const { productId } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((result) => {
                setProduct(result);
            });
    }, [])

    return(
        <div className={'goods'}  >
            <div className={'goods__container'}>
                <div className={'goods__image-wrapper'}>
                    <img className={'goods__image'} src={ product.image } alt={'goods'}></img>
                </div>
                <div className={'goods__right'}>
                    <h2 className={'goods__title'}>{ product.title }</h2> 
                    <p className={'goods__desription'}>{ product.description }</p>
                    <ButtonSecondary/>
                </div>
            </div>
        </div>
    )   
}

export default Product;
