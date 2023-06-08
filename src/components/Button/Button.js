import './Button.scss';
import { Link } from "react-router-dom";

function Button({ text= 'Click me!', children}) {
    return (
        <button className="button"><Link to={'/products/5'}>{ text }</Link></button>
    )
}

export default Button;