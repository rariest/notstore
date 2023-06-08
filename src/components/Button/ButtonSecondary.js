import './ButtonSecondary.scss';

function ButtonSecondary({ text= 'Add to cart', children, onClick}) {
    return (
        <button className={"button-secondary"} onClick={ onClick } >{ text }</button>
    )
}

export default ButtonSecondary;