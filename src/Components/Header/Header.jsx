import React from 'react';
import s from "./Header.module.scss"

const Header = () => {


    return (
        <header className={s.header}>
            <img src="/Severstal_logo.png" alt="" className={s.img}/>
        </header>
    );
};

export default Header;