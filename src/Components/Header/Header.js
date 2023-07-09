import Menu from './Menu';
import { useState } from 'react';
import furnitureStore from '../../assets/furnitureStore.png';
import '../../styling/header.css';

const Header = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleMenu = () => {
        if (menuOpen === false){
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }

    return(
        <header>
            <div className="headerWrapper">
                {menuOpen ? <Menu /> : null}
                <button className="hamburger" onClick={handleMenu}>
                    <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
                    <span className="sr-only">Menu</span>
                </button>
                <figure>
                    <img src={furnitureStore} alt="Tap On Cards store logo" />
                </figure>
                <div className="headerCartIcon">
                    <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span className="sr-only">Cart Page</span>
                    <p>1</p>
                </div>
            </div>
        </header>
    );
};

export default Header;