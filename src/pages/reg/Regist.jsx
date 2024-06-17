import React, { useState } from 'react';
import styles from './Regist.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/MyButton/Button';

const Regist = () => {
  return (
    <div className={styles.cor}>
    <div className={styles.loginBox}>
      <form>
        <div className={styles.userBox}>
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className={styles.userBox}>
          <input type="text" name="username" required />
          <label>E-mail</label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <center >
          <NavLink to={'/'}><Button>
          Зарегистрироваться
            </Button></NavLink>
           <div className={styles.navl}>
           <p>У вас есть аккаунта?</p>
          <NavLink to={'/auth'}>
            Войти
          </NavLink>
            </div> 
        </center>

      </form>
    </div>
    </div>
  );
};

export default Regist;