import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

import './PageNavigation.css'
import AuthContext from '../../../contexts/AuthContext'

export default function PageNavigation({
    direction,
    isDropDownToggled
}
) {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <ul className={`flex ${direction} list`}>
            <li>
                <Link to="honey" className="list-item">Honey</Link>
            </li>
            <li>
                <Link to="pollen" className="list-item" >Pollen</Link>
            </li>
            <li>
                <Link to="gifts" className="list-item">Gifts</Link>
            </li>
            {isDropDownToggled && (
                <li>
                    <Link to="/login" className="list-item">
                        {isLoggedIn() ? "Login" : "Profile"}
                    </Link>
                </li>
            )}
        </ul>
    )
}