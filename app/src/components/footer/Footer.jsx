import { Link } from 'react-router-dom';


export default function Footer() {
    return (

        <footer className="bottom-0 w-full bg-white rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 <Link className="hover:underline">Balkan Nectar</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <Link to="" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="" className="hover:underline me-4 md:me-6">Newsletter</Link>
                    </li>
                    <li>
                        <Link to="" className="hover:underline me-4 md:me-6">License</Link>
                    </li>
                    <li>
                        <Link to="" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}