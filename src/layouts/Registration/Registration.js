import './Registration.scss';
import { Outlet } from "react-router-dom";

function Registration() {
    return (
        <div className={"loginLayout"}>
            <Outlet/>
        </div>
    )
}

export default Registration;