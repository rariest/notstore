import './CardProducts.scss';
// import { Link } from "react-router-dom";
// import Button from '../Button/Button';
import { useEffect, useState } from "react";
import Card from '../Card/Card';
// import { CircularProgress } from '@mui/material';


function CardProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, [])

    const [value, setValue] = useState('');

    // const [checkedState, setCheckedState] = useState(
    //     new Array(3).fill(false)
    // );

    // const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //         index === position ? !item : item
    //     );
    //     setCheckedState(updatedCheckedState);

    // };
        const filterProducts = products.filter(item => {
            return item.title.toLowerCase().includes(value.toLowerCase());
        })

        

        return (
            <div className={'products'}>
                <div className={'products__search'}>
                    <input
                        type="text"
                        placeholder='Search products..'
                        className={'search'}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <input
                        type="checkbox"
                        id={0}
                        name={"electronics"}
                        value={"electronics"}
                        //checked={checkedState[0]}
                       // onChange={() => handleOnChange(0)}
                    />
                    
                </div>
                <div className={'products__container'}>
                    {
                        !filterProducts.length && (<div className='circular-progress'>Nothing found</div>)
                    }
                    {
                        filterProducts.map((product) => {
                            return (

                                <Card key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                />

                            )
                        })
                    }
                </div>
            </div>

        )

    }

    export default CardProducts;
