import { useEffect, useState } from "react";
import Button from '../Button/Button';
import  useParams  from "react-router-dom";
import './Current.scss';

const text = 'Buy now';

function Current() {
    const   productId   = Math.floor(Math.random() * 5) + 1;
    
    const [ product, setProduct ] = useState({});
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((result) => {
                setProduct(result);
            });
    }, [])

    return (
        <>
            <div className='current'>
                <div className="current__container">
                    <div className="current__left">
                        <h1 className="current__title">{product.title}</h1>
                        <p className='current__description'>{ product.description }</p>
                        <Button text={ text }></Button>
                    </div>
                    <div className="current__right">
                        <img className="current__image" src={ product.image }></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Current;