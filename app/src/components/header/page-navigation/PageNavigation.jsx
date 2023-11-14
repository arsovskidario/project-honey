import { Link } from "react-router-dom";
import './PageNavigation.css'
export default function PageNavigation({
    direction,
    isDropDownToggled
}
) {
    return (
        <ul className={`flex ${direction} list`}>
            <li>
                <Link to="#" className="list-item">Honey</Link>
            </li>
            <li>
                <Link to="#" className="list-item" >Pollen</Link>
            </li>
            <li>
                <Link to="#" className="list-item">Gifts</Link>
            </li>
            {isDropDownToggled && (<li>
                <Link to="#" className="list-item">User</Link>
            </li>)}
        </ul>
    )
}