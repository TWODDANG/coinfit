import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const MenuItem = ({children, to}) => (
    <Link to={to} className="menu-item">
        {children}
    </Link>
);


const Header = () => {
    return (
        <div>
            <div className="logo">
                CoinFit
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