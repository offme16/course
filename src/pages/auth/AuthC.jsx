import React, { useState } from 'react';
import styles from "./AuthC.module.css"
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/MyButton/Button';

const AuthC = () => {

const sendLocal = () => {
  localStorage.setItem('Auth', 'user');
  window.dispatchEvent(new Event('storage'));
}

  return (
    <div className={styles.cor}>
    <div className={styles.loginBox}>
      <form>
        <div className={styles.userBox}>
          <input type="text" name="username" required  />
          <label>Username</label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <center >
          <NavLink to={'/'}><Button onClick={sendLocal}>
            Войти
            </Button></NavLink>
           <div className={styles.navl}>
           <p>У вас нет аккаунта?</p>
          <NavLink to={'/registration'}>
          Зарегистрироваться
          </NavLink>
            </div> 
        </center>

      </form>
    </div>
    </div>
  );
};

export default AuthC;