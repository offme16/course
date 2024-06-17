import React from 'react';
import style from './Main.module.css';
import { CourseList } from '../../components/CourseList/CourseList';
const Main = () => {
  return (
    <div className={style.container}>
        <div className={style.head}>
            <h1>Образовательная онлайн-платформа</h1>
            <h2>Каждый день узнавайте что-то новое.</h2>
        </div>
        <div className={style.content}>
            <h3>Все курсы</h3>
            <CourseList />
        </div>

    </div>
  );
}

export default Main;

