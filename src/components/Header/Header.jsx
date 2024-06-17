import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "../MyButton/Button";
export const Header = () => {
    const [auth, setAuth] = useState(true);
    return (
        <header className={style.header}>
            <NavLink to={'/'}>
                    <h1>TutorMeNow</h1>
            </NavLink>
            <nav className={style.header__nav}>
                    <a>Главная</a>
                    <a>Мои курсы</a>
                    <a>О нас</a>
            </nav>
            <nav className={style.header__navigate}>
                {auth ? <NavLink to={`/registration`}><Button>Регистрация</Button></NavLink> : <NavLink to={`/`}><Button>Выйти</Button></NavLink>
                    }
            </nav>
        </header>
    )
}