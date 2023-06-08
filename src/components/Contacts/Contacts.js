import { useState } from 'react';
import './Contacts.scss';

function Contacts() {
    const [email, setEmail] = useState('');
    

    return (
        <div className={'contacts__container'}>
            <div className={'contacts__wrapper'}>
                {/* <div className={'contacts__form'}></div> */}
                <label for="firstName">Name</label>
                <input aria-label="name" type="text" name="firstName" id="firstName" placeholder="Kitten" required />
                <label for="email">E-mail</label>
                <input id="email" name="email" placeholder="Введите email" type="email" required />
                <br></br>

            </div>
        </div>
    )
}

export default Contacts;