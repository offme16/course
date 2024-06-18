import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../MyButton/Button";

export const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('Auth') !== null);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(localStorage.getItem('Auth') !== null);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem('Auth');
        setIsAuthenticated(false);
    };

    return (
        <header className={style.header}>
            <NavLink to={'/'}>
                <h1>TutorMeNow</h1>
            </NavLink>
            <nav className={style.header__nav}>
                <NavLink to={'/'} activeClassName={style.active}>Главная</NavLink>
                <NavLink to={'/my-courses'} activeClassName={style.active}>Мои курсы</NavLink>
                <NavLink to={'/about-us'} activeClassName={style.active}>О нас</NavLink>
            </nav>
            <nav className={style.header__navigate}>
                {isAuthenticated ? 
                    <Button onClick={logout}>Выйти</Button> : 
                    <NavLink to={'/registration'}><Button>Регистрация</Button></NavLink>
                }
            </nav>
        </header>
    );
}
