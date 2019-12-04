import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="logo">
                <span>Coin</span>
                <span className="fit">Fit</span>
            </div>
            <div className="menu">
                <Link to='/' className="menu-item">홈</Link>
                <Link to='/scanner' className="menu-item">my</Link>
                <Link to='/clublist' className="menu-item">헬스클럽</Link>
            </div>
        </div>
    );
};

export default Header;